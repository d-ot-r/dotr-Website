import { NextFunction, Request, Response } from "express";
import { FAQs_Of_Designing_Model } from "../models/FAQs_Of_Services_Model";
import { HERO_Of_Designing } from "../models/HERO_Of_Services_Model";
import { IMPORTANCE_Of_Designing_Model } from "../models/IMPORTANCE_Of_Services_Model";
import { Designing_Services_Model } from "../models/SERVICEs_Of_Departments";
import { Why_DOTR_For_Designing } from "../models/Why_DOTR_For_Services_Model";
import { PROJECTs_Of_Designing } from "../models/PROJECTs_Of_Services_Model";
import { OFFERINGs_Of_Designing_Model } from "../models/OFFERINGs_Of_Services_Model";

//#region FAQs
export const get_Designing_FAQs_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const services = await FAQs_Of_Designing_Model.find({ category: category }); // Fetch all services from DB
    res.status(200).json(services); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};
//#endregion

//#region Hero
export const get_Designing_Hero_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const hero = await HERO_Of_Designing.find({ category: category }); // Fetch all services from DB
    res.status(200).json(hero); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

//#endregion

//#region Importance
export const get_Designing_Importance_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const importance = await IMPORTANCE_Of_Designing_Model.find({
      category: category,
    });
    res.status(200).json(importance);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch importance by category" });
  }
};

//#endregion

//#region Offerings
export const get_Designing_Offerings_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const offerings = await OFFERINGs_Of_Designing_Model.find({
      category: category,
    });
    res.status(200).json(offerings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch offerings by category" });
  }
};

export const add_Designing_Offerings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, offerings } = req.body;

    if (!category || !Array.isArray(offerings)) {
      return res
        .status(400)
        .json({ message: "Missing category or offerings array." });
    }

    const categoryDoc = await OFFERINGs_Of_Designing_Model.findOne({
      category,
    });

    if (categoryDoc) {
      // Filter out duplicates
      const newOfferings = offerings.filter((offering: any) => {
        return !categoryDoc.offerings.some(
          (existing: any) => existing.id === offering.id
        );
      });

      if (newOfferings.length === 0) {
        return res
          .status(409)
          .json({ message: "All offerings already exist in this category." });
      }

      categoryDoc.offerings.push(...newOfferings);
      const updatedDoc = await categoryDoc.save();

      return res.status(200).json({
        message: "New offerings added to existing category.",
        addedCount: newOfferings.length,
        updatedDoc,
      });
    } else {
      // Create new category with all offerings
      const newCategory = new OFFERINGs_Of_Designing_Model({
        category,
        offerings,
      });

      await newCategory.save();

      return res
        .status(201)
        .json({ message: "New category created with offerings." });
    }
  } catch (error) {
    console.error("Error adding offerings:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

export const update_Designing_Offering_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, offeringId } = req.params;
    const { title, tagline, description, icon } = req.body;

    if (!category || !offeringId) {
      return res
        .status(400)
        .json({ message: "Missing category or offeringId." });
    }

    const result = await OFFERINGs_Of_Designing_Model.findOneAndUpdate(
      { category, "offerings._id": offeringId },
      {
        $set: {
          "offerings.$.title": title,
          "offerings.$.tagline": tagline,
          "offerings.$.description": description,
          "offerings.$.icon": icon,
        },
      },
      { new: true }
    );

    if (!result) {
      return res
        .status(404)
        .json({ message: "Offering or category not found." });
    }

    const updatedOffering = result.offerings.find(
      (offering) => (offering as any)._id.toString() === offeringId
    );

    return res.status(200).json(updatedOffering);
  } catch (error) {
    console.error("Error updating offering:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const delete_Designing_Offerings_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, offeringId } = req.params;

    if (!category || !offeringId) {
      return res
        .status(400)
        .json({ message: "Add category and offeringId..." });
    }

    // Check if category exists
    const categoryDoc = await OFFERINGs_Of_Designing_Model.findOne({
      category,
    });

    if (!categoryDoc) {
      return res.status(404).json({ message: "Category not found..." });
    }

    // Check if offering with _id exists in the category
    const offeringExists = categoryDoc.offerings.some(
      (offering: any) => offering._id.toString() === offeringId
    );

    if (!offeringExists) {
      return res
        .status(404)
        .json({ message: "Offering not found in category." });
    }

    const updatedDoc = await OFFERINGs_Of_Designing_Model.findOneAndUpdate(
      { category },
      { $pull: { offerings: { _id: offeringId } } },
      { new: true }
    );

    if (!updatedDoc) {
      return res
        .status(404)
        .json({ message: "Category or offering not found." });
    }

    return res.status(200).json({
      message: "Offering deleted from category.",
      updatedDoc,
    });
  } catch (error) {
    console.error("Error deleting offering:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

//#endregion

//#region Portfolio
export const get_All_Designing_Projects = async (
  req: Request,
  res: Response
) => {
  try {
    const { group } = req.params;
    const designing_projects = await PROJECTs_Of_Designing.find({
      group: group,
    }); // Fetch all services from DB
    res.status(200).json(designing_projects); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};
export const get_Designing_Projects_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { group } = req.params;
    const { category } = req.params;
    const designing_projects = await PROJECTs_Of_Designing.find({
      group: group,
      category: category,
    }); // Fetch all services from DB
    res.status(200).json(designing_projects); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

//#endregion

//#region Services
export const get_All_Designing_Services = async (
  req: Request,
  res: Response
) => {
  try {
    const services = await Designing_Services_Model.find(); // Fetch all services from DB
    res.status(200).json(services); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

// Get services by category
export const get_Designing_Services_By_Group = async (
  req: Request,
  res: Response
) => {
  try {
    const { group } = req.params;
    const services = await Designing_Services_Model.findOne({
      group: group,
    });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services by category" });
  }
};
//#endregion

//#region Why-DOTR
export const get_Designing_WhyDOTR_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const services = await Why_DOTR_For_Designing.find({
      category: category,
    }); // Fetch all services from DB
    res.status(200).json(services); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

//#endregion
