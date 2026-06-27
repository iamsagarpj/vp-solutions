"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const navLinkKeys = [
  { key: "nav.home",     href: "#home"     },
  { key: "nav.about",    href: "#about"    },
  { key: "nav.services", href: "#services" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.partners", href: "#partners" },
  { key: "nav.clients",  href: "#clients"  },
  { key: "nav.careers",  href: "#careers"  },
  { key: "nav.gallery",  href: "#gallery"  },
];

export default function Navbar() {
  const [open,   setOpen]   = useState(false);
  const [active, setActive] = useState("home");
  const { tr } = useLanguage();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "rgba(13, 27, 46, 0.97)",
        borderColor: "rgba(37, 99, 235, 0.22)",
      }}
    >
      {/* ── Top accent line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #2563eb 30%, #60a5fa 60%, #2563eb 80%, transparent 100%)",
        }}
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-[60px] sm:h-[66px] lg:h-[70px] flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group">
          <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Logo size={40} />
          </div>
          <div>
            <strong
              className="block font-heading text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-extrabold tracking-wide leading-tight"
              style={{ color: "#ffffff" }}
            >
              VP Solutions
            </strong>
            <span
              className="text-[9px] sm:text-[10px] tracking-[2.5px] uppercase font-semibold"
              style={{ color: "#60a5fa" }}
            >
              Est. 2005
            </span>
          </div>
        </Link>

        {/* ── Desktop links (lg+) ── */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navLinkKeys.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[12px] xl:text-[13px] font-medium px-2.5 xl:px-3 py-2 rounded-md transition-all duration-200",
                active === l.href.slice(1)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              )}
              style={
                active === l.href.slice(1)
                  ? { background: "rgba(37,99,235,0.22)", color: "#93c5fd" }
                  : undefined
              }
            >
              {tr(l.key)}
            </a>
          ))}

          {/* Divider */}
          <div
            className="w-px h-5 mx-1.5 hidden xl:block"
            style={{ background: "rgba(37,99,235,0.35)" }}
          />

          <a
            href="#contact"
            className="relative overflow-hidden text-white text-[12px] xl:text-[13px] font-bold px-4 xl:px-5 py-2 rounded-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              boxShadow: "0 0 0 1px rgba(96,165,250,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(37,99,235,0.5), 0 0 0 1px rgba(96,165,250,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 0 1px rgba(96,165,250,0.25)";
            }}
          >
            {tr("nav.contact")}
          </a>

          {/* Language switcher */}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </div>

        {/* ── Mobile/Tablet right side ── */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: "#93c5fd" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.18)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile / Tablet dropdown ── */}
      {open && (
        <div
          className="lg:hidden border-t px-4 sm:px-6 pb-4 pt-3"
          style={{
            background: "rgba(10, 18, 38, 0.98)",
            borderColor: "rgba(37,99,235,0.2)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-3">
            {navLinkKeys.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[13px] px-3 py-2.5 rounded-lg transition-all duration-200 text-center font-medium"
                style={
                  active === l.href.slice(1)
                    ? { background: "rgba(37,99,235,0.25)", color: "#93c5fd" }
                    : { color: "rgba(255,255,255,0.75)" }
                }
              >
                {tr(l.key)}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-white text-[14px] font-bold px-4 py-3 rounded-lg text-center transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
            }}
          >
            {tr("nav.contact")}
          </a>
        </div>
      )}
    </nav>
  );
}
