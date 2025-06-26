import { Schema } from "mongoose";
import { Form_Connection } from "../../config/Form_DB";

const Authentication_Form_Schema = new Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Authentication_Form_Model = Form_Connection.model(
  "Authentication_Form",
  Authentication_Form_Schema,
  "Authentication_Forms"
);
