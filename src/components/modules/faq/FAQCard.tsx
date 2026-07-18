import { PlusIcon } from "lucide-react";

interface props {
    id: number;
    question: string;
    answer: string;
}

export default function FAQCard({ faq }: { faq: props }) {
    return (
        <details
            key={faq.id}
            className="group bg-sand-50 rounded-2xl p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden"
        >
            <summary className="flex items-center justify-between cursor-pointer font-medium focus-ring">
                {faq.question}
                <PlusIcon className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="text-sm text-ink-soft leading-relaxed mt-3">{faq.answer}</p>
        </details>
    )
}