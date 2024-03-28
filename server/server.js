const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const cookieParser = require('cookie-parser');

const { errorHandler } = require("./middleware/error-middleware");
require("./config/db").default;
const port = process.env.PORT || 8090;

const graduateRouter = require("./routes/graduate-router");
const jobRouter = require("./routes/job-router");
const postRouter = require("./routes/post-router");
const coordinatorRouter = require("./routes/coordinator-router");
const eventRouter = require("./routes/event-router");
const classOfyRouter = require("./routes/classOf-router");

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(cookieParser());


app.use("/api/graduates", graduateRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/posts", postRouter);
app.use("/api/coordinators", coordinatorRouter);
app.use("/api/events", eventRouter);
app.use("/api/classOf", classOfyRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});
app.listen(port, () => {
  console.log(`server listn in port ${port} `);
});

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
