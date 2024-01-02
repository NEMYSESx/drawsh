import express, { Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import connectdb from "./config/connectdb.js";

const app: Application = express(); //It is of type apllication which is a inbuild type in express
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(helmet()); // When you call helmet(), it returns a function that configures and sets various HTTP headers to improve security.
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //The Cross-Origin-Resource-Policy header is designed to control whether the browser should allow the web page to request the specified resource from a different origin. It's a security feature that helps prevent certain types of Cross-Site Request Forgery (CSRF) attacks.
app.use(morgan("common"));

const port: number = parseInt(process.env.PORT as string, 10) || 6000;

mongoose
  .connect(process.env.DATABASE_URI as string, {})
  .then(() => {
    app.listen(port, () => {
      console.log(`app is running on ${port}`);
    });
  })
  .catch((err: Error) => {
    console.log("connection failed with mongodb" + ", " + err.message);
    process.exit(1);
  });
