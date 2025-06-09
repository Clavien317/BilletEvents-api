import mongoose from 'mongoose';

const BilletSchema = new mongoose.Schema({
  type: { type: String, required: true }, // ex: standard, vip, bronze, fan zone
  prix: { type: Number, required: true },
  quantite: { type: Number, required: true }, // nombre de places disponibles pour ce type
}, { _id: false });

const EvenementSchema = new mongoose.Schema({
  idOrg: { type: String, required: true },
  titre: { type: String, required: true },
  description: { type: String, required: true },
  dateEvent: { type: Date, required: true },
  adresse: { type: String },
  ville: { type: String, required: true },
  pays: { type: String, required: true },

  devise: { type: String, required: true }, // ex: MGA, EUR, etc.
  image: { type: String, required: false },
  statut: { type: String,default:"à venir", required: true },
  categorie: { type: String, required: true },

  billets: { type: [BilletSchema], required: true }, // tableau de types de billets

}, { timestamps: true });

const Evenement = mongoose.models.Evenement || mongoose.model('Evenement', EvenementSchema);

export default Evenement;
