import { blogs } from "@/../data/blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedContent from "@/components/AnimatedContent";

export const metadata: Metadata = {
  title: "larry",
  description:
    "larry's software engineering blogs.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "larry",
    description:
      "larry's software engineering blogs.",
    url: "/blogs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "larry",
    description:
      "larry's software engineering blogs.",
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl space-y-6 text-lg">
        <Breadcrumbs
          items={[
            { label: "home", href: "/" },
            { label: "blogs" },
          ]}
        />
        <div className="grid gap-4">
          {blogs.map((blog, index) => (
            <AnimatedContent key={blog.slug} delay={index * 0.10}>
              <article>
                <Link
                  href={blog.href}
                  className="inline-flex text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50"
                >
                  {blog.title}
                </Link>
                <p className="mt-1 text-sm text-zinc-600 transition-colors duration-100 dark:text-zinc-400">
                  {blog.date}
                </p>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </main>
  );
}
