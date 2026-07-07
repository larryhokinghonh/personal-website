export default function WhatIveLearnedDuringMyInternship() {
  return (
    <>
      <p>
        this blog was written to reflect on my internship as i move onto the next chapter of my career.
      </p>

      <h2
        id="trade-offs"
        className="scroll-mt-24 text-2xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50"
      >
        trade-offs
      </h2>

      <p>
        i had a brief discussion with my manager that began with me asking why the pipeline shouldn&apos;t be migrated to Kafka instead of Java with Spring Boot, since it provides better throughput and is more modern.
      </p>

      <p>
        before that, i was bummed to hear that the pipeline would be built with Java and Spring Boot. i was looking forward to the learning opportunity of applying Kafka in a real-world application.
      </p>

      <p>
        after the discussion, i realized i totally ignored the trade-offs that would come with better performance, which is a canon event for an inexperienced software engineer like me.
      </p>

      <p>
        building with Kafka may bring implementation and maintenance complexities, and my manager explained that the current load handled by the pipeline would be fine with Java and Spring Boot, and it makes maintenance easier for less-technical operators to install and maintain in the future.
      </p>

      <h2
        id="kiss-principle"
        className="scroll-mt-24 text-2xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50"
      >
        KISS Principle
      </h2>

      <p>
        the{" "}
        <a
          href="https://en.wikipedia.org/wiki/KISS_principle"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-zinc-400 underline-offset-4 transition hover:text-zinc-950 dark:decoration-zinc-600 dark:hover:text-zinc-50"
        >
          KISS (&quot;keep it simple, stupid&quot;) principle
        </a>{" "}
        originated from Kelly Johnson, who was a U.S. Navy aircraft designer. he was overseeing a group of engineers building jet aircraft, and was challenged to make the designs repairable by an average mechanic under combat conditions.
      </p>

      <p>
        by designing the jet aircraft to be easily repairable, less time would be spent on the repair, and the likelihood of getting it repaired under constrained conditions would increase.
      </p>

      <p>
        the story resonates with the situation i was in, and it changed how i think as a software engineer moving forward.
      </p>

      <p>
        trade-offs like these in system design thinking kinda relates to economics, whereby governments have to make data-driven decisions by, for example, laying out employment and inflation data before deciding whether interest rates should be lowered or raised.
      </p>

      <h2
        id="learning-from-my-team"
        className="scroll-mt-24 text-2xl font-semibold text-zinc-950 transition-colors duration-100 dark:text-zinc-50"
      >
        learning from my team
      </h2>

      <p>
        my internship consisted of nothing short of constant learning. although i was constantly thrown into the fire, it allowed me to be more comfortable working in difficult and uncertain environments, pushing me out of my comfort zone and helping me realize my potential.
      </p>

      <p>
        i spent an extensive amount of time debugging on my job and identified code practices used by ex-engineers to structure clean code. i appreciate how they were written and organized, and have adopted some practices into my projects.
      </p>

      <p>
        im glad to have met and got to know the people in my team, and was able to learn a thing or two while working with them. this could be recency bias, but i genuinely felt this internship had a better and more fulfilling learning experience compared to all the time spent in university combined.
      </p>
    </>
  );
}
