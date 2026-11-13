// components/Navbar/MobileNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavLinkElements = [
  { name: 'MAIN MENU', link: '/' },
  { name: 'ABOUT DEVELOPER', link: '/about' },
  { name: 'PROJECTS', link: '/projects' },
  { name: 'CONTACT', link: '/contact' },
  { name: 'GITHUB', link: 'https://github.com/iamyogurthh' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex items-center justify-between w-full p-4 border-b-2 border-secondary absolute z-50">
      <span className="font-interblack text-xs tracking-[3px] text-secondary">
        SAI EAIN KHANT
      </span>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 border-2 border-secondary text-secondary font-monospace text-xs"
        aria-label="Toggle Menu"
      >
        {isOpen ? '[CLOSE X]' : '[MENU ☰]'}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-primary z-50 p-6 flex flex-col justify-between border-b-2 border-secondary overflow-y-auto">
          <div>
            <div className="mb-6">
              <p className="text-[11px] font-monospace font-bold tracking-[4px] mb-2 text-secondary">
                SOFTWARE DEVELOPER
              </p>
              <p className="text-[8px] font-monospace font-bold tracking-[4px] mb-2 text-secondary">
                UNIT_01 // PORT — 2003
              </p>
              <div className="text-[8px] font-monospace font-bold tracking-[2px] max-w-30 py-1 pl-2 bg-secondary text-primary inline-block">
                ● SYSTEM ONLINE
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              {NavLinkElements.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    href={item.link}
                    key={index}
                    onClick={() => setIsOpen(false)}
                  >
                    <div
                      className={`h-11 flex items-center pl-5 border-2 border-secondary ${
                        isActive
                          ? 'bg-secondary text-[#f07621]'
                          : 'hover:bg-secondary hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Footer Graphics */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-secondary/20">
            <Image
              src="/assets/prototype.svg"
              width={100}
              height={50}
              alt="prototype"
            />
            <Image src="/assets/toxic.svg" width={40} height={40} alt="toxic" />
          </div>
        </div>
      )}
    </div>
  );
}
