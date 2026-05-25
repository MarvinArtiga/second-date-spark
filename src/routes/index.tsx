import { createFileRoute } from "@tanstack/react-router";
import Snowfall from "react-snowfall";
import { NextDate } from "@/components/NextDate";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Next Date — ¿Habrá segunda salida?" },
      {
        name: "description",
        content: "La pregunta romántica más importante, con un toque divertido y moderno.",
      },
      { property: "og:title", content: "Next Date — ¿Habrá segunda salida?" },
      {
        property: "og:description",
        content: "Dilo con un botón. Uno crece, el otro desaparece.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{ background: "var(--gradient-emerald)" }} />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-25"
          style={{ background: "var(--gradient-red)" }} />
      </div>

      <Snowfall
        snowflakeCount={120}
        color="rgba(255,255,255,0.85)"
        radius={[0.5, 2.2]}
        speed={[0.3, 1.2]}
        wind={[-0.3, 0.6]}
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />

      <div className="relative z-10 w-full flex justify-center">
        <NextDate />
      </div>
    </main>
  );
}
