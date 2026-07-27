import React, { useState, useEffect } from "react";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  MoreHorizontal,
  Expand,
  ArrowRight,
} from "lucide-react";

// REAL PROJECT IMAGES
import vakratundImg from "../assets/projects/vakratund-heights.jpg";
import vignahartaImg from "../assets/projects/vignaharta-enclave.jpg";
import manomayImg from "../assets/projects/manomay-plaza.jpg";
import shreyasImg from "../assets/projects/shreyas-apartment.jpg";
import kirtiKalyaniImg from "../assets/projects/kirti-kalyani-apartment.jpg";
import avneeshImg from "../assets/projects/avneesh-apartment.jpg";
import gaurisutImg from "../assets/projects/gaurisut-apartment.jpg";
import riddhiSiddhiHeightsImg from "../assets/projects/riddhi-siddhi-heights-dharampeth.jpg";
import riddhiSiddhiImg from "../assets/projects/riddhisiddhibuilding.jpg";
import mangalmurtiImg from "../assets/projects/mangalmurti-residency.jpg";

// REAL PROJECTS DATA
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Vakratund Heights",
    location: "Shivaji Nagar, Nagpur",
    desc: "A landmark high-rise residential tower offering spacious living and modern amenities.",
    image: vakratundImg,
  },
  {
    id: 2,
    title: "Vignaharta Enclave",
    location: "Laxmi Nagar, Nagpur",
    desc: "Premium residential apartments crafted for peaceful family living.",
    image: vignahartaImg,
  },
  {
    id: 3,
    title: "Manomay Plaza",
    location: "Ramdaspeth, Nagpur",
    desc: "Contemporary commercial plaza with modern architectural design.",
    image: manomayImg,
  },
  {
    id: 4,
    title: "Shreyas Apartment",
    location: "Ramdaspeth, Nagpur",
    desc: "Luxury boutique residences situated in prime Ramdaspeth area.",
    image: shreyasImg,
  },
  {
    id: 5,
    title: "Kirti Kalyani Apartment",
    location: "Laxmi Nagar, Nagpur",
    desc: "Thoughtfully built residential spaces with superb connectivity.",
    image: kirtiKalyaniImg,
  },
  {
    id: 6,
    title: "Avneesh Apartment",
    location: "Wardha Road, Nagpur",
    desc: "Modern apartments offering premium comfort along Wardha Road.",
    image: avneeshImg,
  },
  {
    id: 7,
    title: "Gaurisut Apartment",
    location: "Jaiprakash Nagar, Nagpur",
    desc: "Serene community living designed with high quality construction.",
    image: gaurisutImg,
  },
  {
    id: 8,
    title: "Riddhi Siddhi Heights",
    location: "Dharampeth, Nagpur",
    desc: "Iconic luxury tower located in prestigious Dharampeth neighbourhood.",
    image: riddhiSiddhiHeightsImg,
  },
  {
    id: 9,
    title: "129 Riddhi Siddhi Heights",
    location: "Khamla Road, Nagpur",
    desc: "A striking high-rise tower crafted for modern lifestyle amenities.",
    image: riddhiSiddhiImg,
  },
  {
    id: 10,
    title: "Mangalmurti Residency",
    location: "Parsodi, Wardha Road, Nagpur",
    desc: "Innovative group housing development by Devprath Constructions LLP.",
    image: mangalmurtiImg,
  },
];

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const totalItems = GALLERY_ITEMS.length;

  useEffect(() => {
    document.title = "Project Gallery | Devang Developers Nagpur";
  }, []);

  // ── AUTOMATIC TIMER (SLIDES ONE BY ONE EVERY 3.5 SECONDS) ──────────
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalItems);
    }, 3500);

    return () => clearInterval(timer);
  }, [totalItems]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalItems);
  };

  return (
    <div className="relative bg-[#121110] text-white font-sans antialiased overflow-x-hidden min-h-screen pb-20">
      
      {/* ── TOP HEADER BANNER ───────────────────────────────────────── */}
      <section className="relative bg-[#143526] text-white pt-36 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B98D45]/20 border border-[#B98D45]/40 text-[#E5B582] text-xs font-semibold uppercase tracking-widest shadow-md mb-1">
            <Sparkles size={14} className="text-[#B98D45]" /> 3D Cover Flow Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide">
            Our Gallery
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Explore our landmark residential apartments, commercial plazas, and high-rise towers across Nagpur.
          </p>
        </div>
      </section>

      {/* ── 3D COVERFLOW CAROUSEL STAGE (LARGER CARDS) ────────────────── */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header Controls */}
        <div className="flex items-center justify-between px-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B98D45] block">
              3D Interactive Showcase
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Project Cover Flow
            </h2>
          </div>

          {/* Navigation Controls (< >) */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-[#B98D45] text-white shadow-lg flex items-center justify-center transition cursor-pointer active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-[#B98D45] text-white shadow-lg flex items-center justify-center transition cursor-pointer active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* 3D CAROUSEL COVERFLOW WRAPPER (INCREASED HEIGHT TO 640px) */}
        <div className="relative h-[540px] md:h-[640px] flex items-center justify-center perspective-[1200px] overflow-hidden">
          
          {GALLERY_ITEMS.map((item, idx) => {
            let offset = idx - activeSlide;
            if (offset < -Math.floor(totalItems / 2)) offset += totalItems;
            if (offset > Math.floor(totalItems / 2)) offset -= totalItems;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const translateX = offset * 250;
            const rotateY = offset * -25;
            const scale = isCenter ? 1 : 0.84 - Math.abs(offset) * 0.05;
            const opacity = isCenter ? 1 : 0.65 - Math.abs(offset) * 0.15;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isCenter) setSelectedImageIndex(idx);
                  else setActiveSlide(idx);
                }}
                className={`group absolute transition-all duration-700 ease-out cursor-pointer rounded-3xl overflow-hidden border backdrop-blur-md flex flex-col justify-between ${
                  isCenter
                    ? "z-30 w-[340px] md:w-[440px] h-[500px] md:h-[600px] border-white/40 shadow-[0_35px_80px_rgba(0,0,0,0.85)] bg-black/40"
                    : "z-10 w-[290px] md:w-[370px] h-[440px] md:h-[530px] border-white/20 shadow-xl bg-black/50"
                }`}
                style={{
                  transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: opacity,
                }}
              >
                {/* ── LEFT-SIDE BUILDING CROPPING CONTAINER ── */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute left-0 top-0 h-full w-[180%] max-w-none object-cover object-left transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* TOP BUTTONS BAR */}
                <div className="relative z-20 p-5 flex items-center justify-between">
                  {isCenter ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(idx);
                      }}
                      className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg hover:bg-white/30 transition"
                    >
                      <Expand size={14} /> Expand
                    </button>
                  ) : (
                    <span />
                  )}
                  <span className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <MoreHorizontal size={18} />
                  </span>
                </div>

                {/* ── BUILDING NAME IN THE EXACT MIDDLE (DISAPPEARS ON HOVER) ── */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:opacity-0 group-hover:pointer-events-none z-20">
                  <div className="bg-white/95 backdrop-blur-md px-7 py-6 rounded-2xl border border-white/40 shadow-2xl space-y-2 max-w-[85%] transform transition duration-500 group-hover:scale-95">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#143526] leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="flex items-center justify-center gap-1.5 text-xs md:text-sm text-[#54152B] font-semibold border-t border-gray-100 pt-2.5">
                      <ArrowRight size={15} className="text-[#B98D45]" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>

                {/* BOTTOM INDEX INDICATOR */}
                <div className="relative z-20 p-5 text-right">
                  <span className="text-xs text-white/80 font-mono bg-black/40 px-3.5 py-1.5 rounded-full border border-white/20">
                    {idx + 1} / {totalItems}
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* PAGINATION DOTS (• • •) */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {GALLERY_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeSlide === idx ? "w-8 bg-[#B98D45]" : "w-2.5 bg-white/20"
              }`}
            />
          ))}
        </div>

      </section>

      {/* ── LIGHTBOX MODAL PREVIEW ON CLICK ────────────────────────── */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <X size={26} />
          </button>

          <button
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev === 0 ? totalItems - 1 : prev - 1
              )
            }
            className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev === totalItems - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <ChevronRight size={30} />
          </button>

          <div className="max-w-5xl w-full text-center space-y-4">
            <img
              src={GALLERY_ITEMS[selectedImageIndex].image}
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl object-contain border border-white/20"
            />
            <div className="text-white">
              <h3 className="text-2xl font-serif font-bold text-white">
                {GALLERY_ITEMS[selectedImageIndex].title}
              </h3>
              <p className="text-xs text-[#E5B582] mt-1">
                📍 {GALLERY_ITEMS[selectedImageIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}