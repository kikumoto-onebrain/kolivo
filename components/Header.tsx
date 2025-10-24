'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const offset = -80
      const y =
        (element as HTMLElement).getBoundingClientRect().top +
        window.pageYOffset +
        offset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setMenuOpen(false)
      setIsServicesOpen(false)
    }
  }

  const openServices = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setIsServicesOpen(true)
  }

  const closeServicesWithDelay = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181828]/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* ✅ Logo Kolivo */}
        <a href="/" className="flex items-center space-x-2">
          <Image
            src="/kolivo.svg"
            alt="Kolivo Logo"
            width={60}
            height={20}
            priority
            className="w-12 sm:w-14 h-auto transition-all"
          />
        </a>

        {/* ✅ Menu Desktop */}
        <nav className="hidden md:flex items-center text-white font-medium gap-16 relative">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServicesWithDelay}
          >
            <button
              type="button"
              className="hover:text-[#5a5aff] transition flex items-center gap-1"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Serviços
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full mt-5 w-72 bg-[#1e1e2f] rounded-xl shadow-xl py-4 px-5 space-y-2 text-sm text-gray-200 border border-[#323284] z-50"
                onMouseEnter={openServices}
                onMouseLeave={closeServicesWithDelay}
              >
                {[
                  ['#rpa', 'RPA'],
                  ['#assessment-seguranca', 'Assessment de Segurança'],
                  ['#soc', 'SOC & IAM'],
                  ['#noc', 'NOC'],
                  ['#cloud', 'Infra Cloud & On Premise'],
                  ['#service-desk', 'Service Desk | CSC'],
                  ['#gestao-ativos', 'Gestão de Ativos | ITAM'],
                  ['#stress-test', 'Stress Test'],
                  ['#field-service', 'Field Service'],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleSmoothScroll(e, href)}
                    className="block hover:text-[#5a5aff] transition"
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          <a
            href="#contato"
            onClick={(e) => handleSmoothScroll(e, '#contato')}
            className="bg-[#5a5aff] text-white px-7 py-2 rounded-full hover:bg-white hover:text-[#181828] transition font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(90,90,255,0.6)]"
          >
            Contato
          </a>
        </nav>

        {/* ✅ Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* ✅ Menu Mobile */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#181828]/95 backdrop-blur-lg border-t border-[#323284] text-white px-6 py-6 space-y-4 shadow-xl"
        >
          {[
            ['#rpa', 'RPA'],
            ['#assessment-seguranca', 'Assessment de Segurança'],
            ['#soc', 'SOC & IAM'],
            ['#noc', 'NOC'],
            ['#cloud', 'Infra Cloud & On Premise'],
            ['#service-desk', 'Service Desk | CSC'],
            ['#gestao-ativos', 'Gestão de Ativos | ITAM'],
            ['#stress-test', 'Stress Test'],
            ['#field-service', 'Field Service'],
            ['#contato', 'Contato'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              className="block text-lg font-medium hover:text-[#5a5aff] transition"
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
