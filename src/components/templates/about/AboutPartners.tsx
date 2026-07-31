export default function AboutPartners({ partners }: { partners: string[] }) {
  return (
    <section className="bg-sand-100/60 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-ink-faint mb-8">همکاران و شرکای ما</p>
        <div className="rail flex sm:grid sm:grid-cols-5 gap-8 items-center justify-items-center overflow-x-auto">
          {partners.map((partner) => (
            <span key={partner} className="text-ink-300 font-semibold text-lg shrink-0">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
