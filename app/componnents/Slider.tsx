"use client";

import Image from "next/image";

import ImageCard from "./ImageCard";

const Slider = () => {
  return (
    <section className="flex justify-center items-center my-0 md:my-32 m relative pb-32 z-10 h-auto flex-col-reverse ">
      <div className="md:absolute -bottom-[200px] right-56 w-auto md:-bottom-[80px] md:right-20 aspect-video h-[350px] bg-green-50/95 z-50 px-12 py-16 rounded-3xl  text-gray-10 space-y-8 sm:flex justify-center items-center flex-col sm:mt-8 ms:scale-50">
        <Image
          src="./quote.svg"
          height={150}
          width={150}
          alt="guote"
          className="absolute z-30 -right-10 bottom-6"
        />
        <div className=" px-8 mx-8">
          <h1 className="text-5xl ">
            <span className="font-extrabold ">Feeling lost</span> and <br /> not
            knowing the way
          </h1>
          <p className="regular-16 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            ducimus pariatur aliquam consectetur eum cumque debitis quis
            nesciunt eligendi, ad facilis vitae impedit omnis quidem voluptates
            tempora totam, exercitationem et?
          </p>
        </div>
      </div>

      <ImageCard />
    </section>
  );
};

export default Slider;
