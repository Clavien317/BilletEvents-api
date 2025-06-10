import Evenement from '../models/Evenement.js';
import path from 'path';


export const ajouterEvenement = async (req, res) => {
  try {

    let billets = [];
    if (req.body.billets) {
      try {
        billets = JSON.parse(req.body.billets);
      } catch (e) {
        console.warn('Impossible de parser billets:', e);
        billets = [];
      }
    }

    const nouvelEvenement = new Evenement({
      idOrg: req.body.idOrg,
      titre: req.body.titre,
      description: req.body.description,
      dateEvent: req.body.dateEvent,
      adresse: req.body.adresse,
      ville: req.body.ville,
      pays: req.body.pays,
      devise: req.body.devise,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      statut: req.body.statut,
      categorie: req.body.categorie,
      billets: billets,
    });

    await nouvelEvenement.save();

    res.status(201).json(nouvelEvenement);
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'événement :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout de l'événement", error: error.message });
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
      console.error("Erreur lors de l'ajout de l'événement :", error);
      res.status(500).json({ message: "Erreur lors de l'ajout de l'événement", error: error.message });
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
