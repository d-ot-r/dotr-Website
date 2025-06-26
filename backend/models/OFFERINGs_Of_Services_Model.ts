import mongoose, { Schema } from "mongoose";
import { Development_Connection } from "../config/Develpoment_DB";
import { Designing_Connection } from "../config/Designing_DB";

// Define the schema for brand designing services
const OFFERINGs_Of_Services_Schema = new Schema(
  {
    category: { type: String, required: true }, // "logo", "business_card", "brand_identity"
    offerings: [
      {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        tagline: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true }, // we'll store the icon name as a string like "IconPencil"
      },
      { _id: true }, // <-- ensure _id is included
    ],
  },
  { timestamps: true }
);

export const OFFERINGs_Of_Designing_Model = Designing_Connection.model(
  "OFFERINGs_Of_Services",
  OFFERINGs_Of_Services_Schema,
  "OFFERINGs_Of_Services"
);

export const OFFERINGs_Of_Development_Model = Development_Connection.model(
  "OFFERINGs_Of_Services",
  OFFERINGs_Of_Services_Schema,
  "OFFERINGs_Of_Services"
);
