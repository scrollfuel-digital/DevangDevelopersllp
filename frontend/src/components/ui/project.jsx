import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trees,
  Building2,
  Route,
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
  FileText,
  PhoneCall,
  Check,
  Clock,
  Send,
  Download,
  Info,
  Building,
  Compass,
  X,
  Filter,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from "lucide-react";

// ── Ongoing Flagship Project Image ────────────────────────────────
import riddhiSiddhiImg from "../../assets/projects/riddhisiddhibuilding.jpg";

// ── Data ──────────────────────────────────────────────────────────

const stats = [
  { icon: CalendarClock, value: "25+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Families" },
  { icon: Award, value: "2022", label: "Iconic Realtor Award" },
];

const flagshipProject = {
  id: "riddhi-siddhi-3",
  name: "Riddhi Siddhi 3",
  tagline: "Ongoing High-Rise Residential Landmark",
  location: "London Street, Nagpur",
  image: riddhiSiddhiImg,
  rera: "RERA Approved: P505000XXXX",
  status: "Under Construction",
  completion: "Target Q4 2025",
  units: "3 BHK Premium Residences",
  description:
    "Riddhi Siddhi ~III~ stands as an architectural triumph on London Street, offering ultra-luxurious 3 BHK apartments crafted for families seeking elevated living spaces. Every detail is designed to create a refined living environment while ensuring durability, safety, and long-term value. With well-planned spaces, premium finishes, and a welcoming atmosphere, the development offers an elevated lifestyle in one of Nagpur’s well-connected locations.",
  specs: [
    { title: "Structure", desc: "RCC Earthquake Resistant Frame", detail: "Fe550 grade steel & high-strength concrete" },
    { title: "Flooring", desc: "Vitrified Premium Tiles", detail: "800x800mm Italian finish vitrified tiles" },
    { title: "Security", desc: "24/7 Smart Gated Security", detail: "Multi-tier security with CCTV surveillance" },
    { title: "Power Backup", desc: "100% Common Area Backup", detail: "Auto DG generator for elevators & lighting" },
  ],
  amenities: [
    { icon: ShieldCheck, label: "24/7 Gated Security", desc: "CCTV surveillance & smart entry gates" },
    { icon: Trees, label: "Avenue Plantation", desc: "Landscaped green gardens & paved walkways" },
    { icon: Droplets, label: "24h Water Supply", desc: "Hydro-pneumatic pumping system" },
    { icon: Zap, label: "Power Backup", desc: "Auto DG backup for essential services" },
    { icon: Landmark, label: "Clubhouse & Recreation", desc: "Community hall & indoor game zone" },
    { icon: Route, label: "Wide Access Roads", desc: "Ample turning radius & paved driveways" },
  ],
  highlights: [
    "100% Vastu Compliant Efficient Layouts",
    "3 Automatic High-Speed Lifts (Incl. 1 Stretcher Lift)",
    "Solar-Powered Common Areas & Rooftop Power",
    "Advanced Safety & Security (CCTV & Intercom)",
  ],
  progress: [
    { stage: "RCC Structure & Slab Work", percentage: 90 },
    { stage: "Brickwork & External Plaster", percentage: 75 },
    { stage: "Electrical & Plumbing Piping", percentage: 60 },
    { stage: "Flooring & Interior Finishing", percentage: 40 },
  ],
  locationAdvantages: [
    { title: "Airport Transit", desc: "12 Mins Drive to Nagpur Airport" },
    { title: "Metro Connectivity", desc: "5 Mins Drive to Metro Station" },
    { title: "Hospitals & Healthcare", desc: "Within 2 Km Radius" },
    { title: "Schools & Colleges", desc: "Top Institutions Nearby" },
  ],
};

function Project() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", unitType: "3 BHK" });

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", message: "", unitType: "2 BHK" });
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-[#FBF9F6] text-[#852541] font-sans antialiased selection:bg-[#852541] selection:text-[#FBF9F6]">
      
      {/* ── HEADER BANNER (SEAMLESS MATCHING ABOUT SECTION BG #FBF9F6) ──────── */}
      <section className="relative overflow-hidden bg-[#FBF9F6] text-[#852541] pt-8 pb-8 px-6 text-center">
        
        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/30 text-[#852541] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-[#bb9034]" /> Devang Developers Signature
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
            RIDDHI SIDDHI <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]">~ III ~</span>
          </h1>

          <p
            className="text-3xl sm:text-[15px] leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#53504c", fontFamily: "'Poppins', sans-serif" }}
          >
            A striking high-rise residential tower crafted for peaceful community living with excellent connectivity on London Street, Nagpur.
          </p>

          {/* Quick Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#852541]">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#bb9034]/30">
                <Icon size={16} className="text-[#bb9034]" />
                <span className="font-serif font-bold text-[#852541] text-sm">{value}</span>
                <span className="text-gray-600">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FLAGSHIP PROJECT SHOWCASE ────────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
        
        <div className="bg-[#FBF9F6] rounded-3xl border border-[#bb9034]/30 overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: High-Impact Image Spotlight */}
          <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[600px] overflow-hidden group">
            <img
              src={flagshipProject.image}
              alt={flagshipProject.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(43,134,197,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(43,134,197,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Floating Badges */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#852541] text-[#c9a874] text-xs font-bold">
                <ShieldCheck size={16} className="text-[#bb9034]" /> {flagshipProject.rera}
              </span>
              <span className="px-4 py-2 rounded-full bg-[#bb9034] text-white text-xs font-bold uppercase tracking-wider">
                {flagshipProject.status}
              </span>
            </div>

            {/* Bottom Title Info */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#e5c178] font-bold block">
                {flagshipProject.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Riddhi Siddhi ~III~
              </h2>
              <p className="flex items-center gap-1.5 text-xs sm:text-sm text-white font-medium">
                <MapPin size={15} className="text-[#bb9034]" /> {flagshipProject.location}
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed Details & Interactive Information */}
          <div className="lg:col-span-6 p-4 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 bg-[#FBF9F6] text-[#852541] w-full max-w-full overflow-hidden">
            
            <div className="space-y-5 w-full max-w-full">
              
              {/* Header with Filter Button in Right Corner */}
              <div className="flex items-center justify-between pb-3 border-b border-[#bb9034]/20 w-full relative">
                <div className="flex items-center gap-1.5 text-[#852541]">
                  <Sparkles size={16} className="text-[#bb9034]" />
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    Project Details
                  </h3>
                </div>

                {/* Dynamic Dropdown Button & Popover Panel */}
                <div className="relative">
                  {(() => {
                    const options = [
                      { id: "overview", label: "Overview & Summary" },
                      { id: "specs", label: "Structural Quality" },
                      { id: "amenities", label: "Amenities Showcase" },
                      { id: "location", label: "Location Advantage" },
                    ];
                    const activeOption = options.find((opt) => opt.id === activeTab) || options[0];

                    return (
                      <>
                        <button
                          onClick={() => setIsFilterOpen(!isFilterOpen)}
                          className="flex items-center gap-2.5 bg-white border border-[#bb9034]/50 text-[#852541] px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer select-none"
                        >
                          <SlidersHorizontal size={15} className="text-[#bb9034]" />
                          <span className="font-extrabold tracking-wider text-[#852541]">{activeOption.label}</span>
                          <ChevronDown size={15} className={`text-[#852541] transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Simple Dropdown Menu */}
                        {isFilterOpen && (
                          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-[#bb9034]/30 shadow-2xl p-2 z-30 space-y-1 animate-fadeIn">
                            {options.map((item) => {
                              const isActive = activeTab === item.id;
                              return (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    setActiveTab(item.id);
                                    setIsFilterOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                                    isActive
                                      ? "bg-[#852541] text-white shadow-sm"
                                      : "text-gray-700 hover:bg-[#FAF7F2] hover:text-[#852541]"
                                  }`}
                                >
                                  <span>{item.label}</span>
                                  {isActive && <CheckCircle2 size={14} className="text-[#bb9034]" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="space-y-4 animate-fadeIn w-full">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold mb-2 flex items-center gap-2">
                      <Info size={14} className="shrink-0" /> Project Summary
                    </h4>
                    <p
                      className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed break-words"
                      style={{ fontWeight: 600 }}
                    >
                      {flagshipProject.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-[#bb9034]/25 space-y-3 w-full">
                    <h4 className="text-xs uppercase tracking-widest text-[#852541] font-bold flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#bb9034] shrink-0" /> Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 w-full">
                      {flagshipProject.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-[#FBF9F6] p-2 rounded-lg border border-[#bb9034]/10">
                          <Check size={14} className="text-[#bb9034] shrink-0 mt-0.5" />
                          <span className="font-medium text-gray-800 break-words leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SPECS */}
              {activeTab === "specs" && (
                <div className="space-y-4 animate-fadeIn w-full">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold flex items-center gap-2">
                    <ShieldCheck size={14} className="shrink-0" /> Structural & Engineering Standards
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-3 sm:pt-4">
                    {flagshipProject.specs.map((item, idx) => (
                      <div key={idx} className="bg-[#852541]/5 pt-6 pb-5 px-5 sm:pt-7 sm:pb-6 sm:px-6 rounded-2xl border border-[#852541]/15 space-y-2 text-center flex flex-col items-center justify-center">
                        <span className="text-[11px] text-[#bb9034] font-bold uppercase tracking-wider block text-center">{item.title}</span>
                        <span className="text-xs font-serif font-bold text-[#852541] block text-center">{item.desc}</span>
                        <p className="text-[11px] text-gray-600 mt-1 leading-snug break-words text-center">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: AMENITIES */}
              {activeTab === "amenities" && (
                <div className="space-y-4 animate-fadeIn w-full">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold flex items-center gap-2">
                    <Landmark size={14} className="shrink-0" /> Modern Lifestyle Suite
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {flagshipProject.amenities.map(({ icon: Icon, label, desc }) => (
                      <div key={label} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#bb9034]/20">
                        <div className="p-2 rounded-lg bg-[#852541] text-[#bb9034] shrink-0">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-[#852541]">{label}</h5>
                          <p className="text-[11px] text-gray-600 leading-tight mt-0.5 break-words">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: LOCATION ADVANTAGE */}
              {activeTab === "location" && (
                <div className="space-y-4 animate-fadeIn w-full">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold flex items-center gap-2">
                    <Compass size={14} className="shrink-0" /> London Street Proximity Matrix
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {flagshipProject.locationAdvantages.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 sm:p-4 rounded-xl border border-[#bb9034]/20 space-y-1">
                        <span className="text-xs font-bold text-[#852541] block">{item.title}</span>
                        <p className="text-[11px] text-gray-600 leading-snug break-words">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-[#bb9034]/20 w-full">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/project/riddhi-siddhi-3");
                }}
                className="w-full sm:flex-1 bg-[#852541] hover:bg-[#6B1C33] text-white py-3 px-4 rounded-xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md text-center"
              >
                <ArrowRight size={14} className="shrink-0" />
                <span>Explore Full Details</span>
              </button>

              <button
                onClick={handleOpenEnquiry}
                className="w-full sm:flex-1 border border-[#852541] text-[#852541] hover:bg-[#852541] hover:text-white py-3 px-4 rounded-xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <PhoneCall size={14} className="shrink-0" />
                <span>Enquire Pricing & Plans</span>
              </button>
            </div>

          </div>

        </div>

      </section>



      {/* ── ENQUIRY MODAL ───────────────────────────────────────────────── */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#dbd8d1] rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#bb9034]/40 relative text-[#852541]">
            <button
              onClick={() => setEnquiryModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition"
            >
              <X size={18} />
            </button>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#bb9034]">Devang Developers Enquiry</span>
                  <h3 className="text-xl font-serif font-bold text-[#852541]">
                     Riddhi Siddhi 3
                  </h3>
                  <p className="text-xs text-gray-600">
                    Fill in your details below and our sales team will contact you with pricing & site plan.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98220 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">Interested Configuration</label>
                    <select
                      value={formData.unitType}
                      onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                      className="w-full bg-white border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    >
                      <option value="3 BHK">3 BHK Residential</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">Additional Notes / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Ask about floor plans, pricing, site visit date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#852541] hover:bg-[#6B1C33] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
                >
                  <Send size={14} /> Submit Enquiry
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#852541]">Enquiry Received!</h3>
                <p className="text-xs text-gray-600">
                  Thank you for reaching out regarding Riddhi Siddhi 3. Our sales executive will call you shortly.
                </p>
                <button
                  onClick={() => setEnquiryModalOpen(false)}
                  className="px-6 py-2.5 bg-[#852541] text-[#FBF9F6] text-xs font-bold uppercase rounded-xl"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Project;