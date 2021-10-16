const router = require("express").Router();
const workoutRoutes = require("./exerciseRoutes");
const statsRoutes = require("./statsRoutes");

router.use("/workouts", workoutRoutes);
router.use("/stats", statsRoutes);

module.exports = router;
