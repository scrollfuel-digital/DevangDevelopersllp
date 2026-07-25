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

// IMPORT YOUR BUILDING IMAGE FROM ASSETS
import buildingImg from "../assets/building.jpg"; // <-- Adjust filename/extension if different (.png / .jpg)

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
    <div className="relative bg-[#FBF8F3] text-[#3A101E] font-sans antialiased min-h-screen">
      
      {/* HERO HEADER WITH FULLY VISIBLE BUILDING BACKGROUND IMAGE */}
      <section
        className="relative pt-44 pb-32 px-6 bg-cover bg-center overflow-hidden min-h-[480px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${buildingImg})`,
        }}
      >
        {/* Subtle Dark Gradient Overlay (Building photo is 100% visible & vibrant) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/75" />

        <div className="relative max-w-4xl mx-auto text-center space-y-4 z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#54152B]/80 backdrop-blur-md border border-[#B98D45]/50 text-[#E5B582] text-xs font-semibold uppercase tracking-widest shadow-xl mb-2">
            <Sparkles size={14} className="text-[#B98D45]" /> Contact Devang Developers
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#E5B582] font-bold block drop-shadow-md">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight drop-shadow-lg">
            How Can We Help You?
          </h1>

          <p className="text-gray-100 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
            Reach out to our sales team for project enquiries, site visits, pricing details, investment opportunities, and complete support.
          </p>
        </div>
      </section>

      {/* MAIN FORM & DETAILS CARDS */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 -mt-12 pb-20 relative z-20 space-y-10">
        
        {/* MAIN SPLIT CARD SECTION */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: FORM CARD */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#E8DDD3] relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B98D45] mb-2">
              <Sparkles size={16} /> Send Us a Message
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-[#54152B] mb-2">
              Sales & Project Consultation
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and we'll get back to you shortly.
            </p>

            {submitted ? (
              <div className="bg-[#FAF3EB] border border-[#B98D45]/40 rounded-2xl p-8 text-center text-[#54152B] animate-fadeIn">
                <CheckCircle2 size={48} className="text-[#B98D45] mx-auto mb-3" />
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
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#54152B] focus:ring-1 focus:ring-[#54152B] transition bg-[#FBF8F3]/50 text-gray-800"
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
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#54152B] focus:ring-1 focus:ring-[#54152B] transition bg-[#FBF8F3]/50 text-gray-800"
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
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#54152B] focus:ring-1 focus:ring-[#54152B] transition bg-[#FBF8F3]/50 text-gray-800"
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
                      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#54152B] focus:ring-1 focus:ring-[#54152B] transition bg-[#FBF8F3]/50 text-gray-700"
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
                  className="w-full rounded-xl border border-gray-200 p-5 outline-none focus:border-[#54152B] focus:ring-1 focus:ring-[#54152B] transition bg-[#FBF8F3]/50 text-gray-800"
                ></textarea>

                {/* Primary Burgundy Button */}
                <button
                  type="submit"
                  className="w-full bg-[#54152B] hover:bg-[#3D0F1F] text-white py-4 rounded-xl text-lg font-medium transition duration-300 shadow-xl flex items-center justify-center gap-3"
                >
                  Contact Our Sales Team <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: DETAILS & OFFICE CARDS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* DEVANG DEVELOPERS BRANDING CARD */}
            <div className="bg-[#FAF3EB] rounded-3xl p-8 border border-[#B98D45]/30 shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B98D45] block mb-2">
                An Project By
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#54152B]">
                Devang Developers LLP
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Crafting luxury residential and commercial landmarks in Nagpur with uncompromising quality, transparency, and timely delivery.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DDD3] shadow-xl space-y-6">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#54152B]/10 flex items-center justify-center text-[#54152B] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#54152B]">Phone Number</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    +91 9921042899
                    <br />
                    +91 9921294799
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 border-t border-gray-100 pt-5">
                <div className="w-12 h-12 rounded-2xl bg-[#54152B]/10 flex items-center justify-center text-[#54152B] shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#54152B]">Email Address</h4>
                  <p className="text-gray-600 text-sm mt-1 break-all">
                    devangdevelopers@gmail.com
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 border-t border-gray-100 pt-5">
                <div className="w-12 h-12 rounded-2xl bg-[#54152B]/10 flex items-center justify-center text-[#54152B] shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#54152B]">Office Address</h4>
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
                <div className="w-10 h-10 rounded-xl bg-[#54152B]/10 flex items-center justify-center text-[#54152B]">
                  <Clock3 size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#54152B]">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="text-[#B98D45] font-semibold">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#B98D45] font-semibold">By Appointment</span>
                </div>
              </div>
            </div>

            {/* WEBSITE CARD */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DDD3] shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B98D45]">Official Portal</span>
                <p className="text-base font-serif font-bold text-[#54152B]">www.devangdevelopers.com</p>
              </div>
              <a
                href="https://www.devangdevelopers.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#54152B] text-white flex items-center justify-center hover:bg-[#3D0F1F] transition"
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