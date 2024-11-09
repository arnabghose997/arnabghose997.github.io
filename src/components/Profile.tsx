// import React from 'react';
// import { ChevronDown } from 'lucide-react';

interface ProfileProps {
  onScrollClick: () => void;
}

export default function Profile({ onScrollClick }: ProfileProps) {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between py-8 md:py-16 px-4 md:px-0">
      <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Hi, I'm <span className="text-emerald-400">Arnab Ghose</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
        A Senior Software Engineer with over 5 years of experience in the software industry, focusing extensively on Blockchain Protocol Development over the past 2+ years.
        </p>
        <button 
          onClick={onScrollClick}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 md:px-8 py-3 rounded-full
          transition-all transform hover:scale-105 active:scale-95 font-semibold touch-manipulation"
        >
          Let's Connect
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-48 h-48 md:w-80 md:h-80">
          <img
            src="/photo.jpg"
            alt="Profile"
            className="rounded-full object-cover w-full h-full border-4 border-emerald-400 shadow-lg"
            loading="eager"
          />
        </div>
      </div>
      <button 
        onClick={onScrollClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
        aria-label="Scroll down"
      >
        {/* <ChevronDown size={32} className="text-emerald-400" /> */}
      </button>
    </section>
  );
}