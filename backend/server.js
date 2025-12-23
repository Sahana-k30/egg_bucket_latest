import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("EggBucket Backend Running 🚀"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
