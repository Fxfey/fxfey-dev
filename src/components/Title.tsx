import type { ReactNode } from 'react';

import { Sizing } from '@/types/sizing';

interface TitleProps {
  /**
   * Size variant for the title
   * Use SIZINGS constant for values:
   * - SIZINGS.LG: Page titles, main hero text, primary section headers (~32px)
   * - SIZINGS.MD: Subsection headers, feature titles, card headers (~24px)
   * - SIZINGS.SM: Minor headings, list item headers, supplementary labels (~18px)
   */
  size: Sizing;
  children: ReactNode;
  className?: string;
}

export function Title({
  size,
  children,
  className = '',
}: Readonly<TitleProps>) {
  const sizeStyles: Record<Sizing, string> = {
    [Sizing.LG]: 'text-3xl font-bold',
    [Sizing.MD]: 'text-2xl font-semibold',
    [Sizing.SM]: 'text-lg font-semibold',
  };

  return (
    <h1
      className={`text-foreground ${sizeStyles[size]} ${className}`}
      style={{ color: 'var(--foreground)' }}
    >
      {children}
    </h1>
  );
}
