import express from "express";
import { generatePDF } from "../controllers/pdfController.js";

const router = express.Router();

router.route("/generate-pdf").get(generatePDF);

export default router;
