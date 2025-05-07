const Faculty = require('../models/facultyModel');
const getAllFacultyMembers = async (req, res) => {
  try {
    const members = await Faculty.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addFacultyMember = async (req, res) => {
  try {
    const newMember = new Faculty(req.body);
    const saved = await newMember.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteFacultyMember = async (req, res) => {
  try {
    const deleted = await Faculty.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not Found" });
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateFacultyMember = async (req, res) => {
  try {
    const updated = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not Found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  getAllFacultyMembers,
  addFacultyMember,
  deleteFacultyMember,
  updateFacultyMember,
};
