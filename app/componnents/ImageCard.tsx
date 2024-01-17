import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CAMP_SLIDER } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

const ImageCard = () => {
  const [currentCampIndex, setCurrentCampIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCampIndex((prevIndex) => (prevIndex + 1) % CAMP_SLIDER.length);
    }, 9000); // Interval 8 sekund

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container relative z-40 flex justify-center">
      <AnimatePresence>
        <motion.div
          key={currentCampIndex}
          initial={{ x: "150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }} // Pouze posun a změna průhlednosti
          transition={{ duration: 3, ease: "linear" }}
          className=" min-w-[1280px] min-h-[720px] aspect-video rounded-5xl overflow-hidden relative z-10 "
        >
          <Image
            src={CAMP_SLIDER[currentCampIndex].image}
            alt="Camp Image"
            height={720}
            width={1280}
          />
          <div className="relative z-30 flex justify-start items-center gap-2 top-16 left-16 ">
            <Image
              src="/folded-map.svg"
              width={60}
              height={60}
              alt="map-icon"
              className="bg-green-50 rounded-full p-3"
            />
            <div className="section text-gray-10">
              <h2 className="bold-18">{CAMP_SLIDER[currentCampIndex].name}</h2>
              <p className="regular-16">
                {CAMP_SLIDER[currentCampIndex].place}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageCard;
