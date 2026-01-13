import CVPage from "@/components/CVPage";
import GitHubCVPage from "@/components/GitHubCVPage";
import PersonalCVPage from "@/components/PersonalCVPage";
import CreativeCVPage from "@/components/CreativeCVPage";
import CVStyleSwitch from "@/components/CVStyleSwitch";
import Link from "next/link";

// Ensure fresh render each time (no caching)
export const dynamic = "force-dynamic";

const pages = [CVPage, GitHubCVPage, PersonalCVPage, CreativeCVPage];

export default function Page() {
  const randomIndex = Math.floor(Math.random() * pages.length);
  const PageComponent = pages[randomIndex]!;

  return (
    <>
      <CVStyleSwitch />
      <PageComponent />
      <nav className="fixed bottom-4 right-4 flex gap-2 z-50">
        <Link
          href="/react-examples"
          className="px-3 py-2 bg-gray-900 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-sm shadow-lg"
        >
          React
        </Link>
        <Link
          href="/typescript-examples"
          className="px-3 py-2 bg-gray-900 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-sm shadow-lg"
        >
          TypeScript
        </Link>
      </nav>
    </>
  );
}
