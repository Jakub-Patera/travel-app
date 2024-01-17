import {
  FOOTER_NAVIGATION_LEARN_MORE,
  FOOTER_NAVIGATION_OUR_COMMUNITY,
  SOCIAL_ICONS,
} from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <Image
        src='/hilink-logo.svg'
        alt='logo'
        width={100}
        height={100}
        className='flex md:hidden justify-center items-center w-full h-full scale-50'
      />
      <div className='flex justify-between items-start flex-wrap flex-shrink flex-row px-12 my-12 md:my-24 '>
        <div className=' hidden md:flex'>
          <Image src='/hilink-logo.svg' alt='logo' width={100} height={100} />
        </div>
        <div className=''>
          <h3 className='py-3 text-xl font-semibold'> Learn More</h3>
          <ul className='flex justify-start gap-1 items-start flex-col'>
            {FOOTER_NAVIGATION_LEARN_MORE.map((link) => (
              <Link href={link.href} key={link.title}>
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className=''>
          <h3 className='py-3 text-xl font-semibold'> Our Community</h3>
          <ul className='flex justify-start gap-1 items-start flex-col'>
            {FOOTER_NAVIGATION_OUR_COMMUNITY.map((link) => (
              <Link href={link.href} key={link.title}>
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className=''>
          <h3 className='py-3 text-xl font-semibold'> Contact Us</h3>
          <ul className='flex justify-start gap-1 items-start flex-col'></ul>
        </div>
        <div className=''>
          <h3 className='py-3 text-xl font-semibold'> Social</h3>
          <ul className='flex flex-grow justify-start items-start flex-col lg:flex-row gap-3'>
            {SOCIAL_ICONS.map((link) => (
              <Link href={link.href} key={link.title}>
                <Image src={link.icon} alt='icon' height={24} width={24} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <p className='regular-16 text-black text-center  border-t-2  w-4/5 px-10  py-8'>
          © 2021 HiLink. All rights reserved. Terms of Service Privacy Policy
        </p>{' '}
      </div>
    </>
  );
};

export default Footer;
