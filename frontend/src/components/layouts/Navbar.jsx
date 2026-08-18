import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import logo from "../../assets/DevangLogo.png";
import homeMenuImg from "../../assets/Home menu image.png";
import aboutUsImg from "../../assets/About us Image.png";
import menuProjectImg from "../../assets/menu-project-cropped.png";
import contactImg from "../../assets/contact img.jpeg";

// INDIVIDUAL MENU IMAGE STYLING CONFIGURATION:
// Each menu link has its OWN dedicated image styling properties (width, height, fit, position, scale, padding, custom inline style).
// Editing one item's properties will ONLY affect that specific image!
const NAV_LINKS = [
    {
        id: 1,
        title: "Home",
        path: "/",
        image: homeMenuImg,
        fit: "object-center",          // Fit mode: 'object-cover', 'object-contain', etc.
        position: "object-[88%_15%]", // Image alignment position
        scale: "scale-[1.02]",        // Independent zoom/scaling for Home image
        className: "w-full h-full",   // Independent width & height classes for Home image
        style: {},                    // Independent inline styles (e.g. { width: '100%', height: '100%' })
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        image: aboutUsImg,
        fit: "object-cover",          // Fit mode for About image
        position: "object-center",    // Alignment position for About image
        scale: "scale-100",           // Independent zoom/scaling for About image
        className: "w-full h-full",   // Independent width & height classes for About image
        style: {},                    // Independent inline styles for About image
    },
    {
        id: 3,
        title: "Projects",
        path: "/project",
        image: menuProjectImg,
        fit: "object-center",          // Full cover (stretches edge-to-edge to fill 100% of the right portion)
        position: "object-[50%_20%]", // Center-top building alignment
        scale: "scale-100",           // Independent zoom/scaling for Projects image
        className: "w-full h-full",   // Independent width & height classes for Projects image
        style: {},                    // Independent inline styles for Projects image
    },
    {
        id: 5,
        title: "Blog",
        path: "/blog",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
        fit: "object-cover",          // Fit mode for Blog image
        position: "object-center",    // Alignment position for Blog image
        scale: "scale-100",           // Independent zoom/scaling for Blog image
        className: "w-full h-full",   // Independent width & height classes for Blog image
        style: {},                    // Independent inline styles for Blog image
    },
    {
        id: 6,
        title: "Contact",
        path: "/contact",
        image: contactImg,
        fit: "object-center",          // Fit mode for Contact image
        position: "object-center",    // Alignment position for Contact image
        scale: "scale-100",           // Independent zoom/scaling for Contact image
        className: "w-full h-full",   // Independent width & height classes for Contact image
        style: {},                    // Independent inline styles for Contact image
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(NAV_LINKS[0]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <>
            {/* MAIN LOGO - Absolute (Scrolls naturally with the page, NOT fixed) */}
            <div className="absolute top-2 left-4 sm:left-6 md:left-10 z-30">
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Devang Developers Logo"
                        className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
                    />
                </NavLink>
            </div>

            {/* Header Menu Button - Prominent & Large (Scrolls naturally with the page, NOT fixed) */}
            {!open && (
                <header className="absolute top-6 right-6 sm:right-10 md:right-14 z-40">
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-3.5 text-[#A9814A] hover:text-[#852541] transition duration-300 group cursor-pointer"
                    >
                        <span className="hidden sm:block text-lg sm:text-xl font-bold tracking-[0.2em] uppercase font-serif">
                            Menu
                        </span>

                        <span className="flex flex-col gap-1.5 w-7 sm:w-8">
                            <span className="h-[2.5px] bg-[#A9814A] group-hover:bg-[#852541] transition-colors rounded-full"></span>
                            <span className="h-[2.5px] w-5 self-end bg-[#A9814A] group-hover:bg-[#852541] group-hover:w-full transition-all rounded-full"></span>
                        </span>
                    </button>
                </header>
            )}

            {/* Full Screen Menu Drawer - TRANSPARENT GLASSMORPHISM BACKDROP */}
            <div
                className={`fixed inset-0 z-50 bg-[#14120F]/80 backdrop-blur-2xl transition-all duration-500 ${open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Logo inside Menu Page - CENTER ALIGNED ON LEFT COLUMN */}
                <div className="absolute top-6 left-0 right-0 lg:right-auto lg:w-[420px] flex justify-center z-20 pointer-events-auto">
                    <NavLink to="/" onClick={() => setOpen(false)}>
                        <img
                            src={logo}
                            alt="Devang Developers Logo"
                            className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                        />
                    </NavLink>
                </div>
                {/* Close Button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-5 right-6 sm:top-7 sm:right-10 z-20 flex items-center gap-3 px-7 py-3 rounded-full text-white text-sm sm:text-base font-extrabold uppercase tracking-widest cursor-pointer shadow-lg select-none border-0 outline-none"
                    style={{ backgroundColor: "#B8864E" }}
                >
                    <span>CLOSE</span>
                    <X size={20} strokeWidth={2.5} className="text-white" />
                </button>

                <div className="flex h-full flex-col lg:flex-row overflow-y-auto">
                    {/* Navigation - CENTER ALIGNED & INCREASED ELEGANT FONT SIZE (NOT BOLD) */}
                    <nav className="w-full lg:w-[420px] lg:border-r border-white/15 flex flex-col justify-center items-center text-center px-6 sm:px-10 pt-36 pb-20 space-y-2 relative z-10 bg-[#14120F]">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                onMouseEnter={() => setHovered(link)}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `group relative py-3 uppercase tracking-[0.3em] text-lg sm:text-xl font-normal transition-all duration-300 flex flex-col items-center ${isActive
                                        ? "text-[#A9814A]"
                                        : "text-white/80 hover:text-[#A9814A]"
                                    }`
                                }
                            >
                                {link.title}

                                <span className="h-[2px] w-0 bg-[#A9814A] transition-all duration-300 group-hover:w-14 mt-1"></span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right Image Preview - INDIVIDUAL PER-IMAGE SIZE & POSITION CONTROLS */}
                    <div className="hidden lg:block flex-1 relative overflow-hidden bg-[#14120F] pointer-events-none">
                        {NAV_LINKS.map((link) => (
                            <img
                                key={link.id}
                                src={link.image}
                                alt={link.title}
                                className={`absolute inset-0 ${link.fit || "object-cover"} ${link.position || "object-center"} ${
                                    link.className || "w-full h-full"
                                } transition-all duration-700 ${
                                    hovered?.id === link.id ? "opacity-90" : "opacity-0"
                                }`}
                                style={link.style || {}}
                            />
                        ))}

                        {/* Left Edge Dark Gradient Blend into Navigation Menu */}
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#14120F] via-[#14120F]/50 to-transparent pointer-events-none w-36"></div>
                    </div>
                </div>

                {/* Back To Top Button */}
                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                        setOpen(false);
                    }}
                    className="absolute bottom-8 right-8 w-12 h-12 rounded-2xl bg-[#A9814A] hover:bg-[#C9A874] text-white flex items-center justify-center shadow-xl cursor-pointer"
                >
                    ↑
                </button>
            </div>
        </>
    );
};

export default Navbar;