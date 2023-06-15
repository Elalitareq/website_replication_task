import Link from 'next/link'
import { raleway } from "@/app/font";
import React from 'react'
import ServiceCard from '../serviceCard';
import mobileApp from "../../assets/png/mobile-app.png";
import uiUx from "../../assets/png/ui-ux.png";
import erp from "../../assets/png/erp.png";
import seo from "../../assets/png/seo.png";
import ai from "../../assets/png/ai.png";
import eCommerce from "../../assets/png/e-commerce-icon.png";
import dsBi from "../../assets/png/data-science-and-bi-business-intelligence-icon.png";
import dgitalMarketing from "../../assets/png/digital-marketing-icon.png";

const cards=[
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
const ServicesHomeSection = () => {
  return (
    <section className="bg-services-background bg-cover flex flex-wrap ">
    <div className="w-full lg:w-[33%]  p-8 lg:p-16">
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
    <div className=" overflow-x-scroll scrolling-touch w-full lg:w-[60%] pt-[50px] ">
      <div className="flex">
        {cards.map((card, index) => (
        <div  key={index} className='min-w-[340px]'>

          <ServiceCard card={card} />
        </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ServicesHomeSection