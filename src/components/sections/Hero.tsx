"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Building2, Zap } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Users, label: "1000+ Workforce" },
  { icon: Building2, label: "50+ Govt. Projects" },
  { icon: Zap, label: "MSEB Empanelled" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[60px] sm:pt-[66px] lg:pt-[70px] overflow-hidden bg-gradient-to-br from-[#EAF2FC] via-[#F5F9FF] to-[#EBF5F0]"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] rounded-full bg-sky-400/10" />
        <div className="absolute -bottom-24 -left-16 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-emerald-400/[0.08]" />
        <div className="absolute top-1/3 right-[8%] w-px h-40 lg:h-56 bg-gradient-to-b from-transparent via-gold/35 to-transparent hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 pb-16 sm:py-16 lg:py-20 xl:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 xl:gap-24 items-center w-full">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-navy/[0.08] border border-navy/[0.12] px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-semibold text-navy-mid tracking-[1.2px] uppercase leading-tight">
              Trusted Since 2005 — 20 Years of Excellence
            </span>
          </div>

          <h1 className="font-heading text-[30px] sm:text-[38px] lg:text-[46px] xl:text-[52px] 2xl:text-[58px] font-extrabold text-navy leading-[1.1] mb-4 sm:mb-5">
            Empowering{" "}
            <span className="text-[#1B6CA8]">Government</span> &{" "}
            <span className="text-gold">Corporate</span>{" "}
            Infrastructure with Skilled Workforce
          </h1>

          <p className="text-sm sm:text-base xl:text-[17px] text-slate-500 leading-relaxed mb-7 sm:mb-9 max-w-xl">
            VP Solutions delivers end-to-end manpower, solar EPC, facility management,
            and smart infrastructure services across government departments, electricity
            boards, municipalities, and private enterprises.
          </p>

          <div className="flex gap-2.5 sm:gap-3 flex-wrap">
            <a
              href="#services"
              className="bg-navy text-white font-bold text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg hover:bg-navy-light transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="#projects"
              className="bg-gold text-white font-bold text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg hover:bg-gold-light transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Our Projects
            </a>
            <a
              href="#contact"
              className="border border-navy/25 text-navy font-semibold text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg hover:bg-navy hover:text-white transition-all"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex gap-4 sm:gap-5 mt-7 sm:mt-9 flex-wrap">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-slate-500 text-[12px] sm:text-[13px] font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right – Photo grid (all breakpoints) */}
        <motion.div
          className="relative mt-2 sm:mt-0 mx-1 sm:mx-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Floating badge top */}
          <div className="absolute -top-3 right-0 sm:-top-4 sm:-right-4 z-10 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl flex items-center gap-2 sm:gap-3">
            <div className="w-7 sm:w-9 h-7 sm:h-9 rounded-lg sm:rounded-xl bg-gold/10 flex items-center justify-center">
              <Zap size={13} className="text-gold" />
            </div>
            <div>
              <strong className="block text-[11px] sm:text-[13px] font-extrabold text-navy font-heading">
                MSEB Certified Partner
              </strong>
              <span className="text-[9px] sm:text-[11px] text-slate-400">Active Since 2013</span>
            </div>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 pt-8 sm:pt-4 lg:pt-0">
            <div className="col-span-2 rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-52 lg:h-56 xl:h-60 relative shadow-xl">
              <Image
                src="https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Solar EPC field operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              <span className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-white text-[9px] sm:text-[11px] font-bold tracking-widest uppercase opacity-90">
                Solar EPC · Field Operations
              </span>
            </div>
            <div className="rounded-xl overflow-hidden h-28 sm:h-36 lg:h-40 xl:h-44 relative shadow-lg">
              <Image
                src="https://images.pexels.com/photos/11924298/pexels-photo-11924298.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Meter reading"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              <span className="absolute bottom-2 left-2.5 sm:bottom-2.5 sm:left-3 text-white text-[9px] sm:text-[11px] font-bold tracking-widest uppercase opacity-90">
                Meter Reading
              </span>
            </div>
            <div className="rounded-xl overflow-hidden h-28 sm:h-36 lg:h-40 xl:h-44 relative shadow-lg">
              <Image
                src="https://images.pexels.com/photos/6070743/pexels-photo-6070743.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Government projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              <span className="absolute bottom-2 left-2.5 sm:bottom-2.5 sm:left-3 text-white text-[9px] sm:text-[11px] font-bold tracking-widest uppercase opacity-90">
                Govt. Projects
              </span>
            </div>
          </div>

          {/* Floating badge bottom */}
          <div className="absolute -bottom-3 left-0 sm:-bottom-4 sm:-left-4 z-10 bg-navy rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl flex items-center gap-2 sm:gap-2.5">
            <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Users size={11} className="text-gold-light" />
            </div>
            <div>
              <strong className="block text-[11px] sm:text-[13px] font-extrabold text-white font-heading">
                1000+ Active Staff
              </strong>
              <span className="text-[9px] sm:text-[10px] text-white/45">Pan Maharashtra</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
