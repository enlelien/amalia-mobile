import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex h-64 flex-col justify-center items-center gap-14 self-stretch relative pb-4 max-sm:h-[200px] max-sm:gap-10">
      <div className="flex flex-col items-center relative">
        <h1 className="text-[#111] text-center text-[40px] font-bold leading-[60px] tracking-[0.2px] relative max-sm:text-[32px]">
          €1 747.86
        </h1>
        <p className="text-neutral-600 text-center text-[11px] font-normal leading-[16.5px] tracking-[0.055px] relative">
          Earned
        </p>
      </div>
      <div className="flex items-center gap-8 justify-center">
        <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
        <div className="w-2.5 h-2.5 bg-[#D7D7D7] rounded-full" />
        <div className="w-2.5 h-2.5 bg-[#D7D7D7] rounded-full" />
      </div>
    </section>
  );
};
