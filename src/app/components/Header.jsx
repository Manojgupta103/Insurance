"use client";

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Narkar Insurance</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/services/auto" className="hover:text-blue-200">Auto</Link>
          <Link href="/services/home" className="hover:text-blue-200">Home</Link>
          <Link href="/services/life" className="hover:text-blue-200">Life</Link>
          <Link href="/services/health" className="hover:text-blue-200">Health</Link>
          <Link href="/quote" className="hover:text-blue-200">Get a Quote</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-500 px-4 py-2">
          <Link href="/" className="block py-2 hover:text-blue-200">Home</Link>
          <Link href="/services/auto" className="block py-2 hover:text-blue-200">Auto</Link>
          <Link href="/services/home" className="block py-2 hover:text-blue-200">Home</Link>
          <Link href="/services/life" className="block py-2 hover:text-blue-200">Life</Link>
          <Link href="/services/health" className="block py-2 hover:text-blue-200">Health</Link>
          <Link href="/quote" className="block py-2 hover:text-blue-200">Get a Quote</Link>
        </nav>
      )}
    </header>
  )
}

