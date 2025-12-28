import Image from "next/image";

export default function CaseStudyGallery({ screenshots, title }: { screenshots: string[]; title: string }) {
  if (!screenshots?.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {screenshots.map((src, i) => (
        <Image key={i} src={src} alt={`${title} screenshot ${i+1}`} width={400} height={250} className="rounded-lg object-cover w-full" />
      ))}
    </div>
  );
}
