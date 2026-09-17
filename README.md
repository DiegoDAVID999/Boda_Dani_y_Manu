# Invitación de boda — para tu hermano

Sitio web de invitación especial, en la misma línea elegante y fotográfica de la muestra, pero con identidad propia (**noche de jardín**: verdes profundos, marfil y champagne).

## Cómo verla

```bash
npm install
npm run dev -- --port 43123
```

Abre [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Personalizar (lo importante)

### 1. Datos de la pareja

Edita `src/lib/wedding.ts`:

- Nombres de tu hermano y ella
- Fecha, hora, lugar y enlace de Maps
- Código de vestimenta / nota de regalo
- Texto de invitación y (opcional) versículo

### 2. Sus fotos

Reemplaza estos archivos (mismo nombre):

```
public/media/couple/hero.jpg          ← foto principal del hero
public/media/couple/gallery-1.jpg
public/media/couple/gallery-2.jpg
...
public/media/couple/gallery-6.jpg
```

Ahora hay placeholders. En cuanto subas las fotos reales, la invitación cobra vida.

### 3. Confirmaciones (RSVP)

Las respuestas se guardan en `data/rsvps.json`.

## Qué incluye

- Hero cinematográfico + cuenta regresiva
- Historia / invitación
- Detalles del evento
- Galería de momentos
- Formulario de confirmación
- Cierre emotivo
