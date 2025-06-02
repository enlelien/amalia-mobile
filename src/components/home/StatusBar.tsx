import React from 'react';
import { StatusBarSvg } from '../icons';

export const StatusBar: React.FC = () => {
  return (
    <header className="flex h-11 justify-center items-center self-stretch relative rounded-[32px]">
      <StatusBarSvg />
    </header>
  );
};
