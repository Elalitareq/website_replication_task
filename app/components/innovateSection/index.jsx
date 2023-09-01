import Image from "next/image";
import innovate from "../../assets/png/come_innovate_with_us.png";
import React from "react";
import { raleway } from "@/app/font";
import Link from "next/link";

const InnovateSection = () => {
  return (

    <section className=" w-full relative bg-light ">
        <div className="relative mx-auto max-w-[1500px] ">

      <Image
        src={innovate}
        alt="come inovate with us"
        width={850}
        height={"auto"}
      />
      <div className="lg:absolute bg-whiter top-[40%] lg:top-[280px]  lg:left-auto  lg:right-0  p-8 py-16  lg:p-12  rounded w-auto  lg:w-[770px] pb-6 z-30">
        <h3 className="text-[5vw] lg:text-4xl font-semibold mb-6 text-primary">COME INNOVATE WITH US!</h3>

        <p className={`pb-3 text-lg lg:text-xl  mb-6 ${raleway.className}`}>
          We are building a team of critical thinkers, lifelong learners and
          adaptive mindsets.
        </p>

        <Link href="/careers" className="bg-secondary px-3 py-2 rounded text-white">
          Join the team!
        </Link>
      </div>
        </div>
    </section>
  );
};

export default InnovateSection;
