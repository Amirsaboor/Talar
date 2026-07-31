import {
  ShieldCheck,
  Scale,
  Clock,
  HeartHandshake,
  BadgeCheck,
  MessageSquareQuote,
  ReceiptText,
  type LucideIcon,
} from 'lucide-react';

export type AboutIconKey =
  | 'honesty'
  | 'neutrality'
  | 'time'
  | 'care'
  | 'verified'
  | 'reviews'
  | 'no-commission';

export const aboutIconMap: Record<AboutIconKey, LucideIcon> = {
  honesty: ShieldCheck,
  neutrality: Scale,
  time: Clock,
  care: HeartHandshake,
  verified: BadgeCheck,
  reviews: MessageSquareQuote,
  'no-commission': ReceiptText,
};
