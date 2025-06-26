import { HERO } from "../- ReUseable/HERO";

// ---------- DESIGNING ----------
export const Designing_HERO = () => (
  <HERO
    department="DESIGNING"
    category="designing"
    isPage={true}
    useLocalData={false}
    admin={false}
  />
);

//#region BRAND Designing Services
export const HERO_Of_Logo_Designing = () => (
  <HERO
    department="DESIGNING"
    category="logo-designing"
    isPage={false}
    useLocalData={false}
    admin={false}
  />
);

export const HERO_Of_Business_Card_Designing = () => (
  <HERO
    department="DESIGNING"
    category="business-card-designing"
    isPage={false}
    useLocalData={false}
    admin={false}
  />
);
//#endregion

//#region CONTENT Designing Services
export const HERO_Of_Social_Media_Designing = () => (
  <HERO
    department="DESIGNING"
    category="social-media-designing"
    isPage={false}
    useLocalData={false}
    admin={false}
  />
);
//#endregion

// ---------- DEVELOPMENT ----------
export const Development_HERO = () => (
  <HERO
    department="DEVELOPMENT"
    category="development"
    isPage={true}
    useLocalData={false}
    admin={false}
  />
);

//#region WEB Development Services

export const HERO_Of_Ecommerce_Development = () => (
  <HERO
    department="DEVELOPMENT"
    category="ecommerce-development"
    isPage={false}
    useLocalData={false}
    admin={false}
  />
);

export const HERO_Of_Custom_Website_Development = () => (
  <HERO
    department="DEVELOPMENT"
    category="custom-website-development"
    isPage={false}
    useLocalData={false}
    admin={false}
  />
);
//#endregion
