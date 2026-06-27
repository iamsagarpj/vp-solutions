"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

const px = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const galleryImages = [
  { src: px(11645008, 1200), alt: "Solar panel installation site",  wide: true },
  { src: px(11924298),       alt: "Electricity meter reading team" },
  { src: px(7461108),        alt: "Construction field operations" },
  { src: px(9462336),        alt: "Municipal cleaning crew" },
  { src: px(9462743),        alt: "Professional housekeeping staff" },
  { src: px(6070743, 1200),  alt: "Government infrastructure project", wide: true },
  { src: px(5802821),        alt: "Field survey team" },
  { src: px(8961034),        alt: "Worker safety training" },
];

export default function Gallery() {
  const { tr } = useLanguage();
  return (
    <section
      id="gallery"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          label={tr("section.gallery.label")}
          title={tr("section.gallery.title")}
          subtitle="A glimpse of VP Solutions' operations across Maharashtra."
        />

        {/* Mobile: simple 2-col uniform grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:hidden">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-xl overflow-hidden h-36 group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/45 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[10px] font-bold tracking-wide uppercase">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet: 3-col grid with first image spanning 2 cols */}
        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-3 auto-rows-[160px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                img.wide ? "col-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/45 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[11px] font-bold tracking-widest uppercase px-3 text-center">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop / Big screen: 4-col masonry-style grid */}
        <div className="hidden lg:grid grid-cols-4 gap-3 xl:gap-4 auto-rows-[180px] xl:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                img.wide ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/45 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[12px] font-bold tracking-widest uppercase px-3 text-center">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
