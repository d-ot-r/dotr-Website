// config/Form_DB.ts
import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Form_Connection: Connection = mongoose.createConnection(
  process.env.MONGO_URI!,
  {
    dbName: "form",
  }
);

// Event listeners
Form_Connection.on("connected", () => {
  console.log("-> ✅ Form_DB connected successfully.");
});

Form_Connection.on("error", (err) => {
  console.error("-> ❌ Form_DB connection error:", err);
});
