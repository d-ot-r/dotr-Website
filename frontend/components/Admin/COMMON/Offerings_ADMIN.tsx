import { OFFERINGs } from "@/components/- ReUseable/OFFERINGs";

// ---------- DESIGNING ----------

//#region BRAND Designing
export const Offerings_Of_LD_ADMIN = () => (
  <OFFERINGs
    department="DESIGNING"
    category="logo-designing"
    heading="Logo Designing"
    admin={true}
  />
);

export const Offerings_Of_BCD_ADMIN = () => (
  <OFFERINGs
    department="DESIGNING"
    category="business-card-designing"
    heading="Business Card Designing"
    admin={true}
  />
);

//#endregion

//#region CONTENT Designing
export const Offerings_Of_SMD_ADMIN = () => (
  <OFFERINGs
    department="DESIGNING"
    category="social-media-designing"
    heading="Social Media Designing"
    admin={true}
  />
);
//#endregion

// ---------- DEVELOPMENT ----------

//#region WEB Development
export const Offerings_Of_ED_ADMIN = () => (
  <OFFERINGs
    department="DEVELOPMENT"
    category="ecommerce-development"
    heading="eCommerce Development"
    admin={true}
  />
);

export const Offerings_Of_CWD_ADMIN = () => (
  <OFFERINGs
    department="DEVELOPMENT"
    category="custom-website-development"
    heading="Custom Website Development"
    admin={true}
  />
);
//#endregion
