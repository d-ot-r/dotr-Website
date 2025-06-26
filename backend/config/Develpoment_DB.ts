// config/Development_DB.ts
import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Development_Connection: Connection = mongoose.createConnection(
  process.env.MONGO_URI!,
  {
    dbName: "development",
  }
);

/// Event listeners
Development_Connection.on("connected", () => {
  console.log("-> ✅ Development_DB connected successfully.");
});

Development_Connection.on("error", (err) => {
  console.error("-> ❌ Development_DB connection error:", err);
});
