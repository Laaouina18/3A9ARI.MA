import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const conversationSchema = new Schema({
  participants: [
    { 
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    }
  ],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

const Conversation = model('Conversation', conversationSchema);

export default Conversation;
