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
  activePage = '',
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
      <div className="h-fit px-4 sm:px-18 md:px-32 lg:px-44 xl:px-52">
        <div
          className={`transition-opacity duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Navbar activePage={activePage} />
          {/* Page Content */}
          {children}
        </div>
      </div>
    </div>
  );
}
