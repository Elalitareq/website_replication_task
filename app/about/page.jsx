import React from "react";
import { raleway } from "../font";

const About = () => {
  return (
    <>
      <section className="w-full bg-about-background  bg-cover -mt-28 lg:-mt-36 py-32 lg:py-40 text-center">
        <h2 className="text-4xl text-white font-bold mb-4">
          WE THRIVE ON CHALLENGES
        </h2>
        <p
          className={`text-xl text-white max-w-[1350px] m-auto ${raleway.className}`}
        >
          Our techncology experts are ready to transform your business ideas
          into reality. You envision it, we build it into a smart user-friendly
          solution. Quality and satisfaction of our clients is our outmost
          highest priority.
        </p>
      </section>
      <section className="mt-10 w-full lg:w-[80%] max-w-[1350px] bg-light m-auto p-8">
        <h2 className="text-4xl text-primary font-bold mb-4">WHAT WE DO</h2>
        <p className={`text-xl mt-6 ${raleway.className}`}>
          We are a US based software company. We build solutions tailored to the
          needs of our clients based on latest technologies to reach your
          desired goal with a proper strategy.
        </p>
        <p className={`text-xl mt-6 ${raleway.className}`}>
          For businesses looking to reach new milestones, our talented team is
          dedicated to help you through an efficient delivery oriented and agile
          process.
        </p>
      </section>
      <section className="mt-10 w-full lg:w-[80%] max-w-[1350px] bg-light m-auto p-8">
        <h2 className="text-4xl text-primary font-bold mb-4">OUR VALUES</h2>
        <p className={`text-xl mt-6 ${raleway.className}`}>
          Our values shape the way we work with our clients and our employees.
          We focus on delivering best in class, cutting edge technologies, yet
          we make sure our employees have the freedom to think independently,
          understand our customers needs, and directly offer the most creative
          solutions.
        </p>
      </section>
      <section className="mt-10 w-full lg:w-[80%] max-w-[1350px] m-auto p-8">
        <h2 className="text-4xl text-primary font-bold mb-4">
        SHAPING A VISION, DELIVERING SOFTWARE, CREATING WORLD CLASS EXPERIENCES
        </h2>
        <p className={`text-xl mt-6 ${raleway.className}`}>
        We provide premium end-to-end tailor-made solutions and technology services across different disciplines and industries
        </p>

      </section>
    </>
  );
};

export default About;
