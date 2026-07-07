import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl space-y-6">
        <h1 className="text-3xl font-semibold text-zinc-950 transition-colors dark:text-zinc-50 sm:text-4xl">
          page not found
        </h1>
        <div className="flex flex-wrap gap-5 text-zinc-700 transition-colors dark:text-zinc-300">
          <Link
            href="/"
            className="underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-50"
          >
            home
          </Link>
        </div>
      </div>
    </main>
  );
}
