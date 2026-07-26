interface Props {
  item: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
  };
}

export default function WhyChooseCard({ item }: Props) {
  return (
    <div className="text-center px-2">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-800 flex items-center justify-center mb-4">
        <item.icon size={22} strokeWidth={1.8} className="text-gold-400" />
      </div>
      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
    </div>
  );
}
