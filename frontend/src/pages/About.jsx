import React, { useEffect } from "react";                                                                          
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
} from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title =
      "About Devang Developers | Leading Real Estate Developer in Nagpur";
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
    <div className="relative bg-[#FAF7F2] text-[#143526] font-sans antialiased overflow-x-hidden min-h-screen">
      
      {/* DEEP FOREST GREEN HERO HEADER */}
      <section className="relative pt-36 pb-20 px-6 bg-[#143526] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#B98D45]/20 border border-[#B98D45]/40 text-[#E5B582] text-xs uppercase tracking-[0.25em] font-semibold shadow-md">
            <Sparkles size={14} className="text-[#B98D45]" /> Devang Developers LLP
          </span>

          {/* REDUCED FONT SIZE SLIGHTLY HERE */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide">
            About Devang Developers
          </h1>

          <p className="text-lg md:text-xl font-serif text-[#E5B582] italic font-light max-w-2xl mx-auto">
            Building Trust Through Every Brick
          </p>
        </div>
      </section>

      {/* ABOUT STORY SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#B98D45]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B98D45]">
                Who We Are
              </span>
            </div>

            {/* REDUCED FONT SIZE SLIGHTLY HERE */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#143526] leading-tight">
              Building Trust Through Every Brick
            </h2>

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
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
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Devang Developers Quality Architecture"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Stat Floating Badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#143526] text-white p-5 rounded-2xl shadow-xl border border-[#B98D45]/30 max-w-xs hidden sm:block">
              <Sparkles size={20} className="text-[#B98D45] mb-1" />
              <h4 className="text-base font-serif font-bold text-white">Quality Construction</h4>
              <p className="text-[11px] text-gray-300 mt-0.5">Intelligent planning & modern engineering standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT VISION & MISSION SECTION */}
      <section className="bg-[#143526] text-white py-12 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 relative z-10">
          
          {/* Compact Vision Card */}
          <div className="group bg-[#0D2419] border border-[#B98D45]/30 p-5 md:p-6 rounded-2xl shadow-md hover:border-[#B98D45] transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#B98D45]/15 flex items-center justify-center text-[#B98D45] group-hover:bg-[#B98D45] group-hover:text-[#143526] transition duration-300">
                <Eye size={18} />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B98D45] font-bold">
                Our Vision
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2 leading-snug">
              Creating Landmarks That Inspire Better Living
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Our vision is to become one of Nagpur's most trusted real estate developers by creating sustainable residential and commercial developments that redefine modern living. Through innovation, quality construction, and customer-focused design, we aim to build communities that enrich lives while creating long-term value for every homeowner and investor.
            </p>
          </div>

          {/* Compact Mission Card */}
          <div className="group bg-[#0D2419] border border-[#B98D45]/30 p-5 md:p-6 rounded-2xl shadow-md hover:border-[#B98D45] transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#B98D45]/15 flex items-center justify-center text-[#B98D45] group-hover:bg-[#B98D45] group-hover:text-[#143526] transition duration-300">
                <Target size={18} />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B98D45] font-bold">
                Our Mission
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2 leading-snug">
              Delivering Excellence, Every Step of the Way
            </h3>
            <ul className="space-y-1.5 text-gray-300 text-xs md:text-sm">
              {[
                "Develop thoughtfully planned residential and commercial spaces.",
                "Deliver projects using premium construction materials & practices.",
                "Maintain complete transparency throughout the customer journey.",
                "Complete every project on time without compromising quality.",
                "Build communities that provide comfort, convenience, and value.",
              ].map((commitment, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#B98D45] shrink-0 mt-0.5" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE DEVANG DEVELOPERS */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B98D45]">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#143526]">
            Why Choose Devang Developers
          </h2>
          <p className="text-gray-600 text-xs md:text-sm">
            Choosing a developer is as important as choosing a home. At Devang Developers, every decision is guided by quality, integrity, and customer satisfaction.
          </p>
        </div>

        {/* 5-PILLAR CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#E8DDD3] hover:border-[#B98D45] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -right-1 -top-3 text-5xl font-serif font-bold text-[#143526]/5 group-hover:text-[#B98D45]/15 transition duration-300 pointer-events-none select-none">
                  {item.number}
                </span>

                <div>
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#143526]/5 group-hover:bg-[#143526] text-[#B98D45] group-hover:text-[#E5B582] flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-serif font-bold text-[#B98D45] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#B98D45]/30">
                      Pillar {item.number}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#143526] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Gold Accent Line */}
                <div className="mt-5 h-0.5 w-8 bg-[#B98D45]/40 group-hover:w-full group-hover:bg-[#B98D45] transition-all duration-300 rounded-full" />
              </div>
            );
          })}
        </div>
      </section>

      {/* COMMITMENT FOOTER BANNER */}
      <section className="py-14 px-6 bg-[#143526] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B98D45] font-semibold block">
            Our Promise
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold">
            Delivering Excellence in Every Landmark
          </h2>
          <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
            From concept to completion, we remain dedicated to quality construction, transparent practices, and building spaces where families create memories.
          </p>
        </div>
      </section>

    </div>
  );
}