'use client'
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AnimatedText } from "./AnimatedText";

const HeroSection = () => {


  

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white text-3xl sm:text-2xl lg:text-6xl lg:leading-normal font-extrabold">
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Beno, Here
            </span>
            <br />
            {typeof window !== 'undefined' && (
              <AnimatedText
                el="h2"
                text={[
                  "I build Web Applications",
                  "Mobile Applications",
                ]}
                className="text-4xl"
                repeatDelay={10000}
              />
            )}
          </h1>
          <p className="glitch-text text-[white] mt-5 text-base sm:text-lg mb-32 lg:text-xl">
  I am a highly skilled and passionate <span className="underline-react">React</span> and <span className="underline-react-native">React Native</span> developer with five years of professional experience in the field.
</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] mb-8 lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/rub.jpg"  
              alt="hero image"
              style={{borderRadius: '90px', height: '460px'}}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
