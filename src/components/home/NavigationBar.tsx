import React from 'react';
import { HomeIcon, HistoryIcon, LicenseIcon } from '../icons';

export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex flex-col items-center gap-2 self-stretch relative bg-white pt-4 pb-[42px] px-0 border-t-[#EDEDED] border-t border-solid">
      <div className="flex w-[327px] justify-center items-center gap-6 relative max-sm:w-full max-sm:px-6 max-sm:py-0">
        <div className="flex w-16 flex-col items-center shrink-0 relative">
          <HomeIcon />
        </div>
        <div className="flex w-16 flex-col items-center shrink-0 relative">
          <HistoryIcon />
        </div>
        <div className="flex w-16 flex-col items-center shrink-0 relative">
          <LicenseIcon />
        </div>
      </div>
      <div className="w-[134px] h-[5px] relative bg-[#111] rounded-[100px]" />
    </nav>
  );
};
