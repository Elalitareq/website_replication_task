import React from "react";

const routes = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About Us" },
  { path: "/careers", label: "Careers" },
  { path: "/contact", label: "Contact Us" },
];

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-between">
        {routes.map((route, index) => {
          return <Link key={index} href={route.path}>{route.label}</Link>;
        })}
      </nav>
    </header>
  );
};

export default Header;
