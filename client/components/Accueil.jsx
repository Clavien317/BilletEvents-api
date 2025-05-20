"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaLock, FaRocket, FaMapMarkerAlt } from 'react-icons/fa'

function Accueil() {
  const router = useRouter()
  return (
    <main className="bg-white">
      <section className="bg-[url('/tickets.png')] bg-cover bg-center h-[90vh] flex items-center justify-center text-center px-4">
        <div className="bg-black/50 p-8 rounded-xl max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            BilletNtsika
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Simplifiez vos événements, partout à Madagascar.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            onClick={()=>router.push("/evenements")}
            >
            Voir les événements
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Pourquoi utiliser BilletNtsika ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <FaLock className="text-orange-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Paiement sécurisé</h3>
            <p className="text-gray-600">Réservez vos billets en toute confiance grâce à notre système de paiement fiable et sécurisé.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <FaRocket className="text-orange-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simplicité et rapidité</h3>
            <p className="text-gray-600">Achetez ou vendez vos billets en quelques clics, sans complication.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <FaMapMarkerAlt className="text-orange-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pensé pour Madagascar</h3>
            <p className="text-gray-600">Une solution locale adaptée aux réalités des organisateurs et participants malgaches.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Accueil
