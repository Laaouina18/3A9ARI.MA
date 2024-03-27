import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const floorSchema = new Schema({
  Floor_pic_url: { type: String, required: true }, 
  Rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }] ,
  House: { type: Schema.Types.ObjectId, ref: 'House' },
  floorNumber:{type:String, required:true},
});

const Floor = model('Floor', floorSchema);

export default Floor;
