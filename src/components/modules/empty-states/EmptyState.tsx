import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface EmptyStateAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
}

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  actions?: EmptyStateAction[];
  /** محتوای اضافه بین توضیح و دکمه‌ها، مثل فهرست پیشنهادها در نتیجه جست‌وجوی خالی */
  extra?: ReactNode;
  /** برای صفحه ۴۰۴ که یک عدد بزرگ بالای آیکون نیاز دارد */
  eyebrow?: string;
}

function ActionButton({ action }: { action: EmptyStateAction }) {
  const isPrimary = (action.variant ?? 'primary') === 'primary';
  const className = isPrimary
    ? 'inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring'
    : 'inline-flex items-center justify-center gap-2 border border-sand-300 hover:border-ink text-ink text-sm font-medium px-6 py-3 rounded-full transition-colors focus-ring';
  const Icon = action.icon;

  if (action.href) {
    return (
      <Link href={action.href} className={className}>
        {Icon && <Icon size={14} />}
        {action.label}
      </Link>
    );
  }
  return (
    <button type="button" onClick={action.onClick} className={className}>
      {Icon && <Icon size={14} />}
      {action.label}
    </button>
  );
}

/** کامپوننت پایه برای همه حالت‌های خالی/خطا در سایت — 404، نتیجه‌ی جست‌وجوی خالی، خطای عمومی و... */
export default function EmptyState({ icon: Icon, title, description, actions, extra, eyebrow }: Props) {
  return (
    <div className="bg-sand-100/50 rounded-3xl p-8 sm:p-14 text-center">
      <Icon size={64} strokeWidth={1.1} className="mx-auto mb-6 text-sand-300" />
      {eyebrow && <p className="text-5xl font-light num text-ink-300 mb-3">{eyebrow}</p>}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">{description}</p>
      {extra}
      {actions && actions.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-1">
          {actions.map((action) => (
            <ActionButton key={action.label} action={action} />
          ))}
        </div>
      )}
    </div>
  );
}
