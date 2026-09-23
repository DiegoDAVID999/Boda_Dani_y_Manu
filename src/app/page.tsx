import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { Reveal } from "@/components/reveal";
import { wedding } from "@/lib/wedding";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden bg-night">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end justify-center overflow-hidden">
        <Image
          src={wedding.heroImage}
          alt={wedding.namesDisplay}
          fill
          priority
          unoptimized
          className="object-cover object-[center_20%] lg:hidden"
          sizes="100vw"
        />
        <Image
          src={wedding.heroImageDesktop}
          alt=""
          fill
          priority
          unoptimized
          className="hidden object-cover object-[center_30%] lg:block"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-16 pt-40 text-center sm:pb-20">
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.5em] text-champagne">
            {wedding.tagline}
          </p>
          <h1 className="animate-fade-up-delay mt-4 font-script text-[clamp(3.8rem,14vw,8.5rem)] leading-[0.9] text-ivory drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)]">
            {wedding.namesDisplay}
          </h1>
          <div className="animate-line gold-rule mt-6" />
          <p className="animate-fade-up-delay-2 mt-5 font-display text-lg tracking-[0.4em] text-ivory/90">
            {wedding.dateShort}
          </p>
          <div className="animate-fade-up-delay-2 mt-10 w-full max-w-md">
            <Countdown />
          </div>
          <a
            href="#promesa"
            className="animate-fade-up-delay-2 mt-10 text-[11px] uppercase tracking-[0.35em] text-ivory/70 transition hover:text-champagne"
          >
            Ver invitación
          </a>
        </div>
      </section>

      {/* Promesa sobre manos */}
      <section
        id="promesa"
        className="relative flex min-h-[85svh] items-center justify-center overflow-hidden py-24 sm:min-h-[90svh]"
      >
        <Image
          src={wedding.photos.hands}
          alt="Las manos de Daniel y Manuela"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              Matrimonio cristiano
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 font-display text-[clamp(1.85rem,5vw,2.85rem)] font-medium leading-snug text-ivory drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
              {wedding.inviteLead}
            </h2>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-ivory/90">
              {wedding.inviteBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Foto balcón — encuadre correcto de la pareja */}
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[80svh]">
        <Image
          src={wedding.photos.balconySection}
          alt="Daniel y Manuela en el balcón"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* Detalles — info sobre foto de las escaleras */}
      <section
        id="detalles"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden py-24"
      >
        <Image
          src="/media/couple/stairs-details.jpg"
          alt="Daniel y Manuela"
          fill
          unoptimized
          className="object-cover object-[center_54%] sm:object-[center_52%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/55 to-night/70" />
        <div className="relative z-10 mx-auto w-full max-w-xl px-6 text-center text-ivory">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              {wedding.sectionTitle}
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="mt-5 font-script text-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)] sm:text-6xl">
              Te esperamos
            </h2>
          </Reveal>

          <Reveal delayMs={140}>
            <div className="gold-rule mx-auto mt-10" />
          </Reveal>

          <Reveal delayMs={180}>
            <dl className="mx-auto mt-12 space-y-9">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-champagne">
                  Fecha
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide drop-shadow-sm">
                  {wedding.dateLabel}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-champagne">
                  Hora
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide drop-shadow-sm">
                  {wedding.timeLabel}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-champagne">
                  Lugar
                </dt>
                <dd className="mt-2 font-display text-xl leading-snug tracking-wide drop-shadow-sm sm:text-2xl">
                  {wedding.venue}
                </dd>
                <dd className="mt-1 text-sm text-ivory/75">
                  {wedding.venueCity}
                </dd>
                {wedding.mapsUrl ? (
                  <a
                    href={wedding.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block border-b border-champagne/50 pb-0.5 text-sm tracking-[0.12em] text-champagne transition hover:border-champagne"
                  >
                    Ver ubicación en Maps
                  </a>
                ) : null}
              </div>
            </dl>
          </Reveal>

          <Reveal delayMs={260}>
            <div className="mx-auto mt-14 max-w-xs space-y-2 border-t border-ivory/25 pt-10 text-[11px] uppercase tracking-[0.25em] text-ivory/90">
              <p>{wedding.dressCode}</p>
              <p>{wedding.giftNote}</p>
            </div>
          </Reveal>

          <Reveal delayMs={320}>
            <p className="mx-auto mt-12 max-w-sm font-display text-base leading-relaxed text-champagne/95 sm:text-lg">
              Confirma tu asistencia
              <br />
              <span className="text-ivory/85">hasta el 31 de octubre</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Momento mural — solo foto, sin texto encima */}
      <section className="relative min-h-[75svh] overflow-hidden sm:min-h-[85svh]">
        <Image
          src={wedding.photos.muralSection}
          alt="Daniel y Manuela"
          fill
          unoptimized
          className="object-cover object-[center_60%]"
          sizes="100vw"
        />
      </section>

      {/* Versículo */}
      <section className="relative overflow-hidden bg-night px-6 py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(196,165,116,0.1), transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center text-ivory">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-champagne">
              {wedding.verseRef}
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <blockquote className="mt-8 font-display text-[clamp(1.6rem,4.5vw,2.6rem)] leading-snug">
              «{wedding.verseText}»
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Cierre — recorte del mural en alta calidad */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden py-20 sm:min-h-[65svh]">
        <Image
          src="/media/couple/closing.jpg"
          alt={wedding.namesDisplay}
          fill
          unoptimized
          className="object-cover object-[center_42%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/50" />
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              Con cariño
            </p>
            <h2 className="mt-4 font-script text-[clamp(3rem,12vw,6.5rem)] leading-none text-ivory drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
              {wedding.namesDisplay}
            </h2>
            <div className="gold-rule mx-auto mt-8" />
            <p className="mt-6 font-display tracking-[0.35em] text-ivory/85">
              {wedding.dateShort}
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-moss/40 bg-night px-6 py-8 text-center text-xs tracking-wide text-ivory/40">
        {wedding.namesDisplay} · {wedding.dateShort} · Con la promesa de Dios
      </footer>
    </main>
  );
}
