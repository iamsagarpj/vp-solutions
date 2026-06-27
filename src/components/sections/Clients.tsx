"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const clients = [
  { name: "MSCB", full: "Maharashtra State Co-operative Bank" },
  { name: "MSEDCL", full: "Maharashtra State Electricity Distribution" },
  { name: "Smart City", full: "Aurangabad Smart City Mission" },
  { name: "NMMC", full: "Navi Mumbai Municipal Corporation" },
  { name: "AMC", full: "Ahmednagar Municipal Corporation" },
  { name: "NMC", full: "Nashik Municipal Corporation" },
  { name: "MAHAGENCO", full: "Maharashtra State Power Generation" },
  { name: "Nagar Palika", full: "District Municipal Bodies" },
  { name: "PWD", full: "Public Works Department MH" },
  { name: "IT Parks", full: "Private IT Campuses, Pune" },
];

export default function Clients() {
  return (
    <section id="clients" className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          centered
          label="Our Clients"
          title="Trusted by Government & Private Leaders"
          subtitle="From electricity boards to Smart City missions — VP Solutions is the partner of choice across Maharashtra."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl p-5 flex flex-col items-center text-center border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-3 group-hover:bg-gold/10 transition-colors">
                <span className="font-heading text-[11px] font-extrabold text-navy group-hover:text-gold transition-colors leading-tight text-center">
                  {c.name}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 leading-tight">{c.full}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
