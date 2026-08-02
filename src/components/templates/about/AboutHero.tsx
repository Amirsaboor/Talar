export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img
        src="/images/2.webp"
        alt="جشن عروسی در باغ‌تالاری با نورپردازی شبانه"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
      <div className="relative h-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 text-center items-center">
        <p className="text-gold-300 text-sm font-medium mb-3">درباره تالارگاه</p>
        <h1 className="text-sand-50 font-extralight text-3xl sm:text-5xl leading-tight">
          چون انتخاب یک تالار
          <span className="block font-medium">فقط درباره یک روز نیست</span>
        </h1>
      </div>
    </section>
  );
}
