'use client';
import LoadingScreen from '@/app/components/LoadingScreen';
import Navbar from '@/app/components/Navbar';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const loadTime = 0;
  const fadeInTime = loadTime + 750;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, fadeInTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* <LoadingScreen logoSrc="/vercel.svg" duration={1000} /> */}
      <LoadingScreen delay={loadTime} logoSrc="" />
      <div className="h-fit px-4 sm:px-18 md:px-32 lg:px-44 xl:px-64">
        <div
          className={`transition-opacity duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Navbar activePage="" />
          <h1>{`Hi, I'm Ben 'Fxfey'`}</h1>
          <h2 className="mb-12">Full Stack Developer</h2>
          <p className="w-[55%] mb-12 text-lg">{`Crafting digital experiences from the UK, I'm a full stack developer with a passion for turning complex problems into elegant solutions.`}</p>
          <div>
            <button className="text-xl bg-text-base text-primary px-3 py-2 rounded-sm font-bold mr-6">
              My Work
            </button>
            <button className="text-xl bg-text-base text-primary px-3 py-2 rounded-sm font-bold mr-6">
              Blog
            </button>
            <button className="text-xl bg-text-base text-primary px-3 py-2 rounded-sm font-bold">
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
