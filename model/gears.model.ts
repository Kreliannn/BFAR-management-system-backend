import mongoose, { Schema } from 'mongoose';


const gearScehema = new Schema({
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'FisherFolk', required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['net', 'hook', 'trap', 'other'], required: true },
    registerDate: { type: String, required: true },
    expiryDate: { type: String },
    status: { type: String, enum: ['Active', 'Expired'], default: 'Active' },
    objectType : { type: String,  default: 'gear' }
});

export default mongoose.model('gears', gearScehema)