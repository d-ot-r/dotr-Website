import { Request, Response } from "express";
import {
  Development_Form_Model,
  General_Form_Model,
} from "../../models/forms/FORM_Model";

// Submit General Form
export const submit_General_Form = async (req: Request, res: Response) => {
  try {
    const formData = await General_Form_Model.create(req.body);
    // console.log("🚀 Incoming form data:", req.body);
    res
      .status(201)
      .json({ success: true, message: "Form submitted!", data: formData });
  } catch (error) {
    console.error("❌ Error while saving logo form:", error);
    res.status(500).json({
      success: false,
      message: "Form submission failed.",
      error: (error as Error).message,
    });
  }
};
