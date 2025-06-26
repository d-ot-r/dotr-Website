import { PROJECTs } from "@/components/- ReUseable/PROJECTs";

//#region DESIGNING
export const PROJECTs_Of_Designing = () => (
  <div>
    <PROJECTs
      department="DESIGNING"
      group="BRAND-Designing"
      category="logo-designing"
      useHeader={true}
    />
    {/* <PROJECTs
      department="DESIGNING"
      group="BRAND-Designing"
      category="business-card-designing"
    /> */}
    <PROJECTs
      department="DESIGNING"
      group="CONTENT-Designing"
      category="social-media-designing"
      useHeader={true}
    />
  </div>
);
//#endregion

//#region DEVELOPMENT
export const PROJECTs_Of_Development = () => (
  <div>
    <PROJECTs
      department="DEVELOPMENT"
      group="WEB-Development"
      category="ecommerce-development"
      useHeader={true}
    />
    <PROJECTs
      department="DEVELOPMENT"
      group="WEB-Development"
      category="custom-website-development"
      useHeader={false}
    />

    <PROJECTs
      department="DEVELOPMENT"
      group="MOBILE-APP-Development"
      category="native-app-development"
      useHeader={true}
    />
  </div>
);
//#endregion
