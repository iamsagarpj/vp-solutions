"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import { Project } from "@/types";

type Category = "all" | "govt" | "private" | "solar" | "municipal";

const filters: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Government", value: "govt" },
  { label: "Private Sector", value: "private" },
  { label: "Solar", value: "solar" },
  { label: "Municipal", value: "municipal" },
];

export default function Projects() {
  const { tr } = useLanguage();
  const [active, setActive] = useState<Category>("all");
  const filtered = projects.filter(
    (p: Project) => active === "all" || p.category === active
  );

  return (
    <section id="projects" className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          label={tr("section.projects.label")}
          title={tr("section.projects.title")}
          subtitle="Delivering complex projects for government bodies and private clients with precision and scale."
        />

        {/* Filter pills — horizontally scrollable on mobile */}
        <div className="flex gap-2 sm:gap-2.5 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold border transition-all whitespace-nowrap flex-shrink-0 ${
                active === f.value
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-slate-500 border-slate-200 hover:bg-navy hover:text-white hover:border-navy"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-48 sm:h-52 xl:h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase">
                    {p.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-navy/75 text-white/80 text-[10px] px-2.5 py-1 rounded backdrop-blur-sm">
                    {p.sector}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-heading font-bold text-navy text-[14px] sm:text-[15px] mb-2 sm:mb-2.5">
                    {p.title}
                  </h3>
                  <div className="flex gap-3 sm:gap-4 mb-2 sm:mb-2.5 flex-wrap">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-slate-400">
                      <MapPin size={11} />{p.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-slate-400">
                      <Calendar size={11} />{p.duration}
                    </span>
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
