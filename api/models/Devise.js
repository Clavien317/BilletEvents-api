import mongoose from 'mongoose';


const DeviseSchema = new mongoose.Schema({
    devis: { type: String, required: true },
  },
  {
      timestamps:true
  })

const Devise = mongoose.models.Devise || mongoose.model('Devise', DeviseSchema);

export default Devise;
