"use client";

import { HERO_Of_Home } from "@/components/Home/HERO_Of_Home";
import Grid from "@/components/Home/Grid";
import Footer from "@/components/ui/Footer";
import Promotion from "@/components/ui/Promotion";
import Roles from "@/components/Home/Roles";
import Navbar from "@/components/- ReUseable/Navbar";
import { DOTR_For_All } from "@/components/Home/DOTR_For_All";
import RouteProgress from "@/components/ui/RouteProgress";
import { Contact_Form } from "@/components/About/ContactForm";

const Home = () => {
  return (
    <div className="bg-black-100">
      <Navbar />
      <RouteProgress />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {/* <FloatingNav navItems={navItems} /> */}
          <HERO_Of_Home />
          <Grid />
          {/* <RecentProjects /> */}
          {/* <Clients /> */}
          {/* <Roles /> */}
          <DOTR_For_All />
          {/* <FAQs_Of_Home /> */}
          <Contact_Form />
          <Promotion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
