import React from "react";
import hero from "../assets/images.jpg";
const Hero = () => {
  return (
    <div className="mt-13 lg:mt-26   flex justify-center  ">
      <div className="hero  w-[90%] h-[45vh] sm:w-[80%] md:h-[50vh] md:w-full lg:w-[90%]  sm:h-[60vh] ">
        <img
          className="sm:w-full object-contain sm:object-cover lg:object-contain lg:w-full md:object-contain w-full h-full "
          src={hero}
          alt="Banner"
        />
      </div>
    </div>
  );
};
export default Hero;
