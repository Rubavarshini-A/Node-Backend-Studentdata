const express = require("express");
const { getStudentParents, getStudentParent, createStudentParent, updateStudentParent, deleteStudentParent } = require('../controllers/studentparents.controllers.js');
const router = express.Router();

router.get('/', getStudentParents);
router.get('/:id', getStudentParent);

router.post('/', createStudentParent);
router.put('/:id', updateStudentParent);
router.delete('/:id', deleteStudentParent);

module.exports = router;
