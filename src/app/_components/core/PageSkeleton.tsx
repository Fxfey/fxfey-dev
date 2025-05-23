import { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from '@/app/_components/core/LoadingScreen';
import Navbar from '@/app/_components/core/Navbar';

interface PageLayoutProps {
  children: ReactNode;
  activePage?: string;
  loadTime?: number;
}

export default function PageSkeleton({
  children,
  loadTime = 0,
}: Readonly<PageLayoutProps>) {
  const [isLoading, setIsLoading] = useState(true);
  const fadeInTime = loadTime + 750;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, fadeInTime);

    return () => clearTimeout(timer);
  }, [fadeInTime]);

  return (
    <div>
      <LoadingScreen delay={loadTime} logoSrc="" />
      <div className="h-fit px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div
          className={`transition-opacity duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Navbar />
          {/* Page Content */}
          {children}
        </div>
      </div>
    </div>
  );
}
