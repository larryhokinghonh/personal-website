import { blogs } from "@/../data/blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableContent, { type TableContentItem } from "@/components/TableContent";
import WhatIveLearnedDuringMyInternship from "@/content/blogs/what-ive-learned-during-my-internship";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import type { Metadata } from "next";

const blogContentBySlug: Record<string, ComponentType> = {
  "what-ive-learned-during-my-internship": WhatIveLearnedDuringMyInternship,
};

const blogDescriptionBySlug: Record<string, string> = {
  "what-ive-learned-during-my-internship":
    "larry's reflection on my internship",
};

const tableContentBySlug: Record<string, TableContentItem[]> = {
  "what-ive-learned-during-my-internship": [
    {
      id: "trade-offs",
      label: "trade-offs",
    },
    {
      id: "kiss-principle",
      label: "KISS principle",
    },
    {
      id: "learning-from-my-team",
      label: "learning from my team",
    },
  ],
};

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  const description = blogDescriptionBySlug[blog.slug];

  return {
    title: blog.title,
    description,
    alternates: {
      canonical: blog.href,
    },
    openGraph: {
      title: `${blog.title} | Larry`,
      description,
      url: blog.href,
      type: "article",
      publishedTime: new Date(blog.date).toISOString(),
    },
    twitter: {
      card: "summary",
      title: `${blog.title} | Larry`,
      description,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const BlogContent = blogContentBySlug[blog.slug];

  if (!BlogContent) {
    notFound();
  }

  const tableContent = tableContentBySlug[blog.slug] ?? [];

  return (
    <main className="min-h-screen px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-xl gap-10 lg:max-w-5xl lg:grid-cols-[12rem_minmax(0,36rem)_12rem] lg:items-start lg:justify-center">
        <aside className="hidden lg:sticky lg:top-40 lg:block lg:w-48 lg:self-start">
          <TableContent items={tableContent} />
        </aside>
        <article className="space-y-6 text-base leading-7 text-zinc-700 transition-colors duration-200 dark:text-zinc-300 sm:text-lg sm:leading-8">
          <Breadcrumbs
            items={[
              { label: "home", href: "/" },
              { label: "blogs", href: "/blogs" },
              { label: "you are currently here!" },
            ]}
          />
          <h1 className="text-3xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50 sm:text-4xl">
            {blog.title}
          </h1>
          <p className="text-sm text-zinc-600 transition-colors duration-100 dark:text-zinc-400">
            {blog.date}
          </p>
          <BlogContent />
          <div className="pt-4 text-sm">
            <a
              href="#top"
              className="underline decoration-zinc-400 underline-offset-4 transition hover:text-zinc-950 dark:decoration-zinc-600 dark:hover:text-zinc-50"
            >
              back to top
            </a>
          </div>
        </article>
        <div aria-hidden="true" className="hidden lg:block" />
      </div>
    </main>
  );
}
