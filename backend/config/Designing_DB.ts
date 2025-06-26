// config/Designing_DB.ts
import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Designing_Connection: Connection = mongoose.createConnection(
  process.env.MONGO_URI!,
  {
    dbName: "designing",
  }
);

// Event listeners
Designing_Connection.on("connected", () => {
  console.log("-> ✅ Designing_DB connected successfully.");
});

Designing_Connection.on("error", (err) => {
  console.error("-> ❌ Designing_DB connection error:", err);
});
