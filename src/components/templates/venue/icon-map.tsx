import {
  Users,
  Home,
  Banknote,
  Car,
  Music,
  Camera,
  Accessibility,
  Landmark,
  Wind,
  Utensils,
  ParkingCircle,
  Trees,
  type LucideIcon,
} from 'lucide-react';
import type { IconKey } from '@/data/venue-details';

export const iconMap: Record<IconKey, LucideIcon> = {
  users: Users,
  home: Home,
  banknote: Banknote,
  car: Car,
  music: Music,
  camera: Camera,
  accessibility: Accessibility,
  landmark: Landmark,
  wind: Wind,
  utensils: Utensils,
  valet: ParkingCircle,
  trees: Trees,
};
