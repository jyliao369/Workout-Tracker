const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Here is the database that needs to be created
// Name of database:
const databaseUrl = "workouttracker";
// Name of the collection"
const collections = ["workout"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

// This calls a route to the homepage index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// This calls a route to the stats html file
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

// This calls a route to the create a new workout
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});



// This gets the stats
app.get("/stats", (req, res) => {

});



// This should get a previous workout routine
app.get("/exercise", (req, res) => {

});

// This allows you to make a new workout routine
app.get("/exercise", (req, res) => {

});

// This allows the server to be listening and allow the site to be
// ran and listened.
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  