import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./Router/userRouter.js";
import visitRouter from "./Router/visitRouter.js";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
console.log("MongoDB URI:", MONGO_URI ? "Loaded" : "Not Found");

const app = express();
const userRoute = express.Router();
const visitRoute = express.Router();

app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/visit", visitRoute);

userRouter(userRoute);
visitRouter(visitRoute);

mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("open", () => console.log("Database is connected"));
db.on("error", () => console.log("error in connecting with database"));
app.listen(5100, () => console.log("server is running on 5100"));
