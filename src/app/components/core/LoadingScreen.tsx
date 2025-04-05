import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  delay: number;
  logoSrc: string;
}

const LoadingScreen = ({ delay, logoSrc }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  let logoOutput;
  if (logoSrc) {
    logoOutput = <Image src={logoSrc} width={24} height={24} alt="logo" />;
  }

  useEffect(() => {
    // Set the wait time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Clear the timer
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute h-screen w-screen flex justify-center items-center bg-loading-screen transition-transform duration-500
        ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="animate-pulse">{logoOutput}</div>
    </div>
  );
};

export default LoadingScreen;
