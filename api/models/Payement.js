import mongoose from 'mongoose';


const PayementSchema = new mongoose.Schema({
    ref: { type: String, required: true },
    Emeteur: { type: String, required: true },
    somme: { type: String, required: true },
    titulaire: { type: Date, required: true },
  },
  {
      timestamps:true
  })

const Payement = mongoose.models.Payement || mongoose.model('Payement', PayementSchema);

export default Payement;
