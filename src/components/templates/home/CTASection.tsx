import Link from "next/link";

export default function CTASection() {
    return (
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-linear-to-l from-emerald-900 to-emerald-800"></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sand-50">
          <h2 className="text-2xl sm:text-4xl font-extralight leading-tight mb-4">
            آماده‌اید <span className="font-medium">تالار رویایی‌تان</span> را پیدا کنید؟
          </h2>
          <p className="text-sand-100/80 mb-8">
            جست‌وجو را همین حالا شروع کنید؛ کاملاً رایگان و بدون نیاز به ثبت‌نام.
          </p>
          <Link
            href="search.html"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-8 py-3.5 rounded-full transition-colors focus-ring"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            جست‌وجوی تالار
          </Link>
        </div>
      </section>
    );
}