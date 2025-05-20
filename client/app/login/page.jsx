"use client"
import React, { useState } from "react"

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Connexion avec email : ${formData.email}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-4">
      {/* Lien Retour en haut à gauche */}
      <div className="py-4">
        <a href="/" className="text-orange-600 hover:underline font-semibold">
          &larr; Retour
        </a>
      </div>

      {/* Formulaire centré verticalement */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Se connecter</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
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
              <label htmlFor="password" className="block mb-1 font-medium">
                Mot de passe
              </label>
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
              Connexion
            </button>
          </form>

          {/* Lien vers Register */}
          <p className="mt-4 text-center text-gray-600">
            Pas encore de compte ?{" "}
            <a href="/register" className="text-orange-600 hover:underline font-semibold">
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
