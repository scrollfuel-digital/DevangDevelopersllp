import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowUpRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaYoutube, label: "YouTube", href: "#" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];
const project = {
  name: "Riddhi Siddhi Heights",
  groups: [
    {
      title: "Towers",
      items: ["Tower A", "Tower B", "Tower C", "Tower D"],
    },
    {
      title: "Explore",
      items: [
        "Floor Plans",
        "Amenities",
        "Master Plan",
        "Location Map",
        "Gallery",
      ],
    },
  ],
};

const company = ["About Us", "Our Projects", "Careers", "Blog", "Contact"];

const usefulLinks = [
  "Home",
  "Riddhi Siddhi Heights",
  "Amenities",
  "Gallery",
  "RERA Details",
  "Book a Site Visit",
  "Home Loan Assistance",
  "Testimonials",
];

const legalLinks = ["Privacy Policy", "Terms of Use", "RERA", "Disclaimer", "Sitemap"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ChevronLink = ({ children, href = "#" }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-1.5 text-[#c9c4bd] transition-colors duration-300 hover:text-[#d9b98a] focus-visible:outline-none focus-visible:text-[#d9b98a]"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d9b98a] transition-all duration-300 group-hover:w-full" />
    </span>
  </a>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden bg-[#0b0a09] text-[#ece7df]"
      style={{ fontFamily: "'PT Sans', sans-serif" }}
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.10] blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #c7a37a, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c7a37a 1px, transparent 1px), linear-gradient(90deg, #c7a37a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Enquiry strip */}
      <div className="relative border-b border-[#2a2621]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-14 md:flex-row md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <p
              className="mb-2 text-xs uppercase tracking-[4px] text-[#d9b98a]"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500 }}
            >
              Riddhi Siddhi Heights, Nagpur
            </p>
            <h2
              className="max-w-md text-3xl leading-tight text-white md:text-4xl"
              style={{ fontFamily: "'Domine', serif" }}
            >
              Be first to know when new towers open for booking.
            </h2>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex w-full max-w-md items-center gap-3 border-b border-[#3a352e] pb-2 focus-within:border-[#c7a37a] md:w-auto"
          >
            <Mail size={18} className="shrink-0 text-[#c7a37a]" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="w-full bg-transparent py-2 text-sm text-white placeholder:text-[#7d766c] focus:outline-none"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1 text-sm uppercase tracking-[2px] text-[#c7a37a] transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              {submitted ? "Sent" : "Subscribe"}
              <ArrowUpRight size={14} />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Social row */}
      <div className="relative mx-auto flex max-w-7xl justify-center gap-3 px-6 pt-12">
        {socialLinks.map(({ Icon, label, href }, index) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            variants={fadeUp}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            whileHover={{ y: -3 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c7a37a]/50 text-[#c7a37a] transition-colors duration-300 hover:border-[#c7a37a] hover:bg-[#c7a37a] hover:text-black focus-visible:outline-none focus-visible:bg-[#c7a37a] focus-visible:text-black"
          >
            <Icon size={16} />
          </motion.a>
        ))}
      </div>

      {/* Main grid */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-14 border-b border-[#2a2621] pb-14 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr]">
          {/* Project */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3
              className="mb-8 inline-block border-b-2 border-[#c7a37a] pb-2 text-lg tracking-[3px] text-white"
              style={{ fontFamily: "'Domine', serif" }}
            >
              {project.name.toUpperCase()}
            </h3>

            <div className="grid gap-10 sm:grid-cols-2">
              {project.groups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-4 text-sm uppercase tracking-[2px] text-[#d9b98a]">
                    {group.title}
                  </h4>
                  <ul className="space-y-3 text-sm">
                    {group.items.map((item) => (
                      <li key={item}>
                        <ChevronLink>{item}</ChevronLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3
              className="mb-8 inline-block border-b-2 border-[#c7a37a] pb-2 text-lg tracking-[3px] text-white"
              style={{ fontFamily: "'Domine', serif" }}
            >
              COMPANY
            </h3>
            <ul className="space-y-4 text-sm">
              {company.map((item) => (
                <li key={item}>
                  <ChevronLink>{item}</ChevronLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 text-sm text-[#c9c4bd]">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#c7a37a]" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-[#c7a37a]" />
                <span>+91 00000 00000</span>
              </div>
            </div>
          </motion.div>

          {/* Useful links */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3
              className="mb-8 inline-block border-b-2 border-[#c7a37a] pb-2 text-lg tracking-[3px] text-white"
              style={{ fontFamily: "'Domine', serif" }}
            >
              USEFUL LINKS
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {usefulLinks.map((item) => (
                <ChevronLink key={item}>{item}</ChevronLink>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wordmark signature */}
        <div className="pointer-events-none relative mt-2 select-none overflow-hidden">
          <p
            aria-hidden="true"
            className="whitespace-nowrap text-center text-[13vw] leading-none text-transparent md:text-[7rem]"
            style={{
              fontFamily: "'Domine', serif",
              WebkitTextStroke: "1px rgba(199,163,122,0.16)",
            }}
          >
            Devang Developers
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[#2a2621] bg-[#111008]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-[#a49c90] md:flex-row">
          <p>© 2026 Devang Developers LLP. All Rights Reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <ChevronLink key={item}>{item}</ChevronLink>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <p>Designed &amp; Developed by Divyani</p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c7a37a]/50 text-[#c7a37a] transition-colors duration-300 hover:border-[#c7a37a] hover:bg-[#c7a37a] hover:text-black focus-visible:outline-none focus-visible:bg-[#c7a37a] focus-visible:text-black"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;