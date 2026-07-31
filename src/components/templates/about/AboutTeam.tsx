import type { TeamMember } from '@/data/team';

export default function AboutTeam({ members }: { members: TeamMember[] }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center max-w-lg mx-auto mb-14">
        <p className="text-gold-600 text-sm font-medium mb-2">تیم ما</p>
        <h2 className="text-2xl sm:text-3xl font-semibold">افرادی که پشت تالارگاه ایستاده‌اند</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-24 h-24 rounded-full bg-emerald-800 text-sand-50 flex items-center justify-center text-2xl font-semibold mx-auto mb-4">
              {member.name.charAt(0)}
            </div>
            <h3 className="font-semibold text-sm">{member.name}</h3>
            <p className="text-xs text-ink-faint mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
