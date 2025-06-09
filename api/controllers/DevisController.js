import Devise from '../models/Devise.js';

export const ajouterDevise = async (req, res) => {
  try {
    const { devis,symbole } = req.body;

    const nouvelleDevise = new Devise({ devis,symbole });
    await nouvelleDevise.save();

    res.status(201).json(nouvelleDevise);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout de la devise", error });
  }
};

export const modifierDevise = async (req, res) => {
  try {
    const { id } = req.params;
    const { devis,symbole } = req.body;

    const deviseModifiee = await Devise.findByIdAndUpdate(
      id,
      { devis,symbole },
      { new: true }
    );

    if (!deviseModifiee) {
      return res.status(404).json({ message: "Devise non trouvée" });
    }

    res.status(200).json(deviseModifiee);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la modification", error });
  }
};


export const supprimerDevise = async (req, res) => {
  try {
    const { id } = req.params;

    const deviseSupprimee = await Devise.findByIdAndDelete(id);

    if (!deviseSupprimee) {
      return res.status(404).json({ message: "Devise non trouvée" });
    }

    res.status(200).json({ message: "Devise supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression", error });
  }
};

export const listerDevises = async (req, res) => {
  try {
    const devises = await Devise.find().sort({ createdAt: -1 });
    res.status(200).json(devises);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des devises", error });
  }
};
