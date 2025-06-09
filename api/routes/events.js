import express from "express";
const router = express.Router();
import { ajouterEvenement, listerEvenements, modifierEvenement, obtenirEvenementParId, supprimerEvenement } from "../controllers/EventController.js"



router.post("/", ajouterEvenement);
router.get("/", listerEvenements)
router.get("/:id", obtenirEvenementParId);
router.put("/:id", modifierEvenement);
router.delete("/:id", supprimerEvenement);



export default router;