import React, { useEffect, useState } from 'react'

const NAV_LINKS = [
    {
        label: 'Home',
        image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    },
    {
        label: 'About',
        image:
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    },
    {
        label: 'Residences',
        image:
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    },
    {
        label: 'Amenities',
        image:
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80',
    },
    {
        label: 'Gallery',
        image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    },
    {
        label: 'Contact',
        image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    
    const [hovered, setHovered] = useState(NAV_LINKS[2])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
    }, [open])

    return (
        <>
            {/* Logo - NOT sticky */}
            <div className="absolute top-0 left-0 z-30 px-6 md:px-10 py-5">
                <img
                    src="/Devang Logo.png"
                    alt="Devang Logo"
                    className="h-28 md:h-36 w-auto object-contain"
                />
            </div>

            <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-end px-8 md:px-14 py-7">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-3 text-[#F3EEE6] group"
                    aria-label="Open menu"
                >
                    <span
                        className="hidden sm:inline text-[11px] tracking-[0.25em] uppercase"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Menu
                    </span>

                    <span className="flex flex-col gap-[5px] w-6">
                        <span className="h-[1.5px] w-full bg-[#F3EEE6] transition-all group-hover:bg-[#A9814A]" />
                        <span className="h-[1.5px] w-4 self-end bg-[#F3EEE6] transition-all group-hover:w-full group-hover:bg-[#A9814A]" />
                    </span>
                </button>
            </header>

            {/* Full Screen Menu */}
            <div
                className={`fixed inset-0 z-50 bg-[#14120F] transition-opacity duration-500 ${open
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-7 right-8 md:right-14 flex items-center gap-3 text-[#F3EEE6] hover:text-[#A9814A] transition-colors z-10"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    <span className="text-[11px] tracking-[0.25em] uppercase">
                        Close
                    </span>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M1 1L15 15M15 1L1 15"
                            stroke="currentColor"
                            strokeWidth="1.3"
                        />
                    </svg>
                </button>

                <div className="flex h-full">
                    {/* Links */}
                    <nav className="relative w-full md:w-[420px] border-r border-[#F3EEE6]/10 flex flex-col justify-center px-8 md:px-14 py-24 overflow-y-auto">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={`#${link.label.toLowerCase()}`}
                                onMouseEnter={() => setHovered(link)}
                                onClick={() => setOpen(false)}
                                className="group relative py-3"
                            >
                                <span
                                    className="text-[13px] md:text-[14px] tracking-[0.3em] uppercase text-[#F3EEE6]/70 group-hover:text-[#A9814A] transition-colors duration-300"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {link.label}
                                </span>

                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#A9814A] transition-all duration-300 group-hover:w-10" />
                            </a>
                        ))}
                    </nav>

                    {/* Preview Images */}
                    <div className="hidden md:block relative flex-1 overflow-hidden">
                        {NAV_LINKS.map((link) => (
                            <img
                                key={link.label}
                                src={link.image}
                                alt={link.label}
                                className={`absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-700 ${hovered.label === link.label
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                    }`}
                            />
                        ))}

                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#14120F]/60" />
                    </div>
                </div>

                {/* Back to Top */}
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setOpen(false)
                    }}
                    className="absolute bottom-7 right-7 md:right-10 w-11 h-11 bg-[#A9814A] flex items-center justify-center hover:bg-[#C9A874] transition-colors"
                    aria-label="Back to top"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0L11 8H1L6 0Z" fill="#14120F" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Navbar