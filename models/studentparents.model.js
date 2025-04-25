const mongoose = require('mongoose');

const StudentParentsSchema = mongoose.Schema(
    {
        rollno: {
            type: Number,
            required: [true, "Please enter the roll number"]
        },

        name: {
            type: String,
            required: [true, "Please enter the student name"]
        },

        mother: {
            type: String,
            required: [true, "Please enter the mother's name"]
        },

        father: {
            type: String,
            required: [true, "Please enter the father's name"]
        }
    },
    {
        timestamps: true
    }
)

const StudentParents = mongoose.model("StudentParents", StudentParentsSchema);

module.exports = StudentParents;
