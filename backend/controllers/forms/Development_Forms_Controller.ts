import { Request, Response } from "express";
import { Development_Form_Model } from "../../models/forms/FORM_Model";
import { Custom_Website_FORM_Model } from "../../models/forms/development/Custom_Website_FORM_Model";
import { openai } from "../../utils/openaiClient";
import { Ecommerce_FORM_Model } from "../../models/forms/development/Ecommerce_FORM_Model";

// Submit Development Form
export const submit_Development_Form = async (req: Request, res: Response) => {
  try {
    const formData = await Development_Form_Model.create(req.body);
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

//#region WEB Development Services

//#region Custom Website Development FORM
export const submit_Custom_Website_Form = async (
  req: Request,
  res: Response
) => {
  try {
    const formData = await Custom_Website_FORM_Model.create(req.body);
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

export const get_All_Custom_Website_Forms = async (
  req: Request,
  res: Response
) => {
  try {
    const category = req.params.category;
    const forms = await Custom_Website_FORM_Model.find({ category: category });
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    console.error("❌ Error while fetching forms:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching forms.",
      error: (error as Error).message,
    });
  }
};

export const update_Custom_Website_Form = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    const updatedForm = await Custom_Website_FORM_Model.findByIdAndUpdate(
      id,
      { details: updatedDetails }, // assumes whole `details` object is replaced
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedForm });
  } catch (error) {
    console.error("❌ Error while updating form:", error);
    res.status(500).json({
      success: false,
      message: "Error updating form.",
      error: (error as Error).message,
    });
  }
};

export const delete_Custom_Website_Form = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    await Custom_Website_FORM_Model.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Form deleted!" });
  } catch (error) {
    console.error("❌ Error while deleting form:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting form.",
      error: (error as Error).message,
    });
  }
};

// export const generateWebsitefromForm = async (req: Request, res: Response) => {
//   const form = req.body.details;

//   const prompt = `
// You are a website developer.

// Generate a responsive homepage in HTML5 + TailwindCSS using this info:

// - Name: ${form.firstname} ${form.lastname}
// - Company: ${form.company}
// - Tagline: ${form.tagline}
// - Industry: ${form.industry}
// - Niche: ${form.niche}
// - Location: ${form.location}
// - Reference: ${form.reference}
// - Pages: ${form.pages.join(", ")}
// - Font Style: ${form.font}
// - Colors: ${form.colors.join(", ")}
// - Custom Message: ${form.message || "None"}

// Generate:
// 1. Page title, header
// 2. An About section
// 3. A Services grid
// 4. Contact section

// Structure the output as full HTML with Tailwind CSS classes only.
// `;

//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//     });

//     const html = response.choices[0].message?.content;
//     res.status(200).json({ success: true, html });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: "OpenAI request failed." });
//   }
// };

//#endregion

//#region Custom Ecommerce Development FORM
export const submit_Ecommerce_Form = async (req: Request, res: Response) => {
  try {
    const formData = await Ecommerce_FORM_Model.create(req.body);
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

export const get_All_Ecommerce_Forms = async (req: Request, res: Response) => {
  try {
    const category = req.params.category;
    const forms = await Ecommerce_FORM_Model.find({ category: category });
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    console.error("❌ Error while fetching forms:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching forms.",
      error: (error as Error).message,
    });
  }
};

export const update_Ecommerce_Form = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    const updatedForm = await Ecommerce_FORM_Model.findByIdAndUpdate(
      id,
      { details: updatedDetails }, // assumes whole `details` object is replaced
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedForm });
  } catch (error) {
    console.error("❌ Error while updating form:", error);
    res.status(500).json({
      success: false,
      message: "Error updating form.",
      error: (error as Error).message,
    });
  }
};

export const delete_Ecommerce_Form = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Ecommerce_FORM_Model.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Form deleted!" });
  } catch (error) {
    console.error("❌ Error while deleting form:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting form.",
      error: (error as Error).message,
    });
  }
};

//#endregion

//#endregion
