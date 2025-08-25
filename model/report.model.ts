import mongoose, { Schema } from 'mongoose';


const reportSchema = new Schema({
    date : { type: String, required: true },
});

export default mongoose.model('report', reportSchema)