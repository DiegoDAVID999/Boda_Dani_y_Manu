/**
 * Datos de la boda de tu hermano.
 * Completa esto y reemplaza las fotos en /public/media/couple/
 */
export const wedding = {
  groom: "Daniel",
  bride: "Manuela",
  /** Cómo se leen los nombres en el hero */
  namesDisplay: "Daniel & Manuela",

  tagline: "Nos casamos",
  inviteLead: "Porque haces parte de nuestra historia",
  inviteBody:
    "Con mucha alegría te invitamos a celebrar uno de los días más importantes de nuestras vidas.",

  // TODO: completar con los datos reales de la boda
  dateISO: "2026-12-12T17:00:00-05:00",
  dateLabel: "Fecha por confirmar",
  dateShort: "Pronto",
  timeLabel: "Hora por confirmar",

  venue: "Lugar por confirmar",
  venueCity: "",
  mapsUrl: "",

  dressCode: "Traje formal",
  giftNote: "Tu presencia es el mejor regalo",
  rsvpDeadline: "Confirmar asistencia con anticipación",

  verseRef: "",
  verseText: "",

  gallery: [
    { src: "/media/couple/gallery-1.jpg", caption: "Daniel & Manuela" },
    { src: "/media/couple/gallery-2.jpg", caption: "Juntos" },
    { src: "/media/couple/gallery-3.jpg", caption: "Este día" },
    { src: "/media/couple/gallery-4.jpg", caption: "Promesa" },
    { src: "/media/couple/gallery-5.jpg", caption: "Mirada" },
    { src: "/media/couple/gallery-6.jpg", caption: "Para siempre" },
  ] as const,

  heroImage: "/media/couple/hero-portrait.jpg",
  storyImage: "/media/couple/hero.jpg",
  closingImage: "/media/couple/hero.jpg",
} as const;

export type WeddingConfig = typeof wedding;
