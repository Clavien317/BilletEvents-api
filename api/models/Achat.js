import mongoose from 'mongoose';


const AchatSchema = new mongoose.Schema({
    idEvent: { type: String, required: true },
    nbPlace: { type: String, required: true },
    typeReserv: { type: String, required: true },
    sommePrix: { type: Date, required: true },
    statut: { type: String, required: false },
  },
  {
      timestamps:true
  })

const Achat = mongoose.models.Achat || mongoose.model('Achat', AchatSchema);

export default Achat;
