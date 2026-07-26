import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialsCard";

export default function TestimonialsSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <div className="mb-10">
                <p className="text-gold-600 text-sm font-medium mb-2">تجربه زوج‌ها</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    چه کسانی از تالارگاه استفاده کرده‌اند
                </h2>
            </div>
            <div className="rail flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                {testimonials.map((item) => (
                    <TestimonialCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </section>
    )
}