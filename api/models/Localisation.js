import mongoose from 'mongoose';


const LocalisationSchema = new mongoose.Schema({
    pays: { type: String, required: true },
    ville: { type: String, required: true },
  },
  {
      timestamps:true
  })

const Localisation = mongoose.models.Localisation || mongoose.model('Localisation', LocalisationSchema);

export default Localisation;
