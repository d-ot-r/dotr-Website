// routes/Development/DevelopmentRoutes.ts
import express from "express";
import { Request, Response } from "express";

import {
  get_Development_FAQs_By_Category,
  get_Development_Hero_By_Category,
  get_Development_Offerings_By_Category,
  get_Development_Importance_By_Category,
  get_Development_WhyDOTR_By_Category,
  get_All_Development_Services,
  get_All_Development_Projects,
  get_Development_Projects_By_Category,
  get_Development_Services_By_Group,
  add_Development_Offerings,
  update_Development_Offerings_By_ID,
  delete_Development_Offerings_By_ID,
  add_Development_FAQs,
  update_Development_FAQs_By_ID,
  delete_Development_FAQs_By_ID,
  add_Development_HERO,
  update_Development_HERO_By_ID,
  delete_Development_HERO_By_ID,
  add_Development_Importance,
  update_Development_Importance_By_ID,
  delete_Development_Importance_By_ID,
  add_Development_WhyDOTR,
  delete_Development_WhyDOTR_By_ID,
  update_Development_WhyDOTR_By_ID,
  add_Development_Services,
  delete_Development_Services_By_ID,
  update_Development_Services_By_ID,
} from "../controllers/DevelopmentController";

const router = express.Router();

// #region FAQs
router.get("/faqs/:category", get_Development_FAQs_By_Category);
router.post("/faqs/add", async (req, res, next) => {
  try {
    await add_Development_FAQs(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.put("/faqs/:category/update/:faqId", async (req, res, next) => {
  try {
    await update_Development_FAQs_By_ID(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.delete("/faqs/:category/delete/:faqId", async (req, res, next) => {
  try {
    await delete_Development_FAQs_By_ID(req, res, next);
  } catch (error) {
    next(error);
  }
});
// #endregion

// #region HERO
router.get("/hero/:category", get_Development_Hero_By_Category);
router.post("/hero/:category/add", async (req, res, next) => {
  try {
    await add_Development_HERO(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.put("/hero/:category/update/:heroId", async (req, res, next) => {
  try {
    await update_Development_HERO_By_ID(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.delete("/hero/:category/delete/:heroId", async (req, res, next) => {
  try {
    await delete_Development_HERO_By_ID(req, res, next);
  } catch (error) {
    next(error);
  }
});
// #endregion

// #region OFFERINGs
router.get("/offerings/:category", get_Development_Offerings_By_Category);
router.post("/offerings/add", async (req, res, next) => {
  try {
    await add_Development_Offerings(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.put(
  "/offerings/:category/update/:offeringId",
  async (req, res, next) => {
    try {
      await update_Development_Offerings_By_ID(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/offerings/:category/delete/:offeringId",
  async (req, res, next) => {
    try {
      await delete_Development_Offerings_By_ID(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);
// #endregion

// #region IMPORTANCE
router.get("/importance/:category", get_Development_Importance_By_Category);
router.post("/importance/:category/add", async (req, res, next) => {
  try {
    await add_Development_Importance(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.put(
  "/importance/:category/update/:importanceId",
  async (req, res, next) => {
    try {
      await update_Development_Importance_By_ID(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/importance/:category/delete/:importanceId",
  async (req, res, next) => {
    try {
      await delete_Development_Importance_By_ID(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);
// #endregion

router.get("/projects/:group/all", get_All_Development_Projects);
router.get("/projects/:group/:category", get_Development_Projects_By_Category);

// #region Services
router.get("/services/all", get_All_Development_Services);
router.get("/services/:group", get_Development_Services_By_Group);
router.post("/services/add", async (req, res, next) => {
  try {
    await add_Development_Services(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.put("/services/:group/update/:serviceId", async (req, res, next) => {
  try {
    await update_Development_Services_By_ID(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.delete("/services/:group/delete/:serviceId", async (req, res, next) => {
  try {
    await delete_Development_Services_By_ID(req, res, next);
  } catch (error) {
    next(error);
  }
});
// #endregion

// #region Why DOTR
router.get("/why-dotr/:category", get_Development_WhyDOTR_By_Category);
router.post("/why-dotr/add", async (req, res, next) => {
  try {
    await add_Development_WhyDOTR(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.put("/why-dotr/:category/update/:whyDOTRId", async (req, res, next) => {
  try {
    await update_Development_WhyDOTR_By_ID(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.delete(
  "/why-dotr/:category/delete/:whyDOTRId",
  async (req, res, next) => {
    try {
      await delete_Development_WhyDOTR_By_ID(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

// #endregion

export default router;
