import { useState } from "react";
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
  ChevronRight,
} from "lucide-react";

// ── Ongoing projects ─────────────────────────────────────────────
import riddhiSiddhiImg from "../../assets/projects/riddhisiddhibuilding.jpg";
import mangalmurtiImg from "../../assets/projects/mangalmurti-residency.jpg";

// ── Completed projects ("Our Footprints") ────────────────────────
import vakratundImg from "../../assets/projects/vakratund-heights.jpg";
import vignahartaImg from "../../assets/projects/vignaharta-enclave.jpg";
import manomayImg from "../../assets/projects/manomay-plaza.jpg";
import shreyasImg from "../../assets/projects/shreyas-apartment.jpg";
import kirtiKalyaniImg from "../../assets/projects/kirti-kalyani-apartment.jpg";
import avneeshImg from "../../assets/projects/avneesh-apartment.jpg";
import gaurisutImg from "../../assets/projects/gaurisut-apartment.jpg";
import riddhiSiddhiHeightsImg from "../../assets/projects/riddhi-siddhi-heights-dharampeth.jpg";

// ── Data ──────────────────────────────────────────────────────────

const stats = [
  { icon: CalendarClock, value: "18+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Families" },
  { icon: Award, value: "2022", label: "Iconic Realtors" },
];

const ongoingProjects = [
  {
    id: "riddhi-siddhi",
    name: "129 Riddhi Siddhi Heights",
    location: "Pandey Layout, Khamla Road, Nagpur",
    tag: "Premium Residential Apartments",
    image: riddhiSiddhiImg,
    rera: "RERA Approved: P505000XXXX",
    description:
      "A striking high-rise tower crafted for peaceful community living with excellent connectivity and modern lifestyle amenities.",
    specs: [
      { title: "Structure", desc: "RCC Earthquake Resistant" },
      { title: "Flooring", desc: "Vitrified Premium Tiles" },
      { title: "Security", desc: "24/7 Gated Security & CCTV" },
      { title: "Power", desc: "100% Common Area Backup" },
    ],
    amenities: [
      { icon: ShieldCheck, label: "24/7 Security" },
      { icon: Trees, label: "Avenue Plantation" },
      { icon: Droplets, label: "Water Connection" },
      { icon: Zap, label: "Power Backup" },
      { icon: Landmark, label: "Clubhouse" },
    ],
  },
  {
    id: "mangalmurti",
    name: "Mangalmurti Residency",
    location: "Parsodi, Wardha Road, Nagpur",
    tag: "Group Housing · by Devprath Constructions LLP",
    image: mangalmurtiImg,
    description:
      "Exemplifying innovative design and sublime craftsmanship, Mangalmurti Residency is an all-new group housing development by our sister concern, Devprath Constructions LLP.",
    specs: [
      { title: "Developer", desc: "Devprath Constructions LLP" },
      { title: "Type", desc: "Group Housing Development" },
      { title: "Location", desc: "Wardha Road Hub" },
      { title: "Status", desc: "Construction Active" },
    ],
    amenities: [
      { icon: ShieldCheck, label: "Gated Security" },
      { icon: Route, label: "Wide Road Access" },
      { icon: Leaf, label: "Green Surroundings" },
    ],
  },
];

const footprints = [
  { name: "Vakratund Heights", location: "Shivaji Nagar, Nagpur", image: vakratundImg, category: "High-Rise Tower" },
  { name: "Vignaharta Enclave", location: "Laxmi Nagar, Nagpur", image: vignahartaImg, category: "Residential" },
  { name: "Manomay Plaza", location: "Ramdaspeth, Nagpur", image: manomayImg, category: "Commercial Plaza" },
  { name: "Shreyas Apartment", location: "Ramdaspeth, Nagpur", image: shreyasImg, category: "Residential" },
  { name: "Kirti Kalyani Apartment", location: "Laxmi Nagar, Nagpur", image: kirtiKalyaniImg, category: "Residential" },
  { name: "Avneesh Apartment", location: "Wardha Road, Nagpur", image: avneeshImg, category: "Residential" },
  { name: "Gaurisut Apartment", location: "Jaiprakash Nagar, Nagpur", image: gaurisutImg, category: "Residential" },
  { name: "Riddhi Siddhi Heights", location: "Dharampeth, Nagpur", image: riddhiSiddhiHeightsImg, category: "High-Rise Tower" },
];

function Project() {
  const [tab, setTab] = useState("ongoing");
  const [activeOngoingIndex, setActiveOngoingIndex] = useState(0);

  const activeProject = ongoingProjects[activeOngoingIndex];

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#143526] font-sans antialiased overflow-x-hidden">
      
      {/* ── TOP HERO HEADER BANNER ───────────────────────────────────── */}
      <section className="relative bg-[#143526] text-white pt-28 pb-8 px-6 text-center">
        <div className="relative mx-auto max-w-4xl z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B98D45]/20 border border-[#B98D45]/40 text-[#E5B582] text-[11px] font-semibold uppercase tracking-widest shadow-sm">
            <Sparkles size={13} className="text-[#B98D45]" /> Devang Developers Landmark Portfolio
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-wide">
            Walls of Happiness
          </h1>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
            18+ years of delivering premium homes with superior construction quality across Nagpur.
          </p>

          {/* Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B98D45]/30 bg-[#0D2419] shadow-sm text-xs"
              >
                <Icon size={14} className="text-[#E5B582]" />
                <span className="font-serif font-bold text-white">{value}</span>
                <span className="text-[10px] text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN SHOWCASE SECTION ──────────────────────────────────── */}
      <section className="py-8 px-6 max-w-7xl mx-auto space-y-6">
        
        {/* TAB CONTROLLER */}
        <div className="flex justify-center">
          <div className="p-1 rounded-full bg-white border border-[#E8DDD3] shadow-sm flex items-center gap-1.5">
            <button
              onClick={() => setTab("ongoing")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                tab === "ongoing"
                  ? "bg-[#143526] text-white shadow-md"
                  : "text-[#143526] hover:bg-[#FAF7F2]"
              }`}
            >
              <Hammer size={14} className={tab === "ongoing" ? "text-[#E5B582]" : ""} />
              Ongoing Flagships
            </button>
            <button
              onClick={() => setTab("completed")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                tab === "completed"
                  ? "bg-[#143526] text-white shadow-lg"
                  : "text-[#143526] hover:bg-[#FAF7F2]"
              }`}
            >
              <CheckCircle2 size={14} className={tab === "completed" ? "text-[#E5B582]" : ""} />
              Our Footprints (8)
            </button>
          </div>
        </div>

        {/* ── FEATURE STAGE CARD ────────────────────────────────────── */}
        {tab === "ongoing" && (
          <div className="space-y-4">
            
            {/* Project Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {ongoingProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveOngoingIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    activeOngoingIndex === idx
                      ? "bg-[#B98D45] text-white shadow-lg scale-105"
                      : "bg-white text-[#143526] border border-[#E8DDD3] hover:border-[#B98D45]"
                  }`}
                >
                  <Building2 size={14} />
                  {p.name}
                  <ChevronRight size={13} className={activeOngoingIndex === idx ? "rotate-90 transition" : ""} />
                </button>
              ))}
            </div>

            {/* SLEEK DISPLAY CARD */}
            <div className="bg-[#143526] rounded-3xl border border-[#B98D45]/30 shadow-xl overflow-hidden grid lg:grid-cols-12 max-h-none lg:max-h-[380px]">
              
              {/* Left Image Feature */}
              <div className="lg:col-span-7 relative h-[260px] lg:h-[380px] overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143526]/95 via-[#143526]/30 to-transparent" />

                {/* Specs Overlay */}
                <div className="absolute bottom-4 left-5 right-5 text-white space-y-1 z-10">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#E5B582] font-bold block">
                    {activeProject.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                    {activeProject.name}
                  </h3>
                  <p className="flex items-center gap-1 text-[11px] text-gray-200">
                    <MapPin size={13} className="text-[#B98D45]" /> {activeProject.location}
                  </p>
                </div>
              </div>

              {/* Right Content Panel */}
              <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-3 bg-[#143526] text-white border-t lg:border-t-0 lg:border-l border-[#B98D45]/20 overflow-y-auto">
                <div className="space-y-3">
                  
                  {/* RERA Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0D2419] border border-[#B98D45]/40 text-[#E5B582] text-[11px] font-semibold">
                    <ShieldCheck size={13} /> {activeProject.rera}
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-light line-clamp-2">
                    {activeProject.description}
                  </p>

                  {/* Highlights Grid */}
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#B98D45] font-bold mb-1.5">
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {activeProject.specs.map((item, idx) => (
                        <div key={idx} className="bg-[#0D2419] p-2 rounded-lg border border-[#B98D45]/20">
                          <span className="text-[9px] text-[#B98D45] font-semibold block">{item.title}</span>
                          <span className="text-[11px] font-medium text-white truncate block">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#B98D45] font-bold mb-1.5">
                      Amenities
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {activeProject.amenities.map(({ icon: Icon, label }) => (
                        <span key={label} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] text-gray-200">
                          <Icon size={11} className="text-[#B98D45]" /> {label}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* CTAs WITHOUT REDIRECT */}
                <div className="flex gap-2 pt-2 border-t border-white/10">
                  <button className="flex-1 bg-[#B98D45] hover:bg-[#a37937] text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-sm">
                    Explore Project <ArrowRight size={13} />
                  </button>
                  <button className="flex-1 border border-white/30 text-white hover:bg-white hover:text-[#143526] py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition">
                    Book Site Visit
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ── DELIVERED FOOTPRINTS ─────────────────────────────────── */}
        {tab === "completed" && (
          <div className="space-y-5">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B98D45]">
                Delivered Landmarks
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#143526] mt-0.5">
                Our Golden Footprints
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {footprints.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-[#E8DDD3] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#143526] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                      <span className="text-[9px] uppercase tracking-widest text-[#E5B582] font-bold block">
                        {item.category}
                      </span>
                      <h4 className="font-serif font-bold text-base text-white">
                        {item.name}
                      </h4>
                      <p className="flex items-center gap-1 text-[10px] text-gray-300 mt-0.5">
                        <MapPin size={11} className="text-[#B98D45]" /> {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#143526] text-white border-t border-[#B98D45]/30 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#E5B582]">
                      Completed & Delivered
                    </span>
                    <CheckCircle2 size={14} className="text-[#B98D45]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  );
}

export default Project;