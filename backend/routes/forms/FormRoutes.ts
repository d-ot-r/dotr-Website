import express from "express";
import {
  submit_Designing_Form,
  submit_Logo_Form,
} from "../../controllers/forms/Designing_Forms_Controller";
import {
  delete_Custom_Website_Form,
  delete_Ecommerce_Form,
  // generateWebsitefromForm,
  get_All_Custom_Website_Forms,
  get_All_Ecommerce_Forms,
  submit_Custom_Website_Form,
  submit_Development_Form,
  submit_Ecommerce_Form,
  update_Custom_Website_Form,
  update_Ecommerce_Form,
} from "../../controllers/forms/Development_Forms_Controller";
import { submit_General_Form } from "../../controllers/forms/General_Forms_Controller";
import { authenticate_User } from "../../controllers/forms/Authentication_FORMs_Controller";
// import { submit_Admin_SignIn_Form } from "../../controllers/forms/Authentication_FORMs_Controller";

const router = express.Router();

router.post("/sign-in/submit", async (req, res, next) => {
  try {
    await authenticate_User(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.post("/general/submit", submit_General_Form);

//#region DESIGNING
router.post("/designing/submit", submit_Designing_Form);

//#region BRAND Designing Services
router.post("/logo-designing/submit", submit_Logo_Form);
//#endregion

// #endregion

//#region DEVELOPMENT
router.post("/development/submit", submit_Development_Form);

// #region WEB Development Services
router.post("/custom-website-development/submit", submit_Custom_Website_Form);
router.get("/:category/all", get_All_Custom_Website_Forms);
router.put(
  "/custom-website-development/update/:id",
  update_Custom_Website_Form
);
router.delete(
  "/custom-website-development/delete/:id",
  delete_Custom_Website_Form
);
// router.post("/generate/website", generateWebsitefromForm);

router.post("/ecommerce-development/submit", submit_Ecommerce_Form);
router.get("/:category/all", get_All_Ecommerce_Forms);
router.put("/ecommerce-development/update/:id", update_Ecommerce_Form);
router.delete("/ecommerce-development/delete/:id", delete_Ecommerce_Form);

// #endregion

// #endregion

export default router;
