interface LogoProps {
  size?: number;
}

/**
 * VP Solutions pictorial mark.
 *
 * Design language:
 *  • Gold sun + rays  →  Solar EPC / renewable energy
 *  • Rooftop solar panels  →  On-site solar installation
 *  • Building with windows  →  Facility management / infrastructure
 *  • Three person silhouettes  →  Manpower supply / workforce
 *  • Navy palette  →  Government-grade trust
 */
export default function Logo({ size = 44 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VP Solutions logo"
    >
      {/* ── Background ─────────────────────────────────────────── */}
      <rect width="44" height="44" rx="10" fill="#0B1F3A" />

      {/* ── Sun ────────────────────────────────────────────────── */}
      <circle cx="22" cy="13.5" r="5.5" fill="#E5B04A" />

      {/* Sun rays — 5 rays covering upper semicircle */}
      <g stroke="#E5B04A" strokeWidth="1.8" strokeLinecap="round">
        {/* top */}
        <line x1="22" y1="5" x2="22" y2="7" />
        {/* upper-right */}
        <line x1="27.4" y1="8.1" x2="26.1" y2="9.4" />
        {/* right */}
        <line x1="29.5" y1="13.5" x2="27.5" y2="13.5" />
        {/* upper-left */}
        <line x1="16.6" y1="8.1" x2="17.9" y2="9.4" />
        {/* left */}
        <line x1="14.5" y1="13.5" x2="16.5" y2="13.5" />
      </g>

      {/* ── Rooftop solar panels ────────────────────────────────── */}
      {/* Left panel */}
      <rect x="13.5" y="21.5" width="7.5" height="4" rx="0.7" fill="#E5B04A" opacity="0.9" />
      <line x1="17.25" y1="21.5" x2="17.25" y2="25.5" stroke="#0B1F3A" strokeWidth="0.7" />
      <line x1="13.5"  y1="23.5" x2="21"   y2="23.5" stroke="#0B1F3A" strokeWidth="0.7" />

      {/* Right panel */}
      <rect x="23" y="21.5" width="7.5" height="4" rx="0.7" fill="#E5B04A" opacity="0.9" />
      <line x1="26.75" y1="21.5" x2="26.75" y2="25.5" stroke="#0B1F3A" strokeWidth="0.7" />
      <line x1="23"    y1="23.5" x2="30.5"  y2="23.5" stroke="#0B1F3A" strokeWidth="0.7" />

      {/* Panel gap highlight (thin gold divider between panels) */}
      <line x1="21.5" y1="21.5" x2="22.5" y2="21.5" stroke="#E5B04A" strokeWidth="0.5" opacity="0.4" />

      {/* ── Building body ───────────────────────────────────────── */}
      <rect
        x="13.5" y="25.5"
        width="17" height="12"
        rx="1"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1.2"
      />

      {/* Windows — upper row */}
      <rect x="15.5" y="27.5" width="5"  height="3.5" rx="0.5" fill="#E5B04A" opacity="0.75" />
      <rect x="23.5" y="27.5" width="5"  height="3.5" rx="0.5" fill="#E5B04A" opacity="0.75" />

      {/* Door */}
      <rect x="19.5" y="32" width="5" height="5.5" rx="0.8" fill="white" opacity="0.32" />
      {/* Door knob */}
      <circle cx="23.5" cy="34.8" r="0.6" fill="white" opacity="0.5" />

      {/* ── Workforce — three person silhouettes ────────────────── */}
      {/* Person 1 */}
      <circle cx="13" cy="40.2" r="1.5" fill="#E5B04A" opacity="0.85" />
      <path d="M10.5 43 Q13 41 15.5 43" stroke="#E5B04A" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.85" />

      {/* Person 2 (center) */}
      <circle cx="22" cy="40.2" r="1.5" fill="#E5B04A" />
      <path d="M19.5 43 Q22 41 24.5 43" stroke="#E5B04A" strokeWidth="1.1" fill="none" strokeLinecap="round" />

      {/* Person 3 */}
      <circle cx="31" cy="40.2" r="1.5" fill="#E5B04A" opacity="0.85" />
      <path d="M28.5 43 Q31 41 33.5 43" stroke="#E5B04A" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.85" />

      {/* Subtle ground line */}
      <line x1="8" y1="43.5" x2="36" y2="43.5" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
    </svg>
  );
}
