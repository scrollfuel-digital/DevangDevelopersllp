import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const socialLinks = [
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919921042899?text=Hello%20Devang%20Developers%2C%20I%20am%20interested%20in%20your%20projects." },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/devangdevelopers?igsh=MWsxMjhsZ3Vtc2FucQ==" },
  { Icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/share/1MAB2J8GPz/" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/devang-developers-llp/" },
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
    <footer
      className="bg-[#0b0a09] text-[#ece7df]"
      style={{ fontFamily: "'PT Sans', sans-serif" }}
    >
      {/* Top section: logo, RERA notice, Embedded Location Map */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 md:gap-8 md:grid-cols-[0.9fr_1.5fr_1.1fr] md:items-start">
          
          {/* Logo + wordmark + socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <img
              src="/Devang Logo.png"
              alt="Devang Logo"
              className="mb-4 h-[72px] sm:h-24 md:h-28 w-auto object-contain"
            />

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7a37a]/60 text-[#c7a37a] transition-all duration-300 hover:border-[#c7a37a] hover:bg-[#c7a37a] hover:text-black hover:scale-110 shadow-md"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RERA notice */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="text-sm leading-relaxed text-[#c9c4bd]"
          >
            <p className="mb-4">
              Riddhi Siddhi III is registered under MahaRERA under Project
              Registration No. PR1190002501512, which can be viewed at{" "}
              <a
                href="https://maharera.mahaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d9b98a] underline decoration-[#d9b98a]/40 underline-offset-2 hover:text-white"
              >
                https://maharera.mahaonline.gov.in
              </a>{" "}
              under registered projects.
            </p>
            <p>
              This content is for informational purposes only and does not
              constitute an offer to avail of any service. Prices mentioned
              are subject to change without notice, and properties mentioned
              are subject to availability. Images are for representation
              purposes only. This is the official website of Devang Developers LLP.
            </p>
          </motion.div>

          {/* Embedded Riddhi Siddhi 3 Location Map Card */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col items-center md:items-end space-y-2"
          >
            <div className="relative w-full max-w-[240px] h-[160px] rounded-2xl overflow-hidden border border-[#c7a37a]/50 shadow-xl bg-[#181614] group">
              <iframe
                title="Riddhi Siddhi 3 Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.782806282869!2d79.0601!3d21.1211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c062c3e1b3d5%3A0x1404c0d0144f8e56!2sPande%20Layout%2C%20Khamla%2C%20Nagpur%2C%20Maharashtra%20440025!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Badge Overlay */}
              <a
                href="https://maps.google.com/?q=32-A,+Deep+Apartment,+Pande+Layout,+Khamla+Road,+Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-[#0b0a09]/90 backdrop-blur-md border border-[#c7a37a]/40 text-white text-[10px] font-semibold flex items-center justify-between shadow-lg group-hover:border-[#c7a37a] transition-all"
              >
                <span className="flex items-center gap-1 text-[#c7a37a]">
                  <MapPin size={12} /> Pande Layout, Khamla
                </span>
                <ExternalLink size={12} className="text-[#c7a37a]" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Contact row */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-10 flex flex-col flex-wrap gap-6 border-t border-[#2a2621] pt-8 text-sm text-[#c9c4bd] sm:flex-row sm:items-center sm:gap-10"
        >
          <div className="flex items-center gap-2">
            <Phone size={16} className="shrink-0 text-[#c7a37a]" />
            <span>Phone: +91 9921042899 / +91 9921294799</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="shrink-0 text-[#c7a37a]" />
            <span>Email: devangdevelopers@gmail.com</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-[#c7a37a]" />
            <span>
              Project Address: 32-A, Deep Apartment, Pande Layout, Khamla Road, Nagpur
            </span>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-8 border-t border-[#2a2621] pt-6 text-center text-xs text-[#8f887f]"
        >
          © {new Date().getFullYear()} Devang Developers LLP. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;