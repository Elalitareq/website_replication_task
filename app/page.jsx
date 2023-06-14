"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import cloud from "./assets/vector/clouds.svg";
import rocket from "./assets/vector/rocket.svg";
import heroBackground from "./assets/vector/background-rocket-clouds.svg";
import { raleway } from "./font";
import Link from "next/link";

export default function Home() {
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
    <>
      <section className="pt-28 lg:pt-36 relative min-h-screen ">
        <div className="w-full lg:w-1/2   mt-[12%] text-left pl-[10%]">
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
          <Image src={cloud} alt="hero cloud" width={"60%"} height={"auto"} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={rocketAnimation}
          className="absolute bottom-0 right-0 z-10  w-[60%] lg:w-auto"
        >
          <Image src={rocket} alt="hero rocket" width={"60%"} height={"auto"} />
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
          />
        </motion.div>
      </section>
      <section className="bg-services-background bg-cover ">
        <div className="w-full lg:w-[33%] p-[50px]">
          <h2 className="text-4xl text-primary font-semibold  mb-6">
            YOUR TECH CONSULTING PARTNER
          </h2>
          <p className={`text-xl font-light text-white mb-6 ${raleway.className}`}>
            We provide the solutions to help you become and remain top
            performers in your industry.
          </p>
          <Link
              href={"/services"}
              className="px-3 py-1 text-lg text-white bg-primary rounded border border-transparent hover:border-white transition-colors duration-200 ease-in-out "
            >
              View all services

            </Link>
        </div>
      </section>
    </>
  );
}
