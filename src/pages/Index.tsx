import React from 'react';
import { StatusBar } from '@/components/home/StatusBar';
import { Hero } from '@/components/home/Hero';
import { CommissionSummary } from '@/components/home/CommissionSummary';
import { NavigationBar } from '@/components/home/NavigationBar';

const Index: React.FC = () => {
  return (
    <div className="flex w-[375px] h-[812px] flex-col items-start bg-[#F3F3F3] rounded-[32px] max-md:w-full max-md:max-w-screen-md max-sm:w-full max-sm:max-w-[375px]">
      <main className="flex flex-col items-start flex-[1_0_0] self-stretch relative top-[section] max-sm:bg-cover max-sm:bg-center">
        <StatusBar />
        
        <div className="flex justify-between items-center self-stretch relative pt-0 pb-2 px-6">
          <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
            <img
              src="URL_PROFILE_IMAGE"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <Hero />
        
        <div className="flex flex-col justify-center items-center gap-2 flex-[1_0_0] self-stretch relative bg-[#F9F9F9] px-4 py-0">
          <div className="flex w-[343px] h-[471px] flex-col items-start gap-6 relative max-md:w-full max-md:max-w-[700px] max-md:px-4 max-md:py-0 max-sm:w-full max-sm:px-2 max-sm:py-0">
            <CommissionSummary />
          </div>
        </div>
        
        <NavigationBar />
      </main>
    </div>
  );
};

export default Index;
