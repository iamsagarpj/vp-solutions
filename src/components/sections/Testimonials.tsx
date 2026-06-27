"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          centered
          light
          label="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Hear directly from government officers and private sector leaders who rely on VP Solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-light/60 border border-white/[0.07] rounded-2xl p-7 hover:border-gold/30 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-gold/40 font-heading text-5xl font-extrabold leading-none mb-4 select-none">
                &ldquo;
              </div>
              <p className="text-[14px] text-white/70 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-[12px] font-extrabold text-gold-light">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <strong className="block text-[13.5px] font-bold text-white font-heading">
                    {t.name}
                  </strong>
                  <span className="text-[12px] text-white/40">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
