/** @type {import('next').NextConfig} */
// Build standar untuk Vercel (dilayani di root, Next.js penuh).
// Tanpa basePath → helper asset() mengembalikan "/assets/..." apa adanya.
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
