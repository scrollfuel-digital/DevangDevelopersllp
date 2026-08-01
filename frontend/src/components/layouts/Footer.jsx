import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin, ExternalLink, ArrowUp, ChevronRight } from "lucide-react";

const socialLinks = [
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919921042899?text=Hello%20Devang%20Developers%2C%20I%20am%20interested%20in%20your%20projects." },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/devangdevelopers?igsh=MWsxMjhsZ3Vtc2FucQ==" },
  { Icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/share/1MAB2J8GPz/" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/devang-developers-llp/" },
];

const quickLinks = [
  { name: "Home Page", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects Portfolio", path: "/project" },
  { name: "Riddhi Siddhi III", path: "/project/riddhi-siddhi-3" },
  { name: "Company Blog", path: "/blog" },
  { name: "Contact Desk", path: "/contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FAF5EB] via-[#F5EAD4] to-[#FAF5EB] text-[#852541] font-sans antialiased border-t-4 border-[#852541] relative overflow-hidden shadow-xl">
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#bb9034]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#852541]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 md:py-20 relative z-10">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start pb-10 sm:pb-14 border-b-2 border-[#852541]/20">
          
          {/* COLUMN 1: Brand Logo & Socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-4"
          >
            <img
              src="/Devang Logo.png"
              alt="Devang Developers Logo"
              className="h-28 sm:h-36 md:h-40 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
            />

            <p className="text-xs text-[#852541] font-sans font-bold leading-relaxed max-w-xs">
              Building More Than Homes. Creating Timeless Legacies Across Nagpur.
            </p>

            <div className="flex gap-2.5 pt-1">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#852541] text-[#c9a874] transition-all duration-300 hover:bg-[#bb9034] hover:text-white hover:scale-110 shadow-md"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Navigation */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-3"
          >
            <h4 className="text-xs font-serif font-black uppercase tracking-[0.2em] text-[#852541] border-b-2 border-[#852541] pb-2 inline-block">
              Quick Navigation
            </h4>

            <ul className="space-y-2.5 text-xs font-bold">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[#852541] hover:text-[#bb9034] transition duration-200 flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-[#852541] group-hover:text-[#bb9034] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Corporate Head Desk (NO WHITE CARDS - DIRECT DISPLAY) */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-3"
          >
            <h4 className="text-xs font-serif font-black uppercase tracking-[0.2em] text-[#852541] border-b-2 border-[#852541] pb-2 inline-block">
              Corporate Head Desk
            </h4>

            <div className="space-y-3.5 text-xs">
              <a
                href="tel:+919921042899"
                className="flex items-start gap-3 group transition"
              >
                <div className="w-8 h-8 rounded-full bg-[#852541] text-[#c9a874] flex items-center justify-center shrink-0 shadow-sm mt-0.5 group-hover:bg-[#bb9034] group-hover:text-white transition duration-300">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black text-[#852541]/75 block tracking-wider">Phone Support</span>
                  <span className="font-extrabold text-[#852541] group-hover:text-[#bb9034] transition">+91 9921042899 / 9921294799</span>
                </div>
              </a>

              <a
                href="mailto:devangdevelopers@gmail.com"
                className="flex items-start gap-3 group transition"
              >
                <div className="w-8 h-8 rounded-full bg-[#852541] text-[#c9a874] flex items-center justify-center shrink-0 shadow-sm mt-0.5 group-hover:bg-[#bb9034] group-hover:text-white transition duration-300">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black text-[#852541]/75 block tracking-wider">Email Inquiry</span>
                  <span className="font-extrabold text-[#852541] group-hover:text-[#bb9034] transition">devangdevelopers@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#852541] text-[#c9a874] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black text-[#852541]/75 block tracking-wider">Project Location</span>
                  <span className="font-bold text-[#852541] leading-snug block">32-A, Deep Apt, Pande Layout, Khamla Road, Nagpur</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 4: Project Location Map */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-3"
          >
            <h4 className="text-xs font-serif font-black uppercase tracking-[0.2em] text-[#852541] border-b-2 border-[#852541] pb-2 inline-block">
              Project Location Map
            </h4>

            {/* Map Card Container */}
            <div className="relative w-full h-[145px] rounded-2xl overflow-hidden border-2 border-[#852541]/30 shadow-md bg-white group">
              <iframe
                title="Riddhi Siddhi 3 Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.782806282869!2d79.0601!3d21.1211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c062c3e1b3d5%3A0x1404c0d0144f8e56!2sPande%20Layout%2C%20Khamla%2C%20Nagpur%2C%20Maharashtra%20440025!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 transition-all duration-500 group-hover:scale-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=32-A,+Deep+Apartment,+Pande+Layout,+Khamla+Road,+Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-[#852541]/85 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1 text-[11px] font-bold text-white transition-all backdrop-blur-xs"
              >
                <span>Open Google Maps</span>
                <ExternalLink size={12} className="text-[#c9a874]" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Distinct Executive Bottom Copyright Bar */}
      <div className="bg-[#852541] text-white py-4 sm:py-6 px-4 sm:px-6 border-t-2 border-[#bb9034]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs">
          <span>
            © {new Date().getFullYear()} <strong className="font-bold text-[#c9a874]">Devang Developers LLP</strong>. All rights reserved.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a874] hover:text-white transition cursor-pointer group"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-[#c9a874] group-hover:text-[#852541] flex items-center justify-center transition-all duration-300">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;