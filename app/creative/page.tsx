import CreativeCVPage from "@/components/CreativeCVPage";
import CVStyleSwitch from "@/components/CVStyleSwitch";
import Link from "next/link";

export default function CreativePage() {
  return (
    <main className="relative">
      <CVStyleSwitch />
      <CreativeCVPage />
      <nav className="fixed bottom-4 right-4 z-50 flex gap-2">
        <Link
          href="/react-examples"
          className="px-3 py-1.5 text-xs bg-white/10 border border-white/20 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          React Cheatsheet
        </Link>
        <Link
          href="/typescript-examples"
          className="px-3 py-1.5 text-xs bg-white/10 border border-white/20 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          TypeScript Cheatsheet
        </Link>
      </nav>
    </main>
  );
}
