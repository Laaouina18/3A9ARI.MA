import User from '../models/User.js';
const getAllOwners = async (req, res) => {
	try {
	  const owners = await User.find({ role: 'Owner' }).populate('House');
	  res.json(owners);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  };
  
// Obtenir un propriétaire par son ID
const getOwnerById = async (req, res) => {
  try {
    const owner = await User.findById(req.params.id).populate('House');
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.json(owner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Mettre à jour un propriétaire
const updateOwner = async (req, res) => {
  try {
    const owner = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.json(owner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Supprimer un propriétaire
const deleteOwner = async (req, res) => {
  try {
    const owner = await User.findByIdAndDelete(req.params.id);
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.json({ message: 'Owner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export {deleteOwner,updateOwner,getAllOwners,getOwnerById}