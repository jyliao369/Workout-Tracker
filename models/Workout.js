const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            duration: {
                type: String,
                required: true,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;