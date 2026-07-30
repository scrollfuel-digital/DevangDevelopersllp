import React, { useState, useEffect } from "react";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
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
    title: "Riddhi Siddhi 3",
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
    window.scrollTo(0, 0);
  }, []);

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
    <div className="relative bg-[#FAF7F2] text-[#852541] font-sans antialiased min-h-screen selection:bg-[#852541] selection:text-[#FAF7F2]">
      
      {/* ── HERO HEADER BANNER ────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 bg-[#FAF7F2] text-center overflow-hidden">
        <div className="relative max-w-5xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/35 text-[#852541] text-xs uppercase tracking-[0.25em] font-semibold shadow-sm">
            <Sparkles size={14} className="text-[#bb9034] animate-pulse" /> Devang Developers LLP
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]">Gallery</span>
          </h1>

          <p className="text-lg sm:text-2xl font-serif text-[#bb9034] italic font-light max-w-3xl mx-auto leading-relaxed">
            18+ Years of Architectural Landmarks & Quality Developments across Nagpur.
          </p>
        </div>
      </section>

      {/* ── 3D COVERFLOW CAROUSEL & GALLERY GRID ────────────────────────── */}
      <section className="py-10 px-6 max-w-7xl mx-auto space-y-16">
        
        {/* CAROUSEL HEADER CONTROLS */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#bb9034] font-bold block">
              Spotlight Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#852541]">
              Architectural Landmarks
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-[#bb9034]/30 text-[#852541] hover:bg-[#852541] hover:text-white transition shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-[#bb9034]/30 text-[#852541] hover:bg-[#852541] hover:text-white transition shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* 3D CAROUSEL COVERFLOW */}
        <div className="relative h-[480px] md:h-[560px] flex items-center justify-center perspective-[1200px] overflow-hidden">
          {GALLERY_ITEMS.map((item, idx) => {
            let offset = idx - activeSlide;
            if (offset < -Math.floor(totalItems / 2)) offset += totalItems;
            if (offset > Math.floor(totalItems / 2)) offset -= totalItems;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isCenter) setSelectedImageIndex(idx);
                  else setActiveSlide(idx);
                }}
                style={{
                  transform: `translateX(${offset * 260}px) rotateY(${offset * -20}deg) scale(${isCenter ? 1 : 0.82})`,
                  opacity: isCenter ? 1 : 0.65,
                }}
                className={`group absolute transition-all duration-700 ease-out cursor-pointer rounded-[32px] overflow-hidden border flex flex-col justify-between ${
                  isCenter
                    ? "z-30 w-[320px] md:w-[420px] h-[440px] md:h-[520px] border-[#bb9034] shadow-2xl bg-white"
                    : "z-10 w-[270px] md:w-[350px] h-[380px] md:h-[460px] border-[#bb9034]/30 shadow-md bg-white"
                }`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 z-10">
                    <span className="text-[10px] uppercase tracking-widest text-[#c9a874] font-bold flex items-center gap-1">
                      <MapPin size={12} /> {item.location}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-200 line-clamp-2 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ── LIGHTBOX MODAL ──────────────────────────────────────────────── */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-[#c9a874] p-3 rounded-full bg-white/10 hover:bg-[#852541] transition z-50 cursor-pointer"
          >
            <X size={24} />
          </button>

          <button
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev === 0 ? totalItems - 1 : prev - 1
              )
            }
            className="absolute left-6 text-white hover:text-[#c9a874] p-3 rounded-full bg-white/10 hover:bg-[#852541] transition z-50 cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev === totalItems - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-6 text-white hover:text-[#c9a874] p-3 rounded-full bg-white/10 hover:bg-[#852541] transition z-50 cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-4xl w-full text-center space-y-4">
            <img
              src={GALLERY_ITEMS[selectedImageIndex].image}
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              className="max-h-[75vh] w-auto mx-auto rounded-3xl shadow-2xl object-contain border border-[#bb9034]/40"
            />
            <div className="text-white">
              <h3 className="text-2xl font-serif font-bold text-white">
                {GALLERY_ITEMS[selectedImageIndex].title}
              </h3>
              <p className="text-xs text-[#c9a874] mt-1">
                📍 {GALLERY_ITEMS[selectedImageIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}