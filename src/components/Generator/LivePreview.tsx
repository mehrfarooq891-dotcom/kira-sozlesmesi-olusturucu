import { ContractData } from '../../types';
import { getContractHTML } from '../../constants/contractTemplate';

interface LivePreviewProps {
  data: ContractData;
}

export default function LivePreview({ data }: LivePreviewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 h-[700px] overflow-y-auto custom-scrollbar relative">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        <span className="text-gray-100 text-8xl font-black uppercase -rotate-45 select-none opacity-50 whitespace-nowrap">
          ÖNİZLEME
        </span>
      </div>
      
      <div 
        className="transform scale-[0.6] origin-top p-4 relative z-0"
        dangerouslySetInnerHTML={{ __html: getContractHTML(data) }}
      />
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
