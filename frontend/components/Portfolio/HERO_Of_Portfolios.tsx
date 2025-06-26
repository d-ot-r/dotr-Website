import { HERO } from "../- ReUseable/HERO";

export const Portfolio_Hero = () => (
  <HERO
    department="PORTFOLIO"
    category="portfolio"
    isPage={true}
    useLocalData={true}
    admin={false}
  />
);

export const HERO_Of_Designing_Portfolio = () => (
  <HERO
    department="DESIGNING"
    category="designing-portfolio"
    isPage={false}
    useLocalData={false}
    admin={false}
  />
);

export const HERO_Of_Development_Portfolio = () => (
  <HERO
    department="DEVELOPMENT"
    category="development-portfolio"
    isPage={false}
    useLocalData={false}
    admin={false}
  />
);
