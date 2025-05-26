import mongoose from 'mongoose';


const EvenementSchema = new mongoose.Schema({
    idOrganisateur: { type: String, required: true },
    titre: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    lieu: { type: String, required: false },
    ville: { type: String, required: true },
    pays: { type: String, required: true },
    prixu: { type: String, required: true },
    place: { type: String, required: true },
  },
  {
      timestamps:true
  })

const Evenement = mongoose.models.Evenement || mongoose.model('Evenement', EvenementSchema);

export default Evenement;
