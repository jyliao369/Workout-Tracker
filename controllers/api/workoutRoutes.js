const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Workout = require('../../models/Workout');

// This should get all of the listings
router.get("/", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// This should help create a new excercise routine
router.post("/", ({ body }, res) => {
    Workout.create({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// This should allow you to update
router.put("/:id", ({ params, body }, res) => {
    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/range", (req, res) => {
    Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;