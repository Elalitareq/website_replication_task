import Link from 'next/link';
import React from 'react';

const CustomLink = ({ path, pathname, label ,closeNav,textColored,isNavOpen}) => {
  let isActive 
  if (pathname!=="/"){
    isActive= path.split("/")[1] === (pathname.split("/")[1]||path);

  }else{
isActive=path===pathname
  }
  const isAbout=(pathname==="/about"||pathname==="/contact"||pathname==="/careers")
  return (
    <Link href={path}
    onClick={()=>closeNav()}
        className={`px-2 mx-[15px] rounded py-[5px] transition-colors duration-150 border border-transparent cursor-pointer  active:shadow-[rgba(13,110,253,.25)_0_0_0_0.25rem]  ${
          isActive ? 'bg-primary text-white' : isAbout&&!textColored&&!isNavOpen? 'bg-transparent text-white':'bg-transparent text-secondary'
        } hover:bg-primary hover:text-white`}
      >
        {label}
    </Link>
  );
};

export default CustomLink;
