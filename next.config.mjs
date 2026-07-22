/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: genera archivos en /out para hosting en AWS Amplify.
  output: "export",
  trailingSlash: true,
  images: {
    // La optimización de imágenes de Next no está disponible en export estático.
    unoptimized: true,
  },
};

export default nextConfig;
