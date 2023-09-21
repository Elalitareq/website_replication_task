import { raleway } from "@/app/font";
import Link from "next/link";
import React from "react";
import letterBox from "../../assets/png/letter_box.png";
import Image from "next/image";
import FadeAnimator from "../fadeAnimator";

const ContactSection = () => {
  return (
    <section className="w-full bg-primary ">
      <FadeAnimator>
        <div className="w-full text-white  px-4 lg:px-[50px] py-[80px] flex flex-wrap relative">
          <div className="w-full lg:w-[33%] mb-6 lg:mb-auto">
            <h2 className="text-4xl text-secondary font-semibold">
              HOW CAN WE HELP?
            </h2>
            <p className={`text-2xl text-white ${raleway.className}`}>
              We&apos;d love to hear from you!
            </p>
          </div>
          <div className="w-full lg:w-[33%] flex flex-row items-center justify-start lg:justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-white px-4 py-3 rounded hover:bg-light"
            >
              Contact Us
            </Link>
          </div>
          <Image
            src={letterBox}
            alt="letter box"
            width={"30%"}
            height={"auto"}
            className="absolute -bottom-4 lg:-bottom-8 right-0 w-1/2 lg:w-[350px]"
          />
        </div>
      </FadeAnimator>
    </section>
  );
};

export default ContactSection;
