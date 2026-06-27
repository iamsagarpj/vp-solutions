interface LogoProps {
  /** Rendered pixel width (height scales automatically via aspect ratio). */
  size?: number;
}

/**
 * VP Solutions — geometric monogram mark.
 *
 * Recreates the reference logo:
 *  • Three pixel-art squares  →  tech / digital identity
 *  • Bold angular "V"         →  letter V, rendered with an inner groove (evenodd)
 *  • Bold geometric "P"       →  letter P with open bowl, fused to V's right arm
 *  • Electric-blue palette    →  #2563eb (primary) + #1d4ed8 (depth)
 *
 * ViewBox: 56 × 48  (slightly wider than tall, matching the mark proportions)
 */
export default function Logo({ size = 48 }: LogoProps) {
  // Maintain aspect ratio: width = size * (56/48)
  const w = Math.round(size * (56 / 48));
  const h = size;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 56 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VP Solutions logo mark"
    >
      {/* ── Dark-navy background ───────────────────────────────── */}
      <rect width="56" height="48" rx="11" fill="#0d1b2e" />

      {/* ── Pixel dots — top-left tech accent ─────────────────── */}
      <rect x="3.5" y="3.5" width="4.5" height="4.5" rx="1"   fill="#93c5fd" />
      <rect x="9.5" y="3.5" width="4.5" height="4.5" rx="1"   fill="#60a5fa" opacity="0.65" />
      <rect x="3.5" y="9.5" width="4.5" height="4.5" rx="1"   fill="#60a5fa" opacity="0.38" />

      {/* ── "V" letterform ────────────────────────────────────── */}
      {/*
          evenodd trick: outer downward triangle MINUS inner smaller
          downward triangle = two thick diagonal arm strokes = letter V.

          Outer  → (4, 14) (34, 14) (20, 43)
          Inner  → (12,14) (26, 14) (20, 37)   ← cuts the groove
      */}
      <path
        fillRule="evenodd"
        fill="#2563eb"
        d="M 4,14  L 34,14 L 20,43 Z
           M 12,14 L 26,14 L 20,37 Z"
      />

      {/* Diagonal "cut" highlight on V's top-left edge — modern bevel */}
      <line
        x1="4" y1="14" x2="10" y2="14"
        stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round"
        opacity="0.55"
      />

      {/* ── "P" letterform ────────────────────────────────────── */}
      {/*
          Compound path (evenodd):
            Outer = P stem (x 28-35, full height) + D-bowl (x 35-52, upper half)
            Inner = semicircular hole inside the bowl

          P's left stem deliberately overlaps V's right arm for the
          connected-monogram look (P drawn on top, deeper blue).
      */}
      <path
        fillRule="evenodd"
        fill="#1d4ed8"
        d="
          M 28,12 L 28,43 L 35,43 L 35,30
          Q 52,30 52,21
          Q 52,12 35,12
          Z
          M 35,18 Q 44,18 44,21 Q 44,24 35,24 Z
        "
      />

      {/* Subtle inner-bowl accent (lighter edge on P's circular opening) */}
      <path
        d="M 35,18 Q 44,18 44,21 Q 44,24 35,24"
        stroke="#3b82f6" strokeWidth="0.7" fill="none" opacity="0.5"
      />

      {/* ── Bottom accent line ─────────────────────────────────── */}
      <line
        x1="6" y1="45.5" x2="50" y2="45.5"
        stroke="#2563eb" strokeWidth="0.7" opacity="0.25"
      />
    </svg>
  );
}
