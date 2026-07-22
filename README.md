# SOII — Landing Page

Sitio web (landing page) para **SOII · Soluciones Industriales e Integrales**, empresa
especializada en mantenimientos locativos, obras civiles, adecuaciones e instalaciones
técnicas.

Construido con **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, listo para
desplegar en **AWS Amplify Hosting** (soporte nativo de Next.js).

## Requisitos

- Node.js 18.18+ (recomendado 20 o 22)
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
```

El build pre-renderiza todas las páginas como contenido estático. Amplify usa
`.next/required-server-files.json` para publicar el sitio.

## Estructura

```
src/
  app/
    layout.tsx      # Metadatos, fuentes (Poppins/Inter) y estilos globales
    page.tsx        # Composición de todas las secciones
    globals.css     # Sistema de diseño (Tailwind + utilidades de marca)
  components/        # Navbar, Hero, About, Services, Values, Gallery, Contact, etc.
  lib/site.ts        # Contenido editable (servicios, valores, clientes, contacto)
public/
  images/            # Fotos reales de proyectos (galería / hero)
  favicon.svg        # Ícono con el engranaje de la marca
```

Para editar textos, servicios, valores, clientes o datos de contacto, modifica
`src/lib/site.ts`.

## Paleta de marca

- Ámbar / dorado: `#F2A81D` (con degradado a naranja `#F58220`)
- Azul marino: `#23273B`
- Grises y blanco

## Despliegue en AWS Amplify

1. Sube el repositorio a GitHub/GitLab/Bitbucket/CodeCommit.
2. En la consola de **AWS Amplify** → *New app* → *Host web app* → conecta el repo.
3. Amplify detectará `amplify.yml`. La configuración ya está lista:
   - `baseDirectory: .next` (salida del build de Next.js para Amplify).
4. Guarda y despliega. Amplify hará `npm ci` → `npm run build` y publicará el sitio.

El formulario de contacto y el botón flotante abren **WhatsApp** con un mensaje
prellenado hacia el número de la empresa, por lo que no requiere backend.
