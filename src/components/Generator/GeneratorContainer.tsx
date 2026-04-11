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
  const progress = (step / totalSteps) * 100;

  const stepLabels = [
    t('nav.create'),
    t('nav.create'), // Placeholder for step 2
    t('nav.create'), // Placeholder for step 3
    t('nav.calculator'), // Placeholder for step 4
    t('nav.howTo') // Placeholder for step 5
  ];
  
  // Better labels
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
      // Create a temporary container for the contract HTML
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '210mm'; // A4 width
      container.innerHTML = getContractHTML(data);
      document.body.appendChild(container);

      // Use html2canvas to capture the container
      const canvas = await html2canvas(container, {
        scale: 2, // Higher scale for better quality
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
      
      // Cleanup
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel: Form */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-white border-b border-gray-100 px-8 py-8">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-widest mb-1">{t('form.step')} {step} / {totalSteps}</p>
                    <h2 className="text-2xl font-black text-gray-900">
                      {getStepLabel(step)}
                    </h2>
                  </div>
                  <div className="hidden sm:flex space-x-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div
                        key={s}
                        className={cn(
                          "h-1.5 w-8 rounded-full transition-all duration-500",
                          s <= step ? "bg-[#1e3a5f]" : "bg-gray-100"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
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
                      "flex items-center px-6 py-3 rounded-xl font-semibold transition-all",
                      step === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    <ChevronLeft className="mr-2 h-5 w-5" />
                    {t('form.back')}
                  </button>

                  {step < totalSteps ? (
                    <button
                      onClick={handleNext}
                      className="flex items-center px-8 py-3 bg-[#1e3a5f] text-white rounded-xl font-semibold hover:bg-[#2a4d7a] transition-all shadow-md"
                    >
                      {t('form.next')}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      onClick={downloadPDF}
                      disabled={isGenerating}
                      className="flex items-center px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md disabled:opacity-50"
                    >
                      {isGenerating ? t('form.generating') : t('form.download')}
                      <Download className="ml-2 h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-6 flex items-start space-x-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <ShieldCheck className="h-5 w-5 text-[#1e3a5f] mt-0.5" />
              <p className="text-sm text-[#1e3a5f] leading-relaxed">
                <strong>{t('form.privacyNote')}:</strong> {t('form.privacyDesc')}
              </p>
            </div>
          </div>

          {/* Right Panel: Live Preview */}
          <div className="hidden lg:block w-[450px]">
            <div className="sticky top-28">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-[#1e3a5f]" />
                  {t('form.preview')}
                </h3>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{t('form.autoSave')}</span>
              </div>
              <LivePreview data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
