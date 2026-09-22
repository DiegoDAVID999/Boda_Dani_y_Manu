import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { Reveal } from "@/components/reveal";
import { wedding } from "@/lib/wedding";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden bg-night">
      {/* HERO — estilo mockup: foto + Con cariño / nombres / fecha */}
      <section className="relative flex min-h-[100svh] items-end justify-center overflow-hidden">
        {/* Móvil */}
        <Image
          src={wedding.heroImage}
          alt={wedding.namesDisplay}
          fill
          priority
          unoptimized
          className="object-cover object-[center_20%] lg:hidden"
          sizes="100vw"
        />
        {/* Escritorio */}
        <Image
          src={wedding.heroImageDesktop}
          alt=""
          fill
          priority
          unoptimized
          className="hidden object-cover object-[center_30%] lg:block"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-transparent" />
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

      {/* Promesa — texto sobre foto de las manos */}
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
        <div className="absolute inset-0 bg-night/55 sm:bg-night/50" />
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
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-ivory/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
              {wedding.inviteBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Foto balcón — pareja bien visible */}
      <section className="relative min-h-[75svh] overflow-hidden sm:min-h-[85svh]">
        <Image
          src={wedding.photos.balcony}
          alt="Daniel y Manuela en el balcón"
          fill
          unoptimized
          className="object-cover object-[center_42%] sm:object-[center_40%]"
          sizes="100vw"
        />
      </section>

      {/* Nuestra boda — texto sobre sección del mural */}
      <section
        id="detalles"
        className="relative flex min-h-[90svh] items-center justify-center overflow-hidden py-24 sm:min-h-[95svh]"
      >
        <Image
          src="/media/couple/mural-section.jpg"
          alt="Daniel y Manuela"
          fill
          unoptimized
          className="object-cover object-[center_62%] sm:object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/60" />
        <div className="relative z-10 mx-auto w-full max-w-xl px-6 text-center text-ivory">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              {wedding.sectionTitle}
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="mt-5 font-script text-5xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-6xl">
              Te esperamos
            </h2>
          </Reveal>
          <Reveal delayMs={160}>
            <dl className="mx-auto mt-12 space-y-7">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-champagne/80">
                  Fecha
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide">
                  {wedding.dateLabel}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-champagne/80">
                  Hora
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide">
                  {wedding.timeLabel}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-champagne/80">
                  Lugar
                </dt>
                <dd className="mt-2 font-display text-xl leading-snug tracking-wide sm:text-2xl">
                  {wedding.venue}
                </dd>
                <dd className="mt-1 text-sm text-ivory/70">
                  {wedding.venueCity}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delayMs={260}>
            <div className="mx-auto mt-12 max-w-xs space-y-2 border-t border-ivory/25 pt-10 text-[11px] uppercase tracking-[0.25em] text-ivory/90">
              <p>{wedding.dressCode}</p>
              <p>{wedding.giftNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Versículo */}
      <section className="relative flex min-h-[80svh] items-center overflow-hidden py-24">
        <Image
          src={wedding.photos.stairs}
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/70" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-ivory">
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

      {/* Foto doorway full */}
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[80svh]">
        <Image
          src={wedding.photos.doorway}
          alt="Daniel y Manuela"
          fill
          unoptimized
          className="object-cover object-[center_25%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
      </section>

      {/* Cierre */}
      <section className="relative flex min-h-[55svh] items-center justify-center overflow-hidden py-20">
        <Image
          src={wedding.heroImageDesktop}
          alt=""
          fill
          unoptimized
          className="object-cover object-[center_28%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              Con cariño
            </p>
            <h2 className="mt-4 font-script text-[clamp(3rem,12vw,6.5rem)] leading-none text-ivory">
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
