import Room from '../models/Room.js';
import { roomSchema } from '../validation/JoiShema.js';
import House from "../models/House.js"
import Floor from "../models/Floor.js"
// Créer une pièce
const createRoom = async (req, res) => {
	try {
	  const { error } = roomSchema.validate(req.body);
	  if (error) {
		return res.status(400).json({ message: error.details[0].message });
	  }
  
	  const room = new Room(req.body);
	  await room.save();
	  const floor = await Floor.findById(req.body.Floor);
	  if (!floor) {
		return res.status(404).json({ message: 'Floor not found' });
	  }
	  floor.Rooms.push(room._id);
	  await floor.save();
	  const house = await House.findById(req.body.House);
	  if (!house) {
		return res.status(404).json({ message: 'House not found' });
	  }
	  house.Rooms.push(room._id);
	  await house.save();
	  res.status(201).json(room);
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  };
  
// Obtenir toutes les pièces
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir une pièce par son ID
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une pièce
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une pièce
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export {createRoom,deleteRoom,updateRoom,getAllRooms,getRoomById}