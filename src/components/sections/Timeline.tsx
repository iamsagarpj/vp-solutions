"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { timelineItems } from "@/data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          label="Our Journey"
          title="Two Decades of Growth"
          subtitle="From a small manpower company to Maharashtra's trusted multi-service partner."
        />

        <div className="relative max-w-4xl xl:max-w-5xl mx-auto">
          {/* Vertical center line — md+ only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

          {/* Mobile left line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-slate-200 md:hidden" />

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-center md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile layout: left dot + card */}
                  <div className="flex items-start gap-4 sm:gap-5 md:hidden w-full pl-12 sm:pl-14">
                    {/* Mobile dot */}
                    <div className="absolute left-3 sm:left-4 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-navy border-2 border-white shadow-md flex items-center justify-center flex-shrink-0 z-10 top-3">
                      <span className="text-[7px] sm:text-[8px] font-extrabold text-gold-light">
                        {item.year.slice(2)}
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm w-full">
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase text-gold mb-1 block">
                        {item.year}
                      </span>
                      <h3 className="font-heading font-bold text-navy text-[14px] sm:text-[16px] mb-1.5">
                        {item.event}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  {/* Desktop layout: alternating cards */}
                  <div
                    className={`hidden md:block w-[calc(50%-36px)] bg-slate-50 rounded-2xl p-5 lg:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${
                      isLeft ? "mr-9" : "ml-9"
                    }`}
                  >
                    <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-navy text-[15px] lg:text-[16px] mb-1.5">
                      {item.event}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{item.detail}</p>
                  </div>

                  {/* Desktop center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-navy border-4 border-white shadow-md items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[10px] font-extrabold text-gold-light">
                      {item.year.slice(2)}
                    </span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-36px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
