"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const galleryImages = [
  { src: "https://picsum.photos/seed/g1vp/600/400", alt: "Solar installation site", span: "col-span-2 row-span-2" },
  { src: "https://picsum.photos/seed/g2vp/400/300", alt: "Meter reading team" },
  { src: "https://picsum.photos/seed/g3vp/400/300", alt: "Field operations" },
  { src: "https://picsum.photos/seed/g4vp/400/300", alt: "Municipal cleaning" },
  { src: "https://picsum.photos/seed/g5vp/400/300", alt: "Housekeeping staff" },
  { src: "https://picsum.photos/seed/g6vp/600/400", alt: "Government project", span: "col-span-2" },
  { src: "https://picsum.photos/seed/g7vp/400/300", alt: "Survey team" },
  { src: "https://picsum.photos/seed/g8vp/400/300", alt: "Safety training" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          centered
          label="Gallery"
          title="Our Work in Action"
          subtitle="A glimpse of VP Solutions' operations across Maharashtra."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span ?? ""}`}
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
