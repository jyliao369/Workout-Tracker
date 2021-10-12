const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const routes = require("./controllers");


const PORT = proccess.env.PORT || 3000;

const app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


mongoose.connect(proccess.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

// Here is the database that needs to be created
// Name of database:
// const databaseUrl = "workouttrackerdb";
// // Name of the collection"
// const collections = ["workout"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//     console.log("Database Error:", error);
// });

// This calls a route to the homepage index.html
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/index.html"));
// });

// This calls a route to the stats html file
// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/stats.html"));
// });

// This calls a route to the create a new workout
// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/exercise.html"));
// });

// app.post("/api/workout", ({ body }, res) => {
//     const workoutroutine = body;

//     db.workout.insert(workoutroutine, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     });
// });


// // This gets the stats
// app.get("/stats", (req, res) => {

// });



// // This should get a previous workout routine
// app.get("/exercise", (req, res) => {

// });

// // This allows you to make a new workout routine
// app.get("/exercise", (req, res) => {

// });

app.use(routes);

// This allows the server to be listening and allow the site to be
// ran and listened.
app.listen(PORT, () => {
    console.log(`App Running on port ${PORT}!`);
});
  