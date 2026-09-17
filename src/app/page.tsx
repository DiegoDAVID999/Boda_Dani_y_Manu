import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { Reveal } from "@/components/reveal";
import { RsvpForm } from "@/components/rsvp-form";

const MAPS_URL = "https://maps.app.goo.gl/cPcvdsgNfYtfwREB8?g_st=ic";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end justify-center overflow-hidden pb-16 pt-24 sm:items-center sm:pb-0 sm:pt-0">
        <Image
          src="/media/hero.jpg"
          alt="Mateo y Vanessa"
          fill
          priority
          className="animate-ken-burns object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="photo-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
          <p className="animate-fade-up font-serif text-sm uppercase tracking-[0.45em] text-cream/90 sm:text-base">
            ¡Nos casamos!
          </p>
          <h1 className="animate-fade-up-delay name-gradient mt-4 font-display text-[clamp(3.5rem,14vw,8.5rem)] leading-[0.9] tracking-tight">
            Mateo &amp; Vanessa
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 font-serif text-sm tracking-[0.3em] text-cream/85 sm:text-base">
            04 · Septiembre · 2026
          </p>
          <div className="animate-fade-up-delay-2 mt-10 w-full">
            <Countdown />
          </div>
          <a
            href="#nuestra-boda"
            className="animate-fade-up-delay-2 mt-12 inline-flex items-center gap-2 border-b border-cream/50 pb-1 font-serif text-xs uppercase tracking-[0.28em] text-cream transition hover:border-cream"
          >
            Ver invitación
          </a>
        </div>
      </section>

      {/* Invitation */}
      <section
        id="nuestra-boda"
        className="relative flex min-h-[100svh] items-center overflow-hidden py-24"
      >
        <Image
          src="/media/photo4.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="section-veil absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center text-cream">
          <Reveal>
            <p className="font-serif text-xs uppercase tracking-[0.4em] text-cream/80">
              Nuestra boda
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,8vw,4.2rem)] leading-tight">
              Porque haces parte de nuestra historia…
            </h2>
          </Reveal>
          <Reveal delayMs={220}>
            <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-relaxed text-cream/90 sm:text-xl">
              Nos place invitarte a uno de los días más importantes de nuestra
              vida.
            </p>
          </Reveal>

          <Reveal delayMs={320}>
            <div className="mx-auto mt-14 max-w-md space-y-5 font-body text-base leading-relaxed sm:text-lg">
              <p>
                <span className="block text-xs uppercase tracking-[0.25em] text-cream/65">
                  Fecha
                </span>
                04 | Septiembre | 2026
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.25em] text-cream/65">
                  Hora
                </span>
                7:00 PM
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.25em] text-cream/65">
                  Lugar
                </span>
                Club El Zarzal · Copacabana
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-cream/50 pb-0.5 text-sm tracking-wide transition hover:border-cream"
              >
                Ver ubicación
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={420}>
            <div className="mx-auto mt-14 max-w-sm space-y-2 border-t border-cream/25 pt-10 font-serif text-sm uppercase tracking-[0.22em] text-cream/85">
              <p>Traje formal</p>
              <p>Lluvia de sobres</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video / moment */}
      <section className="relative bg-ink py-0">
        <div className="relative mx-auto aspect-[3/2] w-full max-w-5xl overflow-hidden sm:aspect-[16/9]">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/poster.jpg"
            aria-label="Momento de Mateo y Vanessa"
          >
            <source src="/media/video.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/20" />
        </div>
      </section>

      {/* Photo moment */}
      <section className="relative min-h-[70svh] overflow-hidden">
        <Image
          src="/media/photo2.jpg"
          alt="Mateo y Vanessa juntos"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </section>

      {/* Verse */}
      <section className="relative flex min-h-[80svh] items-center overflow-hidden py-24">
        <Image
          src="/media/photo3.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="section-veil absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-cream">
          <Reveal>
            <p className="font-serif text-xs uppercase tracking-[0.35em] text-cream/75">
              Eclesiastés 4: 9-10
            </p>
          </Reveal>
          <Reveal delayMs={150}>
            <blockquote className="mt-8 font-display text-[clamp(1.8rem,5.5vw,3rem)] leading-snug">
              «Más valen dos que uno, porque obtienen más fruto de su esfuerzo.
              Si caen, el uno levanta al otro».
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="relative overflow-hidden bg-ink px-6 py-24 sm:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(255,105,0,0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(250,241,225,0.08), transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="font-serif text-xs uppercase tracking-[0.4em] text-cream/70">
                Confirmación
              </p>
              <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
                ¿Nos acompañas?
              </h2>
              <p className="mx-auto mt-4 max-w-md font-serif text-cream/80">
                Tu presencia es el mejor regalo. Confirma tu asistencia y
                cuéntanos si vienes con alguien.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={150}>
            <RsvpForm />
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden py-20">
        <Image
          src="/media/hero.jpg"
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="photo-veil absolute inset-0" />
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <p className="font-serif text-xs uppercase tracking-[0.4em] text-cream/80">
              Con amor
            </p>
            <h2 className="name-gradient mt-4 font-display text-[clamp(3rem,12vw,6rem)] leading-none">
              Mateo &amp; Vanessa
            </h2>
            <p className="mt-6 font-serif tracking-[0.25em] text-cream/85">
              04.09.2026
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink px-6 py-8 text-center text-xs tracking-wide text-cream/50">
        Mateo &amp; Vanessa · Nos casamos
      </footer>
    </main>
  );
}
