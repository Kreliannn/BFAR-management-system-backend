import mongoose, { Schema } from 'mongoose';


const boatScehema = new Schema({
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'FisherFolk', required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['motorized', 'non-motorized'], required: true },
    registerDate: { type: String, required: true },
    expiryDate: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Expired'], default: 'Active' },
    objectType : { type: String,  default: 'boat' }
});

export default mongoose.model('boats', boatScehema)