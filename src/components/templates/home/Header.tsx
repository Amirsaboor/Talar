export default function Header() {
    return (
        <section className="relative">
            <div className="relative h-[86vh] min-h-140 sm:h-[80vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2200&auto=format&fit=crop"
                    alt="باغ‌تالار عروسی با نورپردازی گرم در غروب"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/35 to-ink/10"></div>
                <div className="absolute inset-0 bg-linear-to-l from-emerald-900/30 to-transparent"></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-28 sm:pb-24">
                    <p className="text-gold-300 text-sm sm:text-base font-medium tracking-wide mb-4">
                        بیش از ۲٬۴۰۰ تالار و باغ‌تالار در سراسر ایران
                    </p>
                    <h1 className="text-sand-50 font-extralight text-[2.35rem] leading-[1.2] sm:text-6xl sm:leading-[1.15] lg:text-7xl max-w-3xl">
                        بهترین تالار عروسی‌تان را
                        <span className="block font-medium">در چند دقیقه پیدا کنید</span>
                    </h1>
                    <p className="text-sand-100/90 mt-5 max-w-xl text-base sm:text-lg leading-relaxed">
                        صدها تالار، باغ‌تالار و خدمات مراسم را مشاهده، مقایسه و بدون نیاز به ثبت‌نام با
                        آن‌ها تماس بگیرید.
                    </p>
                </div>
            </div>

            {/* <!-- Floating search card --> */}
            <div className="relative z-10 -mt-20 sm:-mt-16 px-4 sm:px-6 lg:px-8">
                <form className="max-w-5xl mx-auto bg-sand-50 rounded-3xl shadow-lift p-4 sm:p-3 border border-sand-200/70">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors">
                            <label htmlFor="city" className="text-xs font-medium text-ink-faint">
                                شهر
                            </label>
                            <select
                                id="city"
                                className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                            >
                                <option>تهران</option>
                                <option>اصفهان</option>
                                <option>شیراز</option>
                                <option>مشهد</option>
                                <option>رشت</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors sm:border-r sm:border-sand-200">
                            <label htmlFor="etype" className="text-xs font-medium text-ink-faint">
                                نوع مراسم
                            </label>
                            <select
                                id="etype"
                                className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                            >
                                <option>عروسی</option>
                                <option>نامزدی</option>
                                <option>عقد</option>
                                <option>جشن سالگرد</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl hover:bg-sand-100 transition-colors sm:border-r sm:border-sand-200">
                            <label htmlFor="guests" className="text-xs font-medium text-ink-faint">
                                تعداد مهمان
                            </label>
                            <select
                                id="guests"
                                className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                            >
                                <option>تا ۱۰۰ نفر</option>
                                <option>۱۰۰ تا ۲۵۰ نفر</option>
                                <option>۲۵۰ تا ۵۰۰ نفر</option>
                                <option>بیش از ۵۰۰ نفر</option>
                            </select>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2 px-2 py-2">
                            <div className="flex flex-col gap-1 px-2 py-1 flex-1">
                                <label htmlFor="budget" className="text-xs font-medium text-ink-faint">
                                    بودجه تقریبی
                                </label>
                                <select
                                    id="budget"
                                    className="bg-transparent text-sm text-ink focus-ring -mx-1 px-1 rounded"
                                >
                                    <option>نامشخص</option>
                                    <option>اقتصادی</option>
                                    <option>متوسط</option>
                                    <option>لوکس</option>
                                </select>
                            </div>
                            <br />
                            <button
                                type="submit"
                                className="shrink-0 flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-sand-50 font-medium text-sm px-5 sm:px-6 h-12 rounded-xl transition-colors focus-ring w-full sm:w-auto"
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
                                جست‌وجو
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}