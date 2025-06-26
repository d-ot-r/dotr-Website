// models/designing/HERO_Of_Services_Model.ts
import { Schema, model } from "mongoose";
import { Development_Connection } from "../config/Develpoment_DB";
import { Designing_Connection } from "../config/Designing_DB";

// Define schema
const HERO_Of_Services_Schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    title: String,
    tagline: String,
    description: String,
    image: String,
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const HERO_Of_Designing = Designing_Connection.model(
  "HERO_Of_Services",
  HERO_Of_Services_Schema,
  "HERO_Of_Services"
);

export const HERO_Of_Development = Development_Connection.model(
  "HERO_Of_Services",
  HERO_Of_Services_Schema,
  "HERO_Of_Services"
);
