const express = require("express");
const mongoose = require("mongoose");
const createError = require("http-errors");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
const projectRoutes = require("./routes/projectRoutes");

app.use(express.json());
app.use(cors());

app.use("/projects", projectRoutes);

app.use("", (req, res, next) => {
  next(createError.NotFound());
});

app.use((error, req, res, next) => {
  res.json(error);
});

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("Connected to database ");
    app.listen(PORT, console.log(`app listening on port ${PORT}`));
  })
  .catch((err) => {
    createError.InternalServerError(), console.log(err);
  });
