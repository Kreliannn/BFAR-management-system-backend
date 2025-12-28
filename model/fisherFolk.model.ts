import mongoose, { Schema } from 'mongoose';


const FisherFolkScehema = new Schema({
    fullname: { type: String, required: true },
    civilStatus: { type: String, required: true },
    profile: { type: String, required: true },
    personToNotify: { type: String, required: true },
    contact: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    barangay : { type: String, required: true },
    address :{ type: String, required: true },
    boats : [{ type: mongoose.Schema.Types.ObjectId, ref: 'boats', required: true }],
    gears : [{ type: mongoose.Schema.Types.ObjectId, ref: 'gears', required: true }],
    lat: { type: String, required: true },
    long: { type: String, required: true },
});

export default mongoose.model('FisherFolk', FisherFolkScehema)