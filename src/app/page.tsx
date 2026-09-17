import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { Reveal } from "@/components/reveal";
import { RsvpForm } from "@/components/rsvp-form";
import { wedding } from "@/lib/wedding";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end justify-center overflow-hidden pb-20 sm:items-center sm:pb-0">
        <Image
          src={wedding.heroImage}
          alt={wedding.namesDisplay}
          fill
          priority
          className="animate-ken-burns object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="film-grain" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.5em] text-champagne sm:text-xs">
            {wedding.tagline}
          </p>
          <div className="animate-line gold-rule mt-6" />
          <h1 className="animate-fade-up-delay mt-5 font-script text-[clamp(3.8rem,16vw,9rem)] leading-[0.92] text-ivory">
            {wedding.namesDisplay}
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 font-display text-base tracking-[0.35em] text-ivory/80 sm:text-lg">
            {wedding.dateLabel}
          </p>
          <div className="animate-fade-up-delay-2 mt-12 w-full">
            <Countdown />
          </div>
          <a
            href="#historia"
            className="animate-fade-up-delay-2 mt-14 text-[11px] uppercase tracking-[0.35em] text-ivory/70 transition hover:text-champagne"
          >
            Descubrir la invitación
          </a>
        </div>
      </section>

      {/* Invitation story */}
      <section
        id="historia"
        className="relative overflow-hidden bg-night px-6 py-24 sm:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(196,165,116,0.12), transparent 50%), radial-gradient(ellipse at 90% 100%, rgba(61,82,72,0.35), transparent 45%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              Con amor
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,3.6rem)] font-medium leading-tight text-ivory">
              {wedding.inviteLead}
            </h2>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-ivory/75">
              {wedding.inviteBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details over photo */}
      <section
        id="detalles"
        className="relative flex min-h-[90svh] items-center overflow-hidden py-24"
      >
        <Image
          src={wedding.storyImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="section-veil absolute inset-0" />
        <div className="film-grain" />
        <div className="relative z-10 mx-auto w-full max-w-xl px-6 text-center text-ivory">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              La celebración
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-5 font-script text-5xl sm:text-6xl">
              Te esperamos
            </h2>
          </Reveal>

          <Reveal delayMs={200}>
            <dl className="mx-auto mt-14 space-y-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
                  Fecha
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide">
                  {wedding.dateLabel}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
                  Hora
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide">
                  {wedding.timeLabel}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
                  Lugar
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide">
                  {wedding.venue}
                </dd>
                <dd className="mt-1 text-sm text-ivory/65">{wedding.venueCity}</dd>
                {wedding.mapsUrl ? (
                  <a
                    href={wedding.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block border-b border-champagne/50 pb-0.5 text-sm tracking-wide text-champagne transition hover:border-champagne"
                  >
                    Ver ubicación
                  </a>
                ) : null}
              </div>
            </dl>
          </Reveal>

          <Reveal delayMs={320}>
            <div className="mx-auto mt-14 max-w-xs space-y-2 border-t border-ivory/20 pt-10 text-[11px] uppercase tracking-[0.28em] text-ivory/80">
              <p>{wedding.dressCode}</p>
              <p>{wedding.giftNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="fotos" className="bg-dusk px-4 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              Su historia
            </p>
            <h2 className="mt-4 font-script text-5xl text-ivory sm:text-6xl">
              Momentos
            </h2>
            <p className="mt-4 text-sm text-ivory/55">
              Aquí vivirán las fotos de tu hermano y ella
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {wedding.gallery.map((photo, i) => (
            <Reveal key={photo.src} delayMs={i * 70}>
              <figure className="group relative overflow-hidden">
                <div
                  className={`relative w-full overflow-hidden ${
                    i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 p-4 font-display text-sm tracking-[0.2em] text-ivory/90">
                    {photo.caption}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Verse optional */}
      {wedding.verseText ? (
        <section className="bg-night px-6 py-24 text-center">
          <Reveal>
            {wedding.verseRef ? (
              <p className="text-[11px] uppercase tracking-[0.4em] text-champagne">
                {wedding.verseRef}
              </p>
            ) : null}
            <blockquote className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-snug text-ivory sm:text-3xl">
              «{wedding.verseText}»
            </blockquote>
          </Reveal>
        </section>
      ) : null}

      {/* RSVP */}
      <section
        id="rsvp"
        className="relative overflow-hidden bg-night px-6 py-24 sm:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(196,165,116,0.14), transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
                Confirmación
              </p>
              <h2 className="mt-4 font-script text-5xl text-ivory sm:text-6xl">
                ¿Nos acompañas?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-ivory/70">
                Tu presencia hace esta celebración más grande. Confirma y
                cuéntanos si vienes acompañado.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <RsvpForm />
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="relative flex min-h-[55svh] items-center justify-center overflow-hidden py-20">
        <Image
          src={wedding.closingImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="film-grain" />
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-champagne">
              Con cariño
            </p>
            <h2 className="mt-4 font-script text-[clamp(3rem,12vw,6.5rem)] leading-none text-ivory">
              {wedding.namesDisplay}
            </h2>
            <div className="gold-rule mx-auto mt-8" />
            <p className="mt-6 font-display tracking-[0.35em] text-ivory/80">
              {wedding.dateShort}
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-moss/40 bg-night px-6 py-8 text-center text-xs tracking-wide text-ivory/40">
        {wedding.namesDisplay} · Una invitación hecha con amor
      </footer>
    </main>
  );
}
