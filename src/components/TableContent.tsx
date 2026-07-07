"use client";

import { useEffect, useState } from "react";

export type TableContentItem = {
  id: string;
  label: string;
};

type TableContentProps = {
  items: TableContentItem[];
};

export default function TableContent({ items }: TableContentProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null);

    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="table of contents" className="text-sm">
      <p className="font-medium text-zinc-950 transition-colors duration-100 dark:text-zinc-50">
        contents
      </p>
      <div className="mt-3 flex flex-col gap-2 text-zinc-600 transition-colors duration-100 dark:text-zinc-400">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                isActive
                  ? "origin-left scale-110 text-blue-500 transition dark:text-blue-400"
                  : "transition hover:text-zinc-950 dark:hover:text-zinc-50"
              }
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
