import GitHubCVPage from "@/components/GitHubCVPage";
import CVStyleSwitch from "@/components/CVStyleSwitch";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <CVStyleSwitch />
      <GitHubCVPage />
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
