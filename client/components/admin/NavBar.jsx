"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function NavBarAdmin() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // Déconnexion à personnaliser si besoin
    alert('Déconnecté avec succès')
    router.push('/login')
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push("/admin")}>
          <img 
            src="/logo.png" 
            alt="Admin Dashboard" 
            className="h-10 w-auto object-contain" 
          />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="/admin/users" className="hover:text-blue-600">Utilisateurs</a>
          <a href="/admin/events" className="hover:text-blue-600">Événements</a>
          <a href="/admin/reservations" className="hover:text-blue-600">Réservations</a>
          <a href="/admin/payements" className="hover:text-blue-600">Paiements</a>
          <a href="/admin/profile" className="hover:text-blue-600">Profil</a>
          <button onClick={handleLogout} className="text-red-600 hover:underline">Déconnexion</button>
        </div>

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
        <div className="md:hidden mt-4 space-y-2 text-gray-800 font-medium">
          <a href="/admin/users" className="block hover:text-blue-600">Utilisateurs</a>
          <a href="/admin/events" className="block hover:text-blue-600">Événements</a>
          <a href="/admin/reservations" className="block hover:text-blue-600">Réservations</a>
          <a href="/admin/payements" className="block hover:text-blue-600">Paiements</a>
          <a href="/admin/profile" className="block hover:text-blue-600">Profil</a>
          <button onClick={handleLogout} className="w-full text-left text-red-600 hover:underline">Déconnexion</button>
        </div>
      )}
    </nav>
  )
}

export default NavBarAdmin
