"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { timelineItems } from "@/data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="bg-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          centered
          label="Our Journey"
          title="Two Decades of Growth"
          subtitle="From a small manpower company to Maharashtra's trusted multi-service partner."
        />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-10">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-center gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-32px)] bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-navy text-[16px] mb-1.5">
                      {item.event}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-navy border-4 border-white shadow-md items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[10px] font-extrabold text-gold-light">
                      {item.year.slice(2)}
                    </span>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-32px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
