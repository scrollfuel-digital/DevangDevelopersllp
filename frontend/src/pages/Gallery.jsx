import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// GALLERY ITEMS DATA
const GALLERY_ITEMS = [
  {
    id: 1,
    category: "architecture",
    title: "Riddhi Siddhi Grand Elevation",
    project: "Riddhi Siddhi",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    category: "interiors",
    title: "Luxury Living Room Suite",
    project: "Mangalmurti Residency",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    category: "amenities",
    title: "Resort-Style Swimming Pool",
    project: "Wing C 129 RSH",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    category: "interiors",
    title: "Designer Modular Kitchen",
    project: "Riddhi Siddhi",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    category: "architecture",
    title: "Mangalmurti Residential Facade",
    project: "Mangalmurti Residency",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    category: "amenities",
    title: "Landscaped Central Green Courtyard",
    project: "Wing C 129 RSH",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    category: "interiors",
    title: "Master Suite & Panoramic Balcony",
    project: "Mangalmurti Residency",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    category: "architecture",
    title: "Commercial & Luxury Wing C 129 RSH",
    project: "Wing C 129 RSH",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    category: "amenities",
    title: "Fully Equipped Fitness Center",
    project: "Riddhi Siddhi",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    document.title = "Project Gallery | Devang Developers Nagpur";
  }, []);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative bg-[#FAF6F0] text-[#173629] font-sans antialiased overflow-x-hidden pb-20">
      {/* GALLERY HERO */}
      <section className="relative pt-24 pb-20 px-6 bg-[#173629] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#b98d45]/20 border border-[#b98d45]/40 text-[#E2C38A] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
            <Sparkles size={14} /> Architectural Visual Showcase
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Our Project Gallery
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Immerse yourself in our portfolio of modern residential apartments, premium commercial developments, and lifestyle amenities in Nagpur.
          </p>
        </div>
      </section>

      {/* MAIN GALLERY SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* FILTER CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {[
            { id: "all", label: "All Works" },
            { id: "architecture", label: "Architecture & Elevations" },
            { id: "interiors", label: "Luxury Interiors" },
            { id: "amenities", label: "Amenities & Recreation" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition duration-300 ${
                filter === tab.id
                  ? "bg-[#b98d45] text-white shadow-xl"
                  : "bg-white text-[#173629] border border-gray-200 hover:border-[#b98d45]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* MASONRY IMAGE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173629] via-[#173629]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#b98d45] font-bold mb-2">
                    {item.project}
                  </span>
                  <h3 className="text-2xl font-serif font-bold leading-snug mb-4">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/90">
                    <Maximize2 size={16} className="text-[#b98d45]" /> Click to Inspect Full Preview
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS & HIGHLIGHTS */}
      <section className="bg-[#173629] text-white py-20 px-6 border-y border-[#b98d45]/20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-serif font-bold text-[#b98d45] mb-2">100%</h3>
            <p className="text-sm text-gray-300 uppercase tracking-widest">RERA Compliant Projects</p>
          </div>
          <div>
            <h3 className="text-5xl font-serif font-bold text-[#b98d45] mb-2">500+</h3>
            <p className="text-sm text-gray-300 uppercase tracking-widest">Delivered Spaces</p>
          </div>
          <div>
            <h3 className="text-5xl font-serif font-bold text-[#b98d45] mb-2">30+</h3>
            <p className="text-sm text-gray-300 uppercase tracking-widest">Modern Amenities</p>
          </div>
          <div>
            <h3 className="text-5xl font-serif font-bold text-[#b98d45] mb-2">10+</h3>
            <p className="text-sm text-gray-300 uppercase tracking-widest">Years Quality Trust</p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <X size={26} />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
          >
            <ChevronRight size={30} />
          </button>

          <div className="max-w-5xl w-full text-center">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl object-contain border border-white/20"
            />
            <div className="mt-6 text-white">
              <span className="text-xs uppercase tracking-[0.25em] text-[#b98d45] font-semibold">
                {filteredItems[selectedImageIndex].project}
              </span>
              <h3 className="text-3xl font-serif font-bold mt-1">
                {filteredItems[selectedImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
