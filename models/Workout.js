const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

// New workout Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Please Enter Exercise Name"
        },
        type: {
            type: String,
            trim: true,
            required: "Please Enter The Type of Exercise"
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number,
            required: "Please enter the duration of the exercise."
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
    }]
});

// create mongoose model 'workout, and apply workout schema to that model

const Workout = mongoose.model('workout', WorkoutSchema);

// Export Workout Model
module.exports = Workout;