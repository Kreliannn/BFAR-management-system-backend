import mongoose, { Schema } from 'mongoose';


const notificationSchema = new Schema({
    fisherFolk : { type: mongoose.Schema.Types.ObjectId, ref: 'FisherFolk', required: true },
    message: { type: String, required: true },
    date : { type: String, required: true },
    time : { type: String, required: true },
    itemName : { type: String, required: true },
    type : { type: String, required: true },
    itemiD : { type: String, required: true },
    expirationDate : { type: String, required: true },
});

export default mongoose.model('notification', notificationSchema)