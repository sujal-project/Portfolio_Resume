import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-content px-6 py-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="gradient-bar h-1 w-8 rounded-full" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-ink">{title}</h2>
      </div>
      {children}
    </section>
  );
}
