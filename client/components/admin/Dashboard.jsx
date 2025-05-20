import React from 'react'

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Tableau de bord Administrateur</h1>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500">Utilisateurs</h2>
          <p className="text-2xl font-semibold text-gray-800">134</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500">Événements</h2>
          <p className="text-2xl font-semibold text-gray-800">28</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500">Réservations</h2>
          <p className="text-2xl font-semibold text-gray-800">89</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500">Paiements</h2>
          <p className="text-2xl font-semibold text-gray-800">4 200 Ar</p>
        </div>
      </div>

      {/* Réservations récentes */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Réservations récentes</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Événement</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {/* Exemple statique */}
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Rakoto Jean</td>
                <td className="px-4 py-2">Festival Mada</td>
                <td className="px-4 py-2">2025-05-18</td>
                <td className="px-4 py-2 text-green-600">Confirmé</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Randria Ana</td>
                <td className="px-4 py-2">Conférence Tech</td>
                <td className="px-4 py-2">2025-05-17</td>
                <td className="px-4 py-2 text-yellow-600">En attente</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Rahari Malala</td>
                <td className="px-4 py-2">Salon Agricole</td>
                <td className="px-4 py-2">2025-05-16</td>
                <td className="px-4 py-2 text-red-600">Annulé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
