import express from "express"
import serieController from "../controllers/seriecontroller.js";


const router = express.Router();


// INDEX
router.get("/", serieController.index);

// SHOW
router.get("/:id", serieController.show);


// STORE
router.post("/", serieController.store);


// UPDATE
router.put("/:id", serieController.update);


// DESTROY
router.delete("/:id", serieController.destroy);


export default router