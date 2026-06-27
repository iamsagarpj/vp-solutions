"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const contactItems = [
  { icon: MapPin, label: "Registered Office", value: "VP Solutions, Maharashtra, India" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "info@vpsolutions.in" },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat: 9:00 AM – 6:30 PM" },
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
    <section id="contact" className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          centered
          label="Get In Touch"
          title="Let's Discuss Your Project"
          subtitle="Government tender, private facility requirement, or a large-scale manpower contract — our team responds within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h3 className="font-heading text-[18px] font-bold text-navy mb-5">
              Reach Us Directly
            </h3>
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3 items-start mb-4">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-gold" />
                </div>
                <div>
                  <strong className="block text-[13px] font-bold text-navy">{label}</strong>
                  <span className="text-[13px] text-slate-500">{value}</span>
                </div>
              </div>
            ))}
            <div className="mt-5 h-44 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 text-sm gap-2 border border-slate-200">
              <MapPin size={20} /> Map – Maharashtra, India
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <h3 className="font-heading text-[18px] font-bold text-navy mb-6">
              Quick Inquiry
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
              <div>
                <label className="block text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Organisation
                </label>
                <input
                  type="text"
                  placeholder="Company / Dept."
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Mobile
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
              <div>
                <label className="block text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@org.in"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                Service Required
              </label>
              <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[13.5px] focus:outline-none focus:border-gold bg-white">
                <option>Select a service...</option>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                Message / Project Brief
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your requirement, location, and scale of work..."
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy text-white font-bold py-3.5 rounded-lg hover:bg-gold transition-colors text-[14px]"
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
