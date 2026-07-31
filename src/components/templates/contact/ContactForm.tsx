'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, Check } from 'lucide-react';
import { contactSubjects } from '@/data/contact-info';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = { name: '', phone: '', email: '', subject: '', message: '' };

type FormErrors = Partial<Record<keyof FormValues, string>>;

function toEnglishDigits(value: string): string {
  const persian = '۰۱۲۳۴۵۶۷۸۹';
  return value.replace(/[۰-۹]/g, (d) => String(persian.indexOf(d)));
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = 'لطفاً نام خود را وارد کنید.';

  const normalizedPhone = toEnglishDigits(values.phone).replace(/[^\d]/g, '');
  if (!normalizedPhone) {
    errors.phone = 'شماره تماس معتبر وارد کنید.';
  } else if (!/^0?9\d{9}$/.test(normalizedPhone)) {
    errors.phone = 'شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود.';
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'ایمیل واردشده معتبر نیست.';
  }

  if (!values.subject) errors.subject = 'لطفاً موضوع پیام را انتخاب کنید.';
  if (!values.message.trim()) errors.message = 'لطفاً پیام خود را بنویسید.';

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    // اینجا در پروژه واقعی یک فراخوانی API انجام می‌شود؛ فعلاً شبیه‌سازی شده است.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="flex items-start gap-3 bg-emerald-800/10 text-emerald-800 rounded-xl px-4 py-4">
        <Check size={18} className="shrink-0 mt-0.5" strokeWidth={2.4} />
        <div className="min-w-0">
          <p className="text-sm font-medium">پیام شما ارسال شد</p>
          <p className="text-xs mt-1 opacity-80">همکاران ما در اسرع وقت با شما تماس می‌گیرند.</p>
          <button
            onClick={handleReset}
            className="text-xs font-medium underline mt-3 focus-ring rounded"
          >
            ارسال پیام دیگر
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            نام و نام خانوادگی
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => setField('name', e.target.value)}
            aria-invalid={!!errors.name}
            className="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring"
            placeholder="مثلاً نگار احمدی"
          />
          {errors.name && <p className="text-xs text-garnet-700 mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            شماره تماس
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setField('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            className="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring num"
            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
          />
          {errors.phone && <p className="text-xs text-garnet-700 mt-1.5">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          ایمیل <span className="text-ink-faint font-normal">(اختیاری)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => setField('email', e.target.value)}
          aria-invalid={!!errors.email}
          className="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring"
          placeholder="example@email.com"
          dir="ltr"
        />
        {errors.email && <p className="text-xs text-garnet-700 mt-1.5">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
          موضوع
        </label>
        <select
          id="subject"
          name="subject"
          value={values.subject}
          onChange={(e) => setField('subject', e.target.value)}
          aria-invalid={!!errors.subject}
          className="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring"
        >
          <option value="">انتخاب کنید</option>
          {contactSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject && <p className="text-xs text-garnet-700 mt-1.5">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          پیام شما
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          aria-invalid={!!errors.message}
          className="w-full bg-sand-100 rounded-xl px-4 py-3 text-sm focus-ring resize-none"
          placeholder="پیام خود را اینجا بنویسید…"
        />
        {errors.message && <p className="text-xs text-garnet-700 mt-1.5">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 disabled:opacity-70 disabled:pointer-events-none text-sand-50 text-sm font-medium px-8 py-3.5 rounded-xl transition-colors focus-ring"
      >
        {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
        {status === 'submitting' ? 'در حال ارسال…' : 'ارسال پیام'}
      </button>
    </form>
  );
}
