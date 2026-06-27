"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, BadgeCheck, MapPin, BarChart3, Zap, Lock, UserCheck, Cpu, Star,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { whyItems } from "@/data/whyus";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, BadgeCheck, MapPin, BarChart3, Zap, Lock, UserCheck, Cpu, Star,
};

export default function WhyUs() {
  return (
    <section id="whyus" className="bg-navy py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          light
          label="Why VP Solutions"
          title="What Sets Us Apart"
          subtitle="Built for government-scale operations. Trusted by private sector leaders."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
          {whyItems.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-navy-light/60 border border-white/[0.07] rounded-2xl p-5 sm:p-6 hover:bg-navy-light hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gold/25 transition-colors">
                  <Icon size={19} className="text-gold-light" />
                </div>
                <h3 className="font-heading font-bold text-white text-[14px] sm:text-[15px] xl:text-[16px] mb-2">
                  {item.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
