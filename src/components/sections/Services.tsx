"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sun,
  Users,
  BarChart2,
  Building2,
  Landmark,
  Sparkles,
  FileText,
  Map,
  Settings,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Users,
  BarChart2,
  Building2,
  Landmark,
  Sparkles,
  FileText,
  Map,
  Settings,
};

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          centered
          label="What We Do"
          title="Comprehensive Services Across Sectors"
          subtitle="From government utility operations to private facility management, VP Solutions offers end-to-end workforce and infrastructure solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] || Settings;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer relative"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gold group-hover:w-full transition-all duration-500" />
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 bg-gold text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase">
                    {svc.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-[15px] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {svc.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[12px] text-gold font-semibold mt-3 group-hover:gap-3 transition-all"
                  >
                    Get Quote →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
