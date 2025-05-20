"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    tel: '',
    nom: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici tu peux gérer l'inscription, appel API, validation, etc.
    alert(`Inscription réussie :\nNom : ${formData.nom}\nEmail : ${formData.email}\nTéléphone : ${formData.tel}`)
  }

  return (
    <div className="min-h-screen flex flex-col px-4 bg-gray-50">
      {/* Lien retour */}
      <div className="pt-4">
        <Link href="/" className="text-orange-600 hover:underline">
          ← Retour
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Créer un compte</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nom" className="block mb-1 font-medium">Nom complet</label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom complet"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="tel" className="block mb-1 font-medium">Téléphone</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                required
                value={formData.tel}
                onChange={handleChange}
                placeholder="+261 34 12 345 67"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
            >
              S'inscrire
            </button>
          </form>

          {/* Lien vers login */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Déjà un compte ?{' '}
            <Link href="/login" className="text-orange-600 hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
