import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Trees,
  Building2,
  Route,
  Leaf,
  ShieldCheck,
  Droplets,
  Zap,
  Landmark,
  ArrowRight,
  Award,
  Users,
  CalendarClock,
  MapPin,
  Hammer,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

// ── Ongoing project image ─────────────────────────────────────────
import riddhiSiddhiImg from "../assets/projects/riddhisiddhibuilding.jpg";

// ── Completed projects ("Our Footprints") ────────────────────────
import vakratundImg from "../assets/projects/vakratund-heights.jpg";
import vignahartaImg from "../assets/projects/vignaharta-enclave.jpg";
import manomayImg from "../assets/projects/manomay-plaza.jpg";
import shreyasImg from "../assets/projects/shreyas-apartment.jpg";
import kirtiKalyaniImg from "../assets/projects/kirti-kalyani-apartment.jpg";
import avneeshImg from "../assets/projects/avneesh-apartment.jpg";
import gaurisutImg from "../assets/projects/gaurisut-apartment.jpg";
import riddhiSiddhiHeightsImg from "../assets/projects/riddhi-siddhi-heights-dharampeth.jpg";

// ── 3D TILTED CARD COMPONENT ──────────────────────────────────────
const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "400px",
  containerWidth = "100%",
  imageHeight = "100%",
  imageWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 14,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = true,
  className = "",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetXPosition = e.clientX - rect.left - rect.width / 2;
    const offsetYPosition = e.clientY - rect.top - rect.height / 2;
    const rotationXValue = (offsetYPosition / (rect.height / 2)) * -rotateAmplitude;
    const rotationYValue = (offsetXPosition / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationXValue);
    rotateY.set(rotationYValue);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    const velocityY = offsetYPosition - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetYPosition);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    if (showTooltip) opacity.set(1);
  }

  function handleMouseLeave() {
    if (showTooltip) opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    setLastY(0);
  }

  return (
    <figure
      ref={ref}
      className={`relative [perspective:800px] flex flex-col items-center justify-center cursor-pointer ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d] w-full h-full rounded-[30px] overflow-hidden border-2 border-[#bb9034]/60 hover:border-[#852541] bg-white shadow-[0_12px_35px_rgba(133,37,65,0.12)] hover:shadow-[0_25px_60px_rgba(133,37,65,0.25)] transition-all duration-500"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        {/* Top Gold Shimmer Line */}
        <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]" />

        {/* CROPPED LEFT-SIDE BUILDING PHOTO */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#faf7f0]">
          <img
            src={imageSrc}
            alt={altText}
            className="absolute left-0 top-0 h-full w-[180%] max-w-none object-cover object-left transition-transform duration-700"
          />
          {/* Neutral Clean Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute inset-0 z-[2] will-change-transform [transform:translateZ(35px)] flex flex-col justify-between p-5"
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {/* ── CURSOR-FOLLOWING BUILDING NAME TOOLTIP ── */}
      {showTooltip && captionText && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-full px-5 py-2.5 text-xs sm:text-sm font-serif font-bold tracking-wide opacity-0 z-30 hidden sm:block shadow-xl border border-[#c9a874] bg-[#852541] text-[#ffffff]"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          ✨ {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}

// ── DATA ──────────────────────────────────────────────────────────

const stats = [
  { icon: CalendarClock, value: "18+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Families" },
  { icon: Award, value: "2022", label: "Iconic Realtor Award" },
];

const ongoingProjects = [
  {
    name: "129 Riddhi Siddhi Heights",
    location: "Pandey Layout, Khamla Road, Nagpur",
    tag: "Premium Residential Apartments",
    image: riddhiSiddhiImg,
    rera: "RERA Approved",
    reraNo: "P505000XXXX",
    description:
      "A striking high-rise tower crafted for peaceful community living, backed by excellent connectivity to the city's major destinations, quality construction, and thoughtfully designed modern amenities.",
    features: [
      { icon: Building2, label: "High-Rise", sub: "Tower" },
      { icon: ShieldCheck, label: "Gated", sub: "Community" },
      { icon: Route, label: "Wide", sub: "Access Roads" },
      { icon: Leaf, label: "Landscaped", sub: "Green Spaces" },
    ],
    amenities: [
      { icon: ShieldCheck, label: "24/7 Security" },
      { icon: Trees, label: "Avenue Plantation" },
      { icon: Droplets, label: "Water Connection" },
      { icon: Zap, label: "Power Backup" },
      { icon: Landmark, label: "Clubhouse & Amenities" },
    ],
  },
];

const footprints = [
  {
    name: "Vakratund Heights",
    location: "Shivaji Nagar, Nagpur",
    image: vakratundImg,
    badge: "⭐ Prime Landmark",
  },
  {
    name: "Vignaharta Enclave",
    location: "Laxmi Nagar, Nagpur",
    image: vignahartaImg,
    badge: "🏆 Delivered",
  },
  {
    name: "Manomay Plaza",
    location: "Ramdaspeth, Nagpur",
    image: manomayImg,
    badge: "🏢 Commercial Hub",
  },
  {
    name: "Shreyas Apartment",
    location: "Ramdaspeth, Nagpur",
    image: shreyasImg,
    badge: "⭐ Guest Favourite",
  },
  {
    name: "Kirti Kalyani Apartment",
    location: "Laxmi Nagar, Nagpur",
    image: kirtiKalyaniImg,
    badge: "🏆 Delivered",
  },
  {
    name: "Avneesh Apartment",
    location: "Wardha Road, Nagpur",
    image: avneeshImg,
    badge: "✨ Prime Hub",
  },
  {
    name: "Gaurisut Apartment",
    location: "Jaiprakash Nagar, Nagpur",
    image: gaurisutImg,
    badge: "⭐ Top Quality",
  },
  {
    name: "Riddhi Siddhi Heights",
    location: "Dharampeth, Nagpur",
    image: riddhiSiddhiHeightsImg,
    badge: "👑 Iconic Tower",
  },
];

// COLUMN CARDS FOR 2 COLUMNS
const col1Cards = [footprints[0], footprints[2], footprints[4], footprints[6]];
const col2Cards = [footprints[1], footprints[3], footprints[5], footprints[7]];

// ── MAIN PAGE COMPONENT ───────────────────────────────────────────

function Project() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("ongoing");

  const handleRedirectContact = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  // HELPER TO RENDER A 3D CARD
  const renderCard = (p, idxKey) => (
    <div key={idxKey} onClick={handleRedirectContact} className="w-full">
      <TiltedCard
        imageSrc={p.image}
        altText={p.name}
        captionText={p.name}
        containerHeight="450px"
        containerWidth="100%"
        rotateAmplitude={14}
        scaleOnHover={1.05}
        showTooltip={true}
        overlayContent={
          <>
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                {p.badge}
              </span>
              <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
                <ArrowUpRight size={15} />
              </span>
            </div>

            <div className="space-y-3 pt-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 rounded-2xl">
              <p className="flex items-center gap-1.5 text-xs sm:text-sm text-white font-medium">
                <MapPin size={15} className="text-[#c9a874] shrink-0" />
                <span className="leading-snug truncate">{p.location}</span>
              </p>

              <button className="w-full bg-[#852541] hover:bg-[#bb9034] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition duration-300 shadow-md flex items-center justify-center gap-1.5">
                Explore <ArrowRight size={13} />
              </button>
            </div>
          </>
        }
      />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#852541] font-sans antialiased overflow-x-hidden">
      
      {/* INLINE CSS FOR INFINITE VERTICAL SCROLLING */}
      <style>{`
        @keyframes scrollVerticalUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollVerticalDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scroll-up {
          animation: scrollVerticalUp 25s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollVerticalDown 25s linear infinite;
        }
        .scroll-container:hover .animate-scroll-up,
        .scroll-container:hover .animate-scroll-down {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── TOP HERO HEADER BANNER (SEAMLESS MATCHING ABOUT PAGE HEADER) ── */}
      <section className="relative overflow-hidden bg-[#FAF7F2] text-[#852541] pt-36 pb-16 px-6 text-center">
        <div className="relative mx-auto max-w-7xl z-10 space-y-5">
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/35 text-[#852541] text-xs uppercase tracking-[0.25em] font-semibold shadow-sm">
            <Sparkles size={14} className="text-[#bb9034] animate-pulse" /> Devang Developers LLP
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
            Walls of <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]">Happiness</span>
          </h1>

          <p className="text-lg sm:text-2xl font-serif text-[#bb9034] italic font-light max-w-3xl mx-auto leading-relaxed">
            18+ years of delivering luxury residential apartments and commercial landmarks across Nagpur.
          </p>

          {/* Stats strip */}
          <div className="mx-auto pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#852541]">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#bb9034]/30 shadow-sm"
              >
                <Icon size={16} className="text-[#bb9034]" />
                <span className="font-serif font-bold text-[#852541] text-sm">{value}</span>
                <span className="text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN SHOWCASE SECTION ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto space-y-16">
        
        {/* ── TABS CONTROLLER ───────────────────────────────────────── */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-full bg-[#ffffff] border border-[#c9a874]/40 shadow-xl flex items-center gap-2">
            <button
              onClick={() => setTab("ongoing")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-500 cursor-pointer ${
                tab === "ongoing"
                  ? "bg-[#852541] text-[#ffffff] shadow-xl scale-105"
                  : "text-[#852541] hover:bg-[#faf7f0]"
              }`}
            >
              <Hammer size={15} />
              Ongoing Flagship
            </button>
            <button
              onClick={() => setTab("completed")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-500 cursor-pointer ${
                tab === "completed"
                  ? "bg-[#852541] text-[#ffffff] shadow-xl scale-105"
                  : "text-[#852541] hover:bg-[#faf7f0]"
              }`}
            >
              <CheckCircle2 size={15} />
              Our Footprints (8)
            </button>
          </div>
        </div>

        {/* ── ONGOING FLAGSHIP PROJECT ──────────────────────────────── */}
        {tab === "ongoing" && (
          <div className="space-y-12">
            <div className="overflow-hidden rounded-[36px] border border-[#c9a874]/40 bg-[#ffffff] shadow-2xl grid lg:grid-cols-12 items-center">
              
              {/* Left Image */}
              <div className="lg:col-span-6 relative h-[360px] lg:h-[560px] overflow-hidden">
                <img
                  src={ongoingProjects[0].image}
                  alt={ongoingProjects[0].name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(43,134,197,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(43,134,197,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full bg-[#852541]/90 backdrop-blur-md border border-[#c9a874]/50 text-[#ffffff] text-xs font-bold shadow-xl">
                  <ShieldCheck size={16} className="text-[#bb9034]" /> {ongoingProjects[0].rera}
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 p-8 lg:p-12 space-y-5 text-[#852541]">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#bb9034] block">
                  {ongoingProjects[0].tag}
                </span>

                <h3 className="font-serif text-3xl lg:text-5xl font-bold leading-tight">
                  {ongoingProjects[0].name}
                </h3>

                <p className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700">
                  <MapPin size={18} className="text-[#bb9034] shrink-0" /> {ongoingProjects[0].location}
                </p>

                <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                  {ongoingProjects[0].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {ongoingProjects[0].features.map(({ icon: Icon, label, sub }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-[#faf7f0] border border-[#c9a874]/30"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#852541]/10 flex items-center justify-center text-[#852541]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#852541]">{label}</p>
                        <p className="text-[10px] text-gray-500">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-[#852541] hover:bg-[#681c32] text-[#ffffff] py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer">
                    Explore Project <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={handleRedirectContact}
                    className="flex-1 border border-[#bb9034] text-[#bb9034] hover:bg-[#bb9034] hover:text-[#ffffff] py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition duration-300 shadow-sm cursor-pointer"
                  >
                    Book Site Visit
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ── OUR FOOTPRINTS (AUTOMATIC INFINITE VERTICAL SCROLL: 2 COLUMNS) ── */}
        {tab === "completed" && (
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* ── LEFT COLUMN (FIXED STICKY TEXT & CTAS) ── */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bb9034]/20 border border-[#c9a874]/40 text-[#852541] text-xs font-semibold uppercase tracking-[0.2em]">
                <Sparkles size={14} className="text-[#bb9034]" /> Infinite Auto-Scroll Showcase
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#852541] leading-tight">
                Empower Living with Devang
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                18+ years of delivering luxury residential towers and commercial spaces across Nagpur. Cards scroll automatically up and down; hover over any card to pause and tilt!
              </p>

              {/* ACTION PILL BUTTONS */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleRedirectContact}
                  className="group flex items-center gap-3 rounded-full bg-[#852541] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#681c32] shadow-xl cursor-pointer"
                >
                  <span>Book Site Visit</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:rotate-45 transition duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </button>

                <button
                  onClick={handleRedirectContact}
                  className="group flex items-center gap-3 rounded-full border border-[#c9a874] bg-white px-6 py-3 text-xs font-bold text-[#852541] transition hover:bg-[#faf7f0] shadow-md cursor-pointer"
                >
                  <span>Contact Us</span>
                  <span className="w-7 h-7 rounded-full bg-[#852541]/10 flex items-center justify-center text-[#852541] group-hover:rotate-45 transition duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </div>

              {/* AUTO-SCROLL STATUS INDICATOR */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#c9a874]/30">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bb9034] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#bb9034]"></span>
                </span>
                <span className="text-xs text-[#852541] font-semibold">
                  Auto-scrolling up & down (Hover to pause)
                </span>
              </div>

            </div>

            {/* ── RIGHT COLUMN (2 VERTICAL AUTO-SCROLLING CARD COLUMNS - LARGER CARDS) ── */}
            <div className="lg:col-span-7 scroll-container h-[680px] overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              
              {/* Column 1 (Scrolls UP automatically) */}
              <div className="flex flex-col gap-8 animate-scroll-up">
                {[...col1Cards, ...col1Cards].map((p, idx) => renderCard(p, `col1-${idx}`))}
              </div>

              {/* Column 2 (Scrolls DOWN automatically) */}
              <div className="flex flex-col gap-8 animate-scroll-down">
                {[...col2Cards, ...col2Cards].map((p, idx) => renderCard(p, `col2-${idx}`))}
              </div>

            </div>

          </div>
        )}

      </section>
    </div>
  );
}

export default Project;