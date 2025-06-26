import { FAQs } from "../- ReUseable/FAQs";

// ---------- DESIGNING ----------
export const Designing_FAQs = () => (
  <FAQs department="DESIGNING" category="designing" />
);

//#region BRAND Designing Services
export const FAQs_Of_Logo_Designing = () => (
  <FAQs department="DESIGNING" category="logo-designing" />
);

export const FAQs_Of_Business_Card_Designing = () => (
  <FAQs department="DESIGNING" category="business-card-designing" />
);
//#endregion

//#region CONTENT Designing Services
export const FAQs_Of_Social_Media_Designing = () => (
  <FAQs department="DESIGNING" category="social-media-designing" />
);
//#endregion

// ---------- DEVELOPMENT ----------
export const Development_FAQs = () => (
  <FAQs department="DEVELOPING" category="developing" />
);

//#region WEB Development Services
export const FAQs_Of_Ecommerce_Development = () => (
  <FAQs
    department="DEVELOPMENT"
    category="ecommerce-development"
    admin={false}
  />
);

export const FAQs_Of_Custom_Website_Development = () => (
  <FAQs
    department="DEVELOPMENT"
    category="custom-website-development"
    admin={false}
  />
);

//#endregion
