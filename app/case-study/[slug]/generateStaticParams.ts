import { CASE_STUDIES } from "@/lib/case-studies";

export default function generateStaticParams() {
  return CASE_STUDIES.map(cs => ({ slug: cs.slug }));
}
