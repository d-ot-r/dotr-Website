import { Schema } from "mongoose";
import { Form_Connection } from "../../../config/Form_DB";
import {
  PersonalDetailsSchema,
  BusinessDetailsSchema,
  StyleDetailsSchema,
} from "../Form_FIELDs";

const FORM_Schema = new Schema(
  {
    category: { type: String, required: true },
    clientName: { type: String },
    company: { type: String },
    details: {
      ...PersonalDetailsSchema,
      ...BusinessDetailsSchema,
      reference: { type: String },
      pages: { type: [String], required: true },
      ...StyleDetailsSchema,
      message: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

FORM_Schema.pre("save", function (next) {
  this.clientName = this.details?.clientName;
  this.company = this.details?.company;
  next();
});

export const Custom_Website_FORM_Model = Form_Connection.model(
  "WEB_Development_Forms",
  FORM_Schema,
  "WEB_Development_Forms"
);
