import type { Metadata } from "next";
import { PillButton } from "@/components/site/PillButton";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-center px-5 pb-28 pt-36 sm:px-10 md:pt-48">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-4 text-6xl font-medium tracking-[-0.05em] md:text-8xl">
        This page <span className="font-serif font-normal italic">wandered off.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
        The link may be broken or the page may have moved. Let’s get you back on track.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <PillButton href="/">Back to home</PillButton>
        <PillButton href="/contact" variant="outline">
          Contact us
        </PillButton>
      </div>
    </section>
  );
}
