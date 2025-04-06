import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function CardSecondary({ children }: Readonly<CardProps>) {
  return (
    <div className="w-full h-full bg-text-base/75 text-primary shadow-lg p-5 rounded-sm">
      {children}
    </div>
  );
}
