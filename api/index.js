import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectMongo from "./utils/db.js";
import userRoutes from './routes/user.js';
import categorieRoutes from './routes/categorie.js';
import deviseRoutes from './routes/devise.js';
import localisationRoutes from './routes/localisation.js';
import eventRoutes from './routes/events.js';
import path from 'path'
import achat from './routes/achat.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


connectMongo()
app.use('/api/users', userRoutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/devises', deviseRoutes);
app.use('/api/localisations', localisationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/achat',achat)
app.use('/api/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de gestion des utilisateurs !');
})

app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
