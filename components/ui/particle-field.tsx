/**
 * ParticleField — DINONAKTIFKAN demi performa.
 *
 * Sebelumnya melukis belasan titik melayang (framer-motion, loop tak-berujung)
 * sebagai layer dekoratif. Lapisan partikel ini dihapus agar tidak membebani
 * GPU/CPU saat web berjalan. Komponen dibiarkan sebagai no-op supaya pemakaian
 * yang masih ada di beberapa section tetap valid tanpa harus diubah semua.
 */
export function ParticleField(_props: {
  count?: number;
  className?: string;
  color?: string;
}) {
  return null;
}
