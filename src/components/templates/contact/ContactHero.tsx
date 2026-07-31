export default function ContactHero() {
  return (
    <section className="relative h-64 sm:h-80 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2200&auto=format&fit=crop"
        alt="تیم پشتیبانی در حال پاسخ‌گویی به تماس مشتریان"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/30 to-transparent" />
      <div className="relative h-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 text-center items-center">
        <h1 className="text-sand-50 text-2xl sm:text-4xl font-semibold mb-2">
          در تصمیم‌گیری کنارتان هستیم
        </h1>
        <p className="text-sand-100/85 text-sm sm:text-base max-w-md">
          سوال، درخواست مشاوره یا گزارش مشکل دارید؟ تیم ما آماده پاسخ‌گویی است.
        </p>
      </div>
    </section>
  );
}
