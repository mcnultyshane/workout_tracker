// import express router
const router = require('express').Router()

// import workout model
const db = require("../models/Workout")


// GET Request for getting all workouts
router.get("/api/workouts", (req, res) => {
    db.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
                // totalDistance: { $sum: "$distance" } ,
                // totalWeight: { $sum: "weight"},
                // totalSets: { $sum: "sets"},
                // totalReps: { $sum: "reps"}
            }
        }])
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

// GET request
router.get("/api/workouts/range", (req, res) => {
    db.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
                // totalDistance: { $sum: "$distance" } ,
                // totalWeight: { $sum: "weight"},
                // totalSets: { $sum: "sets"},
                // totalReps: { $sum: "reps"}
            }
        }])
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

// POST Workout
router.post("/api/workouts", ({
    body
}, res) => {
    db.create(body)
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

// PUT/ Update Workout

router.put("/api/workouts/:id", ({
    body,
    params
}, res) => {
    db.findByIdAndUpdate(params.id, {
            $push: {
                exercises: body
            }
        })
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
})

module.exports = router