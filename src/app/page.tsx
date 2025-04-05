'use client';
import LoadingScreen from '@/app/_components/core/LoadingScreen';
import Navbar from '@/app/_components/core/Navbar';
import BtnPrimary from './_components/buttons/primary';
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

  const landingButtons = [
    { name: 'My Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

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
          <div className="flex gap-8">
            {landingButtons.map((item) => {
              return (
                <BtnPrimary
                  key={item.name}
                  title={item.name}
                  path={item.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
