const db = require('../models')
const path = require('path');

module.exports = (app) => {
//for the index responds with the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//for exercise responds with the exercise.html file
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});
//for stats responds with the stats.html file
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});
}

//11hw
// onst path = require("path");
// const router = require("express").Router();

// // "/notes" responds with the notes.html file
// router.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/notes.html"));
// });

// // All other routes respond with the index.html file
// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// module.exports = router;
