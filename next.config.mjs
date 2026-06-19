/** @type {import('next').NextConfig} */

// Base path untuk GitHub Pages (project site di sub-folder).
// Diisi oleh workflow CI: NEXT_PUBLIC_BASE_PATH=/Compro-Aeterion
// Lokal (dev / build biasa) kosong → situs jalan di root seperti biasa.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Static export → menghasilkan folder ./out (HTML/CSS/JS murni) untuk Pages.
  output: "export",
  basePath: base || undefined,
  assetPrefix: base || undefined,
  trailingSlash: true,

  images: { unoptimized: true },

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
