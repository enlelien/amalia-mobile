
import React from 'react';

const CommissionRow: React.FC<{ label: string; amount: string }> = ({ label, amount }) => (
  <div className="flex items-center self-stretch relative pl-6 pr-4 py-2">
    <div className="self-stretch text-[#242424] text-sm font-normal leading-[21px] tracking-[0.07px] relative flex-[1_0_0]">
      {label}
    </div>
    <div className="text-[#242424] text-sm font-medium leading-[21px] tracking-[0.07px] relative w-16">
      {amount}
    </div>
  </div>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center self-stretch relative pl-6 pr-2 pt-0 pb-1">
    <div className="self-stretch text-[#0C84F2] text-xs font-bold leading-[18px] tracking-[0.06px] relative flex-[1_0_0]">
      {title}
    </div>
  </div>
);

export const CommissionSummary: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-start gap-2 self-stretch relative">
      <h2 className="text-[#111] text-lg font-bold leading-[27px] tracking-[0.09px] relative h-[27px] self-stretch px-4">
        Commission Summary
      </h2>
      <div className="flex w-full flex-col justify-center items-start gap-4 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative bg-white px-0 py-4 rounded-lg">
        <div className="flex flex-col items-start self-stretch">
          <CommissionRow label="Garantie" amount="€0.00" />
        </div>
        
        <div className="w-full h-px bg-[#EDEDED]" />
        
        <div className="flex flex-col items-start self-stretch">
          <SectionTitle title="Mensuel" />
          <CommissionRow label="Bonus Abonnements" amount="€1 367.21" />
          <CommissionRow label="Prime 2023" amount="€0.00" />
        </div>
        
        <div className="w-full h-px bg-[#EDEDED]" />
        
        <div className="flex flex-col items-start self-stretch">
          <SectionTitle title="Trimestriel" />
          <CommissionRow label="Bonus Èquipe" amount="€380.65" />
        </div>
        
        <div className="w-full h-px bg-[#EDEDED]" />
        
        <div className="flex flex-col items-start self-stretch">
          <SectionTitle title="Annuel" />
          <CommissionRow label="Variable Annuel" amount="€0.00" />
        </div>
      </div>
    </section>
  );
};
