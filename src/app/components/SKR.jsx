'use client'
import React from "react";
import "./styles.css";
import Image from "next/image";
import mountain from "../../../src/app/assets/mountain.webp";
import flowers from "../../../src/app/assets/flower.webp";
import me from "../../../src/app/assets/me.jpg";
import sun from '../../../src/app/assets/sun.webp'
import { Box } from "@chakra-ui/react";

const SakuraBackground = ({ children }) => {

  const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth <= 640);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box className="container w-full bg-[#fef5e7] min-h-screen overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Flowers Image */}
        <div
        style={{marginLeft: isSmallScreen ? "-16rem" : "0" }}
        
        className="flex-shrink-0 flex w-[179px]  sm:w-[400px] md:w-[300px] lg:w-[400px] mb-4 md:mb-0">
         <Image
            src={flowers}
            width={398}
            height={464}
            alt="Flowers"
            className="w-full"
          /> 
           <Image
            src={sun}
            width={298}
            height={464}
            alt="Flowers"
            className="w-full ml-24"
          /> 
        </div>

        {/* Center Content */}
        <div className="w-full flex flex-col justify-center items-center px-4 md:px-0">
          <div className="w-[150px] md:w-[200px]">
            <Image
              src={me}
              className="rounded-full"
              width={200}
              height={200}
              alt="Profile"
            />
          </div>

          <div style={{marginBottom: isSmallScreen ? "-9rem" : "0" }} className="w-full md:w-[280px] z-10 sm:-mb-55 text-center mt-4">
            <h4
              style={{ fontFamily: "Rajdhani" }}
              className="text-lg md:text-xl"
            >
              Welcome To My Web Corner!
            </h4>
            <p className="mt-2 ">
              My journey in the world of web development began with a curiosity
              for building interactive and seamless digital experiences.
            </p>
            <div className="flex items-center justify-center mt-4">
              <span className="changecolor">Click to continue</span>
            </div>
          </div>
        </div>

        {/* Mountain Image */}
        <div className="flex-shrink-0 w-[450px] sm:w-[400px] md:w-[400px] lg:w-[648px] mt-4 md:mt-0">
          <Image
            src={mountain}
            width={498}
            height={498}
            alt="Mountain"
            className="w-full"
          />
        </div>
      </div>

      {/* Sakura Animation */}
      <div className="sakura">
        {Array.from({ length: 50 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <p className="absolute bottom-4 w-full text-center">{children}</p>
    </Box>
  );
};

export default SakuraBackground;
