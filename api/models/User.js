import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    tel: { type: String, required: true },
    role: { type: String, default:"client" , required: true },
    email: { type: String, required: true, unique:true },
    mdp: { type: String, required: true },
    statut: { type: String, default:"actif" , required: true },
  },
  {
      timestamps:true
  })

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
