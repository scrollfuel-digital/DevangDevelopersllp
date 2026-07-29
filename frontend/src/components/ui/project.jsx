import { useState } from "react";
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
} from "lucide-react";

// ── Ongoing Flagship Project Image ────────────────────────────────
import riddhiSiddhiImg from "../../assets/projects/riddhisiddhibuilding.jpg";

// ── Data ──────────────────────────────────────────────────────────

const stats = [
  { icon: CalendarClock, value: "18+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Families" },
  { icon: Award, value: "2022", label: "Iconic Realtor Award" },
];

const flagshipProject = {
  id: "riddhi-siddhi",
  name: "129 Riddhi Siddhi Heights",
  tagline: "Flagship High-Rise Residential Landmark",
  location: "Pandey Layout, Khamla Road, Nagpur",
  image: riddhiSiddhiImg,
  rera: "RERA Approved: P505000XXXX",
  status: "Under Construction",
  completion: "Target Q4 2025",
  units: "2 & 3 BHK Premium Residences",
  description:
    "A striking high-rise tower crafted for peaceful community living with excellent connectivity on Khamla Road, Nagpur. Built with uncompromising civil engineering standards, neo-classical facade design, and modern lifestyle amenities.",
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
    "Prime Connectivity on Khamla Road Corridor",
    "Neo-Classical Elevation & Grand Entrance Lobby",
    "100% Vastu Compliant Efficient Layouts",
    "High-Speed Automatic Passenger Elevators",
    "Rainwater Harvesting & Eco Systems",
    "Dedicated EV Charging Infrastructure",
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
  const [activeTab, setActiveTab] = useState("overview");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", unitType: "2 BHK" });

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
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#852541] font-sans antialiased selection:bg-[#852541] selection:text-[#FAF7F2]">
      
      {/* ── HEADER BANNER ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[white] text-[#852541] pt-28 pb-16 px-6 text-center shadow-2xl border-b border-[#bb9034]/30">
        
        {/* Decorative Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#c9a874_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10 space-y-4">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bb9034]/20 border border-[#bb9034]/40 text-[#c9a874] text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#bb9034]" /> Devang Developers Landmark
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl text-[#852541] font-extrabold tracking-wide">
             Riddhi Siddhi <span className="text-[#bb9034]">3</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#bb9034] font-serif italic leading-relaxed">
            A striking high-rise residential tower crafted for peaceful community living with excellent connectivity on Khamla Road, Nagpur.
          </p>

          {/* Quick Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#bb9034]">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-[#bb9034]/30 backdrop-blur-md">
                <Icon size={16} className="text-[#bb9034]" />
                <span className="font-serif font-bold text-white text-sm">{value}</span>
                <span className="text-[#bb9034]">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FLAGSHIP PROJECT SHOWCASE (EXCLUSIVE) ────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
        
        <div className="bg-white rounded-3xl border border-[#bb9034]/30 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: High-Impact Image Spotlight */}
          <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[600px] overflow-hidden group">
            <img
              src={flagshipProject.image}
              alt={flagshipProject.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5A162A] via-[#852541]/30 to-transparent opacity-95" />

            {/* Floating Badges */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#852541]/90 backdrop-blur-md border border-[#bb9034]/50 text-[#c9a874] text-xs font-bold shadow-xl">
                <ShieldCheck size={16} className="text-[#bb9034]" /> {flagshipProject.rera}
              </span>
              <span className="px-4 py-2 rounded-full bg-[#bb9034] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                {flagshipProject.status}
              </span>
            </div>

            {/* Bottom Title Info */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#e5c178] font-bold block">
                {flagshipProject.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {flagshipProject.name}
              </h2>
              <p className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-200 font-medium">
                <MapPin size={15} className="text-[#bb9034] shrink-0" /> {flagshipProject.location}
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed Details & Interactive Information */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-white text-[#852541]">
            
            <div className="space-y-6">
              
              {/* Navigation Tabs */}
              <div className="flex border-b border-[#bb9034]/20 overflow-x-auto no-scrollbar gap-4 pb-2">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "specs", label: "Structural Quality" },
                  { id: "amenities", label: "Amenities" },
                  { id: "progress", label: "Construction Progress" },
                  { id: "location", label: "Location Advantage" },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setActiveTab(st.id)}
                    className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap pb-2 border-b-2 transition-all ${
                      activeTab === st.id
                        ? "border-[#852541] text-[#852541]"
                        : "border-transparent text-gray-400 hover:text-[#852541]"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold mb-2 flex items-center gap-2">
                      <Info size={14} /> Project Summary
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {flagshipProject.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#bb9034]/25 space-y-3 shadow-inner">
                    <h4 className="text-xs uppercase tracking-widest text-[#852541] font-bold flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#bb9034]" /> Key Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
                      {flagshipProject.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-[#bb9034]/10 shadow-sm">
                          <Check size={14} className="text-[#bb9034] shrink-0" />
                          <span className="font-medium text-gray-800">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SPECS */}
              {activeTab === "specs" && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold flex items-center gap-2">
                    <ShieldCheck size={14} /> Structural & Engineering Standards
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {flagshipProject.specs.map((item, idx) => (
                      <div key={idx} className="bg-[#852541]/5 p-4 rounded-xl border border-[#852541]/15 space-y-1">
                        <span className="text-[11px] text-[#bb9034] font-bold uppercase tracking-wider block">{item.title}</span>
                        <span className="text-xs font-serif font-bold text-[#852541] block">{item.desc}</span>
                        <p className="text-[11px] text-gray-600 mt-1">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: AMENITIES */}
              {activeTab === "amenities" && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold flex items-center gap-2">
                    <Landmark size={14} /> Modern Lifestyle Suite
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {flagshipProject.amenities.map(({ icon: Icon, label, desc }) => (
                      <div key={label} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#bb9034]/20">
                        <div className="p-2 rounded-lg bg-[#852541] text-[#bb9034] shrink-0">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-[#852541]">{label}</h5>
                          <p className="text-[11px] text-gray-600 leading-tight mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: PROGRESS */}
              {activeTab === "progress" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold flex items-center gap-2">
                      <Hammer size={14} /> Construction Status
                    </h4>
                    <span className="text-xs font-bold text-[#852541]">{flagshipProject.completion}</span>
                  </div>
                  <div className="space-y-3.5 bg-[#FAF7F2] p-5 rounded-2xl border border-[#bb9034]/20">
                    {flagshipProject.progress.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-gray-800">
                          <span>{item.stage}</span>
                          <span className="text-[#852541] font-bold">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#852541] to-[#bb9034] h-full rounded-full transition-all duration-1000"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: LOCATION ADVANTAGE */}
              {activeTab === "location" && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#bb9034] font-bold flex items-center gap-2">
                    <Compass size={14} /> Khamla Road Proximity Matrix
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {flagshipProject.locationAdvantages.map((item, idx) => (
                      <div key={idx} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#bb9034]/20 space-y-1">
                        <span className="text-xs font-bold text-[#852541] block">{item.title}</span>
                        <p className="text-[11px] text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-[#bb9034]/20">
              <button
                onClick={handleOpenEnquiry}
                className="flex-1 bg-[#852541] hover:bg-[#6B1C33] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall size={15} /> Enquire Pricing & Floor Plans
              </button>

              <button
                onClick={handleOpenEnquiry}
                className="flex-1 border border-[#852541] text-[#852541] hover:bg-[#852541] hover:text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <Download size={15} /> Request E-Brochure
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* ── CALL TO ACTION BANNER ────────────────────────────────────────── */}
      <section className="bg-[#852541] text-white py-14 px-6 text-center border-t border-[#bb9034]/30">
        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-xs uppercase font-bold text-[#c9a874] tracking-widest block">
            Devang Developers Structural Assurance
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Ready to Experience Premium Living in Nagpur?
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto">
            Schedule a private site visit to <strong>129 Riddhi Siddhi Heights</strong> or consult with our project director.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleOpenEnquiry}
              className="px-8 py-3.5 rounded-xl bg-[#bb9034] hover:bg-[#c9a874] text-white text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center gap-2"
            >
              <CalendarClock size={16} /> Schedule Site Visit
            </button>
            <a
              href="tel:+919822200000"
              className="px-8 py-3.5 rounded-xl border border-white/40 hover:bg-white hover:text-[#852541] text-white text-xs font-bold uppercase tracking-wider transition flex items-center gap-2"
            >
              <PhoneCall size={16} /> Speak With Sales Desk
            </a>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY MODAL ───────────────────────────────────────────────── */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#bb9034]/40 relative text-[#852541]">
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
                      className="w-full bg-[#FAF7F2] border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
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
                      className="w-full bg-[#FAF7F2] border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">Interested Configuration</label>
                    <select
                      value={formData.unitType}
                      onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    >
                      <option value="2 BHK">2 BHK Residential</option>
                      <option value="3 BHK">3 BHK Residential</option>
                      <option value="4 BHK Luxury">4 BHK Luxury Penthouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">Additional Notes / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Ask about floor plans, pricing, site visit date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#bb9034]/30 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#852541] hover:bg-[#6B1C33] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
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
                  Thank you for reaching out regarding 129 Riddhi Siddhi Heights. Our sales executive will call you shortly.
                </p>
                <button
                  onClick={() => setEnquiryModalOpen(false)}
                  className="px-6 py-2.5 bg-[#852541] text-[#FAF7F2] text-xs font-bold uppercase rounded-xl"
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