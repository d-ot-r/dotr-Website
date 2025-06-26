// models/designing/FAQs_Of_ServicesModel.ts
import { Schema, model } from "mongoose";
import { Development_Connection } from "../config/Develpoment_DB";
import { Designing_Connection } from "../config/Designing_DB";

// Define schema
const FAQs_Of_Services_Schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    faqs: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: { type: String },
        description: { type: String },
        ctaText: { type: String },
        ctaLink: { type: String },
        icon: { type: String },
        intro: { type: [String] },
        points: { type: [String] },
        outro: { type: [String] },
      },
      { _id: true }, // <-- ensure _id is included
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const FAQs_Of_Designing_Model = Designing_Connection.model(
  "FAQs_Of_Services",
  FAQs_Of_Services_Schema,
  "FAQs_Of_Services"
);

export const FAQs_Of_Development_Model = Development_Connection.model(
  "FAQs_Of_Services",
  FAQs_Of_Services_Schema,
  "FAQs_Of_Services"
);
