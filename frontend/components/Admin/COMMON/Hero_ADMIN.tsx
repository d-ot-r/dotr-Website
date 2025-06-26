import { HERO } from "../../- ReUseable/HERO";

// ---------- DESIGNING ----------

export const ADMIN_Designing_HERO = () => (
  <HERO
    department="DESIGNING"
    category="designing"
    isPage={true}
    useLocalData={false}
    admin={true}
  />
);

//#region BRAND Designing Services

export const HERO_Of_LD_ADMIN = () => (
  <HERO
    department="DESIGNING"
    category="logo-designing"
    isPage={false}
    useLocalData={false}
    admin={true}
  />
);

export const HERO_Of_BCD_ADMIN = () => (
  <HERO
    department="DESIGNING"
    category="business-card-designing"
    isPage={false}
    useLocalData={false}
    admin={true}
  />
);

//#endregion

//#region CONTENT Designing Services

export const HERO_Of_SMD_ADMIN = () => (
  <HERO
    department="DESIGNING"
    category="social-media-designing"
    isPage={false}
    useLocalData={false}
    admin={true}
  />
);

//#endregion

// ---------- DEVELOPMENT ----------

export const ADMIN_Development_HERO = () => (
  <HERO
    department="DEVELOPMENT"
    category="development"
    isPage={true}
    useLocalData={false}
    admin={true}
  />
);

//#region WEB Development Services

export const HERO_Of_ED_ADMIN = () => (
  <HERO
    department="DEVELOPMENT"
    category="ecommerce-development"
    isPage={false}
    useLocalData={false}
    admin={true}
  />
);

export const HERO_Of_CWD_ADMIN = () => (
  <HERO
    department="DEVELOPMENT"
    category="custom-website-development"
    isPage={false}
    useLocalData={false}
    admin={true}
  />
);
//#endregion
