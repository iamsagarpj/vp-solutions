import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071526] text-white/60 pt-16 pb-7 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 mb-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
                <rect width="42" height="42" rx="9" fill="#1A3560" />
                <path
                  d="M21 8L29.5 13.5V21C29.5 26.2 25.2 30.5 21 32.5C16.8 30.5 12.5 26.2 12.5 21V13.5L21 8Z"
                  stroke="#E5B04A"
                  strokeWidth="1.8"
                  fill="none"
                />
                <path
                  d="M17.5 20.5L20.5 23.5L25 17"
                  stroke="#E5B04A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <strong className="block font-heading text-[17px] font-extrabold text-white">
                  VP Solutions
                </strong>
                <span className="text-[10px] tracking-[2px] text-gold-light uppercase">
                  Est. 2005
                </span>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed text-white/40 max-w-[265px]">
              Reliable Workforce. Smart Infrastructure. Trusted Government Partner.
              Serving Maharashtra since 2005 across government and private sectors.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white/90 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                ["About Us", "#about"],
                ["Leadership", "#partners"],
                ["Our Journey", "#timeline"],
                ["Certifications", "#certifications"],
                ["Careers", "#careers"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    className="text-[13px] text-white/40 hover:text-gold-light transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white/90 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Manpower Supply",
                "Solar EPC",
                "Meter Reading",
                "Facility Management",
                "Municipal Projects",
                "Govt Outsourcing",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[13px] text-white/40 hover:text-gold-light transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white/90 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Our Projects", "#projects"],
                ["Clients", "#clients"],
                ["Gallery", "#gallery"],
                ["Testimonials", "#testimonials"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    className="text-[13px] text-white/40 hover:text-gold-light transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-5 bg-gold/[0.13] border border-gold/[0.27] text-gold-light px-4 py-2 rounded-md text-[12px] font-semibold hover:bg-gold hover:text-white transition-colors"
            >
              ↓ Company Brochure
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-white/[0.26]">
          <p>© 2025 VP Solutions. All rights reserved. Established 2005, Maharashtra, India.</p>
          <p>Reliable Workforce. Smart Infrastructure. Trusted Government Partner.</p>
        </div>
      </div>
    </footer>
  );
}
