# EL QUINTO AZUL — Viajes

Bitácoras HTML de cada viaje de buceo del club, publicadas con GitHub Pages.

## Estructura

```
index.html                  Portada con la lista de viajes
assets/
  marca.css                 Estilo de marca (colores, tipografías, componentes)
  marca.js                  Modo oscuro, lightbox de fotos y checklist de equipo
  logo.jpeg                 Logo del club
  recuerdos/                Fotos de viajes antiguos, comunes a todas las bitácoras
plantilla/
  plantilla_viaje.html      Base para crear un viaje nuevo
viajes/
  2026-08-palamos/
    index.html              Bitácora del viaje
    fotos/                  Fotos propias de ese viaje
```

## Añadir un viaje nuevo

1. Crea la carpeta `viajes/AAAA-MM-destino/`.
2. Copia dentro `plantilla/plantilla_viaje.html` y renómbralo a `index.html`.
3. Edita el contenido siguiendo el comentario del principio del fichero.
4. Añade el enlace del viaje en `index.html` de la raíz.
5. El enlace para el grupo de WhatsApp es:
   `https://elquintoazul.github.io/<nombre-del-repo>/viajes/AAAA-MM-destino/`

Las rutas al CSS y al JS dentro de una bitácora son siempre `../../assets/...`.
