import { raleway } from "@/app/font";
import Link from "next/link";
import React from "react";
const jobs = {
  1: {
    title: "SENIOR FRONTEND DEVELOPER",
    mission:
      "Our mission at Acksession is to help entrepreneurs and innovators shape the world through beautiful software. We care about trust, taking ownership, and transparency. As a Certified B Corporation®, we offer a safe, inclusive and productive environment for all team members, and we’re always open to feedback. If you want to work from home and be a full-time employee, great! We want to create the right opportunities for you.",
    applicationEmail: "career@acksession.com",
    jobDescription:
      "We’re hiring Senior full-time Front End Developer with experience in React JS.",
    responsibilities: [
      "Develop and maintain custom frameworks and design systems that are used to power highly visible website experiences.",
      "Develop responsive web pages that look great on all screens.",
      "Build custom tools to support development processes.",
      "Contribute to and maintain documentation for custom frameworks.",
      "Collaborate with the creative team to enhance application design across multiple platforms.",
      "Responsible for translating precise Figma comps into clean, organized HTML and CSS.",
      "Responsible for building detailed and performant JavaScript interactions with vanilla JavaScript.",
    ],
    qualifications: [
      "Minimum 3 years of experience developing professional sites with React JS.",
      "Experience with UX interaction and visual design is a huge plus.",
      "Expert-level proficiency in writing custom vanilla JavaScript from scratch without the need for libraries.",
      "Experience modifying or extending existing JavaScript modules.",
      "Strong proficiency in CSS and HTML.",
      "Superior communication, organization, and time management skills are a must.",
      "Deep experience working on .com projects including innovative and unique product/marketing pages and web applications.",
      "Knowledge of best practices in building fluid/responsive layouts.",
      "Experience using Chrome or Safari Dev Tools for inspecting and debugging client-side code.",
      "Strong knowledge of browser compatibility, including mobile web browsers, and their rendering engines.",
      "Prior experience leading dev teams or projects is a huge plus.",
    ],
    benefits: "Competitive pay in fresh $, and great benefits.",
    location: "Beirut or Istanbul",
  },
  2: {
    title: "SENIOR .NET CORE SOFTWARE ENGINEER",
    mission:
      "Our mission at Acksession is to help entrepreneurs and innovators shape the world through beautiful software. We care about trust, taking ownership, and transparency. As a Certified B Corporation®, we offer a safe, inclusive and productive environment for all team members, and we’re always open to feedback. If you want to work from home and be a full-time employee, great! We want to create the right opportunities for you.",
    applicationEmail: "career@acksession.com",
    jobDescription:
      "We are looking for a Senior .Net Core developer to build software using languages and technologies of the .NET framework. You will create applications from scratch, configure existing systems and provide user support, using Agile development methodology. In this role, you should be able to write functional code with a sharp eye for spotting defects. You should be a team player and excellent communicator. If you are also passionate about the .NET framework and software design/architecture, we’d like to meet you. Your goal will be to work with internal teams to design, develop and maintain software.",
    responsibilities: [
      "Participate in requirements analysis.",
      "Collaborate with internal teams to produce software design and architecture.",
      "Write clean, scalable code using .NET programming languages.",
      "Test and deploy applications and systems.",
      "Revise, update, refactor, and debug code.",
      "Improve existing software.",
      "Develop documentation throughout the software development life cycle (SDLC).",
      "Serve as an expert on applications and provide technical support.",
    ],
    qualifications: [
      "Proven experience as a .NET Core Developer or Application Developer using .NET Technologies.",
      "Familiarity with the ASP.NET framework, SQL Server, and design/architectural patterns (e.g., Model-View-Controller (MVC)).",
      "Knowledge of at least one of the .NET languages (e.g., C#, Visual Basic .NET) and HTML5/CSS3.",
      "Familiarity with architecture styles/APIs (REST, RPC).",
      "Understanding of Agile methodologies.",
      "Excellent troubleshooting and communication skills.",
      "Attention to detail.",
      "BSc/BA in Computer Science, Engineering or a related field.",
    ],
    benefits: "Competitive pay in fresh $, and great benefits.",
    location: "Beirut or Istanbul",
  },
};
const Job = ({ params }) => {
  const {
    title,
    mission,
    applicationEmail,
    jobDescription,
    responsibilities,
    qualifications,
    benefits,
    location,
  } = jobs[params.id];
  return (
    <>
      <section
        className={`max-w-[1350px] m-auto py-[50px] mt-32 ${raleway.className}`}
      >
        <Link href="/careers" className={`mb-12 `}>
          <span className="font-bold text-secondary inline ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              height={20}
              width={20}
              role="img"
              className="text-secondary inline mr-4"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Indicator Left</title>
              <desc>A solid styled icon from Orion Icon Library.</desc>
              <path
                data-name="layer1"
                d="M25.121 47.121L11.128 33.128l-.012-.012L9 31l16.121-16.121a3 3 0 0 1 4.242 4.242l-8.879 8.88h29.517a3 3 0 1 1 0 6H20.486l8.877 8.878a3 3 0 0 1-4.242 4.242z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          Careers
        </Link>
        <h2 className="text-4xl text-primary my-6 font-bold">{title}</h2>
        <p className="text-xl  leading-relaxed mb-4">{mission}</p>
        <p className="text-xl ">
          Apply by sending your CV to{" "}
          <span className="text-secondary">{applicationEmail}</span>
        </p>
      </section>
      <section className="w-full bg-light py-10">
        <div className="max-w-[1350px] m-auto">
          <h2 className="text-4xl text-primary my-6  font-bold">
            JOB DESCRIPTION
          </h2>
          <p className={` pb-4 text-xl ${raleway.className}`}>
            {jobDescription}
          </p>
          <h3 className="font-bold text-xl pb-4">Responsibilities</h3>
          <ul className="list-inside px-4 mb-6">
            {responsibilities.map((responsibility, index) => (
              <li className=" list-disc " key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-xl pb-4">Qualifications</h3>
          <ul className="list-inside px-4">
            {qualifications.map((qualification, index) => (
              <li className=" list-disc " key={index}>
                {qualification}
              </li>
            ))}
          </ul>
          <p className={`text-xl my-4 ${raleway.className}`}>{benefits}</p>
          <p  className={`text-xl ${raleway.className}`}>Location: {location}</p>
        </div>

      </section>
    </>
  );
};

export default Job;
