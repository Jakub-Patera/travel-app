'use client';

import { TRIP_DESCRIPTION } from '@/constants';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

const Hero = () => {
  const [currentTripIndex, setCurrentTripIndex] = useState(0);

  // Function to update the currentTripIndex
  const updateTripDescription = () => {
    setCurrentTripIndex((prevIndex) =>
      prevIndex === TRIP_DESCRIPTION.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Set an interval to update the trip description every 5 seconds
    const intervalId = setInterval(updateTripDescription, 5000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  const title = TRIP_DESCRIPTION[currentTripIndex].title;
  const words = title.split(' ');
  const firstWord = words[0];
  const restOfWords = words.slice(1).join(' ');

  return (
    <>
      <section className='max-container padding-container flex  flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 md:flex-row  sm:items-center '>
        <div className='hero-map relative -z-10' />

        {/* LEFT */}
        <div className='max-w-1/2 justify-center flex flex-col items-center'>
          <div className='relative z-30 flex flex-1 flex-col  xl:mr-32'>
            <Image
              src='/camp.svg'
              alt='camp'
              width={50}
              height={50}
              className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
            />

            {/* make slider - with more inpots from data and make infinite cycle */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentTripIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='lg:mr-16'
              >
                <h1 className='bold-52  '>
                  <span>{firstWord}</span> <br />
                  {restOfWords}
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                  className='regular-16 text-gray-30 lg:maw-w-[620px] mt-6 lg:mr-16'
                >
                  {TRIP_DESCRIPTION[currentTripIndex].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className=' flex flex-wrap gap-5 flex-row mt-3'>
            <div className='flex items-center gap-2'>
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    src='/star.svg'
                    alt='star'
                    width={24}
                    height={24}
                    key={index}
                  />
                ))}
            </div>
            <p className='bold-16 lg:bold-20 text-blue-70  '>
              {TRIP_DESCRIPTION[currentTripIndex].numOfrevs + 'K'}
              <span className='regular-16 lg:regular-20 ml-2 underline'>
                Good Reviews
              </span>
            </p>
            <div className=' flex w-full gap-3 sm:justify-center sm:flex-row md:justify-start items-center flex-col'>
              <Button
                type='button'
                title='Download App'
                variant='btn_green'
                icon=''
              />

              <Button
                type='button'
                title='How we work?'
                variant='btn_white_text'
                icon='/play.svg'
              />
            </div>
          </div>
        </div>
        {/* right */}

        <div className='relative flex flex-1 items-start md:right-20 z-20 md:-left-24 '>
          <div className='relative z-20 w-[268px] flex-col gap-8 rounded-3xl  bg-green-90 px-10 py-12 '>
            <div className='flex flex-col space-y-7'>
              <div className='flex flex-col '>
                <p className='text-gray-20 regular-16'>Location</p>

                <Image
                  src='/close.svg'
                  alt='close'
                  height={24}
                  width={24}
                  className=' absolute right-5 top-5 z-10'
                />
                <p className='text-gray-10 bold-16'>Aguas Calientes</p>
              </div>

              <div className=' flex flex-row flexBetween'>
                <div className='flex flex-col  justify-start items-start'>
                  <p className='text-gray-20 regular-16'>Distance</p>
                  <p className='text-gray-10 bold-16'>173.28 mi</p>
                </div>
                <div className='flex flex-col '>
                  <p className='text-gray-20 regular-16'>Elevation</p>
                  <p className='text-gray-10 bold-16'>2.040 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
