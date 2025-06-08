import express from "express";
const router = express.Router();
import { GetAllUsers, GetUserById, Inscription, Login, UpdateUser } from "../controllers/UserController.js"



router.post("/register", Inscription);
router.get("/", GetAllUsers)
router.get("/:id", GetUserById);
router.put("/:id", UpdateUser);
router.post("/login", Login); 



export default router;