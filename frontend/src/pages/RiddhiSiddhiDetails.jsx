import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  Download,
  Building2,
  Car,
  Compass,
  Layers,
  Award,
  Eye,
  Waves,
  Film,
  Dumbbell,
  Flame,
  Sun,
  Trees,
  Smile,
  Sofa,
  Users,
  Gamepad2,
  Check,
  Navigation,
  Train,
  Plane,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Map,
  MessageSquare,
  ExternalLink,
  Clock,
  Maximize2,
} from "lucide-react";

import riddhiSiddhiImg from "../assets/projects/riddhisiddhibuilding.jpg";
import kidsPlayAreaImg from "../assets/projects/kids-playarea.png";
import floorPlan2nd from "../assets/projects/floorplan-2nd.png";
import floorPlanTypical from "../assets/projects/floorplan-typical.png";
import floorPlan7th from "../assets/projects/floorplan-7th.jpg";
import rs3FrontImg from "../assets/projects/rs3-front-elevation.jpg";
import rs3SideImg from "../assets/projects/rs3-side-elevation.jpg";
import rs3CornerImg from "../assets/projects/rs3-corner-elevation.jpg";
import gameZoneImg from "../assets/projects/gamezone-cropped.jpg";

export default function RiddhiSiddhiDetails() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);
  const [isSpecAutoPlaying, setIsSpecAutoPlaying] = useState(true);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isHeroAutoPlaying, setIsHeroAutoPlaying] = useState(true);
  const [activePlanKey, setActivePlanKey] = useState("floor2nd");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [amenitySlideIndex, setAmenitySlideIndex] = useState(0);
  const [isAmenityAutoPlaying, setIsAmenityAutoPlaying] = useState(true);
  const [activeIconCardIndex, setActiveIconCardIndex] = useState(0);
  const [isIconSliderAutoPlaying, setIsIconSliderAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    config: "3-bhk",
  });

  const heroBuildingSlides = [
    {
      image: rs3FrontImg,
      title: "Front Elevation View",
      sub: "Full Front Façade & Dual Road Access Driveways",
    },
    {
      image: rs3SideImg,
      title: "Side Elevation View",
      sub: "Slim High-Rise Structural Design & Balcony Stacks",
    },
    {
      image: rs3CornerImg,
      title: "Corner 3D Elevation View",
      sub: "Panoramic Architectural View & Ambient Lighting",
    },
    {
      image: riddhiSiddhiImg,
      title: "Master Architectural Illustration",
      sub: "32-A, Deep Apartment, Khamla Road, Nagpur",
    },
  ];

  useEffect(() => {
    document.title = "Riddhi Siddhi 3 | Luxury Brochure | Devang Developers";
    window.scrollTo(0, 0);
  }, []);

  // AUTO-PLAY TIMER FOR HERO TOWER SLIDER (4 SECONDS)
  useEffect(() => {
    if (!isHeroAutoPlaying) return;
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev === heroBuildingSlides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHeroAutoPlaying, heroSlideIndex]);

  // AUTO-PLAY TIMER FOR SPECIFICATIONS SLIDER (5 SECONDS)
  useEffect(() => {
    if (!isSpecAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSpecIndex((prev) => (prev === fullSpecs.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isSpecAutoPlaying, activeSpecIndex]);

  // AUTO-PLAY TIMER FOR AMENITIES SLIDER (4.5 SECONDS)
  useEffect(() => {
    if (!isAmenityAutoPlaying) return;
    const interval = setInterval(() => {
      setAmenitySlideIndex((prev) => (prev === lifestyleAmenities.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isAmenityAutoPlaying, amenitySlideIndex]);

  // AUTO-PLAY TIMER FOR 11TH FLOOR AMENITIES CARDS SLIDER (2.5 SECONDS)
  useEffect(() => {
    if (!isIconSliderAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIconCardIndex((prev) => (prev === amenitiesList.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isIconSliderAutoPlaying, activeIconCardIndex]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
      setFormData({ name: "", phone: "", config: "3-bhk" });
    }, 3500);
  };

  // 11TH FLOOR AMENITIES ICONS BAR
  const amenitiesList = [
    { icon: Waves, label: "Swimming Pool" },
    { icon: Film, label: "Mini Theater" },
    { icon: Dumbbell, label: "Gymnasium" },
    { icon: Flame, label: "Steam Room" },
    { icon: Sun, label: "Yoga Deck" },
    { icon: Trees, label: "Gazebo" },
    { icon: Smile, label: "Kids Play Area" },
    { icon: Sofa, label: "Terrace Sitout" },
    { icon: Users, label: "Community Hall" },
    { icon: Gamepad2, label: "Indoor Game" },
  ];

  // LIFESTYLE & ROOFTOP AMENITIES SHOWCASE
  const lifestyleAmenities = [
    {
      category: "SWIMMING POOL",
      tagline: "Luxury that flows above",
      description:
        "A thoughtfully designed rooftop pool offering a refreshing escape from daily life. Surrounded by open skies and calming views for complete rejuvenation.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "MULTIPURPOSE HALL",
      tagline: "A space where moments come together",
      description:
        "A spacious recreation hall designed for social gatherings and leisure activities. Ideal for celebrations, meetings, and community events. A versatile space that brings residents together.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "KIDS PLAY AREA",
      tagline: "Playtime under open skies",
      description:
        "A secure rooftop children's play area planned with safety, visibility, and comfort in mind. A worry-free environment where children can play freely under open skies.",
      image: kidsPlayAreaImg,
    },
    {
      category: "YOGA DECK",
      tagline: "Find Your Inner balance",
      description:
        "A serene rooftop yoga deck designed for mindful movement and daily wellness. Open skies, fresh air, and peaceful surroundings create the perfect space to restore balance.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "GYMNASIUM",
      tagline: "Fitness that fits your life",
      description:
        "A fully equipped gym designed for strength, fitness, and endurance. Thoughtfully planned to support daily workouts and active lifestyles. Train comfortably in a motivating, well-ventilated space.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "THEATER",
      tagline: "An exclusive Cinema Experience",
      description:
        "A modern mini theater designed for immersive experiences. Enjoy movies, sports, and shows in a comfortable, private setting. Entertainment redefined within your residential community.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "GAME ZONE",
      tagline: "Fun without stepping out",
      description:
        "A dedicated indoor game zone designed for fun and recreation. Equipped with games that encourage bonding and friendly competition. A perfect space to enjoy quality leisure time.",
      image: gameZoneImg,
    },
  ];

  // ARCHITECTURAL FLOOR PLANS DATA
  const floorPlansData = {
    floor2nd: {
      title: "2nd Floor Plan",
      subtitle: "Spacious 2 BHK & 3 BHK Layouts with dual access balconies",
      image: floorPlan2nd,
      table: [
        { flat: "1", built: "873", salable: "1168" },
        { flat: "2", built: "877", salable: "1174" },
        { flat: "3", built: "879", salable: "1180" },
        { flat: "4", built: "1696", salable: "2371" },
        { flat: "5", built: "1507", salable: "1949" },
      ],
    },
    typical345: {
      title: "Typical Floor Plan (3rd, 4th & 5th Floors)",
      subtitle: "Optimal natural light & 100% Vastu-compliant layout design",
      image: floorPlanTypical,
      table: [
        { flat: "1", built: "873", salable: "1168" },
        { flat: "2", built: "877", salable: "1174" },
        { flat: "3", built: "879", salable: "1180" },
        { flat: "4", built: "1696", salable: "2371" },
        { flat: "5", built: "1330", salable: "1822" },
      ],
    },
    typical689: {
      title: "Typical Floor Plan (6th, 8th & 9th Floors)",
      subtitle: "High-rise premium 3 BHK & 4 BHK corner residences",
      image: floorPlanTypical,
      table: [
        { flat: "1", built: "1656", salable: "2243" },
        { flat: "2", built: "1471", salable: "1981" },
        { flat: "3", built: "1696", salable: "2371" },
        { flat: "4", built: "1330", salable: "1822" },
      ],
    },
    floor7th: {
      title: "7th Floor Plan (Refuge Layout)",
      subtitle: "Features exclusive open refuge terrace deck (220 sq.ft)",
      image: floorPlan7th,
      table: [
        { flat: "1", built: "1656", salable: "2243" },
        { flat: "2", built: "1471", salable: "1981" },
        { flat: "3", built: "1696", salable: "2371" },
        { flat: "4", built: "1266", salable: "1822" },
      ],
    },
  };

  // FULL TECHNICAL SPECIFICATIONS
  const fullSpecs = [
    {
      category: "Structural Excellence",
      items: [
        "Earthquake resistant RCC framed structure designed as per IS 1893 seismic codes.",
        "AAC block masonry (150mm external walls, 100mm internal walls).",
        "Smooth cement plaster with branded ready-made plaster finish.",
      ],
    },
    {
      category: "Elegant Openings",
      items: [
        "Powder-coated UPVC window frames with toughened glass & mosquito net panel.",
        "Solid core flush main door with plywood frame & premium veneer finish with branded mortise lock.",
        "Laminated flush internal doors with Mortise lock and door holder.",
      ],
    },
    {
      category: "Flooring & Finishes",
      items: [
        "Glass-finish vitrified tiles (800mm x 1600mm / 800mm x 1200mm) in living, dining & bedrooms.",
        "Vitrified tile dado up to 600mm on walls in toilets and anti-skid floor tiles.",
        "Glass-finish vitrified tiles at staircase and entrance lobby.",
      ],
    },
    {
      category: "Kitchen & Utility Area",
      items: [
        "Premium granite countertop with stainless steel sink.",
        "Vitrified tile dado up to 600mm above kitchen platform.",
        "Electrical provisions for Aqua-guard, chimney, microwave & dishwasher.",
        "Utility area with tile dado up to window sill level with washing machine point.",
      ],
    },
    {
      category: "Toilets & Sanitary Fittings",
      items: [
        "Premium sanitary ware and CP fittings by Jaquar / Kohler or equivalent.",
        "Concealed plumbing of Finolex / CPVC (Internal) and SWR pipes (External).",
      ],
    },
    {
      category: "Electrification & Safety",
      items: [
        "Concealed copper wiring (Havells / Anchor or equivalent).",
        "Modular switches by Legrand / Schneider or equivalent.",
        "Adequate light, fan, TV, and AC socket points in all bedrooms & living room.",
      ],
    },
    {
      category: "Parking, Security & Power Backup",
      items: [
        "Cement paver block parking flooring with 4-level automated puzzle parking.",
        "Intercom facility & 24/7 CCTV surveillance at ground floor and all common areas.",
        "Three automatic lifts (KONE or equivalent): 1 Stretcher Lift, 1 10-passenger & 1 8-passenger lift.",
        "Auto-synchronizing DG Generator backup for lifts, pumps, and common area lighting.",
        "Firefighting system as per NBC safety drawings & rooftop solar panels for common lighting.",
      ],
    },
  ];

  const [locationCategory, setLocationCategory] = useState("all");

  const locationLandmarks = [
    { name: "Khamla Main Market & Daily Groceries", type: "Daily Needs & Retail", dist: "2 Mins Walk", category: "shopping", icon: ShoppingBag, mapQuery: "Khamla+Main+Market+Nagpur" },
    { name: "SBI, HDFC & ICICI Banks / ATMs", type: "Financial & Banking", dist: "2 Mins Walk", category: "shopping", icon: Compass, mapQuery: "Banks+Khamla+Road+Nagpur" },
    { name: "Max Fashion, Pantaloons & Westside", type: "Retail & Apparel Hub", dist: "3 Mins Drive", category: "shopping", icon: ShoppingBag, mapQuery: "Max+Fashion+Khamla+Nagpur" },
    { name: "PVR Inox Cinema & Reliance Trends", type: "Entertainment & Cinema", dist: "4 Mins Drive", category: "shopping", icon: Film, mapQuery: "PVR+Inox+Nagpur" },
    
    { name: "Somalwar High School & Junior College", type: "Premier Education", dist: "3 Mins Drive", category: "education", icon: GraduationCap, mapQuery: "Somalwar+High+School+Khamla+Nagpur" },
    { name: "Orange City Hospital & Research Institute", type: "Multi-Specialty Care", dist: "5 Mins Drive", category: "education", icon: Hospital, mapQuery: "Orange+City+Hospital+Nagpur" },
    { name: "VNIT Campus Nagpur", type: "Engineering & Tech University", dist: "8 Mins Drive", category: "education", icon: GraduationCap, mapQuery: "VNIT+Campus+Nagpur" },
    { name: "Neeti Clinics & Diagnostics", type: "Healthcare Center", dist: "4 Mins Drive", category: "education", icon: Hospital, mapQuery: "Neeti+Clinics+Nagpur" },

    { name: "Jaiprakash Nagar Metro Station (Wardha Rd)", type: "Rapid Transit Metro", dist: "5 Mins Drive", category: "transit", icon: Train, mapQuery: "Jaiprakash+Nagar+Metro+Station+Nagpur" },
    { name: "Radisson Blu 5-Star Hotel", type: "Luxury Hospitality", dist: "8 Mins Drive", category: "transit", icon: Building2, mapQuery: "Radisson+Blu+Hotel+Nagpur" },
    { name: "Ajni Junction Railway Station", type: "Central Rail Hub", dist: "10 Mins Drive", category: "transit", icon: Train, mapQuery: "Ajni+Railway+Station+Nagpur" },
    { name: "Dr. Babasaheb Ambedkar Airport", type: "International Airport Corridor", dist: "12 Mins Drive", category: "transit", icon: Plane, mapQuery: "Nagpur+Airport" },
  ];

  return (
    <div className="relative bg-[#FAF7F2] text-[#852541] font-sans antialiased min-h-screen selection:bg-[#852541] selection:text-[#FAF7F2] pb-20 sm:pb-24 lg:pb-32">
      
      {/* ── TOP HERO BANNER ────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-8 px-6 bg-[#FAF7F2] text-center border-b border-[#bb9034]/20">
        <div className="max-w-5xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/35 text-[#852541] text-xs uppercase tracking-[0.25em] font-semibold shadow-sm">
            <Sparkles size={14} className="text-[#bb9034] animate-pulse" /> Official Project E-Brochure
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
            RIDDHI SIDDHI <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]">~ III ~</span>
          </h1>

          <p className="text-lg sm:text-2xl font-serif text-[#bb9034] italic font-light max-w-3xl mx-auto leading-relaxed">
            An Address Defined by Vision
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#852541] pt-2">
            <span className="flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-[#bb9034]/30 shadow-sm">
              <MapPin size={14} className="text-[#bb9034]" /> 32-A, Deep Apartment, Pande Layout, Khamla Road, Nagpur
            </span>
            <span className="flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-[#bb9034]/30 shadow-sm">
              <ShieldCheck size={14} className="text-[#bb9034]" /> MahaRERA: PR1190002501512
            </span>
          </div>

        </div>
      </section>

      {/* ── BROCHURE PAGE 1: HERO TOWER SLIDER & EDITORIAL VISION (LUXURY MOTION REDESIGN) ── */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Architectural Tower Showcase */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Interactive Slider Box */}
            <div
              onMouseEnter={() => setIsHeroAutoPlaying(false)}
              onMouseLeave={() => setIsHeroAutoPlaying(true)}
              className="relative rounded-[32px] overflow-hidden border-2 border-[#bb9034]/50 shadow-[0_20px_50px_rgba(133,37,65,0.15)] bg-white group h-[420px] sm:h-[480px] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(133,37,65,0.25)]"
            >
              {/* Animated Slide Images */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroSlideIndex}
                  src={heroBuildingSlides[heroSlideIndex].image}
                  alt={heroBuildingSlides[heroSlideIndex].title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setLightboxImage(heroBuildingSlides[heroSlideIndex].image)}
                />
              </AnimatePresence>

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />

              {/* Top Bar: Live Counter & Action Buttons */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#852541]/90 backdrop-blur-md text-[#c9a874] text-[10px] font-extrabold uppercase tracking-widest shadow-md border border-[#c9a874]/40">
                  <Sparkles size={12} className="text-[#c9a874]" /> View 0{heroSlideIndex + 1} / 0{heroBuildingSlides.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLightboxImage(heroBuildingSlides[heroSlideIndex].image)}
                    className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#852541] backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider transition cursor-pointer shadow-md border border-white/30 flex items-center gap-1"
                  >
                    <Eye size={13} /> Expand
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        setIsHeroAutoPlaying(false);
                        setHeroSlideIndex((prev) => (prev === 0 ? heroBuildingSlides.length - 1 : prev - 1));
                      }}
                      className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#852541] text-white flex items-center justify-center transition cursor-pointer shadow-md border border-white/20"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setIsHeroAutoPlaying(false);
                        setHeroSlideIndex((prev) => (prev === heroBuildingSlides.length - 1 ? 0 : prev + 1));
                      }}
                      className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#852541] text-white flex items-center justify-center transition cursor-pointer shadow-md border border-white/20"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Caption Badge */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1 z-10 drop-shadow-md">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  {heroBuildingSlides[heroSlideIndex].title}
                </h3>
                <p className="text-xs text-gray-200 font-light">
                  {heroBuildingSlides[heroSlideIndex].sub}
                </p>
              </div>

            </div>

            {/* Interactive View Angle Thumbnails Bar */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {heroBuildingSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsHeroAutoPlaying(false);
                    setHeroSlideIndex(idx);
                  }}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 h-20 group cursor-pointer ${
                    heroSlideIndex === idx
                      ? "border-[#852541] ring-2 ring-[#bb9034]/60 scale-[1.03] shadow-md"
                      : "border-[#bb9034]/30 opacity-70 hover:opacity-100 hover:border-[#bb9034]"
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                  <span className="absolute bottom-1 left-1.5 right-1.5 text-[9px] font-bold text-white truncate drop-shadow-sm">
                    {slide.title.split(" ")[0]} {slide.title.split(" ")[1] || ""}
                  </span>
                  {heroSlideIndex === idx && (
                    <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#852541] text-[#c9a874] flex items-center justify-center text-[8px] font-bold">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Luxury Glassmorphic Founder Editorial Vision Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] bg-gradient-to-br from-white via-[#FAF7F2] to-[#f4eee4] p-7 sm:p-9 border-2 border-[#bb9034]/40 shadow-xl space-y-6 overflow-hidden">
              
              {/* Decorative Gold Watermark Quote Mark */}
              <span className="absolute top-2 right-6 text-8xl font-serif text-[#852541]/5 select-none pointer-events-none">
                “
              </span>

              {/* Eyebrow Label */}
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#bb9034]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#bb9034]">
                  Architectural Philosophy
                </span>
              </div>

              {/* Verbatim Vision Text with Refined Luxury Typography */}
              <div className="space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed font-light relative z-10">
                <p>
                  This architectural illustration represents more than a structure. It reflects a thoughtfully conceived vision shaped by <strong className="font-semibold text-[#852541]">precision, purpose, and enduring values</strong>. Riddhi Siddhi – III stands as a testament to refined design, structural clarity, and timeless aesthetics.
                </p>
                <p>
                  At Devang Developers, every project is guided by <strong className="font-semibold text-[#852541]">integrity, uncompromising craftsmanship</strong>, and a deep commitment to long-term value. We believe real estate is not merely about constructing buildings, but about creating homes that inspire confidence, comfort, and a superior quality of life.
                </p>
                <p>
                  Each detail of this development embodies our philosophy of thoughtful planning, quality execution, and <strong className="font-semibold text-[#852541]">transparent dealings</strong>. Our journey is driven by the belief that premium living experiences should be delivered with authenticity and value—principles that continue to define how we design, build, and deliver every home.
                </p>
              </div>

              {/* Founder Sign-off & High-Impact CTA Button Bar */}
              <div className="pt-6 border-t border-[#bb9034]/30 flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#852541] text-[#c9a874] flex items-center justify-center font-serif font-bold text-lg shadow-md border border-[#c9a874]/40">
                    HN
                  </div>
                  <div>
                    <p className="text-lg font-serif font-bold text-[#852541] leading-snug">
                      Hemal Nadiyana
                    </p>
                    <p className="text-[10px] text-[#bb9034] uppercase tracking-widest font-extrabold">
                      Founding Partner
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto bg-[#852541] hover:bg-[#6B1C33] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer border border-[#bb9034]/50 hover:scale-105"
                >
                  <PhoneCall size={15} className="text-[#c9a874] animate-pulse" />
                  <span>Schedule Site Visit</span>
                  <ArrowRight size={14} className="text-[#c9a874]" />
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── BROCHURE PAGE 2: 11TH FLOOR PLAN AMENITIES ICONS BAR ─────────── */}
      <section className="py-12 bg-[#FAF7F2] text-[#852541] my-6 border-y border-[#bb9034]/30 relative">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/35 text-[#852541] text-[10px] font-extrabold uppercase tracking-[0.3em] shadow-sm">
              <Sparkles size={12} className="text-[#bb9034] animate-pulse" /> 11th Floor Plan
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#852541] tracking-widest leading-tight">
              A M E N I T I E S
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-600 font-serif italic max-w-xl mx-auto leading-relaxed">
              Well-planned floor layouts featuring premium amenities & curated smart spaces.
            </p>
          </div>

          {/* 10 ICONIC AMENITIES CARDS AUTO-SLIDER (NO BUTTONS, SLIDES 1-BY-1 AUTOMATICALLY) */}
          <div
            onMouseEnter={() => setIsIconSliderAutoPlaying(false)}
            onMouseLeave={() => setIsIconSliderAutoPlaying(true)}
            className="relative overflow-hidden py-4 px-1"
          >
            <motion.div
              animate={{ x: `-${(activeIconCardIndex * 100) / amenitiesList.length}%` }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 sm:gap-4 w-[280%] sm:w-[200%] lg:w-[150%]"
            >
              {amenitiesList.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeIconCardIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setIsIconSliderAutoPlaying(false);
                      setActiveIconCardIndex(idx);
                    }}
                    className={`flex-1 flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-500 cursor-pointer select-none min-h-[105px] ${
                      isActive
                        ? "bg-[#852541] text-white border-2 border-[#bb9034] shadow-xl scale-105 -translate-y-1"
                        : "bg-white text-[#852541] border border-[#bb9034]/30 hover:border-[#852541] shadow-xs hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2.5 transition-all duration-300 ${
                        isActive
                          ? "bg-white text-[#852541] border-2 border-[#bb9034] shadow-sm"
                          : "bg-[#FAF7F2] text-[#852541] border border-[#bb9034]/30"
                      }`}
                    >
                      <Icon size={20} className={isActive ? "text-[#852541]" : "text-[#852541]"} />
                    </div>

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider text-center leading-tight transition-colors ${
                      isActive ? "text-white" : "text-[#852541]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION 1: EXCLUSIVE LIFESTYLE SPACES ── */}
      <section className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="w-full space-y-6">
          <div className="text-left border-l-4 border-[#bb9034] pl-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#bb9034]">
              01 / 03 • Exclusive Lifestyle Spaces
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#852541]">
              Rooftop & Recreation Showcase
            </h2>
          </div>

          {/* AMENITIES AUTOMATED SLIDER CONTAINER (OPEN SPACE DISPLAY) */}
          <div
            onMouseEnter={() => setIsAmenityAutoPlaying(false)}
            onMouseLeave={() => setIsAmenityAutoPlaying(true)}
            className="space-y-6 relative group w-full"
          >
            {/* Animated Gold Progress Bar */}
            <div className="w-full h-1.5 bg-[#FAF7F2] rounded-full overflow-hidden border border-[#bb9034]/20">
              <motion.div
                key={amenitySlideIndex + (isAmenityAutoPlaying ? "-play" : "-pause")}
                initial={{ width: "0%" }}
                animate={{ width: isAmenityAutoPlaying ? "100%" : "0%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]"
              />
            </div>

            {/* SLIDE CARD CONTENT DISPLAY */}
            <div className="relative min-h-[280px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={amenitySlideIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#bb9034]/30 shadow-md w-full"
                >
                  {/* PHOTO CONTAINER */}
                  <div className="lg:col-span-7 relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-[#bb9034]/30 shadow-lg group">
                    <img
                      src={lifestyleAmenities[amenitySlideIndex].image}
                      alt={lifestyleAmenities[amenitySlideIndex].category}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* CONTENT CONTAINER */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#bb9034]">
                        0{amenitySlideIndex + 1} / 0{lifestyleAmenities.length}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#852541] leading-snug">
                        "{lifestyleAmenities[amenitySlideIndex].tagline}"
                      </h3>
                    </div>

                    <p className="text-gray-700 text-xs sm:text-sm font-light leading-relaxed">
                      {lifestyleAmenities[amenitySlideIndex].description}
                    </p>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => setModalOpen(true)}
                        className="inline-flex items-center gap-2 bg-[#852541] hover:bg-[#bb9034] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 shadow-md cursor-pointer"
                      >
                        <span>Schedule Site Visit</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Dots & Arrows */}
            <div className="flex items-center justify-between pt-2 border-t border-[#bb9034]/20 w-full">
              <div className="flex gap-2">
                {lifestyleAmenities.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAmenityAutoPlaying(false);
                      setAmenitySlideIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      amenitySlideIndex === idx ? "w-8 bg-[#852541]" : "w-2.5 bg-[#bb9034]/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsAmenityAutoPlaying(false);
                    setAmenitySlideIndex((prev) =>
                      prev === 0 ? lifestyleAmenities.length - 1 : prev - 1
                    );
                  }}
                  className="w-10 h-10 rounded-full border border-[#852541] text-[#852541] hover:bg-[#852541] hover:text-white flex items-center justify-center transition cursor-pointer shadow-sm"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => {
                    setIsAmenityAutoPlaying(false);
                    setAmenitySlideIndex((prev) =>
                      prev === lifestyleAmenities.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="w-10 h-10 rounded-full bg-[#852541] text-white hover:bg-[#bb9034] flex items-center justify-center transition cursor-pointer shadow-md"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: TECHNICAL SPECIFICATIONS SLIDER ── */}
      <section className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="w-full space-y-6">
          <div className="text-left border-l-4 border-[#852541] pl-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#bb9034]">
              02 / 03 • Technical Specifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#852541]">
              Engineered Quality Standards
            </h2>
          </div>

          <div
            onMouseEnter={() => setIsSpecAutoPlaying(false)}
            onMouseLeave={() => setIsSpecAutoPlaying(true)}
            className="space-y-6 relative group w-full"
          >
            {/* CATEGORY TAB PILLS */}
            <div className="flex border-b border-[#bb9034]/20 overflow-x-auto no-scrollbar scroll-smooth gap-2 pb-2 w-full">
              {fullSpecs.map((spec, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsSpecAutoPlaying(false);
                    setActiveSpecIndex(idx);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer shrink-0 ${
                    activeSpecIndex === idx
                      ? "bg-[#852541] text-white shadow-md"
                      : "bg-[#FAF7F2] text-[#852541] hover:bg-[#bb9034]/20 border border-[#bb9034]/20"
                  }`}
                >
                  {spec.category}
                </button>
              ))}
            </div>

            {/* SLIDE CONTENT DISPLAY */}
            <div className="relative min-h-[220px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#bb9034]/30 space-y-5 shadow-sm w-full"
                >
                  <div className="flex items-center justify-between border-b border-[#bb9034]/25 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#852541] text-[#c9a874] font-serif font-bold text-xs flex items-center justify-center shadow-md">
                        0{activeSpecIndex + 1}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#852541]">
                        {fullSpecs[activeSpecIndex].category}
                      </h3>
                    </div>

                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#bb9034] flex items-center gap-1">
                      <CheckCircle2 size={13} /> Devang Quality Standard
                    </span>
                  </div>

                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {fullSpecs[activeSpecIndex].items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#bb9034]/20 shadow-xs hover:border-[#852541] hover:shadow-md transition duration-300"
                      >
                        <CheckCircle2 size={16} className="text-[#bb9034] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 font-light leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-[#bb9034]/20 w-full">
              <span className="text-xs font-serif italic text-[#bb9034]">
                Page 0{activeSpecIndex + 1} of 0{fullSpecs.length}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsSpecAutoPlaying(false);
                    setActiveSpecIndex((prev) =>
                      prev === 0 ? fullSpecs.length - 1 : prev - 1
                    );
                  }}
                  className="w-10 h-10 rounded-full border border-[#852541] text-[#852541] hover:bg-[#852541] hover:text-white flex items-center justify-center transition cursor-pointer shadow-sm"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => {
                    setIsSpecAutoPlaying(false);
                    setActiveSpecIndex((prev) =>
                      prev === fullSpecs.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="w-10 h-10 rounded-full bg-[#852541] text-white hover:bg-[#bb9034] flex items-center justify-center transition cursor-pointer shadow-md"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: ARCHITECTURAL FLOOR PLANS SHOWCASE ── */}
      <section className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="w-full space-y-6">
          <div className="text-left border-l-4 border-[#bb9034] pl-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#bb9034]">
              03 / 03 • Architectural Layout Blueprints
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#852541]">
              Floor & Layout Master Plans
            </h2>
            <p className="text-xs text-gray-600 font-light leading-relaxed mt-1">
              Explore 100% Vastu-compliant residential layouts with precise built-up & salable area breakdowns.
            </p>
          </div>

          {/* MAIN FLOOR PLANS CONTAINER */}
          <div className="space-y-6 w-full">
            
            {/* FLOOR LEVEL FILTER TABS */}
            <div className="flex border-b border-[#bb9034]/20 overflow-x-auto no-scrollbar scroll-smooth gap-2.5 pb-2 w-full justify-start sm:justify-center">
              {Object.keys(floorPlansData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePlanKey(key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition cursor-pointer shrink-0 ${
                    activePlanKey === key
                      ? "bg-[#852541] text-white shadow-md"
                      : "bg-[#FAF7F2] text-[#852541] hover:bg-[#bb9034]/20 border border-[#bb9034]/20"
                  }`}
                >
                  {floorPlansData[key].title}
                </button>
              ))}
            </div>

            {/* ACTIVE PLAN CARD DISPLAY */}
            <div className="bg-[#FAF7F2] p-5 sm:p-8 rounded-3xl border border-[#bb9034]/30 space-y-5 shadow-sm w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#bb9034]/20 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#852541]">
                    {floorPlansData[activePlanKey].title}
                  </h3>
                  <p className="text-xs text-gray-600 font-light mt-0.5">
                    {floorPlansData[activePlanKey].subtitle}
                  </p>
                </div>

                <button
                  onClick={() => setLightboxImage(floorPlansData[activePlanKey].image)}
                  className="inline-flex items-center gap-1.5 bg-[#852541] hover:bg-[#bb9034] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition shadow-sm cursor-pointer shrink-0"
                >
                  <Eye size={14} /> Full Screen View
                </button>
              </div>

              {/* BROCHURE PLAN PHOTO DISPLAY */}
              <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
                {/* Left: Interactive Floor Plan Image */}
                <div
                  onClick={() => setLightboxImage(floorPlansData[activePlanKey].image)}
                  className="lg:col-span-7 relative rounded-2xl overflow-hidden border-2 border-[#bb9034]/30 bg-white shadow-md group cursor-pointer"
                >
                  <img
                    src={floorPlansData[activePlanKey].image}
                    alt={floorPlansData[activePlanKey].title}
                    className="w-full h-[260px] sm:h-[340px] object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-bold text-xs transition duration-300 backdrop-blur-xs">
                    <Maximize2 size={18} /> Click to Expand Plan
                  </div>
                </div>

                {/* Right: Area Calculation Breakdown */}
                <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#bb9034]/30 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                    <span className="text-xs font-serif font-bold text-[#852541] uppercase tracking-wider">
                      Area Schedule Matrix
                    </span>
                    <span className="text-[10px] font-bold text-[#bb9034] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#bb9034]/30">
                      Vastu Approved
                    </span>
                  </div>

                  {/* Area Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-gray-200 text-[#852541] font-bold">
                          <th className="py-2">Flat</th>
                          <th className="py-2">Built-up</th>
                          <th className="py-2">Salable Area</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                        {floorPlansData[activePlanKey].table.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#FAF7F2] transition">
                            <td className="py-2 font-bold text-[#852541]">Flat {row.flat}</td>
                            <td className="py-2">{row.built} sq.ft</td>
                            <td className="py-2 font-bold text-[#852541]">{row.salable} sq.ft</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-1.5 border-t border-gray-100 text-[10px] text-gray-500 font-light">
                    <p>* Areas as per MahaRERA architectural guidelines.</p>
                  </div>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full bg-[#852541] hover:bg-[#bb9034] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    <Download size={14} /> Request Plan PDF
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── LOCATION ADVANTAGE: STANDING AT RIDDHI SIDDHI 3 ───────────────── */}
      <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-12 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#bb9034] flex items-center justify-center gap-1.5">
            <Navigation size={13} className="animate-bounce text-[#bb9034]" /> Strategic Location & Neighborhood
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#852541]">
            Where Everything You Need Is Minutes Away
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Positioned in prestigious Pande Layout, just 50 meters off main Khamla Road — experience peaceful living with 360° proximity to Nagpur's top hubs.
          </p>
        </div>

        {/* ── "STANDING AT YOUR DOORSTEP" RADIAL PROXIMITY CARDS ── */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
          
          {/* RADIAL 1: 2-5 MINS WALK */}
          <div className="bg-white rounded-3xl p-6 border-2 border-[#bb9034]/30 shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF7F2] rounded-bl-full flex items-start justify-end p-4 text-[#852541]">
              <Clock size={22} className="text-[#bb9034]" />
            </div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#852541] text-white text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm">
              🚶 2 – 5 Mins Walk
            </span>
            <h3 className="text-xl font-bold text-[#852541] mb-2">
              Daily Conveniences
            </h3>
            <p className="text-xs text-gray-600 font-light mb-4 leading-relaxed">
              Step out for fresh morning groceries, baking essentials, banks & evening walks without touching your car.
            </p>
            <ul className="space-y-2 pt-2 border-t border-[#bb9034]/20 text-xs text-gray-700">
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#bb9034] shrink-0" />
                <span>Khamla Main Retail Market</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#bb9034] shrink-0" />
                <span>SBI, HDFC & ICICI Bank ATMs</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#bb9034] shrink-0" />
                <span>PVR Inox Cinema & Food Outlets</span>
              </li>
            </ul>
          </div>

          {/* RADIAL 2: 5 MINS DRIVE */}
          <div className="bg-white rounded-3xl p-6 border-2 border-[#852541]/40 shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF7F2] rounded-bl-full flex items-start justify-end p-4 text-[#852541]">
              <Train size={22} className="text-[#852541]" />
            </div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#bb9034] text-white text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm">
              🚗 5 Mins Drive
            </span>
            <h3 className="text-xl font-bold text-[#852541] mb-2">
              Education & Transit Hubs
            </h3>
            <p className="text-xs text-gray-600 font-light mb-4 leading-relaxed">
              Seamless commute for children & daily office goers with top schools & rapid metro connectivity nearby.
            </p>
            <ul className="space-y-2 pt-2 border-t border-[#bb9034]/20 text-xs text-gray-700">
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#852541] shrink-0" />
                <span>Somalwar High School & College</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#852541] shrink-0" />
                <span>Orange City Hospital & Research</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#852541] shrink-0" />
                <span>Wardha Road Metro Station</span>
              </li>
            </ul>
          </div>

          {/* RADIAL 3: 10-15 MINS DRIVE */}
          <div className="bg-white rounded-3xl p-6 border-2 border-[#bb9034]/30 shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FAF7F2] rounded-bl-full flex items-start justify-end p-4 text-[#852541]">
              <Plane size={22} className="text-[#bb9034]" />
            </div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#852541] text-white text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm">
              🚘 10 – 15 Mins Drive
            </span>
            <h3 className="text-xl font-bold text-[#852541] mb-2">
              Airport & Mega Malls
            </h3>
            <p className="text-xs text-gray-600 font-light mb-4 leading-relaxed">
              Effortless connectivity to international flights, central railway junction & premier shopping destinations.
            </p>
            <ul className="space-y-2 pt-2 border-t border-[#bb9034]/20 text-xs text-gray-700">
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#bb9034] shrink-0" />
                <span>Nagpur International Airport</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#bb9034] shrink-0" />
                <span>Ajni Junction Railway Station</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={14} className="text-[#bb9034] shrink-0" />
                <span>VNIT Campus & VR Nagpur Mall</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── CATEGORIZED LANDMARK HOTSPOTS SHOWCASE ── */}
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#bb9034]/30 p-6 sm:p-8 space-y-6 shadow-sm w-full max-w-full">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#bb9034]/20 pb-4 w-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#852541]">
                Nearby Key Landmarks & Transit Times
              </h3>
              <p className="text-xs text-gray-500 font-light mt-0.5">
                Filter by category to explore your neighborhood advantages
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex border-b border-[#bb9034]/10 sm:border-b-0 overflow-x-auto no-scrollbar scroll-smooth gap-2 pb-1 sm:pb-0 w-full sm:w-auto shrink-0">
              {[
                { label: "All Hotspots", id: "all" },
                { label: "🎓 Education & Healthcare", id: "education" },
                { label: "✈️ Transit & Airport", id: "transit" },
                { label: "🛒 Shopping & Lifestyle", id: "shopping" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setLocationCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap shrink-0 ${
                    locationCategory === tab.id
                      ? "bg-[#852541] text-white shadow-md"
                      : "bg-white text-[#852541] hover:bg-[#bb9034]/20 border border-[#bb9034]/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Landmarks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {locationLandmarks
              .filter(
                (item) => locationCategory === "all" || item.category === locationCategory
              )
              .map((mark, idx) => {
                const IconComponent = mark.icon;
                return (
                  <a
                    key={idx}
                    href={`https://www.google.com/maps/search/${mark.mapQuery || encodeURIComponent(mark.name + ", Nagpur")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Click to open ${mark.name} in Google Maps`}
                    className="bg-white p-4 rounded-2xl border border-[#bb9034]/25 shadow-xs hover:border-[#852541] hover:shadow-lg transition duration-300 flex items-center justify-between gap-3 group cursor-pointer w-full"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#852541] flex items-center justify-center shadow-sm shrink-0 border border-[#bb9034]/20 group-hover:bg-[#852541] group-hover:text-white transition duration-300">
                        <IconComponent size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-[#852541] group-hover:text-[#bb9034] transition flex items-center gap-1 leading-tight">
                          <span className="truncate">{mark.name}</span>
                          <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#bb9034] shrink-0" />
                        </h4>
                        <p className="text-[10px] text-gray-500 font-light mt-0.5 truncate">{mark.type}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#852541]/10 text-[#852541] text-[10px] font-extrabold shrink-0 border border-[#852541]/20 group-hover:bg-[#852541] group-hover:text-white transition-colors ml-1">
                      {mark.dist}
                    </span>
                  </a>
                );
              })}
          </div>

          {/* Direct Action Buttons & Map Links */}
          <div className="pt-5 border-t border-[#bb9034]/20 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <a
              href="https://maps.google.com/?q=32-A,+Deep+Apartment,+Pande+Layout,+Khamla+Road,+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#852541] hover:bg-[#bb9034] text-white py-3 px-3.5 rounded-2xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <Navigation size={14} className="shrink-0" />
              <span className="truncate">Google Maps Directions</span>
              <ExternalLink size={12} className="shrink-0" />
            </a>

            <a
              href="https://wa.me/919921042899?text=Hello%20Devang%20Developers%2C%20please%20send%20me%20the%20exact%20location%20pin%20for%20Riddhi%20Siddhi%203."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-3.5 rounded-2xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <MessageSquare size={14} className="shrink-0" />
              <span className="truncate">WhatsApp Location Pin</span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-[#bb9034] hover:bg-[#852541] text-white py-3 px-3.5 rounded-2xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <MapPin size={14} className="shrink-0" />
              <span className="truncate">Book Location Tour</span>
            </button>
          </div>

        </div>

        {/* ── "WHY PANDE LAYOUT?" VALUE PROPOSITION BADGES ── */}
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-2xl border border-[#bb9034]/30 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#852541] flex items-center justify-center mx-auto shadow-sm border border-[#bb9034]/30">
              <ShieldCheck size={24} className="text-[#bb9034]" />
            </div>
            <h4 className="text-sm font-bold text-[#852541]">Zero Traffic Noise</h4>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Situated in peaceful Pande Layout, just 50m off Khamla Road — enjoy quiet living away from direct road honking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#bb9034]/30 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#852541] flex items-center justify-center mx-auto shadow-sm border border-[#bb9034]/30">
              <Award size={24} className="text-[#852541]" />
            </div>
            <h4 className="text-sm font-bold text-[#852541]">Top Appreciation Belt</h4>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              South-West Nagpur's most sought-after residential zone with high rental demand and steady capital growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#bb9034]/30 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#852541] flex items-center justify-center mx-auto shadow-sm border border-[#bb9034]/30">
              <Compass size={24} className="text-[#bb9034]" />
            </div>
            <h4 className="text-sm font-bold text-[#852541]">Everything Within Reach</h4>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Top CBSE schools, multi-specialty hospitals, banks, supermarkets & metro station all within 5 minutes.
            </p>
          </div>
        </div>

      </section>

      {/* ── BACK TO PROJECTS PORTFOLIO BUTTON (ABOVE FOOTER, LEFT CORNER) ── */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4 flex justify-start">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/project");
          }}
          className="inline-flex items-center gap-2.5 bg-white hover:bg-[#852541] text-[#852541] hover:text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl border-2 border-[#bb9034]/40 cursor-pointer hover:scale-105 group"
        >
          <ChevronLeft size={18} className="text-[#bb9034] group-hover:text-white transition-colors" />
          <span>Back to Projects Portfolio</span>
        </button>
      </div>

      {/* ── HIGH-RES FLOOR PLAN LIGHTBOX MODAL ──────────────────────────── */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-white rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-[#852541] text-white transition cursor-pointer shadow-lg"
            >
              <X size={20} />
            </button>
            <div className="max-h-[85vh] overflow-auto flex items-center justify-center">
              <img
                src={lightboxImage}
                alt="High-Res Floor Plan Blueprint"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── SITE VISIT & BROCHURE MODAL ──────────────────────────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FAF7F2] rounded-[32px] max-w-md w-full p-8 border border-[#bb9034]/40 relative text-[#852541] shadow-2xl">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition cursor-pointer"
            >
              <X size={18} />
            </button>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 size={50} className="text-[#bb9034] mx-auto" />
                <h3 className="text-2xl font-bold text-[#852541]">Enquiry Received!</h3>
                <p className="text-xs text-gray-600">
                  Thank you, {formData.name}. Our project desk will contact you at {formData.phone} with full brochure PDFs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#bb9034]">
                    Devang Developers LLP
                  </span>
                  <h3 className="text-2xl font-bold text-[#852541]">
                    Request E-Brochure / Visit
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#bb9034]/30 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99210 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#bb9034]/30 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                      Configuration
                    </label>
                    <select
                      value={formData.config}
                      onChange={(e) => setFormData({ ...formData, config: e.target.value })}
                      className="w-full bg-white border border-[#bb9034]/30 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    >
                      <option value="2-bhk">2 BHK Luxury Apartment</option>
                      <option value="3-bhk">3 BHK Premium Residence</option>
                      <option value="commercial">Commercial Outlet</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#852541] hover:bg-[#6B1C33] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  Send Enquiry <ArrowRight size={14} />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
