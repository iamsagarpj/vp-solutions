"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Clients", href: "#clients" },
  { label: "Careers", href: "#careers" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/96 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-[60px] sm:h-[66px] lg:h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <svg width="34" height="34" className="sm:w-[38px] sm:h-[38px] lg:w-[40px] lg:h-[40px]" viewBox="0 0 42 42" fill="none">
            <rect width="42" height="42" rx="9" fill="#1A3560" />
            <path
              d="M21 8L29.5 13.5V21C29.5 26.2 25.2 30.5 21 32.5C16.8 30.5 12.5 26.2 12.5 21V13.5L21 8Z"
              stroke="#E5B04A" strokeWidth="1.8" fill="none"
            />
            <path
              d="M17.5 20.5L20.5 23.5L25 17"
              stroke="#E5B04A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          <div>
            <strong className="block font-heading text-[15px] sm:text-[16px] lg:text-[17px] font-extrabold text-white tracking-wide">
              VP Solutions
            </strong>
            <span className="text-[9px] sm:text-[10px] tracking-[2px] text-gold-light uppercase">
              Est. 2005
            </span>
          </div>
        </Link>

        {/* Desktop links — lg+ */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[12px] xl:text-[13px] font-medium px-2.5 xl:px-3 py-2 rounded-md transition-colors",
                active === l.href.slice(1)
                  ? "text-white bg-gold/20"
                  : "text-white/80 hover:text-white hover:bg-gold/15"
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-gold text-white text-[12px] xl:text-[13px] font-bold px-4 xl:px-5 py-2 rounded-md hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile/Tablet toggle */}
        <button
          className="lg:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile/Tablet menu */}
      {open && (
        <div className="lg:hidden bg-navy-mid border-t border-white/10 px-4 sm:px-6 pb-4 flex flex-col gap-1 max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-[13px] px-3 py-2.5 rounded-lg transition-colors text-center font-medium",
                  active === l.href.slice(1)
                    ? "bg-gold/20 text-white"
                    : "text-white/80 hover:bg-gold/15 hover:text-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-gold text-white text-[14px] font-bold px-4 py-3 rounded-lg mt-2 text-center hover:bg-gold-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
