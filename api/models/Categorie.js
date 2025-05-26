import mongoose from 'mongoose';


const CategorieSchema = new mongoose.Schema({
    designation: { type: String, required: true },
  },
  {
      timestamps:true
  })

const Categorie = mongoose.models.Categorie || mongoose.model('Categorie', CategorieSchema);

export default Categorie;
