import { NextFunction, Request, Response } from "express";
import { FAQs_Of_Development_Model } from "../models/FAQs_Of_Services_Model";
import { HERO_Of_Development } from "../models/HERO_Of_Services_Model";
import { IMPORTANCE_Of_Development_Model } from "../models/IMPORTANCE_Of_Services_Model";
import { OFFERINGs_Of_Development_Model } from "../models/OFFERINGs_Of_Services_Model";
import { Development_Services_Model } from "../models/SERVICEs_Of_Departments";
import { Why_DOTR_For_Development } from "../models/Why_DOTR_For_Services_Model";
import { PROJECTs_Of_Development } from "../models/PROJECTs_Of_Services_Model";

//#region FAQs
export const get_Development_FAQs_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const services = await FAQs_Of_Development_Model.find({
      category: category,
    }); // Fetch all services from DB
    res.status(200).json(services); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

export const add_Development_FAQs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, faqs } = req.body;

    if (!category || !Array.isArray(faqs)) {
      return res
        .status(400)
        .json({ message: "Missing category or faqs array." });
    }

    const categoryDoc = await FAQs_Of_Development_Model.findOne({
      category,
    });

    if (categoryDoc) {
      // Filter out duplicates
      const newFaqs = faqs.filter((offering: any) => {
        return !categoryDoc.faqs.some(
          (existing: any) => existing.id === offering.id
        );
      });

      if (newFaqs.length === 0) {
        return res
          .status(409)
          .json({ message: "All faqs already exist in this category." });
      }

      categoryDoc.faqs.push(...newFaqs);
      const updatedDoc = await categoryDoc.save();

      return res.status(200).json({
        message: "New faqs added to existing category.",
        addedCount: newFaqs.length,
        updatedDoc,
      });
    } else {
      // Create new category with all faqs
      const newCategory = new FAQs_Of_Development_Model({
        category,
        faqs,
      });

      await newCategory.save();

      return res
        .status(201)
        .json({ message: "New category created with faqs." });
    }
  } catch (error) {
    console.error("Error adding faqs:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

export const update_Development_FAQs_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, faqId } = req.params;
    const {
      id,
      title,
      description,
      ctaText,
      ctaLink,
      icon,
      intro,
      points,
      outro,
    } = req.body;

    if (!category || !faqId) {
      return res.status(400).json({ message: "Missing category or faqId." });
    }

    const result = await FAQs_Of_Development_Model.findOneAndUpdate(
      { category, "faqs._id": faqId },
      {
        $set: {
          "faqs.$.id": id,
          "faqs.$.title": title,
          "faqs.$.description": description,
          "faqs.$.ctaText": ctaText,
          "faqs.$.ctaLink": ctaLink,
          "faqs.$.icon": icon,
          "faqs.$.intro": intro,
          "faqs.$.points": points,
          "faqs.$.outro": outro,
        },
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: "faq or category not found." });
    }

    const updatedfaq = result.faqs.find(
      (faq) => (faq as any)._id.toString() === faqId
    );

    return res.status(200).json(updatedfaq);
  } catch (error) {
    console.error("Error updating faq:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const delete_Development_FAQs_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, faqId } = req.params;

    if (!category || !faqId) {
      return res.status(400).json({ message: "Add category and faqId..." });
    }

    // Check if category exists
    const categoryDoc = await FAQs_Of_Development_Model.findOne({
      category,
    });

    if (!categoryDoc) {
      return res.status(404).json({ message: "Category not found..." });
    }

    // Check if faq with _id exists in the category
    const faqExists = categoryDoc.faqs.some(
      (faq: any) => faq._id.toString() === faqId
    );

    if (!faqExists) {
      return res.status(404).json({ message: "faq not found in category." });
    }

    const updatedDoc = await FAQs_Of_Development_Model.findOneAndUpdate(
      { category },
      { $pull: { faqs: { _id: faqId } } },
      { new: true }
    );

    if (!updatedDoc) {
      return res.status(404).json({ message: "Category or faq not found." });
    }

    return res.status(200).json({
      message: "faq deleted from category.",
      updatedDoc,
    });
  } catch (error) {
    console.error("Error deleting faq:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

//#endregion

//#region Hero
export const get_Development_Hero_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const hero = await HERO_Of_Development.find({ category: category }); // Fetch all services from DB
    res.status(200).json(hero); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

export const add_Development_HERO = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, title, tagline, description, image } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Missing category." });
    }

    const existingHero = await HERO_Of_Development.findOne({ category });

    if (existingHero) {
      return res
        .status(409)
        .json({ message: "Hero already exists for this category." });
    }

    if (!title || !tagline || !description || !image) {
      return res.status(400).json({ message: "Missing category or hero." });
    }

    const newHero = new HERO_Of_Development({
      category,
      title,
      tagline,
      description,
      image,
    });

    const savedHero = await newHero.save();
    res.status(201).json(savedHero);
  } catch (error) {
    console.error("Error adding hero:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const update_Development_HERO_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, heroId } = req.params;
    const updates = req.body;

    if (!category || !heroId) {
      return res.status(400).json({ message: "Missing category or heroId." });
    }

    const updatedHero = await HERO_Of_Development.findByIdAndUpdate(
      heroId,
      updates,
      { new: true }
    );

    if (!updatedHero) {
      return res.status(404).json({ message: "hero or category not found." });
    }

    return res.status(200).json(updatedHero);
  } catch (error) {
    console.error("Error updating hero:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const delete_Development_HERO_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, heroId } = req.params;

    if (!category || !heroId) {
      return res.status(400).json({ message: "Add category and heroId..." });
    }

    // Check if category exists
    const categoryDoc = await HERO_Of_Development.findOne({ category });

    if (!categoryDoc) {
      return res.status(404).json({ message: "Category not found..." });
    }

    const deleteHero = await HERO_Of_Development.findByIdAndDelete(heroId);

    if (!deleteHero) {
      return res.status(404).json({ message: "hero not found in category." });
    }
    return res.status(200).json({
      message: "hero deleted from category.",
      deleteHero,
    });
  } catch (error) {
    console.error("Error deleting hero:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

//#endregion

//#region Importance
export const get_Development_Importance_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const importance = await IMPORTANCE_Of_Development_Model.find({
      category: category,
    });
    res.status(200).json(importance);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch importance by category" });
  }
};

export const add_Development_Importance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      category,
      heading,
      subheading,
      paragraphs,
      featureheading,
      features,
    } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Missing category." });
    }

    const existingImportance = await IMPORTANCE_Of_Development_Model.findOne({
      category,
    });

    if (existingImportance) {
      return res
        .status(409)
        .json({ message: "Importance already exists for this category." });
    }

    // if (
    //   !category ||
    //   !heading ||
    //   !subheading ||
    //   !paragraphs ||
    //   !featureheading ||
    //   !features
    // ) {
    //   return res.status(400).json({ message: "Missing or invalid fields." });
    // }

    const newImportance = new IMPORTANCE_Of_Development_Model({
      category,
      heading,
      subheading,
      paragraphs,
      featureheading,
      features,
    });

    const savedImportance = await newImportance.save();
    res.status(201).json(savedImportance);
  } catch (error) {
    console.error("Error adding importance:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const update_Development_Importance_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, importanceId } = req.params;
    const updates = req.body;

    if (!category || !importanceId) {
      return res
        .status(400)
        .json({ message: "Missing category or importanceId." });
    }

    const updatedImportance =
      await IMPORTANCE_Of_Development_Model.findByIdAndUpdate(
        importanceId,
        updates,
        { new: true }
      );

    if (!updatedImportance) {
      return res
        .status(404)
        .json({ message: "Importance or category not found." });
    }

    return res.status(200).json({
      message: "Importance updated successfully.",
      data: updatedImportance,
    });
  } catch (error) {
    console.error("Error updating importance:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const delete_Development_Importance_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, importanceId } = req.params;

    if (!category || !importanceId) {
      return res
        .status(400)
        .json({ message: "Add category and importanceId..." });
    }

    const importanceDoc = await IMPORTANCE_Of_Development_Model.findById(
      importanceId
    );

    if (!importanceDoc || importanceDoc.category !== category) {
      return res
        .status(404)
        .json({ message: "Importance not found for this category." });
    }

    const deleteImportance =
      await IMPORTANCE_Of_Development_Model.findByIdAndDelete(importanceId);

    if (!deleteImportance) {
      return res
        .status(404)
        .json({ message: "Importance not found in category." });
    }
    return res.status(200).json({
      message: "Importance deleted from category.",
      deleteImportance,
    });
  } catch (error) {
    console.error("Error deleting importance:", error);
    res.status(500).json({ message: "Server error." });
  }
};

//#endregion

//#region Offerings
export const get_Development_Offerings_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const offerings = await OFFERINGs_Of_Development_Model.find({
      category: category,
    });
    res.status(200).json(offerings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch offerings by category" });
  }
};

export const add_Development_Offerings = async (
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

    const categoryDoc = await OFFERINGs_Of_Development_Model.findOne({
      category,
    });

    if (categoryDoc) {
      // Filter out duplicates
      const newOfferings = offerings.filter((offering: any) => {
        return !categoryDoc.offerings.some(
          (existing: any) => existing.title === offering.title
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
      const newCategory = new OFFERINGs_Of_Development_Model({
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

export const update_Development_Offerings_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, offeringId } = req.params;
    const { id, title, tagline, description, icon } = req.body;

    if (!category || !offeringId) {
      return res
        .status(400)
        .json({ message: "Missing category or offeringId." });
    }

    const result = await OFFERINGs_Of_Development_Model.findOneAndUpdate(
      { category, "offerings._id": offeringId },
      {
        $set: {
          "offerings.$.id": id,
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

export const delete_Development_Offerings_By_ID = async (
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
    const categoryDoc = await OFFERINGs_Of_Development_Model.findOne({
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

    const updatedDoc = await OFFERINGs_Of_Development_Model.findOneAndUpdate(
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
export const get_All_Development_Projects = async (
  req: Request,
  res: Response
) => {
  try {
    const { group } = req.params;
    const development_projects = await PROJECTs_Of_Development.find({
      group: group,
    }); // Fetch all services from DB
    res.status(200).json(development_projects); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};
export const get_Development_Projects_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { group } = req.params;
    const { category } = req.params;
    const development_projects = await PROJECTs_Of_Development.find({
      group: group,
      category: category,
    }); // Fetch all services from DB
    res.status(200).json(development_projects); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

//#endregion

//#region Services
export const get_All_Development_Services = async (
  req: Request,
  res: Response
) => {
  try {
    const services = await Development_Services_Model.find(); // Fetch all services from DB
    res.status(200).json(services); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

export const get_Development_Services_By_Group = async (
  req: Request,
  res: Response
) => {
  try {
    const { group } = req.params;
    const services = await Development_Services_Model.findOne({
      group: group,
    });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services by group" });
  }
};

export const add_Development_Services = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { group, services } = req.body;

    if (!group || !Array.isArray(services)) {
      return res
        .status(400)
        .json({ message: "Missing group or services array." });
    }

    const groupDoc = await Development_Services_Model.findOne({
      group,
    });

    if (groupDoc) {
      // Filter out duplicates
      const newServices = services.filter((offering: any) => {
        return !groupDoc.services.some(
          (existing: any) => existing.title === offering.title
        );
      });

      if (newServices.length === 0) {
        return res
          .status(409)
          .json({ message: "All services already exist in this group." });
      }

      groupDoc.services.push(...newServices);
      const updatedDoc = await groupDoc.save();

      return res.status(200).json({
        message: "New services added to existing group.",
        addedCount: newServices.length,
        updatedDoc,
      });
    } else {
      // Create new group with all services
      const newGroup = new Development_Services_Model({
        group,
        services,
      });

      await newGroup.save();

      return res
        .status(201)
        .json({ message: "New group created with services." });
    }
  } catch (error) {
    console.error("Error adding services:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

export const update_Development_Services_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { group, serviceId } = req.params;
    const { id, title, description, image, icons, link } = req.body;

    if (!group || !serviceId) {
      return res.status(400).json({ message: "Missing group or serviceId." });
    }

    const result = await Development_Services_Model.findOneAndUpdate(
      { group, "services._id": serviceId },
      {
        $set: {
          "services.$.id": id,
          "services.$.title": title,
          "services.$.description": description,
          "services.$.image": image,
          "services.$.icons": icons,
          "services.$.link": link,
        },
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: "service or group not found." });
    }

    const updatedService = result.services.find(
      (service) => (service as any)._id.toString() === serviceId
    );

    return res.status(200).json(updatedService);
  } catch (error) {
    console.error("Error updating service:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const delete_Development_Services_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { group, serviceId } = req.params;
    if (!group || !serviceId) {
      return res
        .status(400)
        .json({ message: "Missing group or serviceId.", group, serviceId });
    }

    const deleteService = await Development_Services_Model.findOneAndUpdate(
      { group },
      { $pull: { services: { _id: serviceId } } },
      { new: true }
    );

    if (!deleteService) {
      return res
        .status(404)
        .json({ message: "Service is not Deleted from group." });
    }

    return res.status(200).json({
      message: "Service deleted successfully.",
      data: deleteService,
    });
  } catch (error) {
    console.error("Error deleting Service:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

//#endregion

//#region Why-DOTR
export const get_Development_WhyDOTR_By_Category = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const services = await Why_DOTR_For_Development.find({
      category: category,
    }); // Fetch all services from DB
    res.status(200).json(services); // Send the services as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services." });
  }
};

export const add_Development_WhyDOTR = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, reasons } = req.body;

    if (!category || !Array.isArray(reasons)) {
      return res
        .status(400)
        .json({ message: "Missing category or reasons array." });
    }

    const categoryDoc = await Why_DOTR_For_Development.findOne({
      category,
    });

    if (categoryDoc) {
      // Filter out duplicates
      const newWhyDOTR = reasons.filter((offering: any) => {
        return !categoryDoc.reasons.some(
          (existing: any) => existing.id === offering.id
        );
      });

      if (newWhyDOTR.length === 0) {
        return res.status(409).json({
          message: "All reasons already exist in this category.",
          reasons: categoryDoc.reasons,
        });
      }

      // const exists = await Why_DOTR_For_Development.findOne({
      //   category,
      //   "reasons.id": req.body.id,
      //   _id: { $ne: req.params.id },
      // });
      // if (exists) {
      //   return res.status(400).json({ error: "Duplicate ID in this category" });
      // }

      categoryDoc.reasons.push(...newWhyDOTR);
      const updatedDoc = await categoryDoc.save();

      return res.status(200).json({
        message: "New reasons added to existing category.",
        addedCount: newWhyDOTR.length,
        updatedDoc,
      });
    } else {
      // Create new category with all reasons
      const newCategory = new Why_DOTR_For_Development({
        category,
        reasons,
      });

      await newCategory.save();

      return res
        .status(201)
        .json({ message: "New category created with reasons.", newCategory });
    }
  } catch (error) {
    console.error("Error adding reasons:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

export const update_Development_WhyDOTR_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, whyDOTRId } = req.params;
    const { id, title, description, bgColor } = req.body;

    if (!category || !whyDOTRId) {
      return res.status(400).json({ message: "Missing category or id." });
    }

    const updatedDoc = await Why_DOTR_For_Development.findOneAndUpdate(
      {
        category,
        "reasons._id": whyDOTRId,
      },
      {
        $set: {
          "reasons.$.id": id,
          "reasons.$.title": title,
          "reasons.$.description": description,
          "reasons.$.bgColor": bgColor,
        },
      },
      { new: true }
    );

    if (!updatedDoc) {
      return res.status(404).json({ message: "Category or reason not found." });
    }

    res.status(200).json({
      message: "Reason updated successfully",
      data: updatedDoc,
    });
  } catch (error) {
    console.error("Error updating reason:", error);
    res.status(500).json({ message: "Error updating reason." });
  }
};

export const delete_Development_WhyDOTR_By_ID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, whyDOTRId } = req.params;

    if (!category || !whyDOTRId) {
      return res.status(400).json({ message: "Add category and whyDOTRId..." });
    }

    // Check if category exists
    const categoryDoc = await Why_DOTR_For_Development.findOne({
      category,
    });

    if (!categoryDoc) {
      return res.status(404).json({ message: "Category not found..." });
    }

    // Check if whyDotr with _id exists in the category
    const whyDotrExists = categoryDoc.reasons.some(
      (reason: any) => reason._id.toString() === whyDOTRId
    );

    if (!whyDotrExists) {
      return res
        .status(404)
        .json({ message: "whyDotr not found in category." });
    }

    const updatedDoc = await Why_DOTR_For_Development.findOneAndUpdate(
      { category },
      { $pull: { reasons: { _id: whyDOTRId } } },
      { new: true }
    );

    if (!updatedDoc) {
      return res
        .status(404)
        .json({ message: "Category or whyDotr not found." });
    }

    return res.status(200).json({
      message: "whyDotr deleted from category.",
      updatedDoc,
    });
  } catch (error) {
    console.error("Error deleting whyDotr:", error);
    res.status(500).json({ message: "Server error." });
    next(error);
  }
};

//#endregion
