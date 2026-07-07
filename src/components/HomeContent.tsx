"use client";

import AnimatedContent from "@/components/AnimatedContent";
import RotatingText from "@/components/RotatingText";
import { projects } from "@/../data/projects";
import Link from "next/link";
import Image from "next/image";

export default function HomeContent() {
  return (
    <main className="px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <section id="intro" className="min-h-screen tracking-wider pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pt-20">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <h1 className="text-4xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50">
              <AnimatedContent className="inline" delay={0.50}>
                <RotatingText
                  texts={["hello", "你好", "hai"]}
                  className="text-blue-500 dark:text-blue-400"
                />
              </AnimatedContent>
              <AnimatedContent className="inline" delay={1.50}>
                <span>, i&apos;m </span>
              </AnimatedContent>
              <AnimatedContent className="inline" delay={1.75}>
                <span>larry.</span>
              </AnimatedContent>
            </h1>

            <AnimatedContent delay={3.00}>
              <p className="leading-7 text-zinc-700 transition-colors duration-100 dark:text-zinc-300 sm:leading-8">
                im a computer science graduate and i like to solve problems, currently procrastinating on getting back into drumming.
              </p>
            </AnimatedContent>
            <AnimatedContent delay={3.50}>
              <p className="leading-7 text-zinc-700 transition-colors duration-100 dark:text-zinc-300 sm:leading-8">
                im slighty interested in economics, winning a gold medal in a national competition.
              </p>
            </AnimatedContent>
            <AnimatedContent delay={4.00}>
            <p className="leading-7 text-zinc-700 transition-colors duration-100 dark:text-zinc-300 sm:leading-8">
              there so much more for me to learn, and im open to explore new opportunities. lets {" "}
              <a href="mailto:larryhokinghonh@gmail.com" className="inline-flex font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50" target="_blank" rel="noopener noreferrer">
                connect
              </a>
              !
            </p>
            </AnimatedContent>
            <div className="flex gap-4 leading-7 text-zinc-700 transition-colors duration-100 dark:text-zinc-300 sm:leading-8">
              <AnimatedContent delay={4.50}>
                <Link href="/blogs" className="inline-flex font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50">
                  blogs
                </Link>
              </AnimatedContent>
              <AnimatedContent delay={5.00}>
                <Link href="/resume.pdf" target="_blank" className="inline-flex font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50">
                  resume
                </Link>
              </AnimatedContent>
            </div>

          </div>
        </section>

        <section id="experience" className="min-h-screen tracking-wider py-14 sm:py-20 lg:py-24">
          <AnimatedContent>
            <h2 className="text-lg font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50 sm:text-xl">
              what have i done
            </h2>
          </AnimatedContent>

          <div className="mt-8 grid gap-7 sm:mt-10 lg:gap-8">
            <AnimatedContent delay={0}>
              <article>
                <h3 className="text-xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50 sm:text-2xl">
                  swe intern @ {" "}
                  <a href="https://www.hitachirail.com/" className="inline-flex underline underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:text-zinc-300" target="_blank" rel="noopener noreferrer">
                    hitachi rail
                  </a>
                </h3>
                <p className="mt-4 max-w-3xl leading-7 text-zinc-700 transition-colors duration-100 dark:text-zinc-300 sm:leading-8">
                  did lots of debugging, maintenance and deployment work for a
                  production pipeline. rewrote an application to reduce log
                  processing time. {" "}
                  <Link
                    href="/blogs/what-ive-learned-during-my-internship"
                    className="underline decoration-zinc-400 underline-offset-4 transition hover:text-zinc-950 dark:decoration-zinc-600 dark:hover:text-zinc-50"
                  >
                    read more here
                  </Link>
                  .
                </p>
              </article>
            </AnimatedContent>

            <AnimatedContent delay={0.08}>
              <article>
                <h3 className="text-xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50 sm:text-2xl">
                  maths tutor
                </h3>
                <p className="mt-4 max-w-3xl leading-7 text-zinc-700 transition-colors duration-100 dark:text-zinc-300 sm:leading-8">
                  helped students to perform better in math exams.
                </p>
              </article>
            </AnimatedContent>

            <AnimatedContent delay={0.16}>
              <Image
                alt=""
                className="h-auto w-full max-w-full rounded-xl"
                height={420}
                src="/tutor-photo-1.webp"
                width={420}
              />
            </AnimatedContent>

            <AnimatedContent delay={0.24}>
              <Image
                alt=""
                className="h-auto w-full max-w-full rounded-xl"
                height={420}
                src="/tutor-photo-2.webp"
                width={420}
              />
            </AnimatedContent>
          </div>
        </section>

        <section id="projects" className="flex min-h-screen flex-col tracking-wider pt-14 sm:pt-20 lg:pt-24">
          <AnimatedContent className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-lg font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50 sm:text-xl">
              what have i worked on
            </h2>
          </AnimatedContent>

          <div className="mt-8 grid gap-7 sm:mt-10 lg:gap-8">
            {projects.map((project, index) => (
              <AnimatedContent key={project.name} delay={index * 0.08}>
                <article className="flex min-h-24 flex-col">
                  <h3 className="text-xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50 sm:text-2xl">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex underline underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:text-zinc-300"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-zinc-700 transition-colors duration-100 dark:text-zinc-300 sm:leading-8">
                    {Array.isArray(project.description)
                      ? project.description.map((part) =>
                          part.href ? (
                            <a
                              key={part.text}
                              href={part.href}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-zinc-400 underline-offset-4 transition hover:text-zinc-950 dark:decoration-zinc-600 dark:hover:text-zinc-50"
                            >
                              {part.text}
                            </a>
                          ) : (
                            part.text
                          ),
                        )
                      : project.description}
                  </p>
                </article>
              </AnimatedContent>
            ))}
          </div>
          <footer className="mt-auto">
            <div className="py-8 text-sm text-zinc-600 transition-colors duration-100 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex justify-end gap-5">
                <AnimatedContent delay={0.25}>
                <a href="mailto:larryhokinghonh@gmail.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-950 dark:hover:text-zinc-50">
                  email
                </a>
                </AnimatedContent>
                
                <AnimatedContent delay={0.50}>
                <a href="https://www.linkedin.com/in/larryhkh" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-950 dark:hover:text-zinc-50">
                  linkedin
                </a>
                </AnimatedContent>

                <AnimatedContent delay={0.75}>
                <a href="https://github.com/larryhokinghonh" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-950 dark:hover:text-zinc-50">
                  github
                </a>
                </AnimatedContent>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
