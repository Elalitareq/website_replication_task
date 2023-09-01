"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/png/acksession_logo.png";
import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink.jsx";
import whiteLogo from "../../assets/png/acksession_logo_white.png"
import ToggleTheme from "../toggleLightAndDarkModeButton";
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
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header
      className={`fixed inset-0 w-full transition-colors duration-500 h-28 lg:h-36 z-50  ${
        scrollPosition > 50 || isNavOpen ? "bg-light" : "bg-transparent"
      }`}
    >
      <div className="lg:w-full px-4 lg:px-[50px] py-4 lg:py-4 flex items-center justify-between relative">
        <Image
          src={isNavOpen?logo:(pathname==="/about"||pathname==="/careers")&&scrollPosition<50?whiteLogo:logo}
          alt="acksession logo"
          width={285}
          height={"auto"}
          className="mt-1 mr-4 py-[5px] w-[200px] lg:w-[285px]"
        />

        <button
          onClick={toggleNav}
          className={`nav-icon lg:hidden ${isNavOpen ? "open" : ""} ${(pathname==="/about"||pathname==="/careers")&&scrollPosition<50?"scary":""}`}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`${
            isNavOpen ? "max-h-56 visible" : "max-h-0 invisible"
          } bg-light  lg:max-h-52 lg:visible px-16 lg:px-4 pb-4 text-center flex lg:bg-transparent flex-col lg:flex-row lg:items-center absolute top-full left-0 lg:static w-full lg:w-auto overflow-hidden lg:overflow-auto transition-all duration-400 ease-in-out lg:flex lg:flex-grow lg:py-2 justify-end`}
          >
          {routes.map((route, index) => (
            <CustomLink
            textColored={scrollPosition>50}
            isNavOpen={isNavOpen}
            closeNav={closeNav}
            path={route.path}
            label={route.label}
            pathname={pathname}
            key={index}
            />
            ))}
            <ToggleTheme/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
