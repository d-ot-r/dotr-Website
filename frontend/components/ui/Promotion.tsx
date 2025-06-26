import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Promotion = () => {
  return (
    <div className="flex flex-col items-center mt-20 pb-20">
      <h1 className="heading lg:max-w-[45vw]">
        Ready to start and take{" "}
        <span className="text-purple">your digital presence</span> to the next
        level?
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>
      <a href="mailto:dhinojaomnitechresolutions@gmail.com">
        <MagicButton
          title="Let's get in touch..."
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};

export default Promotion;
