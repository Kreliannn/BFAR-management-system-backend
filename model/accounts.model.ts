import mongoose, { Schema } from 'mongoose';


const accountsSchema = new Schema({
  name : String,
  role : String,
  face : [Number]
});


export default mongoose.model('accounts', accountsSchema)
