'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { headerLinks } from '@/data/header';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 focus-ring">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <path d="M15 2 L26 9 V21 L15 28 L4 21 V9 Z" stroke="#B8863E" strokeWidth="1.4" />
              <circle cx="15" cy="15" r="5" fill="#1B3E32" />
            </svg>
            <span className="text-lg lg:text-xl font-bold tracking-tight">تالارگاه</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="ناوبری اصلی">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm text-ink-soft hover:bg-sand-100 hover:text-ink transition-colors focus-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full border border-sand-300 text-sm text-ink-soft hover:border-gold-500 hover:text-ink transition-colors focus-ring"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              جست‌وجوی تالار
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-sand-100 transition-colors focus-ring"
              aria-label="باز کردن منو"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-ink" />
              ) : (
                <Menu className="w-6 h-6 text-ink" />
              )}
            </button>
            <Link
              href="/admin"
              className="hidden lg:inline text-xs text-ink-faint hover:text-ink-soft transition-colors focus-ring"
            >
              ورود مدیر
            </Link>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 right-0 z-70 h-screen w-[80%] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-sand-200">
          <span className="font-bold">منو</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex flex-col p-4 bg-white h-screen">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-4 border-b border-sand-200 text-ink-soft hover:bg-sand-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
