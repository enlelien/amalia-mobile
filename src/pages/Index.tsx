
import React from 'react';
import { StatusBar } from '@/components/home/StatusBar';
import { Hero } from '@/components/home/Hero';
import { KPISection } from '@/components/home/KPISection';
import { CommissionSummary } from '@/components/home/CommissionSummary';
import { NavigationBar } from '@/components/home/NavigationBar';

const Index: React.FC = () => {
  return (
    <div className="flex w-[375px] h-[812px] flex-col items-start bg-[#F3F3F3] rounded-[32px] max-md:w-full max-md:max-w-screen-md max-sm:w-full max-sm:max-w-[375px] relative">
      <main className="flex flex-col items-start flex-[1_0_0] self-stretch relative pb-[120px]">
        <div className="w-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-30"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"1\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.1\"/%3E%3C/svg%3E')] opacity-20"></div>
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
        </div>
        
        <div className="flex flex-col justify-center items-center gap-6 flex-[1_0_0] self-stretch relative bg-[#F9F9F9] px-4 py-6">
          <div className="flex w-[343px] flex-col items-start gap-6 relative max-md:w-full max-md:max-w-[700px] max-md:px-4 max-md:py-0 max-sm:w-full max-sm:px-2 max-sm:py-0">
            <KPISection />
            <CommissionSummary />
          </div>
        </div>
      </main>
      
      <NavigationBar />
    </div>
  );
};

export default Index;
