import { Schema } from "mongoose";
import { Form_Connection } from "../../../config/Form_DB";

const Logo_Form_Schema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    tagline: { type: String },
    colors: { type: [String], required: true }, // Array of selected colors
    industry: { type: String, required: true },
    logoStyle: { type: String, required: true },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Logo_Form_Model = Form_Connection.model(
  "Logo_Designing_Forms",
  Logo_Form_Schema,
  "Logo_Designing_Forms"
);
