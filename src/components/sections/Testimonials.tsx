"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const { tr } = useLanguage();
  return (
    <section id="testimonials" className="bg-navy py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          light
          label={tr("section.testimonials.label")}
          title={tr("section.testimonials.title")}
          subtitle="Hear directly from government officers and private sector leaders who rely on VP Solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-light/60 border border-white/[0.07] rounded-2xl p-5 sm:p-7 hover:border-gold/30 transition-all duration-300"
            >
              <div className="text-gold/40 font-heading text-4xl sm:text-5xl font-extrabold leading-none mb-3 sm:mb-4 select-none">
                &ldquo;
              </div>
              <p className="text-[13px] sm:text-[14px] text-white/70 leading-relaxed mb-5 sm:mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-white/[0.08]">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-[11px] sm:text-[12px] font-extrabold text-gold-light">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <strong className="block text-[13px] sm:text-[13.5px] font-bold text-white font-heading">
                    {t.name}
                  </strong>
                  <span className="text-[11px] sm:text-[12px] text-white/40">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
