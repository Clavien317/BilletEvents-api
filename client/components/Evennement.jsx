"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const EVENTS_DATA = [
  {
    id: 1,
    titre: "Concert Jazz au Parc",
    description: "Une soirée jazz avec des musiciens locaux talentueux.",
    date: "2025-06-15",
    adresse: "123 rue des Lilas",
    prix: 25,
    placesDispo: 50,
    ville: "Paris",
    pays: "France",
    image: "/ai-technology.jpg",
  },
  {
    id: 2,
    titre: "Festival de la Gastronomie",
    description: "Dégustation de plats traditionnels et ateliers cuisine.",
    date: "2025-07-01",
    adresse: "45 avenue de la République",
    prix: 10,
    placesDispo: 100,
    ville: "Lyon",
    pays: "France",
    // Pas d'image ici
  },
  {
    id: 3,
    titre: "Conférence Tech Internationale",
    description: "Conférence sur les dernières innovations technologiques.",
    date: "2025-08-20",
    adresse: "Tech Center, 500 Silicon Blvd",
    prix: 0,
    placesDispo: 200,
    ville: "San Francisco",
    pays: "USA",
    image: "/web-assets-ai-for-PX-hero.webp",
  },
]

function Evennement() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = EVENTS_DATA.filter(event => {
    const term = searchTerm.toLowerCase()
    return (
      event.titre.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term) ||
      event.adresse.toLowerCase().includes(term) ||
      event.ville.toLowerCase().includes(term) ||
      event.pays.toLowerCase().includes(term) 
    )
  })

  const router = useRouter()
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Liste des événements</h1>

      <input
        type="text"
        placeholder="Rechercher par mots-clés..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {filteredEvents.length === 0 ? (
        <p>Aucun événement trouvé pour "{searchTerm}"</p>
      ) : (
        filteredEvents.map(event => (
          <div 
            key={event.id} 
            className="mb-6 p-4 border rounded shadow-sm hover:shadow-md transition-shadow 
                       flex flex-col sm:flex-row sm:items-center sm:space-x-6"
          >
            {/* Image ou placeholder */}
            {event.image ? (
              <img
                src={event.image}
                alt={event.titre}
                className="w-full sm:w-32 h-48 sm:h-24 object-cover rounded mb-4 sm:mb-0"
              />
            ) : (
              <div className="w-full sm:w-32 h-48 sm:h-24 bg-gray-200 flex items-center justify-center rounded text-gray-500 text-sm italic mb-4 sm:mb-0">
                Pas d'image
              </div>
            )}

            {/* Détails de l'événement */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-orange-600">{event.titre}</h2>
              <p className="text-gray-700 mb-2">{event.description}</p>
              <ul className="text-gray-600 text-sm space-y-1 mb-4 sm:mb-0">
                <li><strong>Date :</strong> {new Date(event.date).toLocaleDateString()}</li>
                <li><strong>Adresse :</strong> {event.adresse}</li>
                <li><strong>Ville :</strong> {event.ville}</li>
                <li><strong>Pays :</strong> {event.pays}</li>
                <li><strong>Prix :</strong> {event.prix > 0 ? `${event.prix} €` : 'Gratuit'}</li>
                <li><strong>Places disponibles :</strong> {event.placesDispo}</li>
              </ul>
            </div>

            {/* Boutons */}
            <div className="flex sm:flex-col justify-center space-x-4 sm:space-x-0 sm:space-y-2 mt-4 sm:mt-0">
              <button className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
                onClick={()=>router.push(`/evenements/reservation/${event.id}`)}
                >
                Réserver
              </button>
              <button className="px-6 py-2 border border-orange-600 text-orange-600 rounded-lg shadow hover:bg-orange-50 transition"
                onClick={()=>router.push(`billets/achat/${event.id}`)}
                >
                Acheter un billet
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Evennement
