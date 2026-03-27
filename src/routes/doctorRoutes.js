import express from "express";
import {
  getAllDoctors,
  getDoctorById,
  getDoctorByName,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/name/:name", getDoctorByName); // ✅ FIXED
router.get("/:id", getDoctorById);
router.post("/", createDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
