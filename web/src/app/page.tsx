import type { CSSProperties } from "react";
import {
  Fish,
  Egg,
  Beef,
  Thermometer,
  Droplets,
  MessageCircle,
  Sparkles,
  Leaf,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const steps = [
  {
    icon: MessageCircle,
    title: "Cuéntenos sobre su finca",
    body: "Solo unas preguntas: qué animal alimenta y a qué clima cría sus grillos.",
  },
  {
    icon: Sparkles,
    title: "Buscamos la mejor opción",
    body: "Comparamos muchas combinaciones de dieta y condiciones de cría.",
  },
  {
    icon: Leaf,
    title: "Reciba una recomendación",
    body: "Le sugerimos una dieta y un estimado de la proteína esperada.",
  },
];

const figures = [
  { value: "60 a 70", unit: "%", label: "Meta de proteína en la harina" },
  { value: "4", unit: "", label: "Dietas en estudio" },
  { value: "3", unit: "", label: "Animales que cubre el modelo" },
];

const animals = [
  {
    icon: Fish,
    name: "Tilapia",
    range: "30 a 45 % de proteína",
    stages: "Alevín, crecimiento, engorde",
  },
  {
    icon: Egg,
    name: "Pollo",
    range: "18 a 23 % de proteína",
    stages: "Inicio, crecimiento, engorde",
  },
  {
    icon: Beef,
    name: "Cerdo",
    range: "14 a 20 % de proteína",
    stages: "Inicio, crecimiento, engorde",
  },
];

const d = (ms: number): CSSProperties =>
  ({ ["--delay" as string]: `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-[480px] flex-col px-6 pb-20 pt-5">
      {/* ── Cabecera ── */}
      <header
        className="reveal flex items-center justify-between"
        style={d(0)}
      >
        <a href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10"
          >
            <span className="block h-2 w-2 rotate-45 bg-primary" />
          </span>
          <span className="text-lg font-bold tracking-tight">GrillIA</span>
        </a>
        <ThemeToggle />
      </header>

      {/* ── Hero ── */}
      <section className="mt-14">
        <p
          className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[12px] font-medium text-foreground/75"
          style={d(80)}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Proyecto Minciencias 963 · 2025
        </p>

        <h1
          className="reveal mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[2.85rem]"
          style={d(160)}
        >
          Inteligencia artificial
          <br />
          <span className="text-primary">para la cría</span>
          <br />
          de sus grillos.
        </h1>

        <p
          className="reveal mt-6 text-[17px] leading-relaxed text-foreground/75"
          style={d(280)}
        >
          Le sugerimos una dieta de cría ajustada al clima de su finca y al
          animal al que va destinada la harina.
        </p>

        <div className="reveal mt-8" style={d(420)}>
          <ProximamenteCard
            primary="Próximamente"
            secondary="Estamos terminando los últimos detalles"
          />
        </div>
      </section>

      <Divider delay={620} />

      {/* ── Cómo funciona ── */}
      <Section title="¿Cómo funciona?" subtitle="Tres pasos sencillos.">
        <ol className="mt-8 space-y-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="reveal flex gap-4 rounded-2xl border border-border/70 bg-card/70 p-4"
                style={d(120 + i * 90)}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <p className="flex items-baseline gap-2">
                    <span className="text-[12px] font-bold tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] font-semibold leading-snug">
                      {s.title}
                    </span>
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-foreground/70">
                    {s.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <Divider />

      {/* ── Cifras clave ── */}
      <Section title="Las cifras" subtitle="Resumen del proyecto.">
        <div className="mt-8 grid grid-cols-1 gap-4">
          {figures.map((f, i) => (
            <div
              key={f.label}
              className="reveal flex items-center gap-5 rounded-2xl border border-border/70 bg-card/60 px-5 py-5"
              style={d(120 + i * 90)}
            >
              <p className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap">
                <span className="text-[3rem] font-extrabold leading-none tracking-[-0.025em]">
                  {f.value}
                </span>
                {f.unit && (
                  <span className="text-2xl font-bold text-foreground/55 leading-none">
                    {f.unit}
                  </span>
                )}
              </p>
              <p className="flex-1 text-[15px] font-semibold leading-snug text-foreground/75">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Animales ── */}
      <Section
        title="Para qué animales sirve"
        subtitle="Adaptamos la recomendación a cada uno."
      >
        <ul className="mt-8 space-y-4">
          {animals.map((a, i) => {
            const Icon = a.icon;
            return (
              <li
                key={a.name}
                className="reveal flex items-center gap-4 rounded-2xl border border-border/70 bg-card/70 p-4"
                style={d(120 + i * 90)}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="text-[19px] font-bold">{a.name}</p>
                  <p className="mt-0.5 text-[14px] font-semibold text-primary">
                    {a.range}
                  </p>
                  <p className="mt-1 text-[13px] text-foreground/65">
                    {a.stages}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      <Divider />

      {/* ── Clima ── */}
      <Section
        title="Su clima, nuestra recomendación"
        subtitle="El modelo se ajusta a su región."
      >
        <div className="mt-8 grid grid-cols-2 gap-4">
          <ClimateTile
            icon={Thermometer}
            label="Temperatura"
            from="24"
            to="34"
            unit="°C"
            delayMs={120}
          />
          <ClimateTile
            icon={Droplets}
            label="Humedad"
            from="50"
            to="80"
            unit="%"
            delayMs={210}
          />
        </div>
        <p
          className="reveal mt-6 text-[15px] leading-relaxed text-foreground/70"
          style={d(320)}
        >
          Cada recomendación tiene en cuenta el clima real de su región.
        </p>
      </Section>

      <Divider />

      {/* ── Cierre ── */}
      <section>
        <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.015em]">
          Estamos terminando de prepararla.
          <br />
          <span className="text-primary">Vuelva pronto.</span>
        </h2>
        <div className="reveal mt-6" style={d(160)}>
          <ProximamenteCard
            primary="Próximamente"
            secondary="Le avisaremos cuando esté lista"
          />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="reveal mt-20 border-t border-border/70 pt-6" style={d(220)}>
        <p className="text-[15px] font-semibold">Universidad de los Llanos</p>
        <p className="mt-1 text-[13px] leading-relaxed text-foreground/60">
          Convocatoria Minciencias 963 de 2025 · Contrato 207 de 2025
        </p>
      </footer>
    </main>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */

function ProximamenteCard({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <Button
      disabled
      aria-disabled
      aria-label={`${primary}. ${secondary}`}
      className="group h-auto w-full justify-start gap-4 rounded-2xl border border-primary/30 bg-card px-5 py-5 text-left text-base font-semibold text-foreground shadow-none hover:bg-card disabled:cursor-default disabled:opacity-100"
    >
      <span
        className="relative inline-flex h-3 w-3 shrink-0 items-center justify-center"
        aria-hidden
      >
        <span className="pulse-ring absolute inset-0 rounded-full bg-primary" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[17px] font-bold leading-none">{primary}</span>
        <span className="text-[13px] font-medium leading-snug text-foreground/65">
          {secondary}
        </span>
      </span>
    </Button>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="reveal" style={d(0)}>
        <h2 className="text-[1.65rem] font-bold leading-tight tracking-[-0.015em]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-[15px] text-foreground/65">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}

function Divider({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="reveal my-14 flex items-center justify-center gap-2"
      style={d(delay)}
      aria-hidden
    >
      <span className="h-px w-12 bg-border" />
      <span className="inline-block h-1.5 w-1.5 rotate-45 bg-primary/50" />
      <span className="h-px w-12 bg-border" />
    </div>
  );
}

function ClimateTile({
  icon: Icon,
  label,
  from,
  to,
  unit,
  delayMs,
}: {
  icon: typeof Thermometer;
  label: string;
  from: string;
  to: string;
  unit: string;
  delayMs: number;
}) {
  return (
    <div
      className="reveal flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/70 p-4"
      style={d(delayMs)}
    >
      <div className="flex items-center gap-2 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-[13px] font-semibold text-foreground/75">
          {label}
        </span>
      </div>
      <p className="flex items-baseline gap-1.5 text-[2rem] font-extrabold tracking-[-0.02em] leading-none">
        <span>{from}</span>
        <span className="text-foreground/35 text-[1.3rem] font-semibold">a</span>
        <span>{to}</span>
        <span className="text-base font-bold text-foreground/55 ml-1">
          {unit}
        </span>
      </p>
    </div>
  );
}
