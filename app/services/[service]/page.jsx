import { raleway } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { serviceData } from "./data";

const Service = ({ params }) => {
  const { title, description, sub, services, image } =
    serviceData[params.service];
  return (
    <div className="">
      <div className="flex flex-wrap flex-row px-8 lg:px-[50px]">
        <div className="py-[50px] w-full lg:w-1/2">
          <Link href="/services" className={`mb-6 ${raleway.className}`}>
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
            Services
          </Link>
          <h2 className="text-3xl font-bold text-primary my-8">{title}</h2>
          <p className={`text-xl text-black mt-16 ${raleway.className}`}>
            {description}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={image}
            alt={title}
            className="m-auto w-full  lg:w-[70%]"
          />
        </div>
      </div>
      <div className="bg-light px-4 lg:px-[50px] w-full pt-24 lg:pt-16 pb-24 relative">
        <span className="bg-[#00ADD2] text-white text-2xl  rounded px-4 py-2 -top-3 absolute">
          Need an advice? Talk to our experts
        </span>
        <h2 className="text-3xl font-bold text-primary ">{sub.title}</h2>
        <p className={`text-xl text-black mt-6 ${raleway.className}`}>
          {sub.description}
        </p>
        <div className="flex flex-row pt-16 flex-wrap">
          {services.map((service, index) => (
            <div className=" w-full lg:w-1/2 flex flex-row flex-wrap my-4" key={index}>
              <div className="w-full lg:w-1/4 my-2 ">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="p-4 rounded-full bg-white"
                />
              </div>

              <div className="px-2 lg:px-8 w-full lg:w-3/4">
                <h3 className="text-2xl text-secondary ">{service.title}</h3>
                <p className={`text-xl mt-4 ${raleway.className}`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
