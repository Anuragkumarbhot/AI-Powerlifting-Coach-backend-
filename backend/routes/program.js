const express = require("express");
const router = express.Router();
const generateProgram = require("../aiCoach");

router.post("/", (req, res) => {

  const { squat, bench, deadlift } = req.body;

  if (!squat || !bench || !deadlift) {
    return res.status(400).json({
      error: "Missing lift values"
    });
  }

  const result = generateProgram(squat, bench, deadlift);

  res.json(result);

});

module.exports = router;
