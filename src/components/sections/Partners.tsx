"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { partners } from "@/data/partners";

export default function Partners() {
  const { tr } = useLanguage();
  return (
    <section id="partners" className="bg-slate-50 py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          label={tr("section.partners.label")}
          title={tr("section.partners.title")}
          subtitle="Two decades of growth driven by experienced leadership committed to operational excellence across government and private sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              {/* Cover */}
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/72 to-navy/10" />
                <div className="absolute bottom-[-28px] sm:bottom-[-30px] left-5 sm:left-6 w-14 sm:w-16 h-14 sm:h-16 rounded-[12px] sm:rounded-[14px] bg-white shadow-xl flex items-center justify-center border-2 border-slate-100">
                  <span className="font-heading text-base sm:text-lg font-extrabold text-navy">
                    {p.initials}
                  </span>
                </div>
                <span className="absolute top-3 right-3 bg-gold text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  {p.experience}
                </span>
              </div>

              {/* Body */}
              <div className="pt-10 sm:pt-12 px-5 sm:px-7 pb-5 sm:pb-7">
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-navy mb-1">
                  {p.name}
                </h3>
                <p className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[1.5px] uppercase text-gold mb-3 sm:mb-4">
                  {p.role}
                </p>
                <p className="text-[13px] sm:text-[14px] text-slate-500 leading-relaxed mb-3 sm:mb-4">
                  {p.bio}
                </p>
                <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] sm:text-[11.5px] font-semibold bg-slate-100 text-navy-mid px-2.5 sm:px-3 py-1 rounded-full border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] text-slate-500">
                    <Mail size={12} className="text-gold flex-shrink-0" />{p.email}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] text-slate-500">
                    <Phone size={12} className="text-gold flex-shrink-0" />{p.phone}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] text-slate-500">
                    <MapPin size={12} className="text-gold flex-shrink-0" />{p.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
