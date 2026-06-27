"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const contactItems = [
  { icon: MapPin,  label: "Registered Office", value: "Shop No 4, Kapila Park, Maharashtra 415001" },
  { icon: Phone,   label: "Phone / WhatsApp",  value: "+91 98765 43210" },
  { icon: Mail,    label: "Email",              value: "info@vpsolutions.in" },
  { icon: Clock,   label: "Office Hours",       value: "Mon – Sat: 9:00 AM – 6:30 PM" },
];

const serviceOptions = [
  "Manpower Supply",
  "Meter Reading / Survey",
  "Solar Installation & EPC",
  "Facility Management",
  "Housekeeping & Cleaning",
  "Municipal Project",
  "Government Outsourcing",
  "Technical Support Staff",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          label="Get In Touch"
          title="Let's Discuss Your Project"
          subtitle="Government tender, private facility requirement, or a large-scale manpower contract — our team responds within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20">

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-[16px] sm:text-[18px] font-bold text-navy mb-4 sm:mb-5">
              Reach Us Directly
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-gold" />
                  </div>
                  <div>
                    <strong className="block text-[12px] sm:text-[13px] font-bold text-navy">
                      {label}
                    </strong>
                    <span className="text-[12px] sm:text-[13px] text-slate-500">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm h-48 sm:h-56 lg:h-64">
              <iframe
                title="VP Solutions Office Location"
                src="https://www.google.com/maps?q=Shop+No+4,+Kapila+Park,+Satara,+Maharashtra+415001&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-200"
          >
            <h3 className="font-heading text-[16px] sm:text-[18px] font-bold text-navy mb-5 sm:mb-6">
              Quick Inquiry
            </h3>

            {/* Name + Org — stack on mobile, side-by-side sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Organisation
                </label>
                <input
                  type="text"
                  placeholder="Company / Dept."
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
            </div>

            {/* Mobile + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Mobile
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@org.in"
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
            </div>

            {/* Service */}
            <div className="mb-3 sm:mb-4">
              <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                Service Required
              </label>
              <select className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold bg-white">
                <option>Select a service...</option>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                Message / Project Brief
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your requirement, location, and scale of work..."
                className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy text-white font-bold py-3 sm:py-3.5 rounded-lg hover:bg-gold transition-colors text-[13px] sm:text-[14px]"
            >
              {submitted
                ? "✓ Inquiry Submitted! We'll contact you within 24 hours."
                : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
