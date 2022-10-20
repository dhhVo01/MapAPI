import express from "express";
import { getMapData } from "../controllers/map.controller.js";
const router = express.Router();


router.post("/", getMapData);


export default router;