const Student = require('../models/student.model');

// Retrieve all students from the database
const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve a single student by ID
const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new student
const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a student record
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a student record
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
};
