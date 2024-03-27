import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// import utiles

// imported routes
import router from "./routes/index.js";

// import middlwares
import { notFound, errorHandler } from "./middlewares/errorMidlware.js";

// env
dotenv.config();

// database
connectDB();

// define express
const app = express();

// use cors
app.use(cors());

// use json to handel data
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));

// use routes
app.use("/", router);

// use error Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
