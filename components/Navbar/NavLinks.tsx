'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
  const pathName = usePathname();

  const NavLinkElements = [
    { name: 'MAIN MENU', link: '/' },
    { name: 'ABOUT DEVELOPER', link: '/about' },
    { name: 'PROJECTS', link: '/projects' },
    { name: 'CONTACT', link: '/contact' },
    { name: 'GITHUB', link: 'https://github.com/iamyogurthh' },
  ];

  return (
    <div>
      {NavLinkElements.map((item, index) => {
        const isActive = pathName === item.link;
        return (
          <Link href={item.link} key={index}>
            <div
              className={`font-mono h-11 max-w-75 flex items-center pl-5 mb-6 border-2 border-secondary  ${
                isActive
                  ? 'bg-secondary text-[#f07621]'
                  : 'text-secondary hover:bg-secondary hover:text-primary'
              }`}
            >
              {item.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
