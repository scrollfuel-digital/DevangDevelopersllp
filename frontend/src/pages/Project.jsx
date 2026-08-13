import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
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
  X,
  ChevronLeft,
  ChevronRight,
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
  showTooltip = false,
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
  }

  function handleMouseLeave() {
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

        {/* CROPPED LEFT BUILDING PHOTO (EXCLUDES EMBEDDED BROCHURE TEXT ON RIGHT) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#faf7f0]">
          <img
            src={imageSrc}
            alt={altText}
            className="absolute left-0 top-0 h-full w-[185%] max-w-none object-cover object-left transition-transform duration-700"
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
    </figure>
  );
}

// ── DATA ──────────────────────────────────────────────────────────

const stats = [
  { icon: CalendarClock, value: "25+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Families" },
  { icon: Award, value: "2022", label: "Iconic Realtor Award" },
];

const ongoingProjects = [
  {
    name: "Riddhi Siddhi ~ III ~",
    location: "London Street, Nagpur",
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
    id: "vakratund-heights",
    name: "Vakratund Heights",
    titleLine1: "VAKRATUND",
    titleLine2: "HEIGHTS",
    location: "Shivaji Nagar, Nagpur",
    image: vakratundImg,
    badge: "⭐ Prime Landmark",
    year: "2018",
    floors: "G+6 Residential",
    description:
      "Vakratund Heights is an iconic residential landmark in Shivaji Nagar featuring superior structural design and peaceful family living.",
  },
  {
    id: "vignaharta-enclave",
    name: "Vignaharta Enclave",
    titleLine1: "VIGNAHARTA",
    titleLine2: "ENCLAVE",
    location: "Laxmi Nagar, Nagpur",
    image: vignahartaImg,
    badge: "🏆 Delivered",
    year: "2019",
    floors: "G+7 Luxury Residences",
    description:
      "Vignaharta Enclave offers luxury G+7 residential apartments crafted with civil engineering excellence in prime Laxmi Nagar.",
  },
  {
    id: "manomay-plaza",
    name: "Manomay Plaza",
    titleLine1: "MANOMAY",
    titleLine2: "PLAZA",
    location: "Ramdaspeth, Nagpur",
    image: manomayImg,
    badge: "🏢 Commercial Hub",
    year: "2020",
    floors: "Commercial Complex",
    description:
      "A premier commercial landmark in Ramdaspeth delivering modern business infrastructure and premium commercial spaces.",
  },
  {
    id: "shreyas-apartment",
    name: "Shreyas Apartment",
    titleLine1: "SHREYAS",
    titleLine2: "APARTMENT",
    location: "Ramdaspeth, Nagpur",
    image: shreyasImg,
    badge: "⭐ Guest Favourite",
    year: "2017",
    floors: "G+5 Residential",
    description:
      "Thoughtfully planned G+5 residential homes combining comfort, safety, and enduring architectural quality in Ramdaspeth.",
  },
  {
    id: "kirti-kalyani-apartment",
    name: "Kirti Kalyani Apartment",
    titleLine1: "KIRTI KALYANI",
    titleLine2: "APARTMENT",
    location: "Laxmi Nagar, Nagpur",
    image: kirtiKalyaniImg,
    badge: "🏆 Delivered",
    year: "2021",
    floors: "G+7 Premium Flats",
    description:
      "Delivering uncompromised layout planning and lasting civil engineering quality in prime Laxmi Nagar, Nagpur.",
  },
  {
    id: "avneesh-apartment",
    name: "Avneesh Apartment",
    titleLine1: "AVNEESH",
    titleLine2: "APARTMENT",
    location: "Wardha Road, Nagpur",
    image: avneeshImg,
    badge: "✨ Prime Hub",
    year: "2016",
    floors: "G+6 Residential",
    description:
      "A serene residential development designed with modern lifestyle amenities and seamless road connectivity on Wardha Road.",
  },
  {
    id: "gaurisut-apartment",
    name: "Gaurisut Apartment",
    titleLine1: "GAURISUT",
    titleLine2: "APARTMENT",
    location: "Jaiprakash Nagar, Nagpur",
    image: gaurisutImg,
    badge: "⭐ Top Quality",
    year: "2022",
    floors: "G+6 Residential",
    description:
      "Gaurisut Apartment stands as a benchmark of civil construction standards and modern living in Jaiprakash Nagar.",
  },
  {
    id: "riddhi-siddhi-heights",
    name: "Riddhi Siddhi Heights",
    titleLine1: "RIDDHI SIDDHI",
    titleLine2: "HEIGHTS",
    location: "Dharampeth, Nagpur",
    image: riddhiSiddhiHeightsImg,
    badge: "👑 Iconic Tower",
    year: "2023",
    floors: "High-Rise Tower",
    description:
      "A high-rise tower landmark in Dharampeth designed for luxury residential living and timeless architectural appeal.",
  },
];

// COLUMN CARDS FOR 2 COLUMNS
const col1Cards = [footprints[0], footprints[2], footprints[4], footprints[6]];
const col2Cards = [footprints[1], footprints[3], footprints[5], footprints[7]];

// ── MAIN PAGE COMPONENT ───────────────────────────────────────────

function Project() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState(() => {
    if (location.state?.tab) return location.state.tab;
    const params = new URLSearchParams(location.search);
    return params.get("tab") || "completed";
  });
  const [activeIdx, setActiveIdx] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [highlightedProjectId, setHighlightedProjectId] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // 1-BY-1 CONTINUOUS AUTO-ADVANCING CAROUSEL TIMER
  useEffect(() => {
    if (tab !== "completed" || isCarouselHovered) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === footprints.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [tab, isCarouselHovered]);

  const handleRedirectContact = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  const handleRedirectRiddhiSiddhi = (e) => {
    e?.stopPropagation();
    window.scrollTo(0, 0);
    navigate("/project/riddhi-siddhi-3");
  };

  const handleExploreFootprint = (id, e) => {
    e?.stopPropagation();
    setHighlightedProjectId(id);
    const targetElement = document.getElementById(`completed-editorial-${id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // HELPER TO RENDER A 3D CARD
  const renderCard = (p, idxKey) => (
    <div key={idxKey} onClick={(e) => handleExploreFootprint(p.id, e)} className="w-full">
      <TiltedCard
        imageSrc={p.image}
        altText={p.name}
        captionText={p.name}
        containerHeight="320px"
        containerWidth="100%"
        imageHeight="320px"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showTooltip={true}
        displayOverlayContent={true}
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

              <button
                onClick={(e) => handleExploreFootprint(p.id, e)}
                className="w-full bg-[#852541] hover:bg-[#bb9034] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Explore Landmark <ArrowRight size={13} />
              </button>
            </div>
          </>
        }
      />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#852541] font-sans antialiased overflow-x-hidden pb-48 sm:pb-60 lg:pb-72">

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
      <section className="relative overflow-hidden bg-[#FAF7F2] text-[#852541] pt-44 sm:pt-52 md:pt-56 lg:pt-60 pb-10 px-6 text-center">
        <div className="relative mx-auto max-w-7xl z-10 space-y-4">

          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/35 text-[#852541] text-xs uppercase tracking-[0.25em] font-semibold shadow-sm">
            <Sparkles size={14} className="text-[#bb9034] animate-pulse" /> Devang Developers LLP
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
            Walls of <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]">Happiness</span>
          </h1>

          <p className="text-lg sm:text-2xl font-sans text-[#bb9034] font-bold max-w-3xl mx-auto leading-relaxed">
            25+ years of delivering luxury residential apartments and commercial landmarks across Nagpur.
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
      <section className="relative overflow-hidden py-8 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto space-y-10">

        {/* ── HIGHLIGHTED CAPSULE TAB SWITCHER ── */}
        <div className="flex justify-center mt-6 mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 sm:p-2 rounded-full bg-white/95 backdrop-blur-md border border-[#bb9034]/35 shadow-xl items-center gap-2 sm:gap-4">

            {/* Tab 1: Our Footprints */}
            <button
              onClick={() => setTab("completed")}
              className={`relative flex items-center gap-2.5 rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer overflow-hidden ${tab === "completed"
                  ? "bg-gradient-to-r from-[#852541] via-[#6e1e35] to-[#852541] text-white border border-[#bb9034] ring-2 ring-[#bb9034]/40 shadow-[0_8px_25px_rgba(133,37,65,0.45)] scale-[1.04]"
                  : "text-[#852541] hover:bg-[#852541]/10"
                }`}
            >
              {tab === "completed" && (
                <div className="absolute top-1 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#bb9034] to-transparent" />
              )}
              <CheckCircle2 size={16} className={tab === "completed" ? "text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "text-[#852541]"} />
              <span>Our Footprints ({footprints.length})</span>
            </button>

            {/* Tab 2: Ongoing Project */}
            <button
              onClick={() => setTab("ongoing")}
              className={`relative flex items-center gap-2.5 rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer overflow-hidden ${tab === "ongoing"
                  ? "bg-gradient-to-r from-[#852541] via-[#6e1e35] to-[#852541] text-white border border-[#bb9034] ring-2 ring-[#bb9034]/40 shadow-[0_8px_25px_rgba(133,37,65,0.45)] scale-[1.04]"
                  : "text-[#852541] hover:bg-[#852541]/10"
                }`}
            >
              {tab === "ongoing" && (
                <div className="absolute top-1 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#bb9034] to-transparent" />
              )}
              <Hammer size={16} className={tab === "ongoing" ? "text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" : "text-[#852541]"} />
              <span>Ongoing Project</span>
            </button>

          </div>
        </div>

        {/* ── ANIMATED TAB CONTENT SWITCHING ──────────────────────────── */}
        <AnimatePresence mode="wait">
          {tab === "ongoing" ? (
            <motion.div
              key="ongoing-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-12"
            >
              <div className="overflow-hidden rounded-[36px] border border-[#c9a874]/40 bg-[#ffffff] shadow-2xl grid lg:grid-cols-12 items-center">

                {/* Left Image */}
                <div className="lg:col-span-6 relative h-[360px] lg:h-[560px] overflow-hidden">
                  <img
                    src={ongoingProjects[0].image}
                    alt={ongoingProjects[0].name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(43,134,197,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(43,134,197,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                  <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full bg-[#852541]/90 backdrop-blur-md border border-[#c9a874]/50 text-[#ffffff] text-xs font-bold shadow-xl">
                    <ShieldCheck size={16} className="text-[#bb9034]" /> {ongoingProjects[0].rera}
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-6 p-4 sm:p-8 lg:p-12 space-y-5 text-[#852541] w-full max-w-full overflow-hidden ">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#bb9034] block">
                    {ongoingProjects[0].tag}
                  </span>

                  <h3 className="font-serif text-3xl lg:text-5xl font-bold leading-tight">
                    {ongoingProjects[0].name}
                  </h3>

                  <p className="flex items-center gap-2 text-sm sm:text-lg font-medium text-gray-700">
                    <MapPin size={18} className="text-[#bb9034] shrink-0" /> <span className="break-words">{ongoingProjects[0].location}</span>
                  </p>

                  <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed break-words">
                    {ongoingProjects[0].description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ongoingProjects[0].features.map(({ icon: Icon, label, sub }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-[#faf7f0] border border-[#c9a874]/30"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#852541]/10 flex items-center justify-center text-[#852541] shrink-0">
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
                  <div className="pt-3 flex flex-col sm:flex-row gap-2.5 w-full">
                    <button
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate("/project/riddhi-siddhi-3");
                      }}
                      className="w-full sm:flex-1 bg-[#852541] hover:bg-[#681c32] text-[#ffffff] py-3.5 px-4 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-widest transition duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer text-center"
                    >
                      <span>Explore Project</span> <ArrowRight size={14} className="shrink-0" />
                    </button>
                    <button
                      onClick={handleRedirectContact}
                      className="w-full sm:flex-1 border border-[#bb9034] text-[#bb9034] hover:bg-[#bb9034] hover:text-[#ffffff] py-3.5 px-4 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-widest transition duration-300 shadow-sm cursor-pointer text-center"
                    >
                      <span>Book Site Visit</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="completed-tab"
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-16"
            >
              {/* ── OUR FOOTPRINTS (AUTOMATIC INFINITE VERTICAL SCROLL: 2 COLUMNS) ── */}
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
                    With over **25+ years of experience**, we have been delivering thoughtfully designed **luxury residential towers and premium commercial spaces across Nagpur**. Our projects combine contemporary architecture, quality construction, strategic locations, and timeless design to create spaces that offer lasting value and an elevated lifestyle.From elegant residences to modern commercial developments, every project reflects our commitment to **quality, innovation, transparency, and customer satisfaction**. Explore our journey through the cards below — they scroll automatically up and down, while **hovering over any card pauses the movement and reveals a subtle tilt effect** for an interactive experience.
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

              {/* ── ALL 8 COMPLETED LANDMARKS EDITORIAL SHOWCASE (MATCHING USER REFERENCE DESIGN) ── */}
              <div id="completed-editorial-section" className="pt-16 border-t border-[#bb9034]/30 space-y-12">
                
                <div className="text-center space-y-3 px-6">
                  <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/35 text-[#852541] text-[11px] font-extrabold uppercase tracking-[0.25em] shadow-sm">
                    <Sparkles size={13} className="text-[#bb9034] animate-pulse" /> Delivered Architectural Legacy
                  </span>

                  <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
                    C O M P L E T E D &nbsp; L A N D M A R K S
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 font-sans font-medium max-w-2xl mx-auto leading-relaxed">
                    Explore our complete portfolio of delivered residential and commercial developments across Nagpur.
                  </p>
                </div>

                {/* 8 HORIZONTAL EDITORIAL PROJECT CARDS (MATCHING USER REFERENCE IMAGE 1) */}
                <div className="space-y-8 max-w-6xl mx-auto px-4 sm:px-6">
                  {footprints.map((item, idx) => {
                    const isSelected = highlightedProjectId === item.id;
                    return (
                      <motion.div
                        key={item.id}
                        id={`completed-editorial-${item.id}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        onClick={() => setHighlightedProjectId(item.id)}
                        className={`bg-[#FAF7F2] rounded-[32px] p-4 sm:p-6 lg:p-8 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center group cursor-pointer border-2 ${
                          isSelected
                            ? "border-[#bb9034] ring-4 ring-[#bb9034]/40 shadow-[0_25px_60px_rgba(133,37,65,0.3)] scale-[1.01]"
                            : "border-[#bb9034]/30 shadow-lg hover:shadow-2xl hover:border-[#bb9034]"
                        }`}
                      >
                        {/* LEFT PHOTO COLUMN */}
                        <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden aspect-[16/10] bg-black shadow-md border border-[#bb9034]/20 w-full">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="absolute left-0 top-0 h-full w-[185%] max-w-none object-cover object-left transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          
                          <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                            {item.badge}
                          </span>
                        </div>

                        {/* RIGHT EDITORIAL CONTENT COLUMN */}
                        <div className="lg:col-span-5 space-y-4 text-left px-2 sm:px-4">
                          <span className="text-[#bb9034] font-mono text-xs sm:text-sm font-extrabold tracking-widest block">
                            0{idx + 1} / 08
                          </span>

                          <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#852541] leading-tight group-hover:text-[#bb9034] transition-colors">
                            "{item.name}"
                          </h3>

                          <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-[#852541]">
                            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#bb9034]/30 shadow-xs">
                              <MapPin size={13} className="text-[#bb9034]" /> {item.location}
                            </span>
                            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#bb9034]/30 shadow-xs font-mono">
                              <CheckCircle2 size={13} className="text-[#bb9034]" /> Delivered {item.year}
                            </span>
                          </div>

                          <div className="pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRedirectContact();
                              }}
                              className="bg-[#852541] hover:bg-[#bb9034] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2.5 cursor-pointer group-hover:shadow-xl"
                            >
                              <span>Schedule Site Visit</span>
                              <ArrowRight size={15} className="text-white group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/50 p-3 rounded-full border border-white/30 backdrop-blur-md transition cursor-pointer"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Completed Landmark Elevation"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border-2 border-[#bb9034]/60 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Project;