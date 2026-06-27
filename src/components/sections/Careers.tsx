"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Upload } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { jobs } from "@/data/jobs";

export default function Careers() {
  return (
    <section
      id="careers"
      className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          label="Careers"
          title="Join the VP Solutions Team"
          subtitle="We're always looking for disciplined, motivated individuals to grow with us across Maharashtra."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Job list */}
          <div className="space-y-3 sm:space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                  <Briefcase size={15} className="text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-navy text-[13.5px] sm:text-[15px] mb-1">
                    {job.title}
                  </h3>
                  <div className="flex gap-3 sm:gap-4 flex-wrap">
                    <span className="text-[11px] sm:text-[12px] text-slate-400">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] sm:text-[12px] text-slate-400">
                      <MapPin size={10} />
                      {job.location}
                    </span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="text-[12px] font-bold text-gold hover:text-navy transition-colors flex-shrink-0 self-center"
                >
                  Apply →
                </a>
              </motion.div>
            ))}
          </div>

          {/* Upload / open application box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200"
          >
            <h3 className="font-heading text-[16px] sm:text-[18px] font-bold text-navy mb-2">
              Don&apos;t See Your Role?
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-slate-500 mb-5 sm:mb-6 leading-relaxed">
              We&apos;re always growing. Send us your resume and we&apos;ll reach out when a
              suitable position opens.
            </p>

            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer hover:border-gold/40 transition-colors group mb-4 sm:mb-5">
              <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                <Upload size={19} className="text-gold" />
              </div>
              <p className="text-[13px] sm:text-[14px] font-semibold text-navy mb-1">
                Upload Your Resume
              </p>
              <p className="text-[11px] sm:text-[12px] text-slate-400">PDF or DOC, max 5 MB</p>
            </div>

            <a
              href="#contact"
              className="block w-full bg-navy text-white font-bold text-[13px] sm:text-[14px] py-3 sm:py-3.5 rounded-lg hover:bg-gold transition-colors text-center"
            >
              Send Application
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
