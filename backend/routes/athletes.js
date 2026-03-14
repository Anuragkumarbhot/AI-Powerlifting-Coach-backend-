const express = require("express");
const router = express.Router();
const athletes = require("../data/athletes");

router.get("/", (req, res) => {

  const sorted = [...athletes].sort((a,b)=> b.total - a.total);

  res.json(sorted);

});

router.post("/", (req, res) => {

  const { name, squat, bench, deadlift } = req.body;

  const total = squat + bench + deadlift;

  const athlete = {
    name,
    squat,
    bench,
    deadlift,
    total
  };

  athletes.push(athlete);

  res.json(athlete);

});

module.exports = router;
