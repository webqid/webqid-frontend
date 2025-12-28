export default function CaseStudyTechStack({ stack }: { stack: string[] }) {
  if (!stack?.length) return null;
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {stack.map(tech => (
        <span key={tech} className="bg-neutral-800 text-xs px-3 py-1 rounded-full font-mono text-teal-400">{tech}</span>
      ))}
    </div>
  );
}
