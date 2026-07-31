import { contactChannels } from '@/data/contact-info';

const helpChannelIds = ['phone', 'whatsapp', 'email'];
const helpChannels = contactChannels.filter((c) => helpChannelIds.includes(c.id));

export default function FaqHelpSection() {
  return (
    <section className="bg-sand-100/60 py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-8">هنوز به کمک نیاز دارید؟</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {helpChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-sand-50 hover:shadow-card rounded-2xl p-5 transition-shadow focus-ring"
            >
              <channel.icon size={22} strokeWidth={1.6} className="mx-auto mb-3 text-emerald-800" />
              <p className="text-sm font-medium">{channel.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
