/**
 * Invitación — Daniel & Manuela
 * Matrimonio cristiano · 19.12.2026
 */
export const wedding = {
  groom: "Daniel",
  bride: "Manuela",
  namesDisplay: "Daniel & Manuela",

  tagline: "Con cariño",
  sectionTitle: "Nuestra boda",

  inviteLead: "El mañana vendrá acompañado de las promesas de Dios…",
  inviteBody:
    "Y queremos que hagas parte del cumplimiento de una de ellas.",

  dateISO: "2026-12-19T16:00:00-05:00",
  dateLabel: "19 · Diciembre · 2026",
  dateShort: "19.12.26",
  timeLabel: "4:00 PM",

  venue: "2 km Vía al aeropuerto",
  venueCity: "Autopista Medellín – Bogotá",
  mapsUrl: "https://maps.app.goo.gl/hmmH1CmjiX8HHfZr8",

  dressCode: "Dress code — Formal",
  giftNote: "Lluvia de sobres",
  rsvpDeadline: "Confirma tu asistencia hasta el 31 de octubre",

  verseRef: "Colosenses 3:14",
  verseText:
    "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto",

  heroImage: "/media/couple/hero-portrait.jpg",
  heroImageDesktop: "/media/couple/hero-wide.jpg",

  photos: {
    doorway: "/media/couple/doorway.jpg",
    hands: "/media/couple/hands.jpg",
    balcony: "/media/couple/balcony.jpg",
    balconySection: "/media/couple/balcony-section.jpg",
    mural: "/media/couple/mural.jpg",
    muralSection: "/media/couple/mural-section.jpg",
    stairs: "/media/couple/stairs.jpg",
  },
} as const;

export type WeddingConfig = typeof wedding;
