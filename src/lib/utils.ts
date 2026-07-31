import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** استخراج شناسه (slug) تالار از مسیر href مثل '/venue/ivan-talayi' -> 'ivan-talayi' */
export function slugFromVenueHref(href: string): string {
  return href.replace(/^\/venue\//, '');
}
