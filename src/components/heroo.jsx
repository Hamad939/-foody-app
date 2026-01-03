import React from "react";
import hero from "../assets/images.jpg";
const Hero = () => {
  return (
    <div className="lg:mt-24  flex justify-center  ">
      <div className="hero  w-[90%] h-[45vh] sm:w-[80%]  sm:h-[60vh] ">
        <img
          className="sm:w-full object-contain sm:object-cover h-full "
          src={hero}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};
export default Hero;
