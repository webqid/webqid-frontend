export default function CaseStudyStatsBar({ metrics }: { metrics: { label: string; value: string }[] }) {
  if (!metrics?.length) return null;
  return (
    <div className="flex gap-6 mb-6">
      {metrics.map(m => (
        <div key={m.label} className="text-center">
          <div className="text-2xl font-bold text-teal-400">{m.value}</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wider">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
