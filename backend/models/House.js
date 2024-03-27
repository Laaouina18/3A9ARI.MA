import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const houseSchema = new Schema({
  Type: { type: String, required: true },
  Home_pic: { type: String, required: true },
  Location: { type: String, required: true },
  House_Area: { type: Number, required: true },
  Description: { type: String, required: true },
  Price: { type: Number, required: true },
  Owner: { type: Schema.Types.ObjectId, ref: 'User' },
  Transaction_Type: { type: String, enum: ['Rent', 'Buy'], required: true },
  Floors: [{ type: Schema.Types.ObjectId, ref: 'Floor' }] ,
  Rooms:[{type:Schema.Types.ObjectId,ref:'Room'}]
});

const House = model('House', houseSchema);

export default House;
