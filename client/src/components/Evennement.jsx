import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const events = [
  {
    id: 1,
    title: "Concert Live 2025",
    description: "Vivez une expérience musicale inoubliable avec les meilleurs artistes.",
    date: "12 Juin 2025",
  },
  {
    id: 2,
    title: "Conférence Développement Web",
    description: "Découvrez les nouvelles tendances du développement web moderne.",
    date: "25 Juin 2025",
  },
  {
    id: 3,
    title: "Salon de l'Innovation",
    description: "Explorez les dernières technologies et startups innovantes.",
    date: "5 Juillet 2025",
  },
];

function Evennement() {
  const handleReserve = (event) => {
    alert(`Réservation pour : ${event.title}`);
    // ici tu pourras ouvrir un modal ou rediriger vers une page de réservation
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">Événements Disponibles</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="shadow-lg">
            <CardContent>
              <Typography variant="h5" component="div" className="mb-2">
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="mb-4">
                {event.description}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Date : {event.date}
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center pb-4">
              <Button variant="contained" color="primary" onClick={() => handleReserve(event)}>
                Réserver
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Evennement;
