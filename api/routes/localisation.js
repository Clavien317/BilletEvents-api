import express from "express";
const router = express.Router();
import { ajouterLocalisation, listerLocalisations, modifierLocalisation, supprimerLocalisation } from "../controllers/LocalisationController.js"



router.post("/", ajouterLocalisation);
router.get("/", listerLocalisations)
router.put("/:id", modifierLocalisation);
router.delete("/:id", supprimerLocalisation);



export default router;