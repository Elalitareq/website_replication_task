import Link from 'next/link'
import { raleway } from "@/app/font";
import React from 'react'

const ServicesHomeSection = () => {
  return (
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
  )
}

export default ServicesHomeSection