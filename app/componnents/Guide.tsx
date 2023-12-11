import React from "react";
import Image from "next/image";

const Guide = () => {
  return (
    <>
      <section className="flexCenter flex-col">
        <div className="padding-container max-container w-full pb-24">
          <Image
            src="/camp.svg"
            alt="camp"
            height={50}
            width={50}
          />
          <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
            We are here for yout
          </p>
          <div className="flex flex-wrap justify-between gap-5">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
              Guid you to Easy Path
            </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              rerum? Itaque vero eum fuga, sint porro consectetur tempora
              doloremque fugit. Eaque excepturi accusantium obcaecati quia
              beatae fugit odio similique fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eveniet doloremque quaerat
              recusandae ducimus id unde atque iure, alias voluptatem
              consequuntur tempora reiciendis inventore minus fugiat impedit
              corporis obcaecati dolorum officia?
            </p>
          </div>
        </div>

        <div className=" flexCenter max-container relative w-full ">
          <Image
            src="/boat.png"
            height={580}
            width={1440}
            alt="boat"
            className=" w-full object-cover object-center 2xl:rounded-5xl"
          />
          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-sm md:left-[5%] lg:top-20">
            <Image
              src="/meter.svg"
              alt="meter"
              height={158}
              width={16}
              className="h-full w-auto"
            />
            <div className=" flexBetween flex-col">
              <div className="flex w-full flex-col">
                <div className="flexBetween w-full">
                  <p className="regular-16 text-gray-20">Destination</p>
                  <p className="bold-18 text-green-50">48 min</p>
                </div>
                <p className="bold-20 mt-2">Aguas Calientes</p>
              </div>
              <div className="flex w-full flex-col">
                <div className="flexBetween w-full">
                  <p className="regular-16 text-gray-20">Starting point</p>
                </div>
                <p className="bold-20 mt-2">Wonorejo Pasuruan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;
