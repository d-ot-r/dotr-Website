import Footer from "@/components/ui/Footer";
import Promotion from "@/components/ui/Promotion";
import Navbar from "@/components/- ReUseable/Navbar";
import RouteProgress from "@/components/ui/RouteProgress";
import { DOTR_For_All } from "@/components/Home/DOTR_For_All";
import { Portfolio_Hero } from "@/components/Portfolio/HERO_Of_Portfolios";
import { DEPARTMENTs_Of_Portfolio } from "@/components/Portfolio/DEPARTMENTs_Of_Portfolio";
import { Contact_Form } from "@/components/About/ContactForm";

const Portfolio = () => {
  return (
    <div className="bg-black-100">
      <Navbar />
      <RouteProgress />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Portfolio_Hero />
          <DEPARTMENTs_Of_Portfolio />
          <DOTR_For_All />
          <Contact_Form />
          <Promotion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
