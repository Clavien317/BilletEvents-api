"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={()=>router.push("/")}>
          <img 
            src="/logo.png" 
            alt="BilletNtsika" 
            className="h-10 w-auto object-contain" 
          />
        </div>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-orange-600">Accueil</a>
          <a href="/evenements" className="hover:text-orange-600">Événements</a>
          <a href="#" className="hover:text-orange-600">À propos</a>
          <a href="#" className="hover:text-orange-600">Contact</a>
        </div>

        {/* Login button (desktop) */}
        <div className="hidden md:block">
          <button className="bg-orange-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            onClick={()=>router.push('/login')}
            >
            Se connecter
          </button>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
          <a href="/" className="block hover:text-orange-600">Accueil</a>
          <a href="/evenements" className="block hover:text-orange-600">Événements</a>
          <a href="#" className="block hover:text-orange-600">À propos</a>
          <a href="#" className="block hover:text-orange-600">Contact</a>
          <button className="w-full mt-2 bg-orange-600 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-orange-700 transition"
            onClick={()=>router.push('/login')}
            >
            Se connecter
          </button>
        </div>
      )}
    </nav>
  )
}

export default NavBar
