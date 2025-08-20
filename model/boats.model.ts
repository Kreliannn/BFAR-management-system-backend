import mongoose, { Schema } from 'mongoose';


const boatScehema = new Schema({
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'fisherFolk', required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['motorized', 'non-motorized'], required: true },
    expiryDate: { type: Date, required: true },
    status: { type: String, enum: ['Active', 'Expired', 'Pending'], default: 'Active' },
    objectTyoe : { type: String,  default: 'boat' }
});

export default mongoose.model('boats', boatScehema)