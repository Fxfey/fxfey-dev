import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  logoSrc: string;
  duration: number;
}

const LoadingScreen = ({ logoSrc, duration }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set the wait time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    // Clear the timer
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`absolute h-screen w-screen flex justify-center items-center bg-loading-screen transition-transform duration-500
        ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="animate-pulse">
        <Image src={logoSrc} width={24} height={24} alt="logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;
