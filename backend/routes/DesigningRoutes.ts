// routes/designing/designingRoutes.ts
import express from "express";
import {
  get_Designing_FAQs_By_Category,
  get_Designing_Hero_By_Category,
  get_Designing_Offerings_By_Category,
  get_Designing_Importance_By_Category,
  get_Designing_WhyDOTR_By_Category,
  get_All_Designing_Services,
  get_All_Designing_Projects,
  get_Designing_Projects_By_Category,
  get_Designing_Services_By_Group,
} from "../controllers/DesigningController";

const router = express.Router();

router.get("/faqs/:category", get_Designing_FAQs_By_Category);

router.get("/hero/:category", get_Designing_Hero_By_Category);

router.get("/offerings/:category", get_Designing_Offerings_By_Category);

router.get("/projects/:group/all", get_All_Designing_Projects);
router.get("/projects/:group/:category", get_Designing_Projects_By_Category);

router.get("/services/all", get_All_Designing_Services);
router.get("/services/:group", get_Designing_Services_By_Group);

router.get("/importance/:category", get_Designing_Importance_By_Category);

router.get("/why-dotr/:category", get_Designing_WhyDOTR_By_Category);

export default router;
