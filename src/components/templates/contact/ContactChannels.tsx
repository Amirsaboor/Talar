import { contactChannels, supportHours } from '@/data/contact-info';

export default function ContactChannels() {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
      {contactChannels.map((channel) => (
        <a
          key={channel.id}
          href={channel.href}
          target={channel.href.startsWith('http') ? '_blank' : undefined}
          rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="bg-sand-100/60 hover:bg-sand-100 rounded-2xl p-5 text-center transition-colors focus-ring"
        >
          <channel.icon size={22} strokeWidth={1.6} className="mx-auto mb-3 text-emerald-800" />
          <p className="text-xs font-medium">{channel.label}</p>
          <p className="text-[11px] text-ink-faint mt-1 num truncate">{channel.value}</p>
        </a>
      ))}
      <div className="bg-sand-100/60 rounded-2xl p-5 text-center">
        <supportHours.icon size={22} strokeWidth={1.6} className="mx-auto mb-3 text-emerald-800" />
        <p className="text-xs font-medium">{supportHours.label}</p>
        <p className="text-[11px] text-ink-faint mt-1">{supportHours.value}</p>
      </div>
    </div>
  );
}
