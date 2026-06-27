"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Building2, Zap } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Users, label: "1000+ Workforce" },
  { icon: Building2, label: "50+ Govt. Projects" },
  { icon: Zap, label: "MSCB Empanelled" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[70px] overflow-hidden bg-gradient-to-br from-[#EAF2FC] via-[#F5F9FF] to-[#EBF5F0]"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[650px] h-[650px] rounded-full bg-sky-400/10" />
        <div className="absolute -bottom-24 -left-16 w-[500px] h-[500px] rounded-full bg-emerald-400/[0.08]" />
        <div className="absolute top-1/3 right-[8%] w-px h-56 bg-gradient-to-b from-transparent via-gold/35 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-navy/[0.08] border border-navy/[0.12] px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[12px] font-semibold text-navy-mid tracking-[1.2px] uppercase">
              Trusted Since 2005 — 20 Years of Excellence
            </span>
          </div>

          <h1 className="font-heading text-[48px] font-extrabold text-navy leading-[1.12] mb-5">
            Empowering{" "}
            <span className="text-[#1B6CA8]">Government</span> &{" "}
            <span className="text-gold">Corporate</span>{" "}
            Infrastructure with Skilled Workforce
          </h1>

          <p className="text-base text-slate-500 leading-relaxed mb-9 max-w-xl">
            VP Solutions delivers end-to-end manpower, solar EPC, facility management,
            and smart infrastructure services across government departments, electricity
            boards, municipalities, and private enterprises.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#services"
              className="bg-navy text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-navy-light transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="#projects"
              className="bg-gold text-white font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-gold-light transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Our Projects
            </a>
            <a
              href="#contact"
              className="border border-navy/25 text-navy font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-navy hover:text-white transition-all"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex gap-5 mt-9 flex-wrap">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-slate-500 text-[13px] font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right – Photo grid */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Floating badge top */}
          <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
              <Zap size={16} className="text-gold" />
            </div>
            <div>
              <strong className="block text-[13px] font-extrabold text-navy font-heading">
                MSCB Certified Partner
              </strong>
              <span className="text-[11px] text-slate-400">Active Since 2013</span>
            </div>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl overflow-hidden h-56 relative shadow-xl">
              <Image
                src="https://picsum.photos/seed/solarwork/800/230"
                alt="Solar EPC field operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              <span className="absolute bottom-3 left-4 text-white text-[11px] font-bold tracking-widest uppercase opacity-90">
                Solar EPC · Field Operations
              </span>
            </div>
            <div className="rounded-xl overflow-hidden h-40 relative shadow-lg">
              <Image
                src="https://picsum.photos/seed/meterfield/400/155"
                alt="Meter reading"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              <span className="absolute bottom-2.5 left-3 text-white text-[11px] font-bold tracking-widest uppercase opacity-90">
                Meter Reading
              </span>
            </div>
            <div className="rounded-xl overflow-hidden h-40 relative shadow-lg">
              <Image
                src="https://picsum.photos/seed/govtinfra/400/155"
                alt="Government projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              <span className="absolute bottom-2.5 left-3 text-white text-[11px] font-bold tracking-widest uppercase opacity-90">
                Govt. Projects
              </span>
            </div>
          </div>

          {/* Floating badge bottom */}
          <div className="absolute -bottom-4 -left-4 z-10 bg-navy rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Users size={14} className="text-gold-light" />
            </div>
            <div>
              <strong className="block text-[13px] font-extrabold text-white font-heading">
                1000+ Active Staff
              </strong>
              <span className="text-[10px] text-white/45">Pan Maharashtra</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
