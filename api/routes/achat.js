import express from "express";
const router = express.Router();
import { createAchat, getAllAchats } from "../controllers/AchatController.js"



router.post("/", createAchat);
router.get("/", getAllAchats)



export default router;