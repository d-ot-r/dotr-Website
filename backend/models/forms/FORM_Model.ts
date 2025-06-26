import { Schema } from "mongoose";
import { Form_Connection } from "../../config/Form_DB";
import { PersonalDetailsSchema, BusinessDetailsSchema } from "./Form_FIELDs";

const FORM_Schema = new Schema(
  {
    category: { type: String, required: true },
    details: {
      ...PersonalDetailsSchema,
      ...BusinessDetailsSchema,
      service: { type: String, required: true },
      message: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export const Designing_Form_Model = Form_Connection.model(
  "Designing_Forms",
  FORM_Schema,
  "Designing_Forms"
);

export const Development_Form_Model = Form_Connection.model(
  "Development_Forms",
  FORM_Schema,
  "Development_Forms"
);

export const General_Form_Model = Form_Connection.model(
  "General_Forms",
  FORM_Schema,
  "General_Forms"
);
