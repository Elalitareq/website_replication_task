"use client";
import React, { useEffect, useState } from "react";
import { raleway } from "../font";
import Link from "next/link";
const jobVacancyArray = [
  {
    title: "Senior Frontend Web Developer using React",
    type: "Remote",
    path: "/careers/1",
  },
  {
    title: "Senior .NET Core Software Engineer",
    type: "Remote",
    path: "/careers/2",
  },
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(()=>{

  },[searchTerm])

  const filteredJobs = jobVacancyArray.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <section className="-mt-28 lg:-mt-36 pt-72 py-36 bg-careers-background bg-cover">
        <div className="max-w-[1350] m-auto">
          <h2 className="text-4xl text-center text-white font-semibold">
            STEER YOUR CAREER IN THE RIGHT DIRECTION
          </h2>
          <p
            className={`text-xl text-center w-full lg:w-[50%] m-auto mt-4 text-white ${raleway.className}`}
          >
            Build a career that suits your lifestyle, in a company where your
            voice matters. Let’s build a sustainable world together.
          </p>
        </div>
      </section>
      <section
        className={`max-w-[1350px] m-auto p-4 lg:p-16  leading-loose ${raleway.className}`}
      >
        <div className="flex flex-wrap mb-16 ">
          <h2 className="w-full lg:w-[33%]  text-left text-primary text-2xl  font-light mb-6">
            WORKING AT ACKSESSION MEANS FLEXIBILITY, TRUST AND MEANINGFUL
            CHOICES
          </h2>
          <div className="w-full lg:w-[66%] lg:px-8 text-xl ">
            <p className="mb-4">
              Working at Acksession means being a part of a community that
              values growth, mutual trust and respect.
            </p>
            <p>
              We want to continuously learn and improve, so we maintain a
              feedback-oriented mindset. And most importantly, we care – about
              creating sustainable software, about how our actions affect the
              world, and about each individual employee’s experience. As a
              Certified B Corporation®, we offer a safe, inclusive and
              productive environment for all team members, and we’re always open
              to feedback.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-row">
          <h2 className="w-full lg:w-[33%] text-primary text-2xl font-light text-left mb-6">
            {" "}
            LEARN ABOUT OUR VALUES
          </h2>
          <div className="w-full lg:w-[66%] lg:px-8 text-xl ">
            <p className="mb-4">
              We’ve taken the time to condense our values into seven key points.
              They shape the way we work with clients and with each other, and
              are the foundation for Acksession company culture.
            </p>
            <p>
              As we grow and improve, we expect these values to evolve alongside
              us. We use internal initiatives, such as Ask Me Anything sessions
              with the core team, to keep our values alive.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-secondary text-white text-2xl">
        <h2 className="max-w-[1350px] m-auto  p-4 lg:px-16">
          YOU DECIDE WHAT COMES NEXT. CHOOSE YOUR CAREER PATH
        </h2>
      </section>
      <section
        className={`max-w-[1350px] m-auto  p-4 lg:p-16  leading-loose ${raleway.className}`}
      >
        <h3 className="text-xl mb-8">
          We want to offer our team members personalized opportunities for
          growth, based on their level of experience. There is always room for
          development.
        </h3>
        <div className="w-full flex justify-between flex-wrap mb-12">
          <h4 className="font-semibold">
            {filteredJobs.length} Jobs are available
          </h4>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 bg-light border border-gray-300 w-full lg:w-1/2 focus:outline-none rounded focus:shadow-[rgba(13,110,253,.25)_0_0_0_0.25rem]"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div>
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="w-full flex justify-between border-b border-gray-200 mb-4 items-start"
            >
              <div>
                <p className="mb-1 font-semibold text-secondary">{job.title}</p>
                <p className="mb-2">{job.type}</p>
              </div>
              <Link
                href={job.path}
                className="px-3 py-1 rounded bg-primary whitespace-nowrap text-white"
              >
                View Job
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full text-left lg:text-center bg-light p-4 lg:p-16 tracking-wide">
        <h2 className="text-4xl  font-semibold text-primary max-w-[1350px] m-auto ">
          DIDN&apos;T FIND AN OPENING THAT SUITS YOUR AREA OF EXPERTISE?
        </h2>
        <p className={` text-xl mt-4 ${raleway.className}`}>
          Introduce yourself! We are constantly on the lookout for savvy people
        </p>
        <p
          className={` text-xl mt-4 text-secondary ${raleway.className}`}
        >
          career@acksession.com
        </p>
      </section>
    </>
  );
};

export default Careers;
