import React from 'react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-12 px-4 sm:px-12 space-y-16 overflow-y-auto">
      <div className="w-full max-w-[1200px]">
        <Slide1 />
      </div>
      <div className="w-full max-w-[1200px]">
        <Slide2 />
      </div>
    </div>
  );
}
