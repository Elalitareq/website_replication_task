import React from "react";
import { raleway } from "../font";
import ServiceCard from "../components/serviceCard";
import mobileApp from "../assets/png/mobile-app.png";
import uiUx from "../assets/png/ui-ux.png";
import erp from "../assets/png/erp.png";
import seo from "../assets/png/seo.png";
import ai from "../assets/png/ai.png";
import eCommerce from "../assets/png/e-commerce-icon.png";
import dsBi from "../assets/png/data-science-and-bi-business-intelligence-icon.png";
import dgitalMarketing from "../assets/png/digital-marketing-icon.png";


const myArray = [
  {
    title: "Mobile App Development",
    text: "We are pushing the boundaries of what's possible on mobile by creating transformative mobile experiences that solve business challenges for clients ranging...",
    path: "/services/mobile",
    image:mobileApp
  },
  {
    title: "UI/UX - Interactive & Visual Design",
    text: "We use latest UI/UX configuration to construct interactive mobile and website designs interfaces for your business...",
    path: "/services/uiux",
    image:uiUx
  },
  {
    title: "ERP (Enterprise Resource Planning)",
    text: "Our team has significant experience and domain knowledge in the ERP space (Enterprise Resource Planning)...",
    path: "/services/erp",
    image:erp
  },
  {
    title: "Customer Experience",
    text: "If you are looking to embrace a customer-first mindset or need a hard look of a customer-centric strategy you’ve already adopted...",
    path: "/services/customerexperience",
    image:seo
  },
  {
    title: "Artificial Intelligence",
    text: "AI is driving uncharted business value in today’s world economy...",
    path: "/services/ai",
    image:ai
  },
  {
    title: "E-Commerce",
    text: "The COVID-19 pandemic pushed commerce into a world of hyper connected omni-channel experiences where the customer is empowered to drive the shopping ...",
    path: "/services/ecommerce",
    image:eCommerce
  },
  {
    title: "Data science & BI (Business Intelligence)",
    text: "Data when applied in a meaningful way always tells a story. The most successful products/platforms and teams are the ones who can...",
    path: "/services/datascience",
    image:dsBi
  },
  {
    title: "Digital Marketing",
    text: "We are pushing the boundaries of what’s possible on mobile by creating transformative mobile...",
    path: "/services/digitalmarketing",
    image:dgitalMarketing
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-light mt-10 p-4 lg:p-16">
        <h1 className="text-4xl font-bold text-primary tracking-wide mb-6">
          SUSTAINABLE TECHNOLOGY SERVICES CUSTOMIZED FOR YOUR ORGANIZATION
        </h1>
        <p className={` text-lg ${raleway.className}`}>
          We can help unlock value in the ‘new normal’ business environment
          amidst a backdrop of uncertainty caused by today’s unprecedented
          times. Whether you are looking to fill-in ad-hoc or grow a robust
          tech-based talent pool – we can help you unlock value and increase
          productivity per development cycle. We partner to understand your
          long-term vision and architect the right solution with our technical
          and industry-specific domain expertise.
        </p>
      </section>
      <section className="p-[50px] flex justify-center sm:justify-between flex-wrap">
        {myArray.map((card, index) => {
          return (
            <div  key={index}  className=" min-w-[25%]">

              <ServiceCard card={card}/>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Services;
