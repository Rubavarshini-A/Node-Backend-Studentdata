const StudentParents = require('../models/studentparents.model');

// Retrieve all student-parent records
const getStudentParents = async (req, res) => {
    try {
        const records = await StudentParents.find({});
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve a single student-parent record by ID
const getStudentParent = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await StudentParents.findById(id);
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new student-parent record
const createStudentParent = async (req, res) => {
    try {
        const record = await StudentParents.create(req.body);
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a student-parent record
const updateStudentParent = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await StudentParents.findByIdAndUpdate(id, req.body);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        const updatedRecord = await StudentParents.findById(id);
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a student-parent record
const deleteStudentParent = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await StudentParents.findByIdAndDelete(id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStudentParents,
    getStudentParent,
    createStudentParent,
    updateStudentParent,
    deleteStudentParent
};
