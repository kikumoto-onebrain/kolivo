'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Scroll suave para anchors (#sections)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80, // offset para não cobrir o header
        behavior: 'smooth',
      })
      setMenuOpen(false)
      setIsServicesOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181828]/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* ✅ Logo Kolivo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-kolivo.png"
            alt="Kolivo Logo"
            width={130}
            height={45}
            priority
          />
        </Link>

        {/* ✅ Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium relative">
          {/* Dropdown Serviços */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="hover:text-[#5a5aff] transition flex items-center gap-1">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 mt-2 w-72 bg-[#1e1e2f] rounded-xl shadow-lg py-4 px-4 space-y-2 text-sm text-gray-200 border border-[#323284]"
              >
                <a href="#RPASection" onClick={(e) => handleSmoothScroll(e, '#RPASection')} className="block hover:text-[#5a5aff] transition">RPA</a>
                <a href="#SecuritySection" onClick={(e) => handleSmoothScroll(e, '#SecuritySection')} className="block hover:text-[#5a5aff] transition">Assessment de Segurança</a>
                <a href="#SOCSection" onClick={(e) => handleSmoothScroll(e, '#SOCSection')} className="block hover:text-[#5a5aff] transition">SOC & IAM</a>
                <a href="#NocSection" onClick={(e) => handleSmoothScroll(e, '#NocSection')} className="block hover:text-[#5a5aff] transition">NOC</a>
                <a href="#CloudSection" onClick={(e) => handleSmoothScroll(e, '#CloudSection')} className="block hover:text-[#5a5aff] transition">Infra Cloud & On Premise</a>
                <a href="#ServiceDeskSection" onClick={(e) => handleSmoothScroll(e, '#ServiceDeskSection')} className="block hover:text-[#5a5aff] transition">Service Desk | CSC</a>
                <a href="#AssetManagementSection" onClick={(e) => handleSmoothScroll(e, '#AssetManagementSection')} className="block hover:text-[#5a5aff] transition">Gestão de Ativos | ITAM</a>
                <a href="#StressTestSection" onClick={(e) => handleSmoothScroll(e, '#StressTestSection')} className="block hover:text-[#5a5aff] transition">Stress Test</a>
                <a href="#FieldServiceSection" onClick={(e) => handleSmoothScroll(e, '#FieldServiceSection')} className="block hover:text-[#5a5aff] transition">Field Service</a>
              </motion.div>
            )}
          </div>

          {/* ✅ Botão de Contato destacado */}
          <a
            href="#contato"
            onClick={(e) => handleSmoothScroll(e, '#contato')}
            className="bg-[#5a5aff] text-white px-5 py-2 rounded-full hover:bg-white hover:text-[#181828] transition font-semibold shadow-md"
          >
            Contato
          </a>
        </nav>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* ✅ Menu Mobile */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-[#181828]/95 backdrop-blur-md text-white flex flex-col items-center py-6 space-y-6 md:hidden"
          >
            <details className="w-full text-center">
              <summary className="cursor-pointer hover:text-[#5a5aff]">Serviços</summary>
              <div className="mt-3 space-y-3 text-sm">
                <a href="#RPASection" onClick={(e) => handleSmoothScroll(e, '#RPASection')}>RPA</a>
                <a href="#SecuritySection" onClick={(e) => handleSmoothScroll(e, '#SecuritySection')}>Assessment de Segurança</a>
                <a href="#SOCSection" onClick={(e) => handleSmoothScroll(e, '#SOCSection')}>SOC & IAM</a>
                <a href="#NocSection" onClick={(e) => handleSmoothScroll(e, '#NocSection')}>NOC</a>
                <a href="#CloudSection" onClick={(e) => handleSmoothScroll(e, '#CloudSection')}>Infra Cloud & On Premise</a>
                <a href="#ServiceDeskSection" onClick={(e) => handleSmoothScroll(e, '#ServiceDeskSection')}>Service Desk | CSC</a>
                <a href="#AssetManagementSection" onClick={(e) => handleSmoothScroll(e, '#AssetManagementSection')}>Gestão de Ativos | ITAM</a>
                <a href="#StressTestSection" onClick={(e) => handleSmoothScroll(e, '#StressTestSection')}>Stress Test</a>
                <a href="#FieldServiceSection" onClick={(e) => handleSmoothScroll(e, '#FieldServiceSection')}>Field Service</a>
              </div>
            </details>

            <a
              href="#contato"
              onClick={(e) => handleSmoothScroll(e, '#contato')}
              className="bg-[#5a5aff] px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-[#181828] transition"
            >
              Contato
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
