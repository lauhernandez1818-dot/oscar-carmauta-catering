# Oscar Carmauta Catering

Landing tipo carta de presentacion digital para Oscar Carmauta, enfocada en catering,
eventos corporativos y servicios de alimentacion.

## Direccion creativa

La pagina debe sentirse como un "boom" de primera impresion: hero fuerte, presencia premium
y CTA directo. No debe obligar al visitante a leer primero quien es Oscar o que hace; esos
detalles quedan como informacion opcional para quien quiera profundizar.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Produccion

```bash
npm run build
npm run start
```

## Material pendiente de Oscar

Para reemplazar placeholders y cerrar la version final, Oscar debe enviar:

- Foto principal profesional de Oscar, idealmente vertical y con buena luz.
- 3 a 6 fotos reales de eventos, montajes, bandejas o platos.
- Breve biografia profesional: anos de experiencia, especialidad y tipo de clientes.
- Lista final de servicios de catering que quiere ofrecer.
- Diferenciales reales: puntualidad, volumen, calidad, equipo, experiencia, etc.
- Zonas donde atiende y condiciones basicas de servicio.
- Horarios o disponibilidad para responder solicitudes.
- Redes sociales, si quiere enlazarlas.

## Donde cambiar contenido

- Landing principal: `src/app/page.tsx`
- Estilos globales: `src/app/globals.css`
- Foto placeholder del hero: `public/oscar-placeholder.svg`

Cuando llegue la foto real de Oscar, colocarla en `public/` y cambiar el `src` del
componente `Image` del hero en `src/app/page.tsx`.

## Contacto actual

- WhatsApp: `+58 424-2515377`
- Ubicacion general: Catia La Mar, Vargas
