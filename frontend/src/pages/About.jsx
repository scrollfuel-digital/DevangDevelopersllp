import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  MapPin,
  Eye,
  Target,
  Sparkles,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "About Devang Developers | Leading Real Estate Developer in Nagpur";
    window.scrollTo(0, 0);
  }, []);

  const whyChooseUsData = [
    {
      number: "01",
      title: "Prime Locations",
      desc: "Our projects are strategically located in rapidly developing neighborhoods with excellent connectivity to schools, colleges, hospitals, shopping centres, airports, metro stations, and business districts.",
      icon: MapPin,
    },
    {
      number: "02",
      title: "Superior Construction Quality",
      desc: "We believe every home deserves a strong foundation. By using premium construction materials, trusted engineering practices, and strict quality standards, we deliver developments built to last for generations.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Contemporary Architecture",
      desc: "Every apartment is carefully planned to maximize natural light, ventilation, privacy, and efficient use of space, ensuring a perfect balance between functionality and aesthetics.",
      icon: Building2,
    },
    {
      number: "04",
      title: "Transparent Buying Experience",
      desc: "From your first enquiry to project possession, we maintain complete transparency in documentation, pricing, communication, and customer support.",
      icon: HeartHandshake,
    },
    {
      number: "05",
      title: "Timely Delivery",
      desc: "We understand the importance of your investment and remain committed to delivering projects within the promised timelines.",
      icon: Award,
    },
  ];

  return (
    <div className="relative bg-[#ffffff] text-[#0F1E36] font-sans antialiased overflow-x-hidden min-h-screen">
      
      {/* ── HERO HEADER BANNER (IMPERIAL NAVY #0F1E36) ────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 bg-[#ffffff] text-white border-b text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs uppercase tracking-[0.25em] font-semibold shadow-md">
            <Sparkles size={14} className="text-[#C5A059]" /> Devang Developers LLP
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#852541] tracking-wide leading-tight">
            About Devang Developers
          </h1>

          <p className="text-lg md:text-2xl font-serif text-[#C5A059] italic font-light max-w-2xl mx-auto">
            Walls of happiness...
          </p>
        </div>
      </section>

      {/* ── ABOUT STORY SECTION ────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A059]">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#852541] leading-tight">
              Building Trust Through Every Brick
            </h2>

            <div className="space-y-4 text-[#4A5568] text-sm md:text-base leading-relaxed font-light">
              <p>
                At Devang Developers, we believe that every project should be more than just a collection of buildings—it should be a place where families grow, businesses prosper, and communities thrive. Our developments are designed to combine intelligent planning, elegant architecture, quality construction, and modern infrastructure to create spaces that enhance everyday living.
              </p>
              <p>
                We focus on delivering projects that balance aesthetics with functionality, ensuring every apartment, commercial space, and common area is thoughtfully planned for comfort, convenience, and long-term value.
              </p>
              <p>
                Our commitment extends beyond construction. We build lasting relationships through transparency, ethical business practices, timely project delivery, and dedicated customer support.
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/contact");
                }}
                className="inline-flex items-center gap-3 bg-[#0F1E36] hover:bg-[#0A1424] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 shadow-xl cursor-pointer border border-[#C5A059]/40"
              >
                <span>Get In Touch</span>
                <ArrowRight size={14} className="text-[#C5A059]" />
              </button>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/bedroom.png"
                alt="Devang Developers Quality Luxury Architecture"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Stat Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0F1E36] text-white p-6 rounded-2xl shadow-2xl border border-[#C5A059]/50 max-w-xs hidden sm:block">
              <Sparkles size={20} className="text-[#C5A059] mb-2" />
              <h4 className="text-base font-serif font-bold text-white">Quality Construction</h4>
              <p className="text-xs text-[#C5A059] mt-1 font-light leading-relaxed">
                Intelligent planning & modern engineering standards across Nagpur.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── VISION & MISSION SECTION (IMPERIAL NAVY #0F1E36) ──────────────── */}
      <section className="bg-[#0F1E36] text-white py-16 px-6 relative overflow-hidden border-y border-[#C5A059]/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
          
          {/* Vision Card */}
          <div className="group bg-[#091322] border border-[#C5A059]/40 p-7 md:p-8 rounded-3xl shadow-xl hover:border-[#C5A059] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0F1E36] transition duration-300">
                <Eye size={20} />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                Our Vision
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 leading-snug">
              Creating Landmarks That Inspire Better Living
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
              Our vision is to become one of Nagpur's most trusted real estate developers by creating sustainable residential and commercial developments that redefine modern living. Through innovation, quality construction, and customer-focused design, we aim to build communities that enrich lives while creating long-term value for every homeowner and investor.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-[#091322] border border-[#C5A059]/40 p-7 md:p-8 rounded-3xl shadow-xl hover:border-[#C5A059] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0F1E36] transition duration-300">
                <Target size={20} />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                Our Mission
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 leading-snug">
              Delivering Excellence, Every Step of the Way
            </h3>
            <ul className="space-y-2 text-gray-300 text-xs md:text-sm font-light">
              {[
                "Develop thoughtfully planned residential and commercial spaces.",
                "Deliver projects using premium construction materials & practices.",
                "Maintain complete transparency throughout the customer journey.",
                "Complete every project on time without compromising quality.",
                "Build communities that provide comfort, convenience, and value.",
              ].map((commitment, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE DEVANG DEVELOPERS ──────────────────────────────────── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A059] block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F1E36]">
            Why Choose Devang Developers
          </h2>
          <p className="text-[#4A5568] text-xs md:text-sm font-light leading-relaxed">
            Choosing a developer is as important as choosing a home. At Devang Developers, every decision is guided by quality, integrity, and customer satisfaction.
          </p>
        </div>

        {/* 5-PILLAR CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FFFFFF] rounded-3xl p-6 shadow-md border border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -right-2 -top-4 text-6xl font-serif font-bold text-[#0F1E36]/5 group-hover:text-[#C5A059]/15 transition duration-300 pointer-events-none select-none">
                  {item.number}
                </span>

                <div>
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F1E36]/10 group-hover:bg-[#0F1E36] text-[#0F1E36] group-hover:text-[#C5A059] flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-serif font-bold text-[#0F1E36] bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#C5A059]/40">
                      Pillar {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0F1E36] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#4A5568] text-xs md:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Gold Accent Line */}
                <div className="mt-6 h-0.5 w-10 bg-[#C5A059]/40 group-hover:w-full group-hover:bg-[#C5A059] transition-all duration-300 rounded-full" />
              </div>
            );
          })}
        </div>
      </section>

      {/* ── COMMITMENT FOOTER BANNER (IMPERIAL NAVY #0F1E36) ───────────────── */}
      <section className="py-16 px-6 bg-[#0F1E36] text-white text-center border-t border-[#C5A059]/30">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Delivering Excellence in Every Landmark
          </h2>
          <p className="text-gray-200 text-xs md:text-sm font-light leading-relaxed">
            From concept to completion, we remain dedicated to quality construction, transparent practices, and building spaces where families create memories.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/projects");
              }}
              className="bg-[#C5A059] hover:bg-[#b08b46] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 shadow-xl cursor-pointer"
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}