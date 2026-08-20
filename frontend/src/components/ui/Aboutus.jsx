

import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <section
            className="w-full pt-16 pb-12 px-4 md:px-8"
            style={{
                backgroundColor: "#FBF9F6",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                {/* Heading (Matching RIDDHI SIDDHI ~ III ~ Font Design) */}
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="text-3xl sm:text-5xl font-serif font-extrabold text-[#852541] tracking-wide leading-tight"
                >
                    ABOUT <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#852541] via-[#bb9034] to-[#852541]">DEVANG DEVELOPERS</span>
                </motion.h2>

                {/* Signature divider */}
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
                     Walls Of Happiness 
                </motion.h3>

                {/* Paragraphs */}
                <div
                    className="text-sm md:text-[18px] leading-relaxed max-w-5xl mx-auto space-y-6 text-center"
                    style={{ color: "#53504c", fontFamily: "'Poppins', sans-serif" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        A distinguished real estate developer with a legacy of excellence in Nagpur since 2005. Renowned for its commitment to thoughtful design, precision build quality, and ethical execution. The company curates refined residential spaces that embody comfort, trust, and enduring value. With over 25+ years of experience and a growing community of satisfied homeowners, Devang Developers LLP follows a refined approach to luxury—subtle, considered, and timeless in expression.
                    </motion.p>


                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                    >
                        A company rooted by principles of integrity, uncompromising quality, timely delivery, and a strong customer-centric ethos, the company has earned recognition including the Iconic Realtors Award 2022 and accolades for Best Residential Project.Each development of Devang Developers reflects a dedication to creating homes that transcend structure, offering lasting elegance and a foundation for meaningful living.
                    </motion.p>
                    
                </div>
            </div>
        </section>
    );
}
export default About;
