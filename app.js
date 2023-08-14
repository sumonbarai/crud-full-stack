const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const router = require("./src/routes/api");
const dbConnection = require("./src/config/db");
const path = require("path");

// public folder binding
app.use(express.static("client/dist"));

// security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(morgan("dev"));

// body parser implementation
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

// request rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3000,
});

app.use(limiter);

// database connection
dbConnection().catch((err) => console.error("db connection failed"));

// api route setup
app.use("/api/v1", router);

// 404 route setup
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// error handler route
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("internal server error");
});

module.exports = app;
