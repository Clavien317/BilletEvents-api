import mongoose from 'mongoose';

const AchatSchema = new mongoose.Schema({
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  idEvent: { type: mongoose.Schema.Types.ObjectId, ref: 'Evenement', required: true },
  nbPlace: { type: Number, required: true, min: 1 },
  typeBillet: { type: String, required: true },
  sommePrix: { type: Number, required: true, min: 0 },
  statut: { type: String, default: "Payé" }
}, {
  timestamps: true
});

const Achat = mongoose.models.Achat || mongoose.model('Achat', AchatSchema);

export default Achat;
