import express from "express";
const router = express.Router();
import { ajouterDevise, listerDevises, modifierDevise, supprimerDevise } from "../controllers/DevisController.js"



router.post("/", ajouterDevise);
router.get("/", listerDevises)
router.put("/:id", modifierDevise);
router.delete("/:id", supprimerDevise);



export default router;