interface Props {
  paragraphs: string[];
}

export default function VenueAbout({ paragraphs }: Props) {
  return (
    <section className="py-8 border-t border-sand-200">
      <h2 className="text-xl font-semibold mb-4">درباره تالار</h2>
      <div className="text-[15px] text-ink-soft leading-[2] space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
