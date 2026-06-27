import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#071526] text-white/60 pt-12 sm:pt-14 lg:pt-16 xl:pt-20 pb-6 sm:pb-7 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-screen-2xl mx-auto">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-11 mb-10 sm:mb-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 mb-4">
              <Logo size={38} />
              <div>
                <strong className="block font-heading text-[16px] sm:text-[17px] font-extrabold text-white">
                  VP Solutions
                </strong>
                <span className="text-[9px] sm:text-[10px] tracking-[2px] text-gold-light uppercase">
                  Est. 2005
                </span>
              </div>
            </Link>
            <p className="text-[12px] sm:text-[13px] leading-relaxed text-white/40 max-w-[280px]">
              Reliable Workforce. Smart Infrastructure. Trusted Government Partner.
              Serving Maharashtra since 2005 across government and private sectors.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase text-white/90 mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                ["About Us",       "#about"],
                ["Leadership",     "#partners"],
                ["Our Journey",    "#timeline"],
                ["Certifications", "#certifications"],
                ["Careers",        "#careers"],
                ["Contact",        "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    className="text-[12px] sm:text-[13px] text-white/40 hover:text-gold-light transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase text-white/90 mb-3 sm:mb-4">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
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
                    className="text-[12px] sm:text-[13px] text-white/40 hover:text-gold-light transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase text-white/90 mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                ["Our Projects",  "#projects"],
                ["Clients",       "#clients"],
                ["Gallery",       "#gallery"],
                ["Testimonials",  "#testimonials"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    className="text-[12px] sm:text-[13px] text-white/40 hover:text-gold-light transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 sm:mt-5 bg-gold/[0.13] border border-gold/[0.27] text-gold-light px-3.5 sm:px-4 py-2 rounded-md text-[11px] sm:text-[12px] font-semibold hover:bg-gold hover:text-white transition-colors"
            >
              ↓ Company Brochure
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-4 sm:pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-white/[0.26] text-center sm:text-left">
          <p>© 2026 VP Solutions. All rights reserved. Established 2005, Maharashtra, India.</p>
          <p className="hidden sm:block">Reliable Workforce. Smart Infrastructure. Trusted Government Partner.</p>
        </div>
      </div>
    </footer>
  );
}
