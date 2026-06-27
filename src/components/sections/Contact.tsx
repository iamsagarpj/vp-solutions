"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

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

type Status = "idle" | "submitting" | "success" | "error";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function Contact() {
  const { tr } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState({
    name: "",
    organisation: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
    "bot-field": "",
  });

  const set = (k: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...fields }),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", organisation: "", mobile: "", email: "", service: "", message: "", "bot-field": "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeader
          centered
          label={tr("section.contact.label")}
          title={tr("section.contact.title")}
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
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-200"
          >
            {/* Required hidden inputs for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <input name="bot-field" value={fields["bot-field"]} onChange={set("bot-field")} />
            </p>

            <h3 className="font-heading text-[16px] sm:text-[18px] font-bold text-navy mb-5 sm:mb-6">
              Quick Inquiry
            </h3>

            {/* Name + Org */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  {tr("contact.name")}
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={set("name")}
                  placeholder="Full Name"
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  {tr("contact.org")}
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={fields.organisation}
                  onChange={set("organisation")}
                  placeholder="Company / Dept."
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
            </div>

            {/* Mobile + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  {tr("contact.mobile")}
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={fields.mobile}
                  onChange={set("mobile")}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
              <div>
                <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                  {tr("contact.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={set("email")}
                  placeholder="email@org.in"
                  className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white"
                />
              </div>
            </div>

            {/* Service */}
            <div className="mb-3 sm:mb-4">
              <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                {tr("contact.service")}
              </label>
              <select
                name="service"
                value={fields.service}
                onChange={set("service")}
                className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold bg-white"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-[10.5px] sm:text-[11.5px] font-bold text-navy uppercase tracking-wide mb-1.5">
                {tr("contact.message")}
              </label>
              <textarea
                rows={4}
                name="message"
                value={fields.message}
                onChange={set("message")}
                placeholder="Briefly describe your requirement, location, and scale of work..."
                className="w-full px-3.5 sm:px-4 py-2.5 border border-slate-200 rounded-lg text-[13px] sm:text-[13.5px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 bg-white resize-none"
              />
            </div>

            {/* Success / Error banners */}
            {status === "success" && (
              <div className="mb-4 px-4 py-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-[13px] font-medium">
                {tr("contact.success")}
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-[13px] font-medium">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-navy text-white font-bold py-3 sm:py-3.5 rounded-lg hover:bg-gold transition-colors text-[13px] sm:text-[14px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? tr("contact.submitting") : tr("contact.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
