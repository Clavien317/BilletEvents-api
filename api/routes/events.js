import express from "express";
import upload from "../middleware/upload.js"
import {
  ajouterEvenement,
  listerEvenements,
  modifierEvenement,
  obtenirEvenementParId,
  supprimerEvenement
} from "../controllers/EventController.js";

const router = express.Router();

router.post("/", upload.single('image'), ajouterEvenement);
router.get("/", listerEvenements);
router.get("/:id", obtenirEvenementParId);
router.put("/:id", upload.single('image'), modifierEvenement);
router.delete("/:id", supprimerEvenement);

export default router;
