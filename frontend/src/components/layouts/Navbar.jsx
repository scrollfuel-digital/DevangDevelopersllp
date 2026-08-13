import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/DevangLogo.png";

const NAV_LINKS = [
    {
        id: 1,
        title: "Home",
        path: "/",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: 3,
        title: "Projects",
        path: "/project",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: 5,
        title: "Blog",
        path: "/blog",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: 6,
        title: "Contact",
        path: "/contact",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
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
                {/* Logo inside Menu Page */}
                <div className="absolute top-2 left-4 sm:left-6 md:left-10 z-20">
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
                    className="absolute top-5 right-6 sm:top-7 sm:right-10 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-[#A9814A] hover:text-white transition cursor-pointer border border-white/20 shadow-lg"
                >
                    <span className="uppercase tracking-[0.25em] text-xs font-bold">
                        Close
                    </span>

                    ✕
                </button>

                <div className="flex h-full flex-col lg:flex-row overflow-y-auto">
                    {/* Navigation - REVERTED TO ORIGINAL ELEGANT TEXT SIZE */}
                    <nav className="w-full lg:w-[420px] lg:border-r border-white/15 flex flex-col justify-center px-6 sm:px-10 py-24 sm:py-28">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                onMouseEnter={() => setHovered(link)}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `group relative py-3 uppercase tracking-[0.3em] text-sm font-normal transition-colors ${isActive
                                        ? "text-[#A9814A]"
                                        : "text-white/80 hover:text-[#A9814A]"
                                    }`
                                }
                            >
                                {link.title}

                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#A9814A] transition-all duration-300 group-hover:w-12"></span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right Image Preview */}
                    <div className="hidden lg:block flex-1 relative overflow-hidden">
                        {NAV_LINKS.map((link) => (
                            <img
                                key={link.id}
                                src={link.image}
                                alt={link.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered.id === link.id ? "opacity-80" : "opacity-0"
                                    }`}
                            />
                        ))}

                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#14120F]/80"></div>
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