import type { ReactNode } from "react";
import { LineReveal, Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-36 sm:px-10 md:pb-28 md:pt-48">
      <Reveal>
        <p className="mb-8 flex items-center gap-3 text-[15px] text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {eyebrow}
        </p>
      </Reveal>
      <LineReveal
        as="h1"
        className="text-[13vw] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[10vw] xl:text-[152px]"
      >
        {title}
      </LineReveal>
      {(intro || children) && (
        <div className="mt-12 grid md:mt-16 md:grid-cols-12">
          <Reveal delay={0.25} className="md:col-span-6 md:col-start-7">
            {intro && <p className="text-lg leading-relaxed text-muted md:text-xl">{intro}</p>}
            {children}
          </Reveal>
        </div>
      )}
    </section>
  );
}
