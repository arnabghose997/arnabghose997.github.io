import React, { useRef } from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Projects from './components/Projects';

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Profile onScrollClick={scrollToContact} />
        <Experience />
        <Projects />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}