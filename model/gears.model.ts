import mongoose, { Schema } from 'mongoose';


const gearScehema = new Schema({
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'fisherFolk', required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['net', 'hook', 'trap', 'other'], required: true },
    expiryDate: { type: Date },
    status: { type: String, enum: ['Active', 'Broken', 'Expired'], default: 'Active' },
    objectTyoe : { type: String,  default: 'gear' }
});

export default mongoose.model('gears', gearScehema)