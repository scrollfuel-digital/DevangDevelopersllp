import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
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
      {/* Top section: logo, RERA notice, QR code */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.6fr_auto] md:items-start">
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
              className="mb-4 h-16 sm:h-20 md:h-24 w-auto object-contain"
            />

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  arialabel={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c7a37a]/50 text-[#c7a37a] transition-colors duration-300 hover:border-[#c7a37a] hover:bg-[#c7a37a] hover:text-black"
                >
                  <Icon size={16} />
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
              purposes only. This is the official website of an authorised
              marketing partner. We may share data with RERA-registered
              brokers/companies for further processing.
            </p>
          </motion.div>

          {/* QR code */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="flex h-[175px] w-[175px] items-center justify-center rounded-md bg-white p-3">
              {/* Replace src with your actual QR code image */}
              <img
                src="/qr-code.png"
                alt="Scan to view project details"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>
        </div >

        {/* Contact row */}
        < motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-10 flex flex-col flex-wrap gap-6 border-t border-[#2a2621] pt-8 text-sm text-[#c9c4bd] sm:flex-row sm:items-center sm:gap-10"
        >
          <div className="flex items-center gap-2">
            <Phone size={16} className="shrink-0 text-[#c7a37a]" />
            <span>Phone: 9921042899 / 9921294799</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="shrink-0 text-[#c7a37a]" />
            <span>Email: devangdevelopers@gmail.com</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-[#c7a37a]" />
            <span>
              Operations Address: I-24, ARPIT SHRUSHTI, Behind Ganesh Temple,
              Tatya Tope Nagar, Nagpur, 440015
            </span>
          </div>
        </ motion.div>
      </div >

      {/* Rights / privacy line */}
      < div className="border-t border-[#2a2621] py-5 text-center text-sm text-[#a49c90]" >
        <p>
          All Rights Reserved. |{" "}
          <a
            href="#"
            className="text-[#d9b98a] hover:text-white transition-colors"
          >
            Privacy Policy Applies.
          </a>
        </p >
      </div >

      {/* Enquire strip */}
      < div className="border-t border-[#2a2621] bg-[#111008] py-4 text-center" >
        <p
          className="text-lg text-[#d9b98a]"
          style={{ fontFamily: "'Domine', serif" }}
        >
          Enquire Now or Call Us: 9921042899 / 9921294799
        </p>
      </ div >
    </footer >
  );
};

export default Footer;