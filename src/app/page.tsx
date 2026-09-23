import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { Reveal } from "@/components/reveal";
import { wedding } from "@/lib/wedding";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden bg-night">
      {/* HERO — prioriza móvil */}
      <section className="relative flex min-h-[100svh] min-h-[100dvh] items-end justify-center overflow-hidden">
        <Image
          src={wedding.heroImage}
          alt={wedding.namesDisplay}
          fill
          priority
          unoptimized
          className="object-cover object-[center_18%] lg:hidden"
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
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/10" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,env(safe-area-inset-top))] text-center sm:px-8 sm:pb-20 sm:pt-40">
          <p className="animate-fade-up text-[10px] uppercase tracking-[0.42em] text-champagne sm:text-[11px] sm:tracking-[0.5em]">
            {wedding.tagline}
          </p>
          <h1 className="animate-fade-up-delay mt-3 max-w-[92vw] font-script text-[clamp(3rem,14vw,8.5rem)] leading-[0.92] text-ivory drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] sm:mt-4">
            {wedding.namesDisplay}
          </h1>
          <div className="animate-line gold-rule mt-5 sm:mt-6" />
          <p className="animate-fade-up-delay-2 mt-4 font-display text-base tracking-[0.32em] text-ivory/90 sm:mt-5 sm:text-lg sm:tracking-[0.4em]">
            {wedding.dateShort}
          </p>
          <div className="animate-fade-up-delay-2 mt-7 w-full max-w-sm sm:mt-10 sm:max-w-md">
            <Countdown />
          </div>
          <a
            href="#promesa"
            className="animate-fade-up-delay-2 mt-7 inline-flex min-h-11 touch-manipulation items-center px-3 text-[10px] uppercase tracking-[0.28em] text-ivory/70 transition hover:text-champagne sm:mt-10 sm:text-[11px] sm:tracking-[0.35em]"
          >
            Ver invitación
          </a>
        </div>
      </section>

      {/* Promesa */}
      <section
        id="promesa"
        className="relative flex min-h-[72svh] items-center justify-center overflow-hidden py-14 sm:min-h-[90svh] sm:py-24"
      >
        <Image
          src={wedding.photos.hands}
          alt="Las manos de Daniel y Manuela"
          fill
          unoptimized
          className="object-cover object-[center_40%] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.38em] text-champagne sm:text-[11px] sm:tracking-[0.45em]">
              Matrimonio cristiano
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-4 font-display text-[clamp(1.45rem,6.2vw,2.85rem)] font-medium leading-snug text-ivory drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:mt-6">
              {wedding.inviteLead}
            </h2>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ivory/90 sm:mt-8 sm:text-lg">
              {wedding.inviteBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Balcón */}
      <section className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-auto sm:min-h-[80svh]">
        <Image
          src={wedding.photos.balconySection}
          alt="Daniel y Manuela en el balcón"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* Detalles: en móvil foto + info debajo; en desktop overlay */}
      <section id="detalles" className="relative bg-night">
        <div className="relative aspect-[3/4] w-full overflow-hidden sm:hidden">
          <Image
            src="/media/couple/stairs-details.jpg"
            alt="Daniel y Manuela"
            fill
            unoptimized
            className="object-cover object-[center_42%]"
            sizes="100vw"
          />
        </div>

        <div className="relative overflow-hidden px-5 py-14 sm:flex sm:min-h-[100svh] sm:items-center sm:justify-center sm:px-8 sm:py-24">
          <Image
            src="/media/couple/stairs-details.jpg"
            alt=""
            fill
            unoptimized
            className="hidden object-cover object-[center_52%] sm:block"
            sizes="100vw"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-b from-night/50 via-night/55 to-night/70 sm:block" />

          <div className="relative z-10 mx-auto w-full max-w-xl text-center text-ivory">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.38em] text-champagne sm:text-[11px] sm:tracking-[0.45em]">
                {wedding.sectionTitle}
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h2 className="mt-3 font-script text-[2.6rem] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-6xl">
                Te esperamos
              </h2>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="gold-rule mx-auto mt-7 sm:mt-10" />
            </Reveal>

            <Reveal delayMs={180}>
              <dl className="mx-auto mt-9 space-y-6 sm:mt-12 sm:space-y-9">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-champagne">
                    Fecha
                  </dt>
                  <dd className="mt-1.5 font-display text-xl tracking-wide drop-shadow-sm sm:mt-2 sm:text-2xl">
                    {wedding.dateLabel}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-champagne">
                    Hora
                  </dt>
                  <dd className="mt-1.5 font-display text-xl tracking-wide drop-shadow-sm sm:mt-2 sm:text-2xl">
                    {wedding.timeLabel}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-champagne">
                    Lugar
                  </dt>
                  <dd className="mt-1.5 font-display text-lg leading-snug tracking-wide drop-shadow-sm sm:mt-2 sm:text-2xl">
                    {wedding.venue}
                  </dd>
                  <dd className="mt-1 text-sm leading-snug text-ivory/75">
                    {wedding.venueCity}
                  </dd>
                  {wedding.mapsUrl ? (
                    <a
                      href={wedding.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-12 touch-manipulation items-center justify-center border border-champagne/45 px-5 text-sm tracking-[0.12em] text-champagne transition hover:border-champagne hover:bg-champagne/10"
                    >
                      Ver ubicación en Maps
                    </a>
                  ) : null}
                </div>
              </dl>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="mx-auto mt-10 max-w-xs space-y-2 border-t border-ivory/25 pt-7 text-[10px] uppercase tracking-[0.2em] text-ivory/90 sm:mt-14 sm:pt-10 sm:text-[11px] sm:tracking-[0.25em]">
                <p>{wedding.dressCode}</p>
                <p>{wedding.giftNote}</p>
              </div>
            </Reveal>

            <Reveal delayMs={320}>
              <p className="mx-auto mt-9 max-w-sm font-display text-base leading-relaxed text-champagne/95 sm:mt-12 sm:text-lg">
                Confirma tu asistencia
                <br />
                <span className="text-ivory/85">hasta el 31 de octubre</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mural */}
      <section className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-auto sm:min-h-[85svh]">
        <Image
          src={wedding.photos.muralSection}
          alt="Daniel y Manuela"
          fill
          unoptimized
          className="object-cover object-[center_55%] sm:object-[center_60%]"
          sizes="100vw"
        />
      </section>

      {/* Versículo */}
      <section className="relative overflow-hidden bg-night px-5 py-14 sm:px-8 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(196,165,116,0.1), transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center text-ivory">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne sm:text-[11px] sm:tracking-[0.4em]">
              {wedding.verseRef}
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <blockquote className="mt-5 font-display text-[clamp(1.25rem,5.2vw,2.6rem)] leading-snug sm:mt-8">
              «{wedding.verseText}»
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Cierre */}
      <section className="relative flex min-h-[58svh] items-center justify-center overflow-hidden py-14 sm:min-h-[65svh] sm:py-20">
        <Image
          src="/media/couple/closing-mobile.jpg"
          alt={wedding.namesDisplay}
          fill
          unoptimized
          className="object-cover object-[center_40%] sm:hidden"
          sizes="100vw"
        />
        <Image
          src="/media/couple/closing.jpg"
          alt=""
          fill
          unoptimized
          className="hidden object-cover object-center sm:block"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/45" />
        <div className="relative z-10 px-5 pb-[env(safe-area-inset-bottom)] text-center sm:px-8">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.38em] text-champagne sm:text-[11px] sm:tracking-[0.45em]">
              Con cariño
            </p>
            <h2 className="mt-3 font-script text-[clamp(2.6rem,13vw,6.5rem)] leading-none text-ivory drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:mt-4">
              {wedding.namesDisplay}
            </h2>
            <div className="gold-rule mx-auto mt-5 sm:mt-8" />
            <p className="mt-4 font-display tracking-[0.28em] text-ivory/85 sm:mt-6 sm:tracking-[0.35em]">
              {wedding.dateShort}
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-moss/40 bg-night px-5 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-[11px] tracking-wide text-ivory/40 sm:px-8 sm:py-8 sm:text-xs">
        {wedding.namesDisplay} · {wedding.dateShort} · Con la promesa de Dios
      </footer>
    </main>
  );
}
