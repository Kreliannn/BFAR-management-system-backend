import mongoose, { Schema } from 'mongoose';


const ActivitySchema = new Schema({
  fisherfolk: { type: mongoose.Schema.Types.ObjectId, ref: 'FisherFolk', required: true },
  boat: { type: mongoose.Schema.Types.ObjectId, ref: 'boats', required: true },
  activityType: { type: String, enum: ['Fishing', 'Transport', 'Maintenance'], required: true },
  location: { type: String },
  date: { type: String, required: true },
  time : { type: String, required: true },
  lat :   { type: Number, required: true },
  long :   { type: Number, required: true },
});


export default mongoose.model('activity', ActivitySchema)
