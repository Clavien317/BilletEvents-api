import mongoose from 'mongoose';


const ReservationSchema = new mongoose.Schema({
    idEvent: { type: String, required: true },
    nbPlace: { type: String, required: true },
    typeReserv: { type: String, required: true },
    avance: { type: Date, required: true },
    comment: { type: String, required: false },
  },
  {
      timestamps:true
  })

const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema);

export default Reservation;
