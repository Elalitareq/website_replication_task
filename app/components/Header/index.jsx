'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/png/acksession_logo.png";
import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink.jsx";

// application routes
const routes = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About Us" },
  { path: "/careers", label: "Careers" },
  { path: "/contact", label: "Contact Us" },
];

const Header = () => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky inset-0 w-full lg:px-[50px] lg:py-2 lg:flex lg:items-center transition duration-300 ${
        scrollPosition > 50 ? "bg-light" : "bg-white"
      }`}
    >
      <Image
        src={logo}
        alt="acksession logo"
        width={285}
        height={"auto"}
        className="mt-[25px] mr-4 py-[5px]"
      />
      <nav className="flex lg:flex-row lg:items-center lg:justify-end  lg:flex-grow lg:p-4 ">
        {routes.map((route, index) => {
          return (
            <CustomLink
              path={route.path}
              label={route.label}
              pathname={pathname}
              key={index}
            />
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
