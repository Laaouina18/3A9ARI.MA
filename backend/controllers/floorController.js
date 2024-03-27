import Floor from "../models/Floor.js";
import { floorSchema } from "../validation/JoiShema.js";
import House from "../models/House.js";
// Créer un étage
const createFloor = async (req, res) => {
  try {
    const { error } = floorSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const floorData = req.body; 
    const floor = new Floor(floorData);
    await floor.save();
    const house = await House.findById(floorData.House);

    
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    house.Floors.push(floor._id);
    await house.save();

    res.status(201).json(floor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Obtenir tous les étages
const getAllFloors = async (req, res) => {
  try {
    const floors = await Floor.find().populate('House');
    res.json(floors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Obtenir un étage par son ID
const getFloorById = async (req, res) => {
  try {
    const floor = await Floor.findById(req.params.id).populate('House');
    if (!floor) {
      return res.status(404).json({ message: 'Floor not found' });
    }
    res.json(floor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un étage
const updateFloor = async (req, res) => {
  try {
    const floor = await Floor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!floor) {
      return res.status(404).json({ message: 'Floor not found' });
    }
    res.json(floor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un étage
const deleteFloor = async (req, res) => {
  try {
    const floor = await Floor.findByIdAndDelete(req.params.id);
    if (!floor) {
      return res.status(404).json({ message: 'Floor not found' });
    }
    res.json({ message: 'Floor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export {createFloor,updateFloor,deleteFloor,getAllFloors,getFloorById}