import GitHubCVPage from "@/components/GitHubCVPage";
import CVStyleSwitch from "@/components/CVStyleSwitch";

export default function Page() {
  return (
    <>
      <CVStyleSwitch />
      <GitHubCVPage />
    </>
  );
}
