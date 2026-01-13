"use client";

import { usePathname, useRouter } from "next/navigation";

const CV_STYLES = [
  { value: "/default", label: "Default" },
  { value: "/personal", label: "Personal" },
  { value: "/github", label: "GitHub" },
] as const;

export default function CVStyleSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  // Map "/" to "/default" for display purposes
  const currentStyle =
    CV_STYLES.find((style) => style.value === pathname)?.value ??
    (pathname === "/" ? "/default" : "/default");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  return (
    <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50">
      <label className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
        <select
          value={currentStyle}
          onChange={handleChange}
          className="bg-neutral-800/90 backdrop-blur-sm text-neutral-200 border border-neutral-600 rounded-md px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm cursor-pointer hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
        >
          {CV_STYLES.map((style) => (
            <option key={style.value} value={style.value}>
              {style.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
