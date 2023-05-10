import express from "express";
import path from "path";

import pdfRoutes from "./routes/pdfRoutes.js";

const app = express();

const __dirname = path.resolve();

// http://localhost:3002/api/generate-pdf

app.use(express.static(path.join(__dirname, "uploads")));

app.use("/api", pdfRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

// Start server
app.listen(3002, () => {
  console.log("Server started on port 3002");
});
