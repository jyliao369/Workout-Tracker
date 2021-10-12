const router = require("express").Router();
const workoutRoutes = require("./workoutRoutes");
const statsRoutes = require("./statsRoutes");

router.use("/workouts", workoutRoutes);
router.use("/stats", statsRoutes);

module.exports = router;