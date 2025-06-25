import express from "express"
import nonnaController from "../controllers/nonnaController.js";


const router = express.Router();


// INDEX
router.get("/", nonnaController.index);

// SHOW
router.get("/:id", nonnaController.show);


// // STORE
// router.post("/", nonnaController.store);


// // UPDATE
// router.put("/:id", nonnaController.update);


// DESTROY
router.delete("/:id", nonnaController.destroy);


export default router