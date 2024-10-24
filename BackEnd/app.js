const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { adminRouter } = require("./routes/admin");
const { empRouter } = require("./routes/employee");
const { userRouter } = require("./routes/user");
require("dotenv").config();

const port = process.env.port;
const corsOpts = {
  origin: "http://localhost:8000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};
const router = express.Router();

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", adminRouter);
app.use("/api/emp", empRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
