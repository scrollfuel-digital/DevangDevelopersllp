import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Globe,
  Send,
  User,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Devang Developers LLP | Sales & Enquiries";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="relative bg-[#FAF7F2] text-[#ffffff] font-sans antialiased min-h-screen selection:bg-[#ffffff] selection:text-[#FAF7F2]">
      
      {/* HERO HEADER WITH BRAND MAROON BACKGROUND (COMPACT SIZE) */}
      <section
        className="relative pt-28 pb-16 px-6 overflow-hidden min-h-[320px] flex items-center justify-center bg-[#ffffff] text-white border-b border-[#bb9034]/30 shadow-xl"
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/90 via-[#ffffff]/70 to-[#ffffff]/95 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-3 z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#852541]/90 backdrop-blur-md border border-[#bb9034]/50 text-[#c9a874] text-xs font-semibold uppercase tracking-widest shadow-lg mb-1">
            <Sparkles size={13} className="text-[#bb9034]" /> Contact Devang Developers
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#852541] leading-tight drop-shadow-md">
            How Can We <span className="text-[#e5c178]">Help You?</span>
          </h1>

          <p className="text-[#bb9034] text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed drop-shadow">
            Reach out to our sales team for project enquiries, site visits, pricing details, and complete support.
          </p>
        </div>
      </section>

      {/* MAIN FORM & DETAILS CARDS */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 -mt-8 pb-20 relative z-20 space-y-10">
        
        {/* MAIN SPLIT CARD SECTION */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: FORM CARD */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#E8DDD3] relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#bb9034] mb-2">
              <Sparkles size={16} /> Send Us a Message
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-[#852541] mb-2">
              Sales & Project Consultation
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and we'll get back to you shortly.
            </p>

            {submitted ? (
              <div className="bg-[#FAF7F2] border border-[#bb9034]/40 rounded-2xl p-8 text-center text-[#852541] animate-fadeIn">
                <CheckCircle2 size={48} className="text-[#bb9034] mx-auto mb-3" />
                <h3 className="text-2xl font-serif font-bold mb-2">Enquiry Sent!</h3>
                <p className="text-sm text-gray-600">
                  Thank you for reaching out to Devang Developers. Our sales team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#852541] focus:ring-1 focus:ring-[#852541] transition bg-[#FAF7F2]/60 text-gray-800"
                    />
                  </div>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#852541] focus:ring-1 focus:ring-[#852541] transition bg-[#FAF7F2]/60 text-gray-800"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number *"
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#852541] focus:ring-1 focus:ring-[#852541] transition bg-[#FAF7F2]/60 text-gray-800"
                    />
                  </div>

                  <div className="relative">
                    <FileText
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                    />
                    <select
                      defaultValue=""
                      required
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#852541] focus:ring-1 focus:ring-[#852541] transition bg-[#FAF7F2]/60 text-gray-700"
                    >
                      <option value="" disabled>Select Project *</option>
                      <option value="riddhi-siddhi">129 Riddhi Siddhi Heights</option>
                      <option value="mangalmurti">Mangalmurti Residency</option>
                      <option value="wing-c">Wing C 129 RSH</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  rows={5}
                  placeholder="Write Your Message..."
                  className="w-full rounded-xl border border-gray-200 p-5 outline-none focus:border-[#852541] focus:ring-1 focus:ring-[#852541] transition bg-[#FAF7F2]/60 text-gray-800"
                ></textarea>

                {/* Primary Burgundy Button */}
                <button
                  type="submit"
                  className="w-full bg-[#852541] hover:bg-[#6B1C33] text-white py-4 rounded-xl text-lg font-medium transition duration-300 shadow-xl flex items-center justify-center gap-3"
                >
                  Contact Our Sales Team <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: DETAILS & OFFICE CARDS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* BRANDING CARD */}
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#bb9034]/30 shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bb9034] block mb-2">
                A Project By
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#852541]">
                Devang Developers LLP
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Crafting luxury residential and commercial landmarks in Nagpur with uncompromising quality, transparency, and timely delivery.
              </p>
            </div>

            {/* CONTACT DETAILS CARDS */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DDD3] shadow-xl space-y-6">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#852541]/10 flex items-center justify-center text-[#852541] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#852541]">Phone Number</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    +91 9921042899
                    <br />
                    +91 9921294799
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 border-t border-gray-100 pt-5">
                <div className="w-12 h-12 rounded-2xl bg-[#852541]/10 flex items-center justify-center text-[#852541] shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#852541]">Email Address</h4>
                  <p className="text-gray-600 text-sm mt-1 break-all">
                    devangdevelopers@gmail.com
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 border-t border-gray-100 pt-5">
                <div className="w-12 h-12 rounded-2xl bg-[#852541]/10 flex items-center justify-center text-[#852541] shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#852541]">Office Address</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    I-24, ARPIT SHRUSHTI,
                    <br />
                    Behind Ganesh Temple, Tatya Tope Nagar,
                    <br />
                    Nagpur – 440015
                  </p>
                </div>
              </div>

            </div>

            {/* BUSINESS HOURS CARD */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DDD3] shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#852541]/10 flex items-center justify-center text-[#852541]">
                  <Clock3 size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#852541]">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="text-[#bb9034] font-semibold">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#bb9034] font-semibold">By Appointment</span>
                </div>
              </div>
            </div>

            {/* WEBSITE CARD */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DDD3] shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#bb9034]">Official Portal</span>
                <p className="text-base font-serif font-bold text-[#852541]">www.devangdevelopers.com</p>
              </div>
              <a
                href="https://www.devangdevelopers.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#852541] text-white flex items-center justify-center hover:bg-[#6B1C33] transition"
              >
                <ArrowRight size={18} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}