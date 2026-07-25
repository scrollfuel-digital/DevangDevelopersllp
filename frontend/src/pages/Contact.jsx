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
} from "lucide-react";

// ── Ongoing projects ─────────────────────────────────────────────
import riddhiSiddhiImg from "../assets/projects/riddhisiddhibuilding.jpg";
import mangalmurtiImg from "../assets/projects/mangalmurti-residency.jpg";

// ── Completed projects ("Our Footprints") ────────────────────────
import vakratundImg from "../assets/projects/vakratund-heights.jpg";
import vignahartaImg from "../assets/projects/vignaharta-enclave.jpg";
import manomayImg from "../assets/projects/manomay-plaza.jpg";
import shreyasImg from "../assets/projects/shreyas-apartment.jpg";
import kirtiKalyaniImg from "../assets/projects/kirti-kalyani-apartment.jpg";
import avneeshImg from "../assets/projects/avneesh-apartment.jpg";
import gaurisutImg from "../assets/projects/gaurisut-apartment.jpg";
import riddhiSiddhiHeightsImg from "../assets/projects/riddhi-siddhi-heights-dharampeth.jpg";

// ── Data ──────────────────────────────────────────────────────────

const stats = [
  { icon: CalendarClock, value: "18+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Families" },
  { icon: Award, value: "2022", label: "Iconic Realtors" },
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
      "A striking high-rise tower crafted for peaceful community living with excellent connectivity and modern lifestyle amenities.",
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
      { icon: Landmark, label: "Clubhouse" },
    ],
  },
  {
    name: "Mangalmurti Residency",
    location: "Parsodi, Wardha Road, Nagpur",
    tag: "Group Housing Project · by Devprath Constructions LLP",
    image: mangalmurtiImg,
    description:
      "Exemplifying innovative design and sublime craftsmanship, Mangalmurti Residency is an all-new group housing development by our sister concern, Devprath Constructions LLP.",
  },
];

const footprints = [
  { name: "Vakratund Heights", location: "Shivaji Nagar, Nagpur", image: vakratundImg },
  { name: "Vignaharta Enclave", location: "Laxmi Nagar, Nagpur", image: vignahartaImg },
  { name: "Manomay Plaza", location: "Ramdaspeth, Nagpur", image: manomayImg },
  { name: "Shreyas Apartment", location: "Ramdaspeth, Nagpur", image: shreyasImg },
  { name: "Kirti Kalyani Apartment", location: "Laxmi Nagar, Nagpur", image: kirtiKalyaniImg },
  { name: "Avneesh Apartment", location: "Wardha Road, Nagpur", image: avneeshImg },
  { name: "Gaurisut Apartment", location: "Jaiprakash Nagar, Nagpur", image: gaurisutImg },
  { name: "Riddhi Siddhi Heights", location: "Dharampeth, Nagpur", image: riddhiSiddhiHeightsImg },
];

function Project() {
  const [tab, setTab] = useState("ongoing");

  // 100% GUARANTEED DIRECT REDIRECT FUNCTION
  const handleBookVisit = (e) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  return (
    <div className="relative min-h-screen bg-[#faf7f0]">
      
      {/* ── TOP HERO HEADER BANNER ─────────────────────────────────── */}
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

      {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#faf7f0] py-10">
        <div className="relative mx-auto max-w-7xl px-6">
          
          {/* ── Tabs ──────────────────────────────────────────────── */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setTab("ongoing")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                tab === "ongoing"
                  ? "bg-[#5c1a2e] text-white shadow-md"
                  : "border border-[#ddc9a3] text-[#5c1a2e] hover:bg-[#f1e3d3]"
              }`}
            >
              <Hammer size={14} />
              Ongoing Projects
            </button>
            <button
              onClick={() => setTab("completed")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                tab === "completed"
                  ? "bg-[#5c1a2e] text-white shadow-md"
                  : "border border-[#ddc9a3] text-[#5c1a2e] hover:bg-[#f1e3d3]"
              }`}
            >
              <CheckCircle2 size={14} />
              Our Footprints (8)
            </button>
          </div>

          {/* ── Ongoing Projects ──────────────────────────────────── */}
          {tab === "ongoing" && (
            <div className="space-y-10">
              
              {/* Featured project: 129 Riddhi Siddhi Heights */}
              <div className="overflow-hidden rounded-3xl border border-[#ece0cd] bg-white shadow-lg">
                <div className="grid lg:grid-cols-12 items-center">
                  
                  {/* Left image */}
                  <div className="lg:col-span-6 relative h-[320px] lg:h-[440px]">
                    <img
                      src={ongoingProjects[0].image}
                      alt={ongoingProjects[0].name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 shadow-md">
                      <ShieldCheck size={14} className="text-[#5c1a2e]" />
                      <span className="text-[11px] font-semibold text-[#5c1a2e]">
                        {ongoingProjects[0].rera}
                      </span>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="lg:col-span-6 p-6 md:p-8 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#a97c3a] bg-[#faf7f0] px-3 py-1 rounded-full border border-[#ece0cd]">
                      {ongoingProjects[0].tag}
                    </span>

                    <h3 className="text-2xl font-serif font-bold text-[#5c1a2e]">
                      {ongoingProjects[0].name}
                    </h3>

                    <p className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin size={14} className="text-[#a97c3a]" />
                      {ongoingProjects[0].location}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {ongoingProjects[0].description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {ongoingProjects[0].features.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-2 rounded-xl border border-[#ece0cd] bg-[#faf7f0] p-2 text-center text-xs"
                        >
                          <Icon className="text-[#a97c3a] shrink-0" size={16} />
                          <span className="text-[11px] font-semibold text-gray-800">{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* BRAND CARD WITH WORKING BOOK SITE VISIT REDIRECT */}
                    <div className="mt-4 rounded-2xl border border-[#ece0cd] bg-[#faf7f0] p-4 sm:rounded-3xl sm:p-5">
                      <p className="text-[11px] uppercase tracking-[2.5px] text-gray-500 sm:text-xs sm:tracking-[3px]">
                        An Ongoing Project By
                      </p>
                      <h4 className="mt-1 font-serif text-lg text-[#5c1a2e] sm:text-xl font-bold">
                        Devang Developers LLP
                      </h4>

                      <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
                        <button className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#5c1a2e] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#431321] sm:py-3">
                          Explore Project
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>

                        {/* GUARANTEED REDIRECT BUTTON */}
                        <button
                          onClick={handleBookVisit}
                          className="flex-1 rounded-xl border border-[#c9a961] px-6 py-2.5 text-sm font-medium text-[#a97c3a] transition hover:bg-[#c9a961] hover:text-white sm:py-3 cursor-pointer"
                        >
                          Book Site Visit
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Amenities strip */}
                <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[#ece0cd] bg-[#faf7f2] px-4 py-4">
                  {ongoingProjects[0].amenities.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 rounded-full border border-[#ece0cd] bg-white px-3 py-1 text-[11px] text-[#3a2a1f]"
                    >
                      <Icon className="text-[#a97c3a]" size={13} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary project: Mangalmurti Residency */}
              <div className="grid lg:grid-cols-12 overflow-hidden rounded-3xl border border-[#ece0cd] bg-white shadow-lg items-center">
                <div className="lg:col-span-6 p-6 md:p-8 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#a97c3a] bg-[#faf7f0] px-3 py-1 rounded-full border border-[#ece0cd]">
                    {ongoingProjects[1].tag}
                  </span>

                  <h3 className="text-2xl font-serif font-bold text-[#5c1a2e]">
                    {ongoingProjects[1].name}
                  </h3>

                  <p className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin size={14} className="text-[#a97c3a]" />
                    {ongoingProjects[1].location}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {ongoingProjects[1].description}
                  </p>

                  <button
                    onClick={handleBookVisit}
                    className="group inline-flex items-center gap-2 bg-[#5c1a2e] hover:bg-[#431321] text-white px-6 py-2.5 rounded-xl text-xs font-medium transition mt-2 cursor-pointer"
                  >
                    Enquire Now <ArrowRight size={14} />
                  </button>
                </div>

                <div className="lg:col-span-6 relative h-[280px] lg:h-[340px]">
                  <img
                    src={ongoingProjects[1].image}
                    alt={ongoingProjects[1].name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>
          )}

          {/* ── Completed Projects ("Our Footprints") ────────────── */}
          {tab === "completed" && (
            <div>
              <p className="mx-auto mb-6 max-w-2xl text-center text-xs sm:text-sm text-gray-600">
                Delivered landmarks across Nagpur crafted with quality construction and detailing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {footprints.map((p) => (
                  <div
                    key={p.name}
                    className="group overflow-hidden rounded-2xl border border-[#ece0cd] bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-[#5c1a2e]">
                        <CheckCircle2 size={11} className="text-[#a97c3a]" /> Completed
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif font-bold text-base text-[#5c1a2e]">{p.name}</h4>
                      <p className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin size={13} className="text-[#a97c3a]" /> {p.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default Project;