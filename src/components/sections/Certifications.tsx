"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, BadgeCheck, Landmark } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const certs = [
  { icon: ShieldCheck, title: "ISO 9001:2015", sub: "Quality Management System" },
  { icon: FileCheck,   title: "ESIC Registered", sub: "Employees State Insurance" },
  { icon: BadgeCheck,  title: "PF Compliant", sub: "Provident Fund Registered" },
  { icon: Landmark,    title: "Govt. Empanelled", sub: "Maharashtra State Bodies" },
  { icon: Award,       title: "Labour Law Certified", sub: "Maharashtra Shops & Estb. Act" },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          label="Compliance & Certifications"
          title="Fully Compliant. Fully Trusted."
          subtitle="VP Solutions operates with complete statutory compliance — built for government-grade accountability."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gold/20 transition-colors">
                <c.icon size={22} className="text-gold" />
              </div>
              <strong className="font-heading font-bold text-navy text-[13px] sm:text-[14px] mb-1">
                {c.title}
              </strong>
              <span className="text-[11px] sm:text-[12px] text-slate-400 leading-snug">
                {c.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
