import Evenement from '../models/Evenement.js';
import path from 'path';



export const ajouterEvenement = async (req, res) => {
  try {
    const {
      idOrg,
      titre,
      description,
      dateEvent,
      adresse,
      ville,
      pays,
      devise,
      statut,
      categorie,
      billets
    } = req.body;

    let image = null;
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    const nouvelEvenement = new Evenement({
      idOrg,
      titre,
      description,
      dateEvent,
      adresse,
      ville,
      pays,
      devise,
      image,
      statut,
      categorie,
      billets: billets
    });

    await nouvelEvenement.save();
    res.status(201).json(nouvelEvenement);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout de l'événement", error });
  }
};
 

export const modifierEvenement = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    if (updateData.billets) {
      updateData.billets = updateData.billets.map(billet => 
      {
        return {
          type: billet.type,
          prix: billet.prix,
          quantite: billet.quantite
        };
      })
    }
    const evenementModifie = await Evenement.findByIdAndUpdate(id, updateData, { new: true });

    if (!evenementModifie) {
      return res.status(404).json({ message: "Événement non trouvé" });
    }
    res.status(200).json(evenementModifie);
  } catch (error) {
    console.error("Erreur serveur :", error); // utile pour loguer dans la console
    res.status(500).json({
    message: "Erreur lors de la modification de l'événement",
    error: error.message
  });
}
};


export const listerEvenements = async (req, res) => {
  try {
    const evenements = await Evenement.find().sort({ createdAt: -1 });
    res.status(200).json(evenements);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des événements", error });
  }
}

export const obtenirEvenementParId = async (req, res) => 
{
    try {
        const { id } = req.params;
        const evenement = await Evenement.findById(id);
    
        if (!evenement) {
        return res.status(404).json({ message: "Événement non trouvé" });
        }
    
        res.status(200).json(evenement);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'événement", error });
    }
}

export const supprimerEvenement = async (req, res) => {
  try {
    const { id } = req.params;
    const evenementSupprime = await Evenement.findByIdAndDelete(id);

    if (!evenementSupprime) {
      return res.status(404).json({ message: "Événement non trouvé" });
    }

    res.status(200).json({ message: "Événement supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression de l'événement", error });
  }
};
