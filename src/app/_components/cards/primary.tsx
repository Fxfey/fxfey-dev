import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function CardPrimary({ children }: Readonly<CardProps>) {
  return (
    <div className="w-full h-full bg-secondary/20 shadow-lg p-5 rounded-sm">
      {children}
    </div>
  );
}
