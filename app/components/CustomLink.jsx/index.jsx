import Link from 'next/link';
import React from 'react';

const CustomLink = ({ path, pathname, label }) => {
  const isActive = path === pathname;

  return (
    <Link href={path}
        className={`px-2 mx-[15px] rounded py-[5px] transition-colors duration-150 border border-transparent cursor-pointer ${
          isActive ? 'bg-primary text-white' : 'bg-transparent text-secondary'
        } hover:bg-primary hover:text-white`}
      >
        {label}
    </Link>
  );
};

export default CustomLink;
