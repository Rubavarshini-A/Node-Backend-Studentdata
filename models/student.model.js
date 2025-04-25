const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema(
    {
        rollno: {
            type: Number,
            required: [true, "Please enter the roll number"]
        },

        name: {
            type: String,
            required: [true, "Please enter the student name"]
        },

        mark: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model("Students", StudentSchema);

module.exports = Student;
