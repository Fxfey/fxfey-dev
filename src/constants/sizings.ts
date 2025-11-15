import { Sizing } from '@/types/sizing';

/**
 * Sizing constants for use across all components
 *
 * - LG: Page titles, main hero text, primary headers (~32px)
 * - MD: Subsection headers, feature titles, card headers (~24px)
 * - SM: Minor headings, list item headers, labels (~18px)
 */
export const SIZINGS = {
  LG: Sizing.LG,
  MD: Sizing.MD,
  SM: Sizing.SM,
} as const;

export type SizingValue = (typeof SIZINGS)[keyof typeof SIZINGS];
