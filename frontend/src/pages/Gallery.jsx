import React, { useState, useEffect } from "react";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  Sparkles,
} from "lucide-react";

// IMPORT ALL REAL PROJECT IMAGES FROM ASSETS
import riddhiSiddhiImg from "../assets/projects/riddhisiddhibuilding.jpg";
import mangalmurtiImg from "../assets/projects/mangalmurti-residency.jpg";
import gaurisutImg from "../assets/projects/gaurisut-apartment.jpg";
import avneeshImg from "../assets/projects/avneesh-apartment.jpg";
import kirtiKalyaniImg from "../assets/projects/kirti-kalyani-apartment.jpg";
import riddhiSiddhiHeightsImg from "../assets/projects/riddhi-siddhi-heights-dharampeth.jpg";
import manomayImg from "../assets/projects/manomay-plaza.jpg";
import shreyasImg from "../assets/projects/shreyas-apartment.jpg";
import vakratundImg from "../assets/projects/vakratund-heights.jpg";
import vignahartaImg from "../assets/projects/vignaharta-enclave.jpg";

// COMPLETE 10 REAL PROJECTS GALLERY DATA
const GALLERY_ITEMS = [
  {
    id: 1,
    category: "residential",
    title: "Gaurisut Apartment",
    location: "Jaiprakash Nagar, Nagpur",
    project: "Gaurisut Apartment",
    image: gaurisutImg,
  },
  {
    id: 2,
    category: "residential",
    title: "Avneesh Apartment",
    location: "Wardha Road, Nagpur",
    project: "Avneesh Apartment",
    image: avneeshImg,
  },
  {
    id: 3,
    category: "residential",
    title: "Kirti Kalyani Apartment",
    location: "Laxmi Nagar, Nagpur",
    project: "Kirti Kalyani Apartment",
    image: kirtiKalyaniImg,
  },
  {
    id: 4,
    category: "highrise",
    title: "Riddhi Siddhi Heights",
    location: "Dharampeth, Nagpur",
    project: "Riddhi Siddhi Heights",
    image: riddhiSiddhiHeightsImg,
  },
  {
    id: 5,
    category: "commercial",
    title: "Manomay Plaza",
    location: "Ramdaspeth, Nagpur",
    project: "Manomay Plaza",
    image: manomayImg,
  },
  {
    id: 6,
    category: "residential",
    title: "Mangalmurti Residency",
    location: "Friends Colony, Nagpur",
    project: "Mangalmurti Residency",
    image: mangalmurtiImg,
  },
  {
    id: 7,
    category: "residential",
    title: "Shreyas Apartment",
    location: "Ramdaspeth, Nagpur",
    project: "Shreyas Apartment",
    image: shreyasImg,
  },
  {
    id: 8,
    category: "highrise",
    title: "Vakratund Heights",
    location: "Shivaji Nagar, Nagpur",
    project: "Vakratund Heights",
    image: vakratundImg,
  },
  {
    id: 9,
    category: "residential",
    title: "Vignaharta Enclave",
    location: "Laxmi Nagar, Nagpur",
    project: "Vignaharta Enclave",
    image: vignahartaImg,
  },
  {
    id: 10,
    category: "highrise",
    title: "129 Riddhi Siddhi Heights",
    location: "Pandey Layout, Khamla Road, Nagpur",
    project: "129 Riddhi Siddhi Heights",
    image: riddhiSiddhiImg,
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // HERO SLIDER STATE
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "Project Gallery | Devang Developers Nagpur";
  }, []);

  // Auto-play Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handlePrevModal = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNextModal = () => {
    setSelectedImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative bg-[#FAF6F0] text-[#173629] font-sans antialiased overflow-x-hidden pb-20">
      
      {/* ── TOP HEADER ────────────────────────────────────────────── */}
      <section className="relative bg-[#143526] text-white pt-36 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide">
            Our Gallery
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in our portfolio of modern residential apartments, premium commercial developments, and landmark towers in Nagpur.
          </p>
        </div>
      </section>

      {/* ── FEATURED PROJECT SLIDER / CAROUSEL ──────────────────────── */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#B98D45]/30 min-h-[380px] md:min-h-[460px] flex items-center bg-[#143526]">
          
          {/* SLIDES */}
          {GALLERY_ITEMS.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              
              {/* Slide Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-20 space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B98D45]/80 text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles size={12} /> {slide.project}
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold">
                  {slide.title}
                </h2>
                <p className="flex items-center gap-1.5 text-xs text-gray-200">
                  <MapPin size={13} className="text-[#B98D45]" /> {slide.location}
                </p>
              </div>
            </div>
          ))}

          {/* SLIDER ARROWS */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 z-30 p-2.5 rounded-full bg-black/50 hover:bg-[#B98D45] text-white transition backdrop-blur-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-4 z-30 p-2.5 rounded-full bg-black/50 hover:bg-[#B98D45] text-white transition backdrop-blur-md"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* SLIDER PAGINATION DOTS */}
          <div className="absolute bottom-4 right-6 z-30 flex items-center gap-2">
            {GALLERY_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-6 bg-[#B98D45]" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── MAIN GALLERY SECTION ───────────────────────────────────── */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        
        {/* FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Projects (10)" },
            { id: "residential", label: "Residential Apartments" },
            { id: "highrise", label: "High-Rise Towers" },
            { id: "commercial", label: "Commercial" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition duration-300 ${
                filter === tab.id
                  ? "bg-[#5c1a2e] text-white shadow-lg"
                  : "bg-white text-[#173629] border border-gray-200 hover:border-[#b98d45]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PROJECT GRID CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-[#ece0cd] cursor-pointer hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5c1a2e] via-[#5c1a2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a961] font-bold mb-1">
                    {item.project}
                  </span>
                  <h3 className="text-xl font-serif font-bold leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-gray-200 mb-3">
                    <MapPin size={13} className="text-[#c9a961]" /> {item.location}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/90">
                    <Maximize2 size={15} className="text-[#c9a961]" /> Click to Preview
                  </div>
                </div>
              </div>

              {/* Static Card Info Footer */}
              <div className="p-5 bg-white border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#5c1a2e]">
                    {item.title}
                  </h4>
                  <p className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin size={13} className="text-[#a97c3a]" /> {item.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#faf7f0] flex items-center justify-center text-[#a97c3a] group-hover:bg-[#5c1a2e] group-hover:text-white transition">
                  <Building2 size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ────────────────────────────────────────── */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <X size={26} />
          </button>

          <button
            onClick={handlePrevModal}
            className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={handleNextModal}
            className="absolute right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <ChevronRight size={30} />
          </button>

          <div className="max-w-5xl w-full text-center space-y-4">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl object-contain border border-white/20"
            />
            <div className="text-white">
              <h3 className="text-2xl font-serif font-bold text-white">
                {filteredItems[selectedImageIndex].title}
              </h3>
              <p className="text-xs text-[#E5B582] mt-1">
                📍 {filteredItems[selectedImageIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}