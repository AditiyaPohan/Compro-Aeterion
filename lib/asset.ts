/**
 * Prefix path aset publik dengan base-path (untuk GitHub Pages sub-folder).
 * Di root (dev / hosting biasa) BASE kosong → path tetap "/assets/...".
 * Di GitHub Pages → "/Compro-Aeterion/assets/...".
 *
 * Wajib dipakai untuk SEMUA referensi /assets/* yang berupa string mentah
 * (<img src>, <video>, CSS url(), poster) karena Next TIDAK otomatis menambah
 * basePath ke string tersebut (hanya ke <Link>, router, dan next/image).
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE}${path}`;
