import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import bodyParser from "body-parser";

import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import mapRouter from "./routes/map.routes.js";

app.use("/api/place", mapRouter);

app.listen(PORT, function(){
  console.log("Oke");
});