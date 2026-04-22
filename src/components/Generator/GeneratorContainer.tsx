import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, ShieldCheck, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ContractData, initialData } from '../../types';
import StepForm from './StepForm';
import LivePreview from './LivePreview';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { getContractHTML } from '../../constants/contractTemplate';
import { cn } from '../../lib/utils';

export default function GeneratorContainer() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ContractData>(initialData);
  const [isGenerating, setIsGenerating] = useState(false);
  const { t } = useTranslation();

  const totalSteps = 5;

  const getStepLabel = (s: number) => {
    switch(s) {
      case 1: return t('form.steps.tenant');
      case 2: return t('form.steps.landlord');
      case 3: return t('form.steps.property');
      case 4: return t('form.steps.rent');
      case 5: return t('form.steps.special');
      default: return '';
    }
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateData = (section: keyof ContractData, field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const downloadPDF = async () => {
    setIsGenerating(true);
    try {
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '210mm';
      container.innerHTML = getContractHTML(data);
      document.body.appendChild(container);

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });

      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      document.body.removeChild(container);

      const date = new Date().toISOString().split('T')[0];
      doc.save(`kira-sozlesmesi-${date}.pdf`);
    } catch (error) {
      console.error('PDF generation failed', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Panel: Form */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-white border-b border-gray-100 px-8 py-8">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{t('form.step')} {step} / {totalSteps}</p>
                  <h2 className="text-3xl font-serif font-black text-primary">
                    {getStepLabel(step)}
                  </h2>
                </div>
                <div className="hidden sm:flex space-x-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div
                      key={s}
                      className={cn(
                        "h-1.5 w-10 rounded-full transition-all duration-500",
                        s <= step ? "bg-accent" : "bg-gray-100"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StepForm step={step} data={data} updateData={updateData} />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-12 flex justify-between items-center">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={cn(
                    "flex items-center px-8 py-4 rounded-xl font-bold transition-all",
                    step === 1 ? "text-gray-300 cursor-not-allowed" : "text-primary hover:bg-gray-100 hover:text-accent"
                  )}
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  {t('form.back')}
                </button>

                {step < totalSteps ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center px-10 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
                  >
                    {t('form.next')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={downloadPDF}
                    disabled={isGenerating}
                    className="flex items-center px-10 py-4 bg-accent text-primary rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg disabled:opacity-50"
                  >
                    {isGenerating ? t('form.generating') : "Sözleşme Oluştur →"}
                    <Download className="ml-2 h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-8 flex items-start space-x-4 p-6 bg-primary/5 rounded-3xl border border-primary/10">
            <ShieldCheck className="h-6 w-6 text-accent mt-0.5" />
            <p className="text-sm text-primary/80 leading-relaxed font-sans">
              <strong className="text-primary">{t('form.privacyNote')}:</strong> {t('form.privacyDesc')}
            </p>
          </div>
        </div>

        {/* Right Panel: Live Preview */}
        <div className="hidden lg:block w-[450px]">
          <div className="sticky top-28">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif font-black text-primary flex items-center">
                <FileText className="mr-2 h-6 w-6 text-accent" />
                {t('form.preview')}
              </h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('form.autoSave')}</span>
            </div>
            <LivePreview data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
