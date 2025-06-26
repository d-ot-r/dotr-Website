// models/designing/Designing_Services_Model.ts
import { Schema, model } from "mongoose";
import { Development_Connection } from "../config/Develpoment_DB";
import { Designing_Connection } from "../config/Designing_DB";

// Define schema
const Services_Schema = new Schema(
  {
    group: {
      type: String,
      required: true,
    },
    services: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: { type: String },
        description: { type: String },
        image: { type: String },
        icons: { type: [String] },
        link: { type: String },
      },
      { _id: true }, // <-- ensure _id is included
    ],
  },
  { timestamps: true }
);

export const Designing_Services_Model = Designing_Connection.model(
  "Designing_Services",
  Services_Schema,
  "Designing_Services"
);

export const Development_Services_Model = Development_Connection.model(
  "Development_Services",
  Services_Schema,
  "Development_Services"
);
