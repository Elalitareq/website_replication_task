import React from "react";
import whiteLogo from "../../assets/png/acksession_logo_white.png";
import Image from "next/image";
import emailIcon from "../../assets/png/email.png"
import Link from "next/link";

const routes = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About Us" },
  { path: "/careers", label: "Careers" },
  { path: "/contact", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-footer-background px-[50px] pt-12 pb-5 flex flex-wrap text-white ">
      <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-4">
        {" "}
        <Image src={whiteLogo} alt="acksession logo"width={220} height={70}   className="w-[70%]"/>
      </div>

      <nav className="w-full md:w-1/4  px-4 columns-2">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className="block hover:text-primary transition-color duration-200 pr-2 py-1 mb-2"
            >
              {route.label}
            </Link>
          ))}
      </nav>

      <div className="w-full md:w-1/4 mb-6 md:mb-0 px-4">
        <h3 className="text-lg font-medium ">Contact Us</h3>
        <span><Image src={emailIcon} className="inline mr-1" alt="emailIcon" width={20} height={20}/>info@acksession.com</span>
      </div>

      <div className="w-full md:w-1/4 pl-4">
        <h3 className="text-lg font-medium ">Our Locations</h3>
        <span>info@acksession.com</span>
      </div>
    </footer>
  );
};

export default Footer;
