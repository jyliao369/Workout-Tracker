const router = require("express").Router();
const path = require("path");

// This calls a route to the homepage index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
});

// This calls a route to the stats html file
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
});

// This calls a route to the create a new workout
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

modules.exports = router;