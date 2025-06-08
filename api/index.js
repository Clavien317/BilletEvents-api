import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectMongo from "./utils/db.js";
import userRoutes from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


connectMongo()
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de gestion des utilisateurs !');
})

app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
