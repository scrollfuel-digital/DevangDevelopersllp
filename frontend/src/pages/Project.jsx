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
  { icon: CalendarClock, value: "18+", label: "Years of Experience" },
  { icon: Users, value: "100+", label: "Happy Families" },
  { icon: Award, value: "2022", label: "Iconic Realtors Award" },
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
      "A striking high-rise crafted for peaceful community living, backed by excellent connectivity to the city's major destinations, quality construction, and thoughtfully designed modern amenities.",
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

// ── Component ─────────────────────────────────────────────────────

function Project() {
  const [tab, setTab] = useState("ongoing");

  return (
    <div className="relative min-h-screen bg-[#faf7f0]">
      {/* ── REDUCED HEIGHT TOP HERO HEADER ─────────────────────────── */}
      <section className="relative bg-[#143526] text-white pt-28 pb-10 px-6 text-center">
        <div className="relative mx-auto max-w-7xl z-10">
          <div className="flex items-center justify-center gap-5 text-[#c9a961]">
            <div className="h-px w-16 bg-[#c9a961]" />
            <span className="text-xs font-medium uppercase tracking-[4px] text-[#E5B582]">
              Devang Developers LLP
            </span>
            <div className="h-px w-16 bg-[#c9a961]" />
          </div>

          <h1 className="mt-2 font-serif text-3xl leading-tight text-white sm:mt-3 sm:text-4xl lg:text-5xl">
            Walls of Happiness
          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-xs text-gray-200 sm:mt-3 sm:text-sm lg:text-base font-light leading-relaxed">
            18+ years of delivering premium homes at valued prices — every
            project reflects our commitment to thoughtful planning, superior
            construction quality, and modern lifestyle experiences.
          </p>

          {/* Stats strip */}
          <div className="mx-auto mt-5 grid max-w-xl grid-cols-3 gap-2 sm:mt-6 sm:gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-[#c9a961]/30 bg-[#0D2419] px-2 py-2.5 shadow-md sm:px-3 sm:py-3.5"
              >
                <Icon className="mx-auto text-[#c9a961]" size={18} />
                <p className="mt-1 font-serif text-lg text-white sm:mt-1.5 sm:text-2xl">{value}</p>
                <p className="mt-0.5 text-[10px] text-gray-300 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#faf7f0] py-12">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#f1e3d3] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#f1e3d3] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* ── Tabs ──────────────────────────────────────────────── */}
          <div className="mb-10 flex items-center justify-center gap-2.5 px-4 sm:mb-12 sm:gap-3">
            <button
              onClick={() => setTab("ongoing")}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] transition sm:px-7 sm:py-3 sm:text-sm sm:tracking-[2px] ${
                tab === "ongoing"
                  ? "bg-[#5c1a2e] text-white shadow-lg"
                  : "border border-[#ddc9a3] text-[#5c1a2e] hover:bg-[#f1e3d3]"
              }`}
            >
              <Hammer size={15} />
              Ongoing Projects
            </button>
            <button
              onClick={() => setTab("completed")}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] transition sm:px-7 sm:py-3 sm:text-sm sm:tracking-[2px] ${
                tab === "completed"
                  ? "bg-[#5c1a2e] text-white shadow-lg"
                  : "border border-[#ddc9a3] text-[#5c1a2e] hover:bg-[#f1e3d3]"
              }`}
            >
              <CheckCircle2 size={15} />
              Our Footprints
            </button>
          </div>

          {/* ── Ongoing Projects ──────────────────────────────────── */}
          {tab === "ongoing" && (
            <div className="space-y-14">
              {/* Featured project: 129 Riddhi Siddhi Heights */}
              <div className="overflow-hidden rounded-[28px] border border-[#ece0cd] bg-white shadow-xl sm:rounded-[35px]">
                <div className="grid lg:grid-cols-2">
                  {/* Left image */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[200px] lg:min-h-[560px]">
                    <img
                      src={ongoingProjects[0].image}
                      alt={ongoingProjects[0].name}
                      className="h-full w-full object-cover object-center"
                    />
                    {/* subtle gradient so badge always reads clearly */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />

                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 py-2 pl-2 pr-4 shadow-md backdrop-blur-sm sm:left-5 sm:top-5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5c1a2e] text-white">
                        <ShieldCheck size={15} />
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs font-semibold text-[#5c1a2e]">
                          {ongoingProjects[0].rera}
                        </p>
                        <p className="text-[11px] text-gray-500">{ongoingProjects[0].reraNo}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex flex-col justify-center sm:p-2 lg:h-full lg:p-2">
                    <div className="inline-flex items-center gap-2.5 rounded-full bg-[#faf7f0] px-4 py-1.5 sm:px-5 sm:py-2">
                      <Leaf size={16} className="shrink-0 text-[#a97c3a]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#a97c3a] sm:text-xs sm:tracking-[3px]">
                        {ongoingProjects[0].tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl leading-tight text-[#5c1a2e] sm:text-3xl lg:mt-4 lg:text-4xl">
                      {ongoingProjects[0].name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 sm:text-base">
                      <MapPin size={15} className="shrink-0 text-[#a97c3a]" />
                      <span>{ongoingProjects[0].location}</span>
                    </div>

                    <div className="mt-3 h-[2px] w-14 bg-[#c9a961] sm:mt-4 sm:w-16" />

                    <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:line-clamp-3">
                      {ongoingProjects[0].description}
                    </p>

                    {/* Features */}
                    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 lg:grid-cols-4">
                      {ongoingProjects[0].features.map(({ icon: Icon, label, sub }) => (
                        <div
                          key={label}
                          className="flex flex-col items-center gap-1.5 rounded-2xl border border-[#ece0cd] bg-[#faf7f0]/60 px-3 py-3 text-center"
                        >
                          <Icon className="text-[#a97c3a]" size={22} />
                          <div>
                            <p className="text-xs font-semibold text-[#3a2a1f] sm:text-sm">{label}</p>
                            <p className="text-[11px] text-gray-500 sm:text-xs">{sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-4 rounded-2xl border border-[#ece0cd] bg-[#faf7f0] p-4 sm:mt-5 sm:rounded-3xl sm:p-5">
                      <p className="text-[11px] uppercase tracking-[2.5px] text-gray-500 sm:text-xs sm:tracking-[3px]">
                        An Ongoing Project By
                      </p>
                      <h4 className="mt-1 font-serif text-lg text-[#5c1a2e] sm:text-xl">
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
                        <button className="flex-1 rounded-xl border border-[#c9a961] px-6 py-2.5 text-sm font-medium text-[#a97c3a] transition hover:bg-[#c9a961] hover:text-white sm:py-3">
                          Book Site Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom amenities strip */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 border-t border-[#ece0cd] bg-[#faf7f2] px-4 py-6 sm:gap-3 sm:px-8 sm:py-7">
                  {ongoingProjects[0].amenities.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 rounded-full border border-[#ece0cd] bg-white px-4 py-2 text-xs text-[#3a2a1f] sm:text-sm"
                    >
                      <Icon className="text-[#a97c3a]" size={16} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary project: Mangalmurti Residency */}
              <div className="grid overflow-hidden rounded-[28px] border border-[#ece0cd] bg-white shadow-xl sm:rounded-[35px] lg:grid-cols-2">
                <div className="p-6 sm:p-10 lg:order-1 lg:p-14">
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-[#faf7f0] px-4 py-1.5 sm:px-5 sm:py-2">
                    <Building2 size={16} className="shrink-0 text-[#a97c3a]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#a97c3a] sm:text-xs sm:tracking-[3px]">
                      {ongoingProjects[1].tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl leading-tight text-[#5c1a2e] sm:text-4xl lg:mt-8 lg:text-5xl">
                    {ongoingProjects[1].name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 sm:text-base">
                    <MapPin size={15} className="shrink-0 text-[#a97c3a]" />
                    <span>{ongoingProjects[1].location}</span>
                  </div>

                  <div className="mt-5 h-[2px] w-16 bg-[#c9a961] sm:mt-6 sm:w-20" />

                  <p className="mt-6 text-base leading-8 text-gray-600 sm:mt-8 sm:text-lg sm:leading-9">
                    {ongoingProjects[1].description}
                  </p>

                  <button className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5c1a2e] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#431321] sm:mt-10 sm:w-auto sm:justify-start sm:py-4 sm:text-base">
                    Enquire Now
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>

                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:order-2 lg:aspect-auto lg:min-h-[420px]">
                  <img
                    src={ongoingProjects[1].image}
                    alt={ongoingProjects[1].name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── Completed Projects ("Our Footprints") ────────────── */}
          {tab === "completed" && (
            <div>
              <p className="mx-auto mb-8 max-w-3xl text-center text-base text-gray-600 sm:mb-10 sm:text-lg">
                We've successfully left behind remarkable golden footprints with
                the help of our highly skilled professionals, whose detailing
                expertise has kept us consistent in delivering the best.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
                {footprints.map((p) => (
                  <div
                    key={p.name}
                    className="group overflow-hidden rounded-3xl border border-[#ece0cd] bg-white shadow-sm transition hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden sm:h-48 sm:aspect-auto">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#5c1a2e]">
                        <CheckCircle2 size={12} className="text-[#a97c3a]" />
                        Completed
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-serif text-lg text-[#5c1a2e] sm:text-xl">{p.name}</h4>
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin size={14} className="shrink-0 text-[#a97c3a]" />
                        <span>{p.location}</span>
                      </div>
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