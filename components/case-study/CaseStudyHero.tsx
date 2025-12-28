import Image from "next/image";

export default function CaseStudyHero({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="mb-8">
      <Image src={image} alt={title} width={900} height={540} className="rounded-xl object-cover w-full mb-6" />
      <h1 className="text-5xl font-bold mb-2">{title}</h1>
      <p className="text-neutral-400 text-xl mb-2">{description}</p>
    </div>
  );
}
