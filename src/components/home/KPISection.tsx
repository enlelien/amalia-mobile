
import React from 'react';

const KPIWidget: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex h-[88px] items-start self-stretch relative">
    <div className="flex p-4 justify-center items-center border-r border-[#EDEDED]">
      <div className="w-14 h-14 rounded-full border-4 border-[#0C84F2] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-[#F0F3F8]" />
      </div>
    </div>
    <div className="flex flex-col justify-center items-start flex-[1_0_0] self-stretch relative px-6 py-0">
      <div className="text-[#111] text-[22px] font-medium leading-[33px] tracking-[0.11px] relative">
        {value}
      </div>
      <div className="text-[#6C6C6C] text-xs font-normal leading-[18px] tracking-[0.06px] relative">
        {label}
      </div>
    </div>
  </div>
);

export const KPISection: React.FC = () => {
  return (
    <section className="flex w-full flex-col justify-center items-start shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] relative bg-white px-0 py-4 rounded-lg">
      <div className="flex flex-col items-start self-stretch">
        <KPIWidget value="140 %" label="Ach Global %" />
        <KPIWidget value="110 %" label="Payout Global %" />
      </div>
    </section>
  );
};
