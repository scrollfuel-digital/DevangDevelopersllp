import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  Crown,
  Compass,
  CalendarClock,
  Users,
  Shield,
  Star,
} from "lucide-react";

// ── ULTRA LUXURY 3D SPOTLIGHT CARD COMPONENT ────────────────────────
const springConfig = { damping: 25, stiffness: 120, mass: 1.2 };

function UltraLuxury3DCard({ children, className = "", padding = "p-7 lg:p-8" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(1, springConfig);
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -8);
    rotateY.set((offsetX / (rect.width / 2)) * 8);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleMouseEnter() {
    setHovered(true);
    scale.set(1);
  }

  function handleMouseLeave() {
    setHovered(false);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative [perspective:1000px] cursor-pointer ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY, scale }}
        className={`relative w-full h-full rounded-[32px] bg-gradient-to-br from-[#ffffff] via-[#FAF7F2] to-[#f4eee4] ${padding} border border-[#c9a874]/40 shadow-[0_12px_35px_rgba(133,37,65,0.06)] hover:shadow-[0_25px_65px_rgba(133,37,65,0.18)] hover:border-[#bb9034] transition-all duration-500 overflow-hidden [transform-style:preserve-3d]`}
      >
        {/* Dynamic Cursor-Following Gold Spotlight Glow */}
        {hovered && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[32px] opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(450px circle at ${x.get()}px ${y.get()}px, rgba(187, 144, 52, 0.16), transparent 70%)`,
            }}
          />
        )}

        {/* Top Gold Shimmer Border Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#bb9034] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

        {/* Card Content with 3D Depth Elevation */}
        <div className="relative z-20 [transform:translateZ(25px)] h-full flex flex-col justify-between">
          {children}
        </div>
      </motion.div>
    </figure>
  );
}

// ── MAIN PAGE COMPONENT ───────────────────────────────────────────

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "About Devang Developers | Leading Real Estate Developer in Nagpur";
    window.scrollTo(0, 0);
  }, []);

  const whyChooseUsData = [
    {
      number: "01",
      title: "Prime Locations",
      desc: "Our projects are strategically located in rapidly developing neighborhoods with excellent connectivity to schools, colleges, hospitals, shopping centres, airports, metro stations, and business districts.",
      icon: MapPin,
      badge: "Strategic Corridor",
    },
    {
      number: "02",
      title: "Superior Construction Quality",
      desc: "We believe every home deserves a strong foundation. By using premium construction materials, trusted engineering practices, and strict quality standards, we deliver developments built to last for generations.",
      icon: ShieldCheck,
      badge: "Fe550 Structural Steel",
    },
    {
      number: "03",
      title: "Contemporary Architecture",
      desc: "Every apartment is carefully planned to maximize natural light, ventilation, privacy, and efficient use of space, ensuring a perfect balance between functionality and aesthetics.",
      icon: Building2,
      badge: "Neo-Classical Design",
    },
    {
      number: "04",
      title: "Transparent Buying Experience",
      desc: "From your first enquiry to project possession, we maintain complete transparency in documentation, pricing, communication, and customer support.",
      icon: HeartHandshake,
      badge: "100% RERA Compliant",
    },
    {
      number: "05",
      title: "Timely Delivery",
      desc: "We understand the importance of your investment and remain committed to delivering projects within the promised timelines.",
      icon: Award,
      badge: "Proven Execution",
    },
  ];

  return (
    <div className="relative bg-[#FAF7F2] text-[#852541] font-sans antialiased overflow-x-hidden min-h-screen">
      
      {/* Ambient Background Glow Spheres */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#bb9034]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#852541]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── HERO HEADER BANNER ────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 bg-[#FAF7F2] text-center overflow-hidden">

        <div className="relative max-w-5xl mx-auto space-y-5 z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/35 text-[#852541] text-xs uppercase tracking-[0.25em] font-semibold shadow-sm">
            <Sparkles size={14} className="text-[#bb9034] animate-pulse" /> Devang Developers LLP
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]">Devang Developers</span>
          </h1>

          <p className="text-lg sm:text-2xl font-serif text-[#bb9034] italic font-light max-w-3xl mx-auto leading-relaxed">
            Building More Than Homes. Creating Timeless Legacies.
          </p>

          {/* Quick Stats Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#852541]">
            {[
              { icon: CalendarClock, val: "18+", lbl: "Years Experience" },
              { icon: Users, val: "100+", lbl: "Happy Families" },
              { icon: Award, val: "2022", lbl: "Iconic Realtor Award" },
            ].map(({ icon: Icon, val, lbl }) => (
              <div key={lbl} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#bb9034]/30 shadow-sm">
                <Icon size={16} className="text-[#bb9034]" />
                <span className="font-serif font-bold text-[#852541] text-base">{val}</span>
                <span className="text-gray-600">{lbl}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ABOUT STORY SECTION ────────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-14 bg-[#bb9034]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#bb9034]">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#852541] leading-tight">
              Building Trust Through Every Brick
            </h2>

            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-light">
              <p>
                At Devang Developers, we believe that every project should be more than just a collection of buildings—it should be a place where families grow, businesses prosper, and communities thrive. Our developments are designed to combine intelligent planning, elegant architecture, quality construction, and modern infrastructure to create spaces that enhance everyday living.
              </p>
              <p>
                We focus on delivering projects that balance aesthetics with functionality, ensuring every apartment, commercial space, and common area is thoughtfully planned for comfort, convenience, and long-term value.
              </p>
              <p>
                Founded under the visionary leadership of Mr. Hemal Nadiyana, our commitment extends beyond construction. With over 18 years of real estate excellence in Nagpur, we build lasting relationships through transparency, ethical business practices, timely project delivery, and dedicated customer support.
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="pt-3 flex items-center gap-4">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/contact");
                }}
                className="inline-flex items-center gap-3 bg-[#852541] hover:bg-[#6B1C33] text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 shadow-xl cursor-pointer border border-[#bb9034]/40 hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight size={15} className="text-[#c9a874]" />
              </button>

              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/project");
                }}
                className="inline-flex items-center gap-2 border border-[#852541] text-[#852541] hover:bg-[#852541] hover:text-white px-7 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 shadow-sm cursor-pointer"
              >
                <span>View Projects</span>
              </button>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="group relative rounded-[36px] overflow-hidden border-2 border-[#bb9034]/40 bg-white shadow-2xl hover:shadow-[0_30px_70px_rgba(133,37,65,0.22)] transition-all duration-700">
              <img
                src="/bedroom.png"
                alt="Devang Developers Quality Luxury Architecture"
                className="w-full h-[460px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(43,134,197,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(43,134,197,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </div>

            {/* Floating Luxury Glassmorphic Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#852541]/95 backdrop-blur-md text-white p-6 rounded-3xl border border-[#bb9034]/60 max-w-xs hidden sm:block shadow-2xl hover:scale-105 transition-transform duration-300">
              <Crown size={24} className="text-[#c9a874] mb-2" />
              <h4 className="text-base font-serif font-bold text-white">Quality Engineering</h4>
              <p className="text-xs text-[#c9a874] mt-1 font-light leading-relaxed">
                Intelligent planning & modern civil engineering standards across Nagpur.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── VISION & MISSION SECTION (COMPACT SIZE CARDS) ───────────────────── */}
      <section className="bg-[#FAF7F2] text-[#852541] py-14 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 relative z-10">
          
          {/* Vision Card (Compact Size) */}
          <UltraLuxury3DCard className="h-full" padding="p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#852541] text-[#c9a874] flex items-center justify-center shadow-md">
                  <Eye size={22} />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/40 text-[#852541] text-[10px] font-bold uppercase tracking-widest">
                  Our Vision
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#852541] mb-3 leading-snug">
                Creating Landmarks That Inspire Better Living
              </h3>

              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-light">
                Our vision is to become one of Nagpur's most trusted real estate developers by creating sustainable residential and commercial developments that redefine modern living. Through innovation, quality construction, and customer-focused design, we aim to build communities that enrich lives while creating long-term value for every homeowner and investor.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#bb9034]/30 flex items-center justify-between text-xs font-bold text-[#bb9034]">
              <span>Walls of Happiness</span>
              <Sparkles size={15} />
            </div>
          </UltraLuxury3DCard>

          {/* Mission Card (Compact Size) */}
          <UltraLuxury3DCard className="h-full" padding="p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#852541] text-[#c9a874] flex items-center justify-center shadow-md">
                  <Target size={22} />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/40 text-[#852541] text-[10px] font-bold uppercase tracking-widest">
                  Our Mission
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#852541] mb-3 leading-snug">
                Delivering Excellence, Every Step of the Way
              </h3>

              <ul className="space-y-2.5 text-gray-700 text-xs sm:text-sm font-light">
                {[
                  "Develop thoughtfully planned residential and commercial spaces.",
                  "Deliver projects using premium construction materials & practices.",
                  "Maintain complete transparency throughout the customer journey.",
                  "Complete every project on time without compromising quality.",
                  "Build communities that provide comfort, convenience, and value.",
                ].map((commitment, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#bb9034] shrink-0 mt-0.5" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-[#bb9034]/30 flex items-center justify-between text-xs font-bold text-[#bb9034]">
              <span>Quality Assurance</span>
              <Compass size={15} />
            </div>
          </UltraLuxury3DCard>

        </div>
      </section>

      {/* ── WHY CHOOSE DEVANG DEVELOPERS (5 FULL-SIZE 3D CARDS: 3 TOP, 2 CENTERED BOTTOM) ───── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#bb9034] block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#852541]">
            Why Choose Devang Developers
          </h2>
          <p className="text-gray-700 text-xs md:text-sm font-light leading-relaxed">
            Choosing a developer is as important as choosing a home. At Devang Developers, every decision is guided by quality, integrity, and customer satisfaction.
          </p>
        </div>

        {/* 5 FULL-SIZE 3D PILLAR CARDS (3 IN FIRST ROW, 2 CENTERED IN SECOND ROW) */}
        <div className="flex flex-wrap justify-center gap-8">
          {whyChooseUsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                <UltraLuxury3DCard className="h-full" padding="p-7 lg:p-8">
                  {/* Background Watermark Number */}
                  <span className="absolute -right-2 -top-4 text-7xl font-serif font-extrabold text-[#852541]/5 pointer-events-none select-none">
                    {item.number}
                  </span>

                  <div>
                    {/* Icon & Badge Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#852541] text-[#c9a874] flex items-center justify-center shadow-lg">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-serif font-bold text-[#852541] bg-[#FAF7F2] px-3.5 py-1.5 rounded-full border border-[#bb9034]/40 shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#852541] mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Gold Foil Line */}
                  <div className="mt-8 pt-4 border-t border-[#bb9034]/30 flex items-center justify-between">
                    <span className="text-[11px] font-serif font-bold text-[#bb9034] uppercase tracking-wider">
                      Pillar {item.number}
                    </span>
                    <div className="h-1 w-10 bg-[#852541] rounded-full" />
                  </div>
                </UltraLuxury3DCard>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}