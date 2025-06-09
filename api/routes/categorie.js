import express from "express";
const router = express.Router();
import { ajouterCategorie, listerCategories, modifierCategorie, supprimerCategorie } from "../controllers/CategorieController.js"



router.post("/", ajouterCategorie);
router.get("/", listerCategories)
router.put("/:id", modifierCategorie);
router.delete("/:id", supprimerCategorie);



export default router;