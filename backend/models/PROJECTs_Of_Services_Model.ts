import { Schema } from "mongoose";
import { Designing_Connection } from "../config/Designing_DB";
import { Development_Connection } from "../config/Develpoment_DB";

// Define schema
const PROJECTs_Of_Services_Schema = new Schema(
  {
    group: { type: String, required: true },
    category: {
      type: String,
      required: true,
    },
    projects: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: { type: String },
        description: { type: String },
        button: { type: String },
        image: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const PROJECTs_Of_Designing = Designing_Connection.model(
  "PROJECTs_Of_Services",
  PROJECTs_Of_Services_Schema,
  "PROJECTs_Of_Services"
);

export const PROJECTs_Of_Development = Development_Connection.model(
  "PROJECTs_Of_Services",
  PROJECTs_Of_Services_Schema,
  "PROJECTs_Of_Services"
);
