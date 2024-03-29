import House from '../models/House.js';
import { houseSchema } from '../validation/JoiShema.js';
import User from '../models/User.js';

// Créer une maison avec les détails des étages et des pièces
const createHouse = async (req, res) => {
  try {
    const { error } = houseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const house = await House.create(req.body);
    const userId = req.body.Owner;
    if (userId) {
      await User.findByIdAndUpdate(userId, { $push: { House: house._id } });
    };

    res.status(201).json(house);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir toutes les maisons avec les détails des étages et des pièces
const getAllHouses = async (req, res) => {
  try {
    const houses = await House.find()
      .populate('Owner', '-password') // Peupler les détails de l'utilisateur
      .populate('Floors') // Peupler les détails des étages
      .populate({
        path: 'Floors', // Peupler les détails des pièces pour chaque étage
        populate: { path: 'Rooms' }
      });
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir une maison par son ID avec les détails des étages et des pièces
const getHouseById = async (req, res) => {
  try {
    const house = await House.findById(req.params.id)
      .populate('Owner', '-password') // Peupler les détails de l'utilisateur
      .populate('Floors') // Peupler les détails des étages
      .populate({
        path: 'Floors', // Peupler les détails des pièces pour chaque étage
        populate: { path: 'Rooms' }
      });
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    res.json(house);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une maison avec les détails des étages et des pièces
const updateHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('Floors')
      .populate({
        path: 'Floors',
        populate: { path: 'Rooms' }
      });
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    res.json(house);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une maison avec les détails des étages et des pièces
const deleteHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndDelete(req.params.id)
      .populate('Floors')
      .populate({
        path: 'Floors',
        populate: { path: 'Rooms' }
      });
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    res.json({ message: 'House deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createHouse, deleteHouse, updateHouse, getAllHouses, getHouseById };
