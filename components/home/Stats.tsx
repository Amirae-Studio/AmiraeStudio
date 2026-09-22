import { STATS } from "@/lib/content";
import { LineReveal, Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";

export function Stats() {
  return (
    <section className="bg-soft">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 py-28 sm:px-10 md:grid-cols-12 md:py-40">
        <div className="md:col-span-5">
          <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
            <span>Why</span>
            <span>
              <span className="font-serif font-normal italic">Amirae</span>
            </span>
          </LineReveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Artists and engineers under one roof. We obsess over proportion, curvature and printability — and run
              every engagement on clear milestones with full IP transfer.
            </p>
            <div className="mt-8">
              <PillButton href="/about" variant="outline">
                About the studio
              </PillButton>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 md:col-span-6 md:col-start-7">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-t border-ink/15 py-8">
              <p className="text-6xl font-medium tracking-[-0.05em] md:text-7xl">{s.value}</p>
              <p className="mt-3 max-w-[16rem] text-[15px] text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
