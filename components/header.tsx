'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Kolivo Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="#sobre" className="hover:text-[#5a5aff] transition">Sobre</Link>
          <Link href="#servicos" className="hover:text-[#5a5aff] transition">Serviços</Link>
          <Link href="#contato" className="hover:text-[#5a5aff] transition">Contato</Link>
        </nav>

        {/* Botão de menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Mobile */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-[#181828]/95 backdrop-blur-md text-white flex flex-col items-center py-6 space-y-6 md:hidden"
          >
            <Link href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
            <Link href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
            <Link href="#contato" onClick={() => setMenuOpen(false)}>Contato</Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
