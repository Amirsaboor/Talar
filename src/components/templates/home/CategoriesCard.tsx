import Link from "next/link";

interface Props {
    category: {
        id: string;
        href: string;
        name: string;
        icon: React.ElementType;
    };
}

export default function CategoriesCard({ category }: Props) {
    return (
        <Link
            key={category.id}
            href={category.href}
            className="group w-full" // عرض را full کردیم تا در ستون‌های گرید درست قرار بگیرد
        >
            <div
                className="relative h-24 sm:h-28 flex items-center justify-center rounded-2xl overflow-hidden
                      bg-emerald-900 border-b-4 border-gold-600
                      transition-all duration-300 group-hover:border-b-0 group-hover:border-t-4 group-hover:border-gold-500"
            >
                {/* پس‌زمینه با الگوی ظریف */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <category.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 group-hover:text-white transition-colors duration-300" />

                {/* افکت براق */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
            </div>

            <p className="text-center text-[13px] sm:text-sm font-medium text-emerald-900 mt-3 group-hover:text-gold-700 transition-colors">
                {category.name}
            </p>
        </Link>
    )
}