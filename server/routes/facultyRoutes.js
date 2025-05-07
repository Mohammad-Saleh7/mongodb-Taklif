const express = require('express');
const router = express.Router();
const {
  getAllFacultyMembers,
  addFacultyMember,
  deleteFacultyMember,
  updateFacultyMember,
} = require('../controllers/facultyController');
router.get('/', getAllFacultyMembers);
router.post('/', addFacultyMember);
router.delete('/:id', deleteFacultyMember);
router.patch('/:id', updateFacultyMember);
module.exports = router;
