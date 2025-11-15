import type { ReactNode } from 'react';

import { Sizing } from '@/types/sizing';

interface TextProps {
  /**
   * Size variant for the text
   * Use SIZINGS constant for values:
   * - SIZINGS.LG: Larger body text, highlighted paragraphs (~18px)
   * - SIZINGS.MD: Standard body text, main paragraph content (~16px)
   * - SIZINGS.SM: Small text, captions, helper text (~14px)
   */
  size?: Sizing;
  /**
   * Color variant for the text
   * - 'foreground': Primary text color (default, high contrast)
   * - 'muted': Secondary text, less prominent content
   */
  color?: 'foreground' | 'muted';
  children: ReactNode;
  className?: string;
}

export function Text({
  size = Sizing.MD,
  color = 'foreground',
  children,
  className = '',
}: Readonly<TextProps>) {
  const sizeStyles: Record<Sizing, string> = {
    [Sizing.LG]: 'text-lg',
    [Sizing.MD]: 'text-base',
    [Sizing.SM]: 'text-sm',
  };

  const colorStyles: Record<NonNullable<TextProps['color']>, string> = {
    foreground: 'text-foreground',
    muted: 'text-text-muted',
  };

  return (
    <p
      className={`${sizeStyles[size]} ${colorStyles[color]} ${className}`}
      style={{
        color: color === 'muted' ? 'var(--text-muted)' : 'var(--foreground)',
      }}
    >
      {children}
    </p>
  );
}
