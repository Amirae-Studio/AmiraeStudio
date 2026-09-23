const ITEMS = ["3D Modeling", "Product Prototyping", "3D Printing", "Scale Models", "Interactive 3D Web"];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-line py-8 md:py-10" aria-hidden>
      <div className="animate-marquee flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span key={i} className="flex items-center text-4xl font-medium tracking-tight md:text-6xl">
                <span className={i % 2 ? "font-serif font-normal italic" : ""}>{item}</span>
                <span className="mx-8 inline-block h-3 w-3 rounded-full bg-accent md:mx-12" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
