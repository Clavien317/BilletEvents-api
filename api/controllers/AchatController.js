import Achat from '../models/Achat.js';
import User from '../models/User.js';
import Evenement from '../models/Evenement.js';
import nodemailer from 'nodemailer';
import upload from '../middleware/upload.js';

export const createAchat = async (req, res) => {
  try {
    const { idUser, id, nbPlace, typeBillet, sommePrix, statut } = req.body;

    if (!idUser || !id || !nbPlace || !typeBillet || !sommePrix) {
      return res.status(400).json({ message: "Champs obligatoires manquants." });
    }

    const user = await User.findById(idUser);
    const event = await Evenement.findById(id);

    if (!user || !event) {
      return res.status(404).json({ message: "Utilisateur ou événement introuvable." });
    }

    const newAchat = new Achat({
      idUser,
      idEvent: id,
      nbPlace,
      typeBillet,
      sommePrix,
      statut: statut || 'Payé'
    });

    const savedAchat = await newAchat.save();

    const ticketNumber = `BT-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${savedAchat._id.toString().slice(-5)}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const eventDate = new Date(event.dateEvent);
    const formattedDate = eventDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
    });

const img = `http://localhost:5000/api${event.image}`

const mailHtml = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BilletNtsika - Compact</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f3f3f3;
      margin: 0;
      padding: 10px;
    }

    .ticket {
      display: flex;
      max-width: 600px;
      margin: auto;
      background: #fff;
      border-left: 5px solid #2115cb;
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .graphic-section {
      width: 35%;
      min-height: 240px;
    }

    .info-section {
      width: 65%;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .top-content {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .details {
      flex: 1;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
        align-items: flex-start;
    }

    .header img {
      height: 36px;
    }

    .event-title {
      font-size: 13px;
      color: #2115cb;
      font-weight: 600;
      margin: 4px 0 8px;
    }

    .ticket-info {
      font-size: 8px;
      margin: 3px 0;
      color: #333;
    }

    .highlight {
      font-weight: 600;
      color: #000;
    }

    .qr {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      margin-top: 6vh;
    }

  .qr img {
    width: 120px;
    height: 120px;
  }


    .footer {
      font-size: 10px;
      color: #666;
      margin-top: 10px;
      text-align: center;
    }

    @media print {
      body {
        background: #fff;
      }

      .ticket {
        box-shadow: none;
        border-left: none;
      }

      .graphic-section {
        display: none;
      }

      .info-section {
        width: 100%;
      }

      .qr {
        justify-content: center;
      }
    }
  </style>
</head>
<body>
  <div class="ticket">
    <div class="graphic-section" style="background-image: url('${img}');"></div>

    <div class="info-section">
      <div class="top-content">
        <div class="details">
          <div class="header">
            <img src="./logo.jpg" alt="BilletNtsika" />
          </div>
          <div class="event-title">${event.titre}</div>
          <div class="ticket-info">🎟️ Type : <span class="highlight">${typeBillet}</span></div>
          <div class="ticket-info">📅 Date : <span class="highlight">${formattedDate}</span></div>
          <div class="ticket-info">📍 Lieu : <span class="highlight">${event.adresse} ${event.ville}</span></div>
          <div class="ticket-info">🔢 N° : <span class="highlight">${ticketNumber}</span></div>
        </div>

        <div class="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=${ticketNumber}&size=120x120" alt="QR Code" />
        </div>
      </div>

      <div class="footer">
        Ce billet est personnel et non transférable. Veuillez le présenter à l'entrée.<br>
        Émis au nom de ${user.nom.toUpperCase()}.
      </div>

    </div>
  </div>
</body>
</html>
`;


    await transporter.sendMail({
      from: `"BilletNtsika Plateforme" <${process.env.EMAIL}>`,
      to: user.email,
      subject: `Bonjour ${user.nom}, voici votre billet pour ${event.titre}`,
      html: mailHtml,
    });

    return res.status(201).json({
      message: "Achat enregistré et email envoyé avec succès.",
      data: savedAchat
    });

  } catch (error) {
    console.error("Erreur lors de la création de l'achat:", error);
    return res.status(500).json({ message: "Erreur serveur", error });
  }
};


// Récupérer tous les achats
export const getAllAchats = async (req, res) => {
  try {
    const achats = await Achat.find().populate('idUser').populate('idEvent');
    return res.status(200).json(achats);
  } catch (error) {
    console.error("Erreur lors de la récupération des achats:", error);
    return res.status(500).json({ message: "Erreur serveur", error });
  }
};
