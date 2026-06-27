"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "@/data/translations";

export default function LanguageSwitcher() {
  const { lang, setLang, tr } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-200"
        style={{
          color: "#93c5fd",
          background: open ? "rgba(37,99,235,0.18)" : "transparent",
          border: "1px solid rgba(37,99,235,0.3)",
        }}
        aria-label={tr("lang.select")}
        title={tr("lang.select")}
      >
        <Globe size={14} strokeWidth={2} />
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-[200] rounded-xl overflow-hidden shadow-2xl min-w-[148px]"
          style={{
            background: "rgba(10, 18, 38, 0.98)",
            border: "1px solid rgba(37,99,235,0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="px-3 py-2 text-[9px] font-bold tracking-[2px] uppercase"
            style={{ color: "rgba(148,163,184,0.6)" }}
          >
            {tr("lang.select")}
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className="w-full flex items-center justify-between px-3 py-2.5 text-left transition-all duration-150"
              style={{
                background: lang === l.code ? "rgba(37,99,235,0.22)" : "transparent",
                color: lang === l.code ? "#93c5fd" : "rgba(255,255,255,0.75)",
              }}
              onMouseEnter={(e) =>
                lang !== l.code && ((e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.1)")
              }
              onMouseLeave={(e) =>
                lang !== l.code && ((e.currentTarget as HTMLElement).style.background = "transparent")
              }
            >
              <span className="text-[14px]">{l.label}</span>
              <span className="text-[10px] opacity-50 ml-2">{l.englishLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
