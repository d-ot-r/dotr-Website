import { Request, Response } from "express";
import { Designing_Form_Model } from "../../models/forms/FORM_Model";
import { Logo_Form_Model } from "../../models/forms/designing/LogoFormModel";

// Submit Designing Form
export const submit_Designing_Form = async (req: Request, res: Response) => {
  try {
    const formData = await Designing_Form_Model.create(req.body);
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

//#region BRAND Designing Services
export const submit_Logo_Form = async (req: Request, res: Response) => {
  try {
    const formData = await Logo_Form_Model.create(req.body);
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
//#endregion
