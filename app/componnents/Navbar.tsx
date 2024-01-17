'use client';
import { MAIN_NAVIGATION } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div className=' '>
      <nav className='flexBetween max-container padding-container py-5   z-30 sticky '>
        <Link href='/'>
          <Image src='/hilink-logo.svg' alt='logo' width={97} height={29} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {MAIN_NAVIGATION.map((link) => (
            // add links here to redrect to the page  when clicked
            <Link
              href={link.href}
              key={link.title}
              className='text-gray-50 regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className='lg:flexCenter hidden'>
          <Button
            type='button'
            title='Login'
            icon='/user.svg'
            variant='btn_dark_green'
          />
        </div>
        <Image
          src='/menu.svg'
          onClick={() => setIsOpen(!isOpen)}
          alt='menu'
          height={32}
          width={32}
          className='inline-block cursor-pointer lg:hidden'
        />
      </nav>
      {isOpen && (
        <div
          className=' fixed top-0 right-0 w-2/3 h-full bg-white z-50 text-mine-shaft-50  flex justify-evenly pb-8 '
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='flex justify-center items-center flex-col '>
            <div className=' absolute top-5 right-5'>
              <IoMdClose
                onClick={() => setIsOpen(!isOpen)}
                className='w-12 h-12'
              />
            </div>
            <div className=' flex justify-between flex-col h-full mt-11'>
              <ul className='flex items-center flex-col gap-8 mt-32  '>
                {MAIN_NAVIGATION.map((link) => (
                  <Link
                    // add links here to redrect to the page  when clicked
                    href={link.href}
                    key={link.title}
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-gray-50 regular-32 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>

    // mobile menu
  );
};

export default Navbar;
