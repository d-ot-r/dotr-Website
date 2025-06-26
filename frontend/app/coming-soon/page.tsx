"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/ui/Footer";
import Promotion from "@/components/ui/Promotion";
import { Contact_Form } from "@/components/About/ContactForm";
import Navbar from "@/components/- ReUseable/Navbar";

export default function ComingSoon() {
  const targetDate = new Date("2025-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="bg-slate-950">
      <Navbar />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="w-full flex flex-col h-[500px] mb-20 items-center justify-center bg-black text-white mt-60">
          {/* <Navbar /> */}
          {/* <RouteProgress /> */}

          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">
              🚀 Our Service is Launching Soon!
            </h1>
            <p className="text-xl mb-20">Stay tuned for something amazing.</p>

            {/* <div className="flex justify-center gap-4 text-xl">
          <div className="p-4 border rounded-lg">
            <p className="text-3xl font-bold">{timeLeft.days}</p>Days
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-3xl font-bold">{timeLeft.hours}</p>Hours
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-3xl font-bold">{timeLeft.minutes}</p>Minutes
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-3xl font-bold">{timeLeft.seconds}</p>Seconds
          </div> 
        </div> */}

            <div className="flex justify-center text-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-5   py-3 w-[500px] rounded-l-lg text-white hover:bg-cyan-950 hover:text-white"
                required
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-2xl hover:bg-cyan-950 hover:text-white">
                Notify Me
              </button>
            </div>
          </div>
        </div>
        <Contact_Form />
        <Promotion />
      </main>
      <Footer />
    </div>
  );
}
