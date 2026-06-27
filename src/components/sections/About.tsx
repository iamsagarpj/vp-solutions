"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  { icon: ShieldCheck, label: "Govt-Registered", sub: "ESIC, PF, Labour Laws" },
  { icon: Users, label: "1000+ Employees", sub: "Verified & Trained" },
  { icon: Zap, label: "72-Hour Deploy", sub: "Rapid Mobilization" },
  { icon: Award, label: "ISO-Aligned QMS", sub: "Quality Certified Ops" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left – images */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl overflow-hidden h-56 relative shadow-xl">
              <Image
                src="https://picsum.photos/seed/aboutteam/800/230"
                alt="VP Solutions team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            <div className="rounded-xl overflow-hidden h-44 relative shadow-lg">
              <Image
                src="https://picsum.photos/seed/aboutsite1/400/175"
                alt="Field operations"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-44 relative shadow-lg">
              <Image
                src="https://picsum.photos/seed/aboutsite2/400/175"
                alt="Solar installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-5 -right-5 z-10 bg-navy rounded-2xl px-5 py-4 shadow-xl">
            <strong className="block font-heading text-2xl font-extrabold text-gold-light">
              20+
            </strong>
            <span className="text-[12px] text-white/60">Years of Proven Experience</span>
          </div>
        </motion.div>

        {/* Right – text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionHeader
            label="Who We Are"
            title="Maharashtra's Trusted Workforce & Infrastructure Partner"
            subtitle="Founded in 2005, VP Solutions has grown from a local manpower contractor into one of Maharashtra's most trusted multi-service companies — delivering government-grade reliability across electricity boards, municipalities, and private enterprises."
          />

          <p className="text-[14px] text-slate-500 leading-relaxed mb-7">
            With a 1000+ strong verified workforce, real-time GPS field monitoring, and deep
            expertise in government procurement norms, we handle what others can't — complex,
            high-volume, compliance-heavy operations across the state.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100"
              >
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <strong className="block text-[13.5px] font-bold text-navy font-heading">
                    {label}
                  </strong>
                  <span className="text-[12px] text-slate-400">{sub}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-gold transition-colors"
          >
            Talk to Our Team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
