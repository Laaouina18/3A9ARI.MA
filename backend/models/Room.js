import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const roomSchema = new Schema({
  room_pic: { type: String, required: true },
  roomNumber:{type:Number, required:true },
  Floor: { type: Schema.Types.ObjectId, ref: 'Floor' },
  House: { type: Schema.Types.ObjectId, ref: 'House' },
  roomArea: { type: String, required: true },
  roomType: { type: String, required: true },
  description: { type: String, required: true },
});

const Room = model('Room', roomSchema);

export default Room;
