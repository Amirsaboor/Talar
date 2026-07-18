import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

type Props = {
  name: string;
  city: string;
  text: string;
  image: string;
  rate: number;
};

export default function TestimonialCard({
  name,
  city,
  text,
  image,
  rate,
}: Props) {
  return (
    <figure className="shrink-0 w-60 sm:w-auto rounded-3xl bg-sand-100/60 p-6">
      <div className="mb-4 flex items-center gap-1 text-gold-500">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rate ? (
            <FaStar key={index} className="h-4 w-4 fill-current" />
          ) : (
            <FaRegStar key={index} className="h-4 w-4" />
          )
        )}
      </div>

      <blockquote className="text-sm leading-relaxed text-ink-soft">
        «{text}»
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-ink-faint">{city}</p>
        </div>
      </figcaption>
    </figure>
  );
}