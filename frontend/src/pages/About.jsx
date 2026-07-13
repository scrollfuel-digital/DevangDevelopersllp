// import React from "react";
// import {
//     Building2,
//     Landmark,
//     Handshake,
//     HandCoins,
//     Users,
//     Building,
// } from "lucide-react";

// const links = [
//     {
//         icon: Landmark,
//         label: "Residences",
//         href: "/residences",
//     },
//     {
//         icon: Building2,
//         label: "Offices",
//         href: "/offices",
//     },
//     {
//         icon: Handshake,
//         label: "Channel Partner Connect",
//         href: "/channel-partner-connect",
//     },
//     {
//         icon: HandCoins,
//         label: "Hiranandani Rentals",
//         href: "/rentals",
//     },
//     {
//         icon: Users,
//         label: "Hiranandani Referrals",
//         href: "/referrals",
//     },
//     {
//         icon: Building,
//         label: "Upcoming Infrastructure Projects in Thane",
//         href: "/upcoming-projects-thane",
//     },
// ];

// function LinkItem({ icon: Icon, label, href }) {
//     const handleClick = () => {

//         window.location.href = href;
//     };

//     return (
//         <button
//             type="button"
//             onClick={handleClick}
//             className="group flex flex-col items-start text-left w-full focus:outline-none"
//         >
//             <span
//                 className="flex h-14 w-14 items-center justify-center  transition-all duration-300 "
//             >
//                 <Icon
//                     size={32}
//                     strokeWidth={1.5}
//                     style={{ color: "#8A6A3F" }}
//                     className="transition-colors duration-300 group-hover:text-[#5C4425]"
//                 />
//             </span>
//             <span
//                 className="text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-[#8A6A3F]"
//                 style={{ color: "#5f5a54", fontFamily: "'Noto Sans JP', sans-serif" }}
//             >
//                 {label}
//             </span>
//         </button>
//     );
// }

// export default function About() {
//     return (
//         <section
//             className="w-full py-20 px-16 md:px-26"
//             style={{
//                 backgroundColor: "#FBF9F6",
//                 fontFamily: "'Inter', sans-serif",
//             }}
//         >
//             <div className="max-w-5xl mx-auto pt-0 md:pt-0 ">
//                 {/* Heading */}
//                 <h2
//                     className="text-3xl md:text-4xl font-bold tracking-[0.2em] mb-16 text-center md:text-center"
//                     style={{ fontfamily: "'Noto Sans JP', sans-serif" }}
//                 >
//                     <span style={{ color: "#2B2620" }}>ABOUT</span>{" "}
//                     <span style={{ color: "#B08D5F" }}>DEVANG</span>
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-x-15 gap-y-2 ">
//                     {/* Left: intro copy */}
//                     <div className="relative left-20 md:left-12 ">
//                         <span
//                             aria-hidden="true"
//                             className="hidden md:block absolute -top-6 -left-0 text-8xl font-extrabold select-none pointer-events-none"
//                             style={{ color: "#EFE9DF", zIndex: 0, fontfamily: "'Noto Sans JP', sans-serif" }}
//                         >
//                             about
//                         </span>
//                         <div className="relative z-10 ml-10 max-w-5 md:max-w-lg  md:border-l md:pl-1" style={{ borderLeftColor: "#e7e5e4" }}>
//                             <h3
//                                 className="font-extrabold mb-5 mt-1 md:mt-1 -left-1"
//                                 style={{ color: "#4b4641", fontFamily: "'Poppins', sans-serif" }}
//                             >
//                                 Creating better communities
//                             </h3>
//                             <p
//                                 className="text-xs leading-relaxed"
//                                 style={{ color: "#53504c", fontFamily: "'Poppins', sans-serif" }}
//                             >
//                                 Established in 1978, Devang Group is one of the most
//                                 prestigious real estate developers based in Mumbai.
//                                 Devang   Group has the vision of creating a new India with
//                                 self-sufficient and enduring townships. Every activity, be it
//                                 in real estate, education, healthcare, hospitality, leisure
//                                 or entertainment has steadily focused on creating a better
//                                 experience in every aspect of life. While corporate has gone
//                                 from strength to strength, the Group is primarily synonymous
//                                 with quality, commitment towards customers, reliability, and
//                                 excellence in architecture. We are here to give an
//                                 experience of a lifetime to every family, through
//                                 infrastructure that is synonymous with supreme quality,
//                                 beauty, and longevity.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Middle column: first 3 icons */}
//                     <div
//                         className="flex flex-col md:border-l md:pl-1"
//                         style={{ borderColor: "#e7e5e4" }}
//                     >
//                         {links.slice(0, 3).map((item) => (
//                             <LinkItem key={item.label} {...item} />
//                         ))}
//                     </div>

//                     {/* Right column: next 3 icons */}
//                     <div
//                         className="flex flex-col md:border-l md:pl-1 "
//                         style={{ borderColor: "#e7e5e4", }}
//                     >
//                         {links.slice(3, 6).map((item) => (
//                             <LinkItem key={item.label} {...item} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section >
//     );
// }


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

const links = [
    {
        icon: Landmark,
        label: "Residences",
        href: "/residences",
    },
    {
        icon: Building2,
        label: "Offices",
        href: "/offices",
    },

];

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

export default function About() {
    return (
        <section
            className="w-full py-15 px-6 md:px-6"
            style={{
                backgroundColor: "#FBF9F6",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">


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
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className="text-sm md:text-[15px] leading-relaxed max-w-2xl"
                    style={{ color: "#53504c", fontFamily: "'Poppins', sans-serif" }}
                >
                    At Devang Developers, we believe that every project should be more than just a collection of buildings—it should be a place where families grow, businesses prosper, and communities thrive. Our developments are designed to combine intelligent planning, elegant architecture, quality construction, and modern infrastructure to create spaces that enhance everyday living.
                    We focus on delivering projects that balance aesthetics with functionality, ensuring every apartment, commercial space, and common area is thoughtfully planned for comfort, convenience, and long-term value.
                    Our commitment extends beyond construction. We build lasting relationships through transparency, ethical business practices, timely project delivery, and dedicated customer support.

                </motion.p>

                {/* Icon grid */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-3 grid grid-cols-2 md:grid-cols-2 gap-x-2 gap-y-1 w-full"
                >
                    {links.map((item, i) => (
                        <div
                            key={item.label}
                            className="relative"
                            style={{
                                borderLeft:
                                    i % 3 !== 0 ? "1px solid #EAE4D8" : "none",
                            }}
                        >
                            <LinkItem {...item} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}