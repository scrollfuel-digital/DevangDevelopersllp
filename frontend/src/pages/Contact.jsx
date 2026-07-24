import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Globe,
  Send,
  User,
  FileText,
} from "lucide-react";

// NAV LINKS CONFIGURATION
const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "About",
    path: "#about",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Residences",
    path: "#residences",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Amenities",
    path: "#amenities",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Gallery",
    path: "#gallery",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Contact",
    path: "/contact",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
];

// NAVBAR COMPONENT
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(NAV_LINKS[2]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Logo */}
      <div className="absolute top-0 left-0 z-30 px-4 sm:px-6 md:px-10 py-4 sm:py-5">
        <img
          src="/Devang Logo.png"
          alt="Devang Logo"
          className="h-16 sm:h-20 md:h-28 lg:h-36 w-auto object-contain"
        />
      </div>

      <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-end px-5 sm:px-8 md:px-10 lg:px-14 py-5 sm:py-6 lg:py-7">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 sm:gap-3 text-[#F3EEE6] group"
          aria-label="Open menu"
        >
          <span
            className="hidden sm:inline text-[10px] md:text-[11px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Menu
          </span>

          <span className="flex flex-col gap-[4px] sm:gap-[5px] w-5 sm:w-6">
            <span className="h-[1.5px] w-full bg-[#F3EEE6] transition-all group-hover:bg-[#A9814A]" />
            <span className="h-[1.5px] w-3.5 sm:w-4 self-end bg-[#F3EEE6] transition-all group-hover:w-full group-hover:bg-[#A9814A]" />
          </span>
        </button>
      </header>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#14120F] transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 sm:top-7 sm:right-8 md:right-14 flex items-center gap-2 sm:gap-3 text-[#F3EEE6] hover:text-[#A9814A] transition-colors z-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase">
            Close
          </span>

          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="sm:w-4 sm:h-4"
          >
            <path
              d="M1 1L15 15M15 1L1 15"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Links */}
          <nav className="relative w-full lg:w-[420px] lg:border-r border-[#F3EEE6]/10 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-20 sm:py-24 h-full overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onMouseEnter={() => setHovered(link)}
                onClick={() => {
                  setOpen(false);
                  if (link.path.startsWith("/")) {
                    navigate(link.path);
                  } else {
                    const section = link.path.replace("#", "");
                    const element = document.getElementById(section);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="group relative py-2.5 sm:py-3 text-left"
              >
                <span
                  className="text-[15px] sm:text-[16px] md:text-[14px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#F3EEE6]/70 group-hover:text-[#A9814A] transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </span>

                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#A9814A] transition-all duration-300 group-hover:w-10" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:block relative flex-1 overflow-hidden">
            {NAV_LINKS.map((link) => (
              <img
                key={link.label}
                src={link.image}
                alt={link.label}
                className={`absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-700 ${
                  hovered.label === link.label ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#14120F]/60" />
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
          className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 md:right-10 w-10 h-10 sm:w-11 sm:h-11 bg-[#A9814A] flex items-center justify-center hover:bg-[#C9A874] transition-colors"
          aria-label="Back to top"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            className="sm:w-3 sm:h-3"
          >
            <path d="M6 0L11 8H1L6 0Z" fill="#14120F" />
          </svg>
        </button>
      </div>
    </>
  );
};

// CONTACT PAGE COMPONENT
export default function Contact() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <section className="relative bg-transparent overflow-hidden">
        {/* Background Blur */}
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#efe6d8]/50 blur-[120px]" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#efe6d8]/50 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-24">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="h-[2px] w-24 bg-[#b98d45]" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#173629]">
                Contact Devang Developers
              </h1>
              <div className="h-[2px] w-24 bg-[#b98d45]" />
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Let's Build Your Future Together. Whether you're looking for your
              dream home, a commercial investment, or want to know more about our
              projects, our experts are ready to assist you.
            </p>
          </div>

          {/* HERO CONTAINER */}
          <div className="relative rounded-[40px]">
            {/* Background Image Container */}
            <div
              className="relative rounded-[40px] bg-cover bg-center pb-35 px-6"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#173629]/85 rounded-[40px]"></div>

              {/* Hero Text Content */}
              <div className="relative z-10 py-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-15">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6">
                  Contact Us
                </span>
                <h2 className="text-5xl md:text-6xl pb-2 font-serif text-white leading-tight">
                  How Can We
                  <br />
                  Help You?
                </h2>
                
              </div>
            </div>

            {/* Form Card (Pushed Downward to Avoid Text Overlap) */}
            <div className="relative lg:absolute left-1/2 lg:-translate-x-1/2 lg:-bottom-[380px] z-20 mt-10 lg:mt-0 w-full max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#b98d45] p-8 md:p-10">
                <h3 className="text-3xl font-serif text-[#173629] mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#173629]"
                      />
                    </div>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#173629]"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#173629]"
                      />
                    </div>

                    <div className="relative">
                      <FileText
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                      />
                      <select
                        defaultValue=""
                        className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#173629] bg-white text-gray-700"
                      >
                        <option value="" disabled>Select Project</option>
                        <option value="mangalmurti">Mangalmurti Residency</option>
                        <option value="wing-c">Wing C 129 RSH</option>
                        <option value="riddhi-siddhi">Riddhi Siddhi</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <textarea
                    rows={5}
                    placeholder="Write Your Message..."
                    className="w-full rounded-xl border border-gray-200 p-5 outline-none focus:border-[#173629]"
                  ></textarea>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#b98d45] hover:bg-[#a57d3f] text-white py-4 rounded-full text-lg font-medium transition duration-300 flex items-center justify-center gap-3"
                  >
                    Contact Our Sales Team
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Spacer to give room for the floating card */}
          <div className="hidden lg:block h-[420px]"></div>

          {/* CONTACT INFO CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            {/* Phone */}
            <div className="group rounded-3xl bg-[#111111] border border-[#C9A14A]/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A] hover:shadow-[0_0_40px_rgba(201,161,74,.2)]">
              <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center mb-8 group-hover:bg-[#C9A14A] transition">
                <Phone className="text-[#C9A14A] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-5">
                Phone Number
              </h3>
              <p className="text-gray-400 leading-8">
                +91 9921042899
                <br />
                +91 9921294799
              </p>
            </div>

            {/* Email */}
            <div className="group rounded-3xl bg-[#111111] border border-[#C9A14A]/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A] hover:shadow-[0_0_40px_rgba(201,161,74,.2)]">
              <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center mb-8 group-hover:bg-[#C9A14A] transition">
                <Mail className="text-[#C9A14A] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-5">
                Email
              </h3>
              <p className="text-gray-400 break-all">
                devangdevelopers@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="group rounded-3xl bg-[#111111] border border-[#C9A14A]/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A] hover:shadow-[0_0_40px_rgba(201,161,74,.2)]">
              <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center mb-8 group-hover:bg-[#C9A14A] transition">
                <MapPin className="text-[#C9A14A] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-5">
                Office Address
              </h3>
              <p className="text-gray-400 leading-8">
                I-24, ARPIT SHRUSHTI,
                <br />
                Behind Ganesh Temple,
                <br />
                Tatya Tope Nagar,
                <br />
                Nagpur – 440015
              </p>
            </div>
          </div>

          {/* EXTRA INFO */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            {/* Business Hours */}
            <div className="rounded-[32px] bg-[#111111] border border-[#C9A14A]/20 p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center">
                  <Clock3 className="text-[#C9A14A]" />
                </div>
                <h2 className="text-3xl font-serif text-white">
                  Business Hours
                </h2>
              </div>
              <div className="space-y-5 text-gray-300 text-lg">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Monday - Saturday</span>
                  <span className="text-[#C9A14A]">
                    10:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#C9A14A]">
                    By Appointment
                  </span>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="rounded-[32px] bg-[#111111] border border-[#C9A14A]/20 p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center">
                  <Globe className="text-[#C9A14A]" />
                </div>
                <h2 className="text-3xl font-serif text-white">
                  Website
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-8">
                www.devangdevelopers.com
              </p>
              <p className="text-gray-500 mt-5 leading-8">
                Explore our residential and commercial developments,
                project updates, amenities and investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}