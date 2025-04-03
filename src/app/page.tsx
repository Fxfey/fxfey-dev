'use client';
import LoadingScreen from '@/app/components/LoadingScreen';
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

      <div
        className={`transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Content
      </div>
    </div>
  );
}
