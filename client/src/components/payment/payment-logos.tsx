import { FC } from 'react';

export const PaymentLogos: FC = () => {
  return (
    <div className="w-full py-6 bg-black">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-300 mb-4">Paiement sécurisé par</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* PayPal Logo */}
          <div className="h-10 bg-[#003087] px-4 py-2 rounded flex items-center justify-center">
            <span className="text-white font-bold">PayPal</span>
          </div>

          {/* PCI DSS Compliance Badge */}
          <div className="h-10 bg-[#333333] px-4 py-2 rounded flex items-center justify-center">
            <span className="text-white font-bold">PCI DSS</span>
          </div>

          {/* Mastercard Logo */}
          <div className="h-10 bg-[#EB001B] px-4 py-2 rounded flex items-center justify-center">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#EB001B] mr-1"></div>
              <div className="w-6 h-6 rounded-full bg-[#F79E1B] ml-1 relative right-3"></div>
              <span className="text-white font-bold ml-1">Mastercard</span>
            </div>
          </div>
          
          {/* Interac Logo */}
          <div className="h-10 bg-[#2273AA] px-4 py-2 rounded flex items-center justify-center">
            <span className="text-white font-bold">Interac</span>
          </div>
        </div>
      </div>
    </div>
  );
};