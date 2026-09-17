/**
 * Datos de la boda de tu hermano.
 * Completa esto y reemplaza las fotos en /public/media/couple/
 */
export const wedding = {
  groom: "Él",
  bride: "Ella",
  /** Cómo se leen los nombres en el hero */
  namesDisplay: "Él & Ella",

  tagline: "Nos casamos",
  inviteLead: "Porque haces parte de nuestra historia",
  inviteBody:
    "Con mucha alegría te invitamos a celebrar uno de los días más importantes de nuestras vidas.",

  dateISO: "2026-12-12T17:00:00-05:00",
  dateLabel: "12 · Diciembre · 2026",
  dateShort: "12.12.2026",
  timeLabel: "5:00 PM",

  venue: "Por confirmar",
  venueCity: "Colombia",
  mapsUrl: "",

  dressCode: "Traje formal",
  giftNote: "Tu presencia es el mejor regalo",
  rsvpDeadline: "Confirmar asistencia con anticipación",

  verseRef: "",
  verseText: "",

  gallery: [
    { src: "/media/couple/gallery-1.jpg", caption: "Nosotros" },
    { src: "/media/couple/gallery-2.jpg", caption: "Su mirada" },
    { src: "/media/couple/gallery-3.jpg", caption: "Juntos" },
    { src: "/media/couple/gallery-4.jpg", caption: "Promesa" },
    { src: "/media/couple/gallery-5.jpg", caption: "Risa" },
    { src: "/media/couple/gallery-6.jpg", caption: "Para siempre" },
  ] as const,

  heroImage: "/media/couple/hero.jpg",
  storyImage: "/media/couple/gallery-2.jpg",
  closingImage: "/media/couple/gallery-3.jpg",
} as const;

export type WeddingConfig = typeof wedding;
