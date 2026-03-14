const express = require("express");
const cors = require("cors");

const programRoute = require("./routes/program");
const athleteRoute = require("./routes/athletes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/program", programRoute);
app.use("/athletes", athleteRoute);

app.get("/", (req, res) => {
  res.send("AI Powerlifting Coach Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
