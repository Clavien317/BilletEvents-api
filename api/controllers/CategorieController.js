import CategorieEvenement from '../models/Categorie.js';

export const ajouterCategorie = async (req, res) => {
  try {
    const { designation, description } = req.body;
    const nouvelleCategorie = new CategorieEvenement({ designation, description });
    await nouvelleCategorie.save();
    res.status(201).json(nouvelleCategorie);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création', error });
  }
};

export const modifierCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    const { designation, description } = req.body;

    const categorieModifiee = await CategorieEvenement.findByIdAndUpdate(
      id,
      { designation, description },
      { new: true }
    );

    if (!categorieModifiee) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }

    res.status(200).json(categorieModifiee);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la modification', error });
  }
};


export const supprimerCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    const categorieSupprimee = await CategorieEvenement.findByIdAndDelete(id);

    if (!categorieSupprimee) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }

    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error });
  }
};

export const listerCategories = async (req, res) => {
  try {
    const categories = await CategorieEvenement.find().sort({ dateCreation: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des catégories', error });
  }
};
