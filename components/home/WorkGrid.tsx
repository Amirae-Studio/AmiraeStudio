import { PROJECTS, type Project } from "@/lib/content";
import { LineReveal, Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";

function ProjectCard({ project }: { project: Project }) {
  const live = Boolean(project.link);
  const body = (
    <>
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/6]"
        style={{ backgroundColor: project.tint }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-fit transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
          {project.status}
        </span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{project.title}</h3>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">{project.summary}</p>
        </div>
        <span className="shrink-0 pt-2 text-sm text-muted">{project.tags.join(" · ")}</span>
      </div>
    </>
  );

  return live ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" data-cursor="View" className="group block">
      {body}
    </a>
  ) : (
    <div data-cursor="Soon" className="group">
      {body}
    </div>
  );
}

export function WorkGrid() {
  const left = PROJECTS.filter((_, i) => i % 2 === 0);
  const right = PROJECTS.filter((_, i) => i % 2 === 1);

  return (
    <section id="work" className="mx-auto max-w-[1600px] scroll-mt-10 px-5 py-28 sm:px-10 md:py-40">
      <div className="flex items-end justify-between gap-6">
        <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
          <span>
            Selected <span className="font-serif font-normal italic">work</span>
          </span>
        </LineReveal>
        {/* <span className="pb-3 text-muted">({String(PROJECTS.length).padStart(2, "0")})</span> */}
      </div>

      <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
        <div className="space-y-16 md:space-y-28">
          {left.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="space-y-16 md:space-y-28 md:pt-48">
          {right.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
          <Reveal className="hidden md:block">
            <div className="flex aspect-[5/6] flex-col items-start justify-end rounded-3xl bg-soft p-10">
              <p className="text-3xl font-medium tracking-tight">Your project could be next.</p>
              <p className="mt-3 max-w-sm text-muted">Tell us what you want to make — digital, physical, or both.</p>
              <div className="mt-8">
                <PillButton href="/contact">Start a project</PillButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
