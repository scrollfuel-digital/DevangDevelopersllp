

import React from "react";
import { motion } from "framer-motion";
import {
    Building2,
    Landmark,
    Handshake,
    HandCoins,
    Users,
    Building,
} from "lucide-react";



const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

function LinkItem({ icon: Icon, label, href }) {
    const handleClick = () => {
        window.location.href = href;
    };

    return (
        <motion.button
            type="button"
            onClick={handleClick}
            variants={fadeUp}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group relative flex flex-col items-center gap-4 text-center w-full px-4 py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ outlineColor: "#8A6A3F" }}
        >
            {/* Icon ring */}
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full">
                <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full"
                    style={{ border: "1px solid #D9CBAF" }}
                    variants={{
                        rest: { scale: 1, backgroundColor: "rgba(138,106,63,0)" },
                        hover: { scale: 1.06, backgroundColor: "rgba(138,106,63,1)" },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                />
                <motion.span
                    className="relative flex items-center justify-center"
                    variants={{
                        rest: { color: "#8A6A3F" },
                        hover: { color: "#FBF9F6" },
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Icon size={28} strokeWidth={1.4} />
                </motion.span>
            </span>

            {/* Label */}
            <span
                className="text-[13px] md:text-sm font-semibold leading-snug tracking-wide transition-colors duration-300 max-w-[11rem] group-hover:text-[#8A6A3F]"
                style={{ color: "#5f5a54", fontFamily: "'Poppins', sans-serif" }}
            >
                {label}
            </span>

            {/* Underline accent */}
            <motion.span
                aria-hidden="true"
                className="h-px w-6"
                style={{ backgroundColor: "#B08D5F" }}
                variants={{
                    rest: { width: 24, opacity: 0.4 },
                    hover: { width: 40, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
        </motion.button>
    );
}

 function About() {
    return (
        <section
            className="w-full pt-16 pb-6 px-4 md:px-8"
            style={{
                backgroundColor: "#FBF9F6",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">


                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="text-xl md:text-3xl font-bold tracking-[0.15em]"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                    <span style={{ color: "#2B2620" }}>ABOUT</span>{" "}
                    <span style={{ color: "#B08D5F" }}>DEVANG DEVELOPERS</span>
                </motion.h2>

                {/* Signature divider - draws in on scroll */}
                <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    className="mt-6 mb-8 h-px w-24 origin-center"
                    style={{ backgroundColor: "#B08D5F" }}
                />

                {/* Subheading */}
                <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="text-base md:text-lg font-extrabold mb-5"
                    style={{ color: "#4b4641", fontFamily: "'Poppins', sans-serif" }}
                >
                     Building Trust Through Every Brick
                </motion.h3>

                {/* Paragraph */}
                <div
                    className="text-sm md:text-[18px] leading-relaxed max-w-7xl mx-auto space-y-5 text-center"
                    style={{ color: "#53504c", fontFamily: "'Poppins', sans-serif" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        At Devang Developers, we are dedicated to creating landmark residential spaces that define engineering excellence, architectural innovation, and timeless design across Nagpur. 
                        With over 18 years of pioneering industry experience and an unyielding commitment to superior craftsmanship, we build homes that offer the perfect synthesis of luxury, structural integrity, and modern lifestyle functionality. 
                        Every project—from our flagship Riddhi Siddhi high-rise towers to sprawling gated communities—is meticulously planned with 100% Vastu-compliant layouts, optimal natural light, and refined civil engineering precision to deliver an unparalleled living experience.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    >
                        We firmly believe that a home is far more than physical brick and mortar; it is the sanctuary for a family's dreams, a foundation for an elevated lifestyle, and an appreciating long-term asset. 
                        Our construction philosophy relies strictly on premium civil materials including Fe550 grade TMT steel, RCC earthquake-resistant structural framing, advanced hydro-pneumatic water systems, auto DG power backups, and multi-tier 24/7 smart gated security systems. 
                        By maintaining absolute transparency, complete RERA regulatory compliance, and a proven track record of strictly on-time project deliveries, we have earned the enduring trust of over 100 happy homeowner families.
                    </motion.p>

                   
                </div>

                
            </div>
        </section>
    );
}
export default About;