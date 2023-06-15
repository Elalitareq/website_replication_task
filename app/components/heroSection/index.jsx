'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import cloud from "../../assets/vector/clouds.svg";
import rocket from "../../assets/vector/rocket.svg";
import heroBackground from "../../assets/vector/background-rocket-clouds.svg";
import { raleway } from "../../font";


const HeroSection = () => {
    const cloudAnimation = {
        initial: {
          y: 50,
          x: 50,
        },
        animate: {
          y: 0,
          x: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        },
      };
    
      const rocketAnimation = {
        initial: {
          y: 350,
          x: 350,
        },
        animate: {
          y: 0,
          x: 0,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        },
      };
  return (
    <section className=" relative min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-9rem)] overflow-hidden ">
        <div className="w-full lg:w-1/2  pt-12 lg:pt-[12%] text-left px-[10%] lg:pr-auto">
          <h2 className="text-4xl text-primary font-semibold mb-6">
            UNLOCKING LIMITATIONS
          </h2>
          <span className={`text-xl font-light ${raleway.className}`}>
            Unlock your potential by joining our team. We are actively
            recruiting and looking for individuals that are ready to grow with
            us. Let&apos;s bring the world closer together!
          </span>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={cloudAnimation}
          className="absolute bottom-0 right-0 z-20 w-[60%] lg:w-auto"
        >
          <Image src={cloud} alt="hero cloud" width={"60%"} height={"auto"} priority/>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={rocketAnimation}
          className="absolute bottom-0 right-0 z-10  w-[60%] lg:w-auto"
        >
          <Image src={rocket} alt="hero rocket" width={"60%"} height={"auto"} priority />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={cloudAnimation}
          className="absolute bottom-0 right-0 z-0  w-[60%] lg:w-auto"
        >
          <Image
            src={heroBackground}
            alt="hero background"
            width={"60%"}
            height={"auto"}
            priority
          />
        </motion.div>
      </section>
  )
}

export default HeroSection