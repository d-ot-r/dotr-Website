import express from "express";
import dotenv from "dotenv";
import { Request, Response } from "express";
import DesigningRoutes from "./routes/DesigningRoutes";
import DevelopmentRoutes from "./routes/DevelopmentRoutes";
import FormRoutes from "./routes/forms/FormRoutes";
import cors from "cors"; // Import cors

dotenv.config();

const app = express();

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Or your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization", "sentry-trace"], // Add 'sentry-trace' here
    credentials: true, // if you use cookies, auth etc.
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("DOTR Backend is Running!");
});

// Routes
app.use("/api/designing/", DesigningRoutes);
app.use("/api/development/", DevelopmentRoutes);
app.use("/api/form/", FormRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
