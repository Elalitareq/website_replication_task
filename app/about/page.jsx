import React from "react";
import { raleway, saira } from "../font";
import Image from "next/image";
import numb1 from "../assets/png/1.png";
import numb2 from "../assets/png/2.png";
import numb3 from "../assets/png/3.png";
import numb4 from "../assets/png/4.png";
import Link from "next/link";
import office from "@/app/assets/png/office-location-1.png";
import globe from "@/app/assets/png/globe.png";
import office2 from "@/app/assets/png/office-location-2.png";
import aboutEdit from "@/app/assets/png/about-edit-icon.png";
const usArray = [
  {
    image:aboutEdit,
    title: "In website development for almost 2 decades",
    description:
      "We have been creating great professional websites for businesses and non-profit organizations for almost 20 years. Our portfolio includes complex custom coded sites and projects on open-source platforms like WordPress as well as e-commerce platforms like Bigcommerce and Woocommerce..",
  },
  {
    image:aboutEdit,
    title: "Attractive, modern, and user-friendly designs",
    description:
      "We aim for attractive, modern, simple, user-friendly designs that make it easy for users to locate the information they seek. Of course, they are also always designed to reflect each client’s brand image and achieve specific business objectives.",
  },
  {
    image:aboutEdit,
    title: "Websites that are easy to use",
    description:
      "You don’t have to be a mechanic to drive a car; similarly, you should not have to know anything about coding in order to manage your website. Especially a business website that may require regular updating of product and other information.",
  },
  {
    image:aboutEdit,
    title: "All our websites are mobile-friendly",
    description:
      "As an increasing majority of people access the web from smartphones and tablets, having a website that is as easy to use on a mobile device as on a pc has become imperative. All the websites we generate are mobile-friendly; it’s a basic feature.",
  },
  {
    image:aboutEdit,
    title: "Primary focus on small and mid-size businesses and non-profits",
    description:
      "Our almost 2 decades of work with small to mid-size organizations denotes a thorough understanding of the needs, expectations, and requirements of this sector. We offer a combination of website development expertise, high value design concepts and overall business knowledge that is hard to find elsewhere.",
  },
  {
    image:aboutEdit,
    title: "Great websites at affordable price points",
    description:
      "We have invested heavily in the capability to deliver world-class websites at prices that are comfortably within the budget of price-sensitive clients. We also offer custom-designed installment plans to credit worthy businesses and non-profits.",
  },
];
const About = () => {
  return (
    <>
      <section className="w-full bg-about-background  bg-cover -mt-28 lg:-mt-36 py-32 lg:pt-52 lg:pb-28 text-center tracking-wide">
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
          SHAPING A VISION, DELIVERING SOFTWARE, CREATING WORLD CLASS
          EXPERIENCES
        </h2>
        <p className={`text-xl mt-6 ${raleway.className}`}>
          We provide premium end-to-end tailor-made solutions and technology
          services across different disciplines and industries
        </p>
      </section>
      <section className="mt-4 w-full lg:w-[80%] max-w-[1350px] m-auto p-4 lg:p-8 ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4  flex lg:block   ">
            <div className="relative">
              <span className="absolute w-1 lg:w-full h-full lg:h-1 bg-light bottom-0 left-1/2 lg:left-0 lg:bottom-1/2 -z-10"></span>

              <Image
                src={numb1}
                alt="1"
                width={50}
                height={80}
                className="h-[70px] w-auto bg-light px-2 py-2"
              />
            </div>

            <div className="w-3/4 flex-grow pb-4 lg:pb-0 lg:w-auto pl-3 lg:pl-auto about-number-img-first-desc">
              <h4 className="text-2xl font-medium lg:pr-12 text-primary mt-6">
                Project Kickoff
              </h4>

              <p
                className={`text-xl leading-8 mt-4 lg:pr-12 ${raleway.className} `}
              >
                Regardless of whether you need to craft an idea for a completely
                new product or evaluate the quality of an already existing one –
                we&apos;re here to help you.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4  flex lg:block  ">
            <div className="relative lg:px-6">
              <span className="absolute w-1 lg:w-full h-full lg:h-1 bg-light bottom-0 left-1/2 lg:left-0 lg:bottom-1/2 -z-10"></span>
              <Image
                src={numb2}
                alt="1"
                width={50}
                height={80}
                className="h-[70px] w-auto bg-light px-2 py-2"
              />
            </div>
            <div className="w-3/4 flex-grow pb-4 lg:pb-0 lg:w-auto pl-3 lg:pl-auto">
              <h4 className="text-2xl font-medium lg:px-6 text-primary mt-6">
                Ideation and Evaluation
              </h4>

              <p
                className={`text-xl leading-8 mt-4 lg:px-6 ${raleway.className} `}
              >
                Give your product idea a real shape. Plan and evaluate the
                essential features of your product to accomplish your business
                goals and eliminate potential mistakes.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4  flex lg:block  ">
            <div className="relative lg:px-6">
              <span className="absolute  w-1 lg:w-full h-full lg:h-1 bg-light bottom-0 left-1/2 lg:left-0 lg:bottom-1/2 -z-10"></span>
              <Image
                src={numb3}
                alt="1"
                width={50}
                height={80}
                className="h-[70px] w-auto bg-light px-2 py-2"
              />
            </div>
            <div className="w-3/4 flex-grow pb-4 lg:pb-0 lg:w-auto pl-3 lg:pl-auto">
              <h4 className="text-2xl font-medium lg:px-6 text-primary mt-6">
                Design Process
              </h4>

              <p
                className={`text-xl leading-8 mt-4 lg:px-6 ${raleway.className} `}
              >
                Craft delightful user experiences for your digital products.
                Solve real problems and improve your vital business metrics
                through beautiful interfaces.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4  flex lg:block  ">
            <div className="relative lg:pl-12">
              <span className="absolute w-12 h-1 hidden lg:block bg-light left-0 bottom-1/2 -z-10"></span>
              <Image
                src={numb4}
                alt="1"
                width={50}
                height={80}
                className="h-[70px] w-auto bg-light px-2 py-2"
              />
            </div>
            <div className="w-3/4 flex-grow pb-4 lg:pb-0 lg:w-auto pl-3 lg:pl-auto ">
              <h4 className="text-2xl font-medium lg:pl-12 text-primary mt-6">
                Development Process
              </h4>

              <p
                className={`text-xl leading-8 mt-4 lg:pl-12 ${raleway.className} `}
              >
                Create beautiful, fast, and secure applications tailored
                precisely to your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-secondary text-center p-4 lg:p-8">
        <h2 className="text-4xl  text-white max-w-[1350px] m-auto">OUR TEAM</h2>
        <p className="text-xl text-white max-w-[1350px] m-auto mt-4">
          On the clock, we’re technology experts and leaders that bring energy,
          passion, and knowledge to every project. Off the clock, we’re an
          eclectic bunch of foodies, music buffs, artists, sports fanatics,
          karaoke pros, and outdoor enthusiasts.
        </p>
      </section>
      <section className="w-full p-4 pb-8 lg:p-16 text-center">
        <h2 className="text-4xl font-bold  text-primary max-w-[1350px] m-auto ">
          Interested in joining the Acksession family?
        </h2>
        <p className={`text-xl mt-3 mb-6 ${raleway.className}`}>
          Head on over to our careers page and show us what you&apos;re made of!
        </p>
        <Link
          href="/careers"
          className=" text-xl px-3 py-2 border-0 border-secondary  hover:border  rounded bg-secondary text-white "
        >
          Check Careers
        </Link>
      </section>
      <section className="w-full bg-light min-h-[120vh] relative">
        <Image
          src={office}
          alt="office location 1"
          className="w-full lg:w-1/2 h-auto"
        />

        <div
          className={`lg:absolute inset-0 w-full h-full flex justify-center items-center ${raleway.className}`}
        >
          <div className=" bg-white z-30 p-8 w-full lg:w-1/2 h-[40%] flex flex-col justify-between">
            <div>
              <h2 className="text-4xl text-primary ">OUR LOCATIONS</h2>
              <p className={`text-xl text-black mt-3  ${raleway.className}`}>
                We are a multinational company, headquartered in the USA,
                operating in Istanbul Turkey, and Beirut Lebanon
              </p>
            </div>
            <div className="flex flex-row flex-wrap ">
              <div className="w-full lg:w-1/2 mt-4 lg:mt-0 ">
                <h3 className="text-xl font-thin text-gray-600">
                  HEADQUARTERS
                </h3>
                <p className="text-xl text-secondary">
                  <span className="inline-block mr-3">
                    <Image src={globe} width={15} alt="globe" height={15} />
                  </span>
                  USA
                </p>
              </div>
              <div className="mt-4 lg:mt-0 w-full lg:w-1/2">
                <h3 className="text-xl font-thin text-gray-700">
                  OTHER LOCATIONS
                </h3>
                <p className="text-xl text-secondary">
                  <span className="inline-block mr-3">
                    <Image src={globe} width={15} alt="globe" height={15} />
                  </span>
                  Istanbul, Turkey
                </p>
                <p className="text-xl text-secondary">
                  <span className="inline-block mr-3">
                    <Image src={globe} width={15} alt="globe" height={15} />
                  </span>
                  Beirut, Lebanon
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={office2}
          alt="office location 1"
          className="w-full lg:w-[30%] h-auto lg:absolute bottom-0 right-0 "
        />
      </section>
      <section className="w-full p-4 pb-8 lg:p-16 ">
        <h2 className="text-primary text-center my-4 text-4xl font-semibold">
          WHY WORK WITH US
        </h2>
        <div className=" flex flex-wrap  max-w-[1350px] m-auto">

        {usArray.map((us, index) => {
          return (
                      <div
                        key={index}
                        className={`w-full lg:w-1/2 p-3 lg:p-8 flex flex-wrap  h-auto ${saira.className}`}
                      >
                        <div className="w-full lg:w-[150px]">

                        <Image
                          src={us.image}
                          alt={us.name}
                          className="w-[70px] h-auto px-2 py-2 rounded-full bg-light"
                          />
                          </div>
                        <div className="w-full lg:w-[calc(100%-150px)]"> 

                        <h3 className="text-2xl font-normal text-secondary font-thing mb-4">
                          {us.title}
                        </h3>
                        <p className={`text-lg text-gray-600 ${raleway.className}`}>
                          {us.description}
                        </p>
                        </div>
                      </div>
                    );
        })}
        </div>
      
      </section>
    </>
  );
};

export default About;
