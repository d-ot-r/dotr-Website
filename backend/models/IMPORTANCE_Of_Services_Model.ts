// models/designing/IMPORTANCE_Of_ServicesModel.ts
import { Schema, model } from "mongoose";
import { Development_Connection } from "../config/Develpoment_DB";
import { Designing_Connection } from "../config/Designing_DB";

// Define schema
const IMPORTANCE_Of_Services_Schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    heading: String,
    subheading: String,
    paragraphs: [String],
    featureheading: String,
    features: [
      {
        icon: { type: String },
        title: { type: String },
        description: { type: String },
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const IMPORTANCE_Of_Designing_Model = Designing_Connection.model(
  "IMPORTANCE_Of_Services",
  IMPORTANCE_Of_Services_Schema,
  "IMPORTANCE_Of_Services"
);

export const IMPORTANCE_Of_Development_Model = Development_Connection.model(
  "IMPORTANCE_Of_Services",
  IMPORTANCE_Of_Services_Schema,
  "IMPORTANCE_Of_Services"
);
