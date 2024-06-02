import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../components/Loader/Loader";
import { Navigate } from "react-router-dom";
import Slide from "../../components/Slider/slider";
const Home = () => {
  const [user] = useAuthState(auth);
  if (!user) {
    <Navigate to={"/kaizen-portfolio/login"} />;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {!user ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Slide>
            <Hero />
          </Slide>
        </>
      )}
    </div>
  );
};

export default Home;
