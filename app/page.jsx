"use client";
import { motion } from "framer-motion";

import HeroSection from "./components/heroSection";
import ServicesHomeSection from "./components/servicesHomeSection";
import InnovateSection from "./components/innovateSection";
import ContactSection from "./components/contactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <ServicesHomeSection />
      </motion.div>
      <InnovateSection />
      <ContactSection />
    </>
  );
}
