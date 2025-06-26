import { IMPORTANCE } from "../../- ReUseable/IMPORTANCE";

// ---------- DESIGNING ----------

//#region BRAND Designing Services
export const IMPORTANCE_Of_LD_ADMIN = () => (
  <IMPORTANCE department="DESIGNING" category="logo-designing" admin={true} />
);
export const IMPORTANCE_Of_BCD_ADMIN = () => (
  <IMPORTANCE
    department="DESIGNING"
    category="business-card-designing"
    admin={true}
  />
);
//#endregion

//#region CONTENT Designing Services
export const IMPORTANCE_Of_SMD_ADMIN = () => (
  <IMPORTANCE
    department="DESIGNING"
    category="social-media-designing"
    admin={true}
  />
);
//#endregion

// ---------- DEVELOPMENT ----------

//#region WEB Development Services
export const IMPORTANCE_Of_ED_ADMIN = () => (
  <IMPORTANCE
    department="DEVELOPMENT"
    category="ecommerce-development"
    admin={true}
  />
);

export const IMPORTANCE_Of_CWD_ADMIN = () => (
  <IMPORTANCE
    department="DEVELOPMENT"
    category="custom-website-development"
    admin={true}
  />
);

//#endregion
