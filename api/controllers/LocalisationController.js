import Localisation from '../models/Localisation.js';


export const ajouterLocalisation = async (req, res) => {
  try {
    const { pays, ville } = req.body;

    const nouvelleLocalisation = new Localisation({ pays, ville });
    await nouvelleLocalisation.save();

    res.status(201).json(nouvelleLocalisation);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout de la localisation", error });
  }
};


export const modifierLocalisation = async (req, res) => {
  try {
    const { id } = req.params;
    const { pays, ville } = req.body;

    const localisationModifiee = await Localisation.findByIdAndUpdate(
      id,
      { pays, ville },
      { new: true }
    );

    if (!localisationModifiee) {
      return res.status(404).json({ message: "Localisation non trouvée" });
    }

    res.status(200).json(localisationModifiee);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la modification", error });
  }
};


export const supprimerLocalisation = async (req, res) => {
  try {
    const { id } = req.params;

    const localisationSupprimee = await Localisation.findByIdAndDelete(id);

    if (!localisationSupprimee) {
      return res.status(404).json({ message: "Localisation non trouvée" });
    }

    res.status(200).json({ message: "Localisation supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression", error });
  }
};


export const listerLocalisations = async (req, res) => {
  try {
    const localisations = await Localisation.find().sort({ createdAt: -1 });
    res.status(200).json(localisations);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des localisations", error });
  }
};
