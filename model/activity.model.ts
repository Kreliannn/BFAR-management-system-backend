import mongoose, { Schema } from 'mongoose';


const ActivitySchema = new Schema({
  fisherfolk: { type: mongoose.Schema.Types.ObjectId, ref: 'Fisherfolk', required: true },
  boat: { type: mongoose.Schema.Types.ObjectId, ref: 'boats', required: true },
  activityType: { type: String, enum: ['Fishing', 'Selling', 'Maintenance'], required: true },
  location: { type: String },
  date: { type: Date, required: true },
  time : { type: String, required: true },
});


export default mongoose.model('activity', ActivitySchema)
