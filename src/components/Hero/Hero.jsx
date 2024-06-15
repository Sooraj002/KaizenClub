import React, { Suspense, lazy } from "react";
import "../Hero/Hero.css";
import Loader from "../Loader/Loader";

const LazyImage = lazy(() => import("../LazyImg/LazyImg"));

const Hero = () => {
  return (
    <div className="hero mt-0 md:h-auto md:mt-8">
      <div className="blur1 bg-[#7e44d8] h-64 w-64 blur-[50px] absolute -right-32 top-[10rem] rounded-full -z-10 hidden lg:block"></div>
      <div className="blur2 bg-[#066093] h-64 w-64 blur-[50px] absolute left-[-10rem] top-[25rem] rounded-full -z-10 hidden lg:block"></div>
      <div className="outer flex flex-col items-center lg:flex-row">
        <div className="main flex-1">
          <h1 className="text-7xl text-center text-white">
            Kaizen Technical <br /> Society
          </h1>
          <p className="m-10">
            As a part of the Institute Technical Council, we aim to provide a
            gateway for the people in our institute to join the coding
            community. We create a platform which allows students to gain
            assistance and mentorship to enhance their coding ability.
          </p>
        </div>
        <div className="right-main flex-1">
          <img
            className="lg:h-[85vh] rounded-3xl scale-75 object-cover -z-20"
            src="hero.jpg"
            alt="img"
            loading="lazy"
          />
          
          {/* <Suspense fallback={<Loader />}>
            <LazyImage className={`object-cover`} />
          </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
