import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dharampethImg from '../assets/Completed projects/Dharampeth building.png'
import mangalmurtiImg from '../assets/Completed projects/Mangalmurti Residency.png'
import kirtiKalyaniHeroImg from '../assets/projects/kirti-kalyani-hero.png'
import rs3HeroFullImg from '../assets/projects/rs3-hero-full.png'

const SLIDES = [
  {
    image: rs3HeroFullImg,
    eyebrow: 'Ongoing Luxury Flagship',
    title: ['RIDDHI SIDDHI', '~ III ~'],
    subtitle:
      'A striking high-rise residential tower crafted for peaceful community living with excellent connectivity on London Street, Nagpur.',
  },
  {
    image: dharampethImg,
    eyebrow: 'Completed Landmark',
    title: ['DHARAMPETH', 'BUILDING'],
    subtitle:
      '25+ years of iconic architecture & premium living landmarks in Nagpur — crafted with superior quality.',
  },
  {
    image: mangalmurtiImg,
    eyebrow: 'Completed Landmark',
    title: ['MANGALMURTI', 'RESIDENCY'],
    subtitle:
      'A striking residential development crafted for peaceful community living and modern lifestyle amenities.',
  },
  {
    image: kirtiKalyaniHeroImg,
    eyebrow: 'Completed Landmark',
    title: ['KIRTI KALYANI', 'APARTMENT'],
    subtitle:
      'Uncompromising civil engineering standards and thoughtful residential layout design in prime Nagpur.',
  },
]

const Icon = ({ path }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
)

const SOCIALS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919921042899?text=Hello%20Devang%20Developers%2C%20I%20am%20interested%20in%20your%20projects.',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m0-18.067c-4.512 0-8.186 3.674-8.188 8.187 0 1.442.377 2.85 1.096 4.094l.169.294-.648 2.368 2.424-.636.284.168a8.14 8.14 0 004.86 1.572h.003c4.512 0 8.186-3.674 8.188-8.187A8.13 8.13 0 0017.854 4.3 8.13 8.13 0 0012.051 1.9',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/devangdevelopers?igsh=MWsxMjhsZ3Vtc2FucQ==',
    path: 'M12 2c-2.7 0-3.1 0-4.1.1-1.1.1-1.8.2-2.4.5-.7.3-1.2.6-1.8 1.2-.6.6-.9 1.1-1.2 1.8-.3.6-.4 1.3-.5 2.4C2 9 2 9.4 2 12s0 3.1.1 4.1c.1 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.3 1.3.4 2.4.5C8.9 22 9.3 22 12 22s3.1 0 4.1-.1c1.1-.1 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.3-.6.4-1.3.5-2.4.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.3-1.3-.4-2.4-.5C15.1 2 14.7 2 12 2Zm0 1.8c2.6 0 2.9 0 4 .1.9.1 1.5.2 1.8.4.5.2.8.4 1.1.7.3.3.5.6.7 1.1.2.3.3.9.4 1.8.1 1.1.1 1.4.1 4s0 2.9-.1 4c-.1.9-.2 1.5-.4 1.8-.2.5-.4.8-.7 1.1-.3.3-.6.5-1.1.7-.3.2-.9.3-1.8.4-1.1.1-1.4.1-4 .1s-2.9 0-4-.1c-.9-.1-1.5-.2-1.8-.4-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1.1-.2-.3-.3-.9-.4-1.8-.1-1.1-.1-1.4-.1-4s0-2.9.1-4c.1-.9.2-1.5.4-1.8.2-.5.4-.8.7-1.1.3-.3.6-.5 1.1-.7.3-.2.9-.3 1.8-.4 1.1-.1 1.4-.1 4-.1Zm0 3.2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1MAB2J8GPz/',
    path: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/devang-developers-llp/',
    path: 'M20.4 20.4h-3.5v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H9.4V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1ZM5.3 7.4A2 2 0 1 1 5.3 3.4a2 2 0 0 1 0 4ZM7 20.4H3.6V9H7v11.4Z',
  },
]

const STRIPS = 8
const STAGGER_MS = 140 // per-column delay
const PART_APPEAR_MS = 650 // how long a single strip takes to slide into/out of place
const ASSEMBLE_MS = (STRIPS - 1) * STAGGER_MS + PART_APPEAR_MS
const HOLD_MS = 3800 // hold the complete, fully-sharp image
const TEXT_EXIT_MS = 500 // how long the text block takes to drop away before the wipe starts
const EASE = 'cubic-bezier(0.65,0,0.35,1)'
const enterDelay = (j) => (STRIPS - 1 - j) * STAGGER_MS
const exitDelay = (j) => j * STAGGER_MS

const STRIP_OVERLAP_PX = 1.5
const stripStyle = (j) => ({
  left: `calc(${(j * 100) / STRIPS}% - ${STRIP_OVERLAP_PX}px)`,
  width: `calc(${100 / STRIPS}% + ${STRIP_OVERLAP_PX * 2}px)`,
})

const Strips = ({ image, revealed, settled, mode }) => (
  <div
    className={`absolute inset-0 transition-transform ease-linear duration-[4200ms] ${mode === 'enter' && settled ? 'scale-[1.06]' : 'scale-100'
      }`}
  >
    {Array.from({ length: STRIPS }).map((_, j) => {
      const delay = mode === 'enter' ? enterDelay(j) : exitDelay(j)
      const offTransform = mode === 'enter' ? 'translateX(100%)' : 'translateX(0%)'
      const onTransform = mode === 'enter' ? 'translateX(0%)' : 'translateX(-100%)'
      return (
        <div
          key={j}
          className="absolute top-0 h-full overflow-hidden"
          style={stripStyle(j)}
        >
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: revealed ? onTransform : offTransform,
              transition: `transform ${PART_APPEAR_MS}ms ${EASE} ${delay}ms`,
            }}
          >
            <div
              className="grayscale-[20%] w-full h-full bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `calc(${STRIPS * 100}% + ${STRIP_OVERLAP_PX * 2 * STRIPS}px) 100%`,
                backgroundPosition: `${(j * 100) / (STRIPS - 1)}% center`,
              }}
            />
          </div>
        </div>
      )
    })}
  </div>
)

const CHAR_STAGGER_MS = 100
const WORD_STAGGER_MS = 70
const AnimatedChars = ({ text, baseDelay = 0 }) => {
  let i = -1
  return (
    <>
      {text.split('').map((ch, ci) => {
        i += 1
        const idx = i
        return (
          <span
            key={ci}
            className={`inline-block opacity-0 animate-[charIn_480ms_cubic-bezier(0.65,0,0.35,1)_forwards] ${ch === ' ' ? 'whitespace-pre' : 'whitespace-normal'
              }`}
            style={{ animationDelay: `${baseDelay + idx * CHAR_STAGGER_MS}ms` }}
          >
            {ch}
          </span>
        )
      })}
    </>
  )
}
const AnimatedTitle = ({ lines, baseDelay = 0 }) => {
  let i = -1
  return (
    <>
      {lines.map((line, li) => (
        <React.Fragment key={li}>
          {line.split('').map((ch, ci) => {
            i += 1
            const idx = i
            return (
              <span
                key={ci}
                className={`inline-block opacity-0 animate-[charIn_480ms_cubic-bezier(0.65,0,0.35,1)_forwards] ${ch === ' ' ? 'whitespace-pre' : 'whitespace-normal'
                  }`}
                style={{ animationDelay: `${baseDelay + idx * CHAR_STAGGER_MS}ms` }}
              >
                {ch}
              </span>
            )
          })}
          {li < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  )
}
const AnimatedWords = ({ text, baseDelay = 0 }) => {
  const words = text.split(' ')
  return (
    <>
      {words.map((w, wi) => (
        <span
          key={wi}
          className="inline-block opacity-0 animate-[charIn_520ms_cubic-bezier(0.65,0,0.35,1)_forwards] whitespace-pre"
          style={{ animationDelay: `${baseDelay + wi * WORD_STAGGER_MS}ms` }}
        >
          {w + (wi < words.length - 1 ? ' ' : '')}
        </span>
      ))}
    </>
  )
}

const Home = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [settled, setSettled] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)
  const timeoutsRef = useRef([])
  const loadedRef = useRef(new Set())
  const prevIndexRef = useRef(null)

  const clearTimers = () => {
    timeoutsRef.current.forEach((t) => {
      if (t && typeof t === 'object' && typeof t.cancel === 'function') {
        t.cancel()
      } else {
        clearTimeout(t)
      }
    })
    timeoutsRef.current = []
  }

  useEffect(() => {
    SLIDES.forEach((slide, i) => {
      const img = new Image()
      img.onload = () => loadedRef.current.add(i)
      img.src = slide.image
      if (img.complete) loadedRef.current.add(i)
    })
  }, [])

  const beginReveal = (index, prevIdx) => {
    setPrevious(prevIdx)
    setRevealed(false)
    setSettled(false)
    setFadingOut(false)

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setRevealed(true))
      timeoutsRef.current.push({ cancel: () => cancelAnimationFrame(raf2) })
    })
    timeoutsRef.current.push({ cancel: () => cancelAnimationFrame(raf1) })

    // once the wipe finishes, drop the outgoing layer and start the slow hold-zoom
    const clearPrev = setTimeout(() => {
      setPrevious(null)
      setSettled(true)
    }, ASSEMBLE_MS)

    // text drops away just before the next wipe begins — no jump cut
    const beginFadeOut = setTimeout(() => setFadingOut(true), ASSEMBLE_MS + HOLD_MS)
    const advance = setTimeout(() => {
      setRevealed(false)
      setCurrent((index + 1) % SLIDES.length)
    }, ASSEMBLE_MS + HOLD_MS + TEXT_EXIT_MS)

    timeoutsRef.current.push(clearPrev, beginFadeOut, advance)
  }

  const runCycle = (index) => {
    clearTimers()
    setSettled(false)
    const prevIdx = prevIndexRef.current
    prevIndexRef.current = index

    if (loadedRef.current.has(index)) {
      beginReveal(index, prevIdx)
      return
    }

    let started = false
    const start = () => {
      if (started) return
      started = true
      beginReveal(index, prevIdx)
    }

    const img = new Image()
    img.onload = () => {
      loadedRef.current.add(index)
      start()
    }
    img.src = SLIDES[index].image
    if (img.complete) {
      loadedRef.current.add(index)
      start()
    } else {
      const fallback = setTimeout(start, 2500) // never block the slider indefinitely
      timeoutsRef.current.push(fallback)
    }
  }

  useEffect(() => {
    runCycle(current)
    return clearTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  const goTo = (index) => {
    clearTimers()
    setFadingOut(false)
    setRevealed(false)
    setCurrent((index + SLIDES.length) % SLIDES.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#14120F]">
      <style>{`
      
        @keyframes charIn {
          from { opacity: 0; transform: translateX(22px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes blockUp {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ambient blurred backdrop, always the current slide */}
      <div className="absolute inset-0">
        <img
          src={SLIDES[current].image}
          alt=""
          className="h-full w-full object-cover grayscale-[20%] blur-[9px] brightness-[0.6] scale-[1.06]"
        />
      </div>

      {/* outgoing slide — closes from the left */}
      {previous !== null && (
        <Strips image={SLIDES[previous].image} revealed={revealed} settled={false} mode="exit" />
      )}

      {/* incoming slide — enters from the right */}
      <div key={current} className="absolute inset-0">
        <Strips image={SLIDES[current].image} revealed={revealed} settled={settled} mode="enter" />
      </div>

      {/* grey tint overlay for legibility + mood, sits above both image layers */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[linear-gradient(270deg,rgba(18,17,15,0.62)_0%,rgba(18,17,15,0.38)_42%,rgba(18,17,15,0.22)_75%,rgba(18,17,15,0.32)_100%)]" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[#1a1815]/25" />

      {/* Social rail */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-3">
        <span className="h-10 w-px bg-[#F3EEE6]/25" />
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-11 h-11 rounded-full bg-[#1a1815]/50 backdrop-blur-md border border-[#F3EEE6]/30 flex items-center justify-center text-[#F3EEE6] hover:bg-[#A9814A] hover:border-[#A9814A] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <Icon path={s.path} />
          </a>
        ))}
      </div>

      {/* Prev / Next */}
      <div className="hidden md:flex absolute left-32 top-1/2 -translate-y-1/2 z-10 items-center gap-10 font-['Inter',sans-serif]">
        <button
          onClick={() => goTo(current - 1)}
          className="flex items-center gap-3 text-[#852541] hover:text-[#6B1C33] transition-all duration-300 font-extrabold cursor-pointer hover:scale-110"
        >
          <svg width="22" height="14" viewBox="0 0 16 10" fill="none">
            <path d="M15 5H1M1 5L5.5 1M1 5L5.5 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-base sm:text-lg font-extrabold tracking-[0.25em] uppercase">Prev</span>
        </button>

        <button
          onClick={() => goTo(current + 1)}
          className="flex items-center gap-3 text-[#852541] hover:text-[#6B1C33] transition-all duration-300 font-extrabold cursor-pointer hover:scale-110"
        >
          <span className="text-base sm:text-lg font-extrabold tracking-[0.25em] uppercase">Next</span>
          <svg width="22" height="14" viewBox="0 0 16 10" fill="none">
            <path d="M1 5H15M15 5L10.5 1M15 5L10.5 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Text block — right side, right-aligned, drops down & out then wipes back up */}
      <div
        className={`absolute inset-y-0 right-8 md:right-56 z-10 flex flex-col justify-center items-end max-w-xl text-right gap-5 transition-all duration-[420ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${fadingOut ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
          }`}
      >
        <span
          key={`eyebrow-${current}`}
          className="text-[11px] tracking-[0.35em] uppercase text-[#A9814A] font-semibold font-['Inter',sans-serif]"
        >
          <AnimatedChars text={SLIDES[current].eyebrow} baseDelay={100} />
        </span>

        <h1
          key={`title-${current}`}
          className="text-[#F3EEE6] text-[9vw] md:text-[3.6vw] leading-[1.05] font-black font-['Fraunces',serif]"
        >
          <AnimatedTitle lines={SLIDES[current].title} baseDelay={180} />
        </h1>

        <p
          key={`subtitle-${current}`}
          className="text-[#F3EEE6]/85 text-[14px] md:text-[15px] leading-relaxed max-w-md font-['Inter',sans-serif]"
          style={{ fontWeight: 600 }}
        >
          <AnimatedWords text={SLIDES[current].subtitle} baseDelay={900} />
        </p>

        <button
          key={`cta-${current}`}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/project");
          }}
          className="animate-[blockUp_560ms_cubic-bezier(0.65,0,0.35,1)_1650ms_both] mt-2 bg-[#A9814A]/90 text-[#14120F] text-[11px] tracking-[0.25em] uppercase px-8 py-4 rounded-full hover:bg-[#F3EEE6] transition-colors duration-300 font-bold font-['Inter',sans-serif] cursor-pointer"
        >
          Learn More
        </button>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 md:right-16 z-10 w-11 h-11 bg-[#A9814A] flex items-center justify-center hover:bg-[#C9A874] transition-colors"
        aria-label="Back to top"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 0L11 8H1L6 0Z" fill="#14120F" />
        </svg>
      </button>
    </div>
  )
}

export default Home