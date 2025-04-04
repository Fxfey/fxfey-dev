'use client';
import LoadingScreen from '@/app/components/LoadingScreen';
import Navbar from '@/app/components/Navbar';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LoadingScreen logoSrc="/vercel.svg" duration={1000} />
      <div className="h-fit px-4 sm:px-18 md:px-32 lg:px-44 xl:px-64">
        <div
          className={`transition-opacity duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Navbar activePage="" />
          {/* Page Content Starts */}
        </div>
      </div>
    </div>
  );
}
