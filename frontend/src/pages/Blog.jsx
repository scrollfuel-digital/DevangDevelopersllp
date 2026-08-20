import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  BookOpen,
  CheckCircle2,
  X,
  Share2,
  Building2,
  TrendingUp,
  ShieldCheck,
  Compass,
} from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Pande Layout & Khamla Road are Nagpur's Top Destinations for Premium Living",
    category: "Home Buying Guide",
    date: "July 28, 2026",
    readTime: "5 min read",
    author: "Devang Editorial Team",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Discover why Pande Layout and the London Street corridor offer unmatched quiet luxury, rapid metro connectivity, proximity to Nagpur Airport, and top real estate appreciation.",
    content: `
      Pande Layout and the Khamla Road corridor in Nagpur have evolved into the city's most sought-after residential destinations. With direct location on London Street and seamless transit connectivity to the International Airport, Metro Stations, and Wardha Road IT Park, living here offers unmatched lifestyle convenience.

      ### Why Pande Layout & London Street Corridor?
      - **Elite Peaceful Neighborhood**: Pande Layout is renowned for its quiet residential charm while being situated directly on London Street.
      - **Rapid Transit Connectivity**: Just 10 minutes drive to Nagpur Airport and 5 minutes to Metro Stations.
      - **Healthcare & Education**: Proximity to AIIMS Nagpur, MIDAS Hospital, top CBSE schools, and daily retail markets.
      - **High Appreciation Potential**: Real estate values in Pande Layout have grown steadily, making it South-West Nagpur's benchmark residential address.

      Devang Developers' flagship project, **Riddhi Siddhi 3**, is strategically situated directly on London Street in Pande Layout to offer residents a high-rise sanctuary built with RCC earthquake-resistant engineering, architectural precision, and modern lifestyle amenities.
    `,
  },
  {
    id: 2,
    title: "Understanding RERA Compliance: A Complete Guide for Homebuyers in Nagpur",
    category: "RERA & Legal",
    date: "July 20, 2026",
    readTime: "6 min read",
    author: "Adv. Sandeep Shashtri",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Essential checklist for evaluating RERA registered projects in Maharashtra. Learn how developer transparency, carpet area definitions, and escrow accounts protect your investment.",
    content: `
      Purchasing a home is one of life's most significant financial milestones. The Real Estate (Regulation and Development) Act, 2016 (RERA) was introduced to safeguard buyer interests, ensure complete project transparency, and mandate timely delivery.

      ### What Buyers Must Verify Before Investing:
      1. **RERA Registration Number**: Always verify the project code on the MahaRERA portal.
      2. **Carpet Area Calculation**: RERA mandates pricing based strictly on net usable carpet area.
      3. **Escrow Account Assurance**: 70% of buyer funds are deposited in a dedicated project escrow account.

      At Devang Developers, every project strictly adheres to RERA guidelines. Complete project documentation and legal approvals are shared with buyers from the very first enquiry.
    `,
  },
  {
    id: 3,
    title: "Vastu Architecture in Modern High-Rise Apartments: Harmony Meets Design",
    category: "Vastu & Design",
    date: "July 12, 2026",
    readTime: "4 min read",
    author: "Kirtibhai & Ritesh Seth",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "How contemporary architects seamlessly integrate ancient Vastu Shastra principles into high-rise apartment planning to maximize natural light, positive energy, and family wellness.",
    content: `
      Vastu Shastra is not merely traditional lore—it is a sophisticated science of spatial geometry, natural airflow, and sunlight optimization. Integrating Vastu principles into modern apartment design enhances physical comfort and peace of mind.

      ### Core Vastu Considerations in Devang Residences:
      - **Entrance Direction**: Orientations planned for positive energy flow.
      - **Kitchen Placement**: South-East alignment to honor the Fire element.
      - **Master Bedroom**: South-West positioning for stability and restful sleep.

      Every floor plan in **Riddhi Siddhi 3** and **Mangalmurti Residency** is vetted by experienced Vastu consultants to deliver homes that inspire lasting prosperity.
    `,
  },
  {
    id: 4,
    title: "Real Estate vs Other Asset Classes: Why Nagpur Property Offers Lasting Value",
    category: "Investment & ROI",
    date: "June 30, 2026",
    readTime: "7 min read",
    author: "CA P. Jaykrishnan",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Detailed financial analysis comparing Nagpur residential property appreciation against equity, gold, and fixed deposits in the current economic landscape.",
    content: `
      As Nagpur rapidly emerges as a central logistics, healthcare, and IT hub of India, property investments here continue to outperform conventional investment vehicles.

      ### Why Invest in Nagpur Residential Real Estate?
      - **Stable Capital Appreciation**: Average 8-12% annual capital growth in prime corridors.
      - **Rental Yields**: High rental demand driven by IT professionals, medical experts, and airport staff.
      - **Tangible Asset Security**: Physical real estate provides an inflation hedge and long-term legacy value.

      Devang Developers' 18+ year track record of delivering developments on schedule provides investors with unmatched security and returns.
    `,
  },
  {
    id: 5,
    title: "Essential Checklist for 2 BHK vs 3 BHK Luxury Apartment Buyers",
    category: "Home Buying Guide",
    date: "June 18, 2026",
    readTime: "5 min read",
    author: "Devang Editorial Team",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Deciding between a spacious 2 BHK and a luxurious 3 BHK residence? Evaluate family growth, work-from-home needs, resale demand, and budget allocation.",
    content: `
      Choosing the right configuration depends on both immediate lifestyle requirements and long-term financial planning.

      ### 2 BHK vs 3 BHK Comparison:
      - **2 BHK Residences**: Ideal for nuclear families, young working professionals, and rental investors looking for optimal yields.
      - **3 BHK Residences**: Perfect for growing families needing dedicated home offices, guest bedrooms, and expansive living layouts.

      Devang Developers offers both 2 & 3 BHK layouts featuring 800x800mm vitrified tiles, granite kitchen counters, and large balconies with views of Nagpur's skyline.
    `,
  },
  {
    id: 6,
    title: "The Role of Superior Civil Engineering in Earthquake-Resistant High-Rises",
    category: "Engineering & Quality",
    date: "June 05, 2026",
    readTime: "6 min read",
    author: "P. S. Patankar & Associates",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "An insider look into Fe550 grade TMT steel, high-strength concrete mixes, and RCC frame structural testing that keep Devang Developers' buildings resilient for generations.",
    content: `
      Structural integrity is the unyielding backbone of every building. A landmark high-rise requires rigorous civil engineering from foundation soil testing to slab curing.

      ### Engineering Standards at Devang Developers:
      - **Fe550 Grade Steel**: Superior ductility and tensile strength for seismic safety.
      - **RCC Framework**: Reinforced cement concrete frames designed as per IS code standards.
      - **Hydro-Pneumatic Systems**: Smooth, continuous water pressure across all upper floors.

      Every Devang building is engineered to stand proud as a symbol of quality for generations.
    `,
  },
  {
    id: 7,
    title: "Why Pande Layout? The Premier Residential Haven of South-West Nagpur",
    category: "Location Insight",
    date: "August 10, 2026",
    readTime: "5 min read",
    author: "Devang Editorial Team",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "An in-depth look at why home buyers and investors prioritize Pande Layout on London Street for its peaceful environment, instant connectivity, and high property appreciation.",
    content: `
      When evaluating high-quality residential addresses in Nagpur, **Pande Layout** stands out as a preferred choice for discerning homeowners. Located directly on the prestigious London Street, Pande Layout combines peaceful neighborhood living with instant access to the city's finest infrastructure.

      ### Key Advantages of Living in Pande Layout:
      1. **Direct Frontage on London Street**: Direct location on London Street ensures effortless commuting across Khamla Road, Wardha Road, and Ring Road.
      2. **Complete Everyday Infrastructure**: Walkable access to Khamla Main Market, leading banks, pharmacies, and green parks.
      3. **High Rental & Resale Demand**: Premium 3 BHK residences in Pande Layout command excellent rental yields and robust capital growth year after year.

      Projects like **Riddhi Siddhi ~ III ~** by Devang Developers showcase how modern high-rise architecture seamlessly fits into Pande Layout's prestigious urban fabric.
    `,
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    document.title = "Real Estate Insights & Journal | Devang Developers Nagpur";
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Home Buying Guide", "RERA & Legal", "Vastu & Design", "Investment & ROI", "Engineering & Quality"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative bg-[#FAF7F2] text-[#852541] font-sans antialiased min-h-screen selection:bg-[#852541] selection:text-[#FAF7F2]">
      
      {/* ── HERO HEADER BANNER ────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 bg-[#FAF7F2] text-center overflow-hidden">

        <div className="relative max-w-4xl mx-auto space-y-4 z-10">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/30 text-[#852541] text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles size={14} className="text-[#bb9034] animate-pulse" /> Real Estate Journal & Insights
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight">
            Devang <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]"> Perspectives</span>
          </h1>

          <p className="text-base md:text-xl font-sans text-[#bb9034] font-medium max-w-2xl mx-auto leading-relaxed">
            Expert guidance, market trends, architectural innovations, and homebuyer tips for Nagpur property investors.
          </p>
        </div>
      </section>

      {/* ── FEATURED SPOTLIGHT ARTICLE ──────────────────────────────────── */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[32px] overflow-hidden border border-[#bb9034]/30 shadow-xl hover:shadow-[0_25px_60px_rgba(133,37,65,0.18)] hover:border-[#852541] transition-all duration-500 grid lg:grid-cols-12 gap-8 items-center group cursor-pointer"
             onClick={() => setSelectedArticle(BLOG_POSTS[0])}>
          
          <div className="lg:col-span-7 relative h-[320px] lg:h-[420px] overflow-hidden">
            <img
              src={BLOG_POSTS[0].image}
              alt={BLOG_POSTS[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#852541] text-[#c9a874] text-xs font-bold uppercase tracking-wider shadow-md">
              ⭐ Featured Article
            </span>
          </div>

          <div className="lg:col-span-5 p-8 lg:pr-10 space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#bb9034] font-semibold">
              <span className="flex items-center gap-1"><Calendar size={13} /> {BLOG_POSTS[0].date}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {BLOG_POSTS[0].readTime}</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#852541] group-hover:text-[#bb9034] transition-colors leading-snug">
              {BLOG_POSTS[0].title}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              {BLOG_POSTS[0].excerpt}
            </p>

            <div className="pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedArticle(BLOG_POSTS[0]);
                }}
                className="inline-flex items-center gap-2 bg-[#852541] hover:bg-[#6B1C33] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition duration-300 shadow-md cursor-pointer group-hover:scale-105"
              >
                <span>Read Full Article</span>
                <ArrowRight size={14} className="text-[#c9a874] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH & CATEGORY FILTERS ──────────────────────────────────── */}
      <section className="py-8 px-6 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#852541] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 border border-[#bb9034]/30 hover:border-[#852541] hover:text-[#852541]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bb9034]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#bb9034]/30 rounded-full py-2.5 pl-11 pr-4 text-xs text-gray-800 focus:outline-none focus:border-[#852541]"
            />
          </div>

        </div>
      </section>

      {/* ── ARTICLES GRID WITH BESPOKE 3D HOVER TRANSITIONS ─────────────── */}
      <section className="py-8 px-6 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="group relative bg-white rounded-[32px] overflow-hidden border border-[#bb9034]/30 shadow-md hover:shadow-[0_25px_60px_rgba(133,37,65,0.18)] hover:border-[#852541] hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              {/* Light Flare Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

              <div>
                {/* Article Cover Image with Zoom */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#852541]/90 backdrop-blur-md border border-[#c9a874]/40 text-[#c9a874] text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-7 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#bb9034] font-semibold">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#852541] group-hover:text-[#bb9034] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-7 pt-0 flex items-center justify-between border-t border-[#bb9034]/15 mt-4">
                <span className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                  <User size={12} className="text-[#bb9034]" /> {post.author}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#852541] group-hover:text-[#bb9034] transition-colors">
                  Read Article <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>

              {/* Bottom Gold Accent Progress Line */}
              <div className="h-1 w-12 bg-[#bb9034]/40 group-hover:w-full group-hover:bg-[#852541] transition-all duration-500" />
            </article>
          ))}
        </div>
      </section>

      {/* ── ARTICLE MODAL ──────────────────────────────────────────────── */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FAF7F2] rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-[#bb9034]/40 relative text-[#852541] shadow-2xl space-y-6">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition cursor-pointer"
            >
              <X size={20} />
            </button>

            <span className="px-3.5 py-1.5 rounded-full bg-[#bb9034]/15 border border-[#bb9034]/40 text-[#852541] text-[10px] font-bold uppercase tracking-widest inline-block">
              {selectedArticle.category}
            </span>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#852541] leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 border-y border-[#bb9034]/20 py-3">
              <span className="flex items-center gap-1.5 font-semibold text-[#852541]"><User size={14} className="text-[#bb9034]" /> {selectedArticle.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {selectedArticle.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {selectedArticle.readTime}</span>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 w-full">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-gray-700 text-sm leading-relaxed space-y-4 font-light whitespace-pre-line">
              {selectedArticle.content}
            </div>

            <div className="pt-4 border-t border-[#bb9034]/20 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-[#852541] text-white text-xs font-bold uppercase rounded-full hover:bg-[#6B1C33] transition"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}