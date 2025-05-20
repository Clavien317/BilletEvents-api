"use client"
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function Reservation() {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    numeroPlace: '',
    nombrePlaces: 1,
    type: 'standard',
    avance: false,
    commentaire: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const generatedReservationId = `RES-${id}-${Math.floor(1000 + Math.random() * 9000)}`
  const today = new Date().toLocaleDateString()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg text-center">
        {submitted ? (
          <>
            <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Réservation Confirmée !</h1>
            <p className="text-gray-600 mb-6">
              Votre réservation pour l'événement <span className="font-semibold text-orange-600">#{id}</span> a bien été prise en compte.<br />
              Vous occupez désormais une ou plusieurs places. Veuillez effectuer le paiement au plus tard <span className="font-semibold">2 jours avant l'événement</span>. Merci !
            </p>

            <div className="text-left text-sm bg-gray-100 p-4 rounded-lg mb-6 space-y-1">
              <p><strong>ID de l'événement :</strong> {id}</p>
              <p><strong>ID de réservation :</strong> {generatedReservationId}</p>
              <p><strong>Statut :</strong> Confirmée</p>
              <p><strong>Nombre de places :</strong> {formData.nombrePlaces}</p>
              <p><strong>Numéro de place préféré :</strong> {formData.numeroPlace || 'Non précisé'}</p>
              <p><strong>Type :</strong> {formData.type === 'vip' ? 'VIP' : 'Standard'}</p>
              <p><strong>Avance :</strong> {formData.avance ? 'Oui' : 'Non'}</p>
              {formData.commentaire && <p><strong>Commentaire :</strong> {formData.commentaire}</p>}
              <p><strong>Date :</strong> {today}</p>
            </div>

            <button
              onClick={() => window.location.href = '/evenements'}
              className="mt-2 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Retour aux événements
            </button>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-gray-800 mb-4">Détails de votre réservation</h1>
            <form onSubmit={handleSubmit} className="text-left space-y-4">

              <div>
                <label className="block font-medium mb-1">Nombre de places à réserver</label>
                <input
                  type="number"
                  name="nombrePlaces"
                  placeholder="Ex: 2"
                  className="w-full border rounded px-3 py-2"
                  value={formData.nombrePlaces}
                  onChange={handleChange}
                  min="1"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Numéro de place préférée (disponibles : 2, 7, 8, 12)</label>
                <input
                  type="number"
                  name="numeroPlace"
                  placeholder="Ex: 4"
                  className="w-full border rounded px-3 py-2"
                  value={formData.numeroPlace}
                  onChange={handleChange}
                  min="1"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Type de réservation</label>
                <select
                  name="type"
                  className="w-full border rounded px-3 py-2"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="standard">Standard</option>
                  <option value="vip">VIP</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="avance"
                  checked={formData.avance}
                  onChange={handleChange}
                />
                <label className="text-sm">Je souhaite faire une avance</label>
              </div>

              <div>
                <label className="block font-medium mb-1">Commentaire (optionnel)</label>
                <textarea
                  name="commentaire"
                  className="w-full border rounded px-3 py-2"
                  rows="2"
                  placeholder="Notes ou préférences..."
                  value={formData.commentaire}
                  onChange={handleChange}
                ></textarea>
              </div>

                {formData.avance && (
                    <button
                    onClick={() => alert("Redirection vers le module de paiement...")}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg mb-4 transition duration-300"
                    >
                    Effectuer le paiement
                    </button>
                )}

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Confirmer la réservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default Reservation
