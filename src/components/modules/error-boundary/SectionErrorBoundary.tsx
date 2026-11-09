'use client';

import { Component, type ReactNode } from 'react';
import { RotateCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  /** پیام اختصاصی همان بخش؛ پیش‌فرض برای اکثر موارد کافی است */
  message?: string;
}

interface State {
  hasError: boolean;
}

/**
 * Error Boundary سبک برای بخش‌های مستقل یک صفحه (مثل نتایج جستجوی زنده یا پنل فیلترها).
 * اگر رندرِ داخلش خطا بدهد، فقط همان بخش fallback نشان می‌دهد؛ بقیه صفحه (Navbar، Footer،
 * سایر بخش‌ها) سالم می‌مانند. باید Class Component باشد چون React فقط از این طریق
 * componentDidCatch را پشتیبانی می‌کند (هنوز معادل Hook ندارد).
 */
export class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // در پروژه واقعی اینجا خطا به سرویس مانیتورینگ گزارش می‌شود
    console.error('[SectionErrorBoundary]', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-sand-200 bg-sand-100/50 p-8 text-center">
          <p className="text-sm text-ink-soft mb-4">
            {this.props.message ?? 'نمایش این بخش با خطا مواجه شد.'}
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:underline focus-ring"
          >
            <RotateCw size={14} />
            تلاش دوباره
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
