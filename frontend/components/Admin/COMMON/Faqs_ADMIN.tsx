import { FAQs } from "../../- ReUseable/FAQs";

// ---------- DESIGNING ----------

// export const ADMIN_Designing_FAQs = () => (
//   <FAQs department="DESIGNING" category="designing" admin={true} />
// );

//#region BRAND Designing Services
export const FAQs_Of_LD_ADMIN = () => (
  <FAQs department="DESIGNING" category="logo-designing" admin={true} />
);

export const FAQs_Of_BCD_ADMIN = () => (
  <FAQs
    department="DESIGNING"
    category="business-card-designing"
    admin={true}
  />
);

//#endregion

//#region CONTENT Designing Services
export const FAQs_Of_SMD_ADMIN = () => (
  <FAQs department="DESIGNING" category="social-media-designing" admin={true} />
);
//#endregion

// ---------- DEVELOPMENT ----------

// export const ADMIN_Development_FAQs = () => (
//   <FAQs department="DEVELOPMENT" category="development" admin={true} />
// );

//#region WEB Development Services
export const FAQs_Of_ED_ADMIN = () => (
  <FAQs
    department="DEVELOPMENT"
    category="ecommerce-development"
    admin={true}
  />
);

export const FAQs_Of_CWD_ADMIN = () => (
  <FAQs
    department="DEVELOPMENT"
    category="custom-website-development"
    admin={true}
  />
);

//#endregion
