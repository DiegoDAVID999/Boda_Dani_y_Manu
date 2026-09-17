# Mateo & Vanessa — Invitación de boda

Sitio web de invitación inspirado en la muestra de Canva, con hero fotográfico, detalles del evento, momento en video, versículo y confirmación de asistencia (RSVP).

## Cómo correrlo

```bash
npm install
npm run dev -- --port 43123
```

Abre [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Contenido

- **Novios:** Mateo & Vanessa  
- **Fecha:** 4 de septiembre de 2026 · 7:00 PM  
- **Lugar:** Club El Zarzal, Copacabana  
- **Código de vestimenta:** Traje formal  
- **Regalo:** Lluvia de sobres  
- **RSVP:** hasta el 31 de julio  

Las confirmaciones se guardan en `data/rsvps.json` (se crea al primer envío).

## Personalizar

Edita textos y fechas en `src/app/page.tsx` y `src/components/countdown.tsx`.  
Fotos de la pareja en `public/media/` (`couple-*.jpg` y `video.mp4`).
Las flores sepia (`accent-flowers-*.jpg`) son solo acento visual de la muestra.
