// models/designing/DOTRForDesigningModel.ts
import { Schema, model } from "mongoose";
import { timeStamp } from "console";
import { Development_Connection } from "../config/Develpoment_DB";
import { Designing_Connection } from "../config/Designing_DB";

// Define schema
const Why_DOTR_For_Services_Schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    reasons: [
      {
        id: {
          type: Number,
          required: true,
        },
        title: { type: String },
        description: { type: String },
        bgColor: { type: String },
      },
      { _id: true }, // <-- ensure _id is included
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const Why_DOTR_For_Designing = Designing_Connection.model(
  "Why_DOTR_For_Services",
  Why_DOTR_For_Services_Schema,
  "Why_DOTR_For_Services"
);

export const Why_DOTR_For_Development = Development_Connection.model(
  "Why_DOTR_For_Services",
  Why_DOTR_For_Services_Schema,
  "Why_DOTR_For_Services"
);
