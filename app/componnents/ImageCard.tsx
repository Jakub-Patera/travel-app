"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CAMP_SLIDER } from "@/constants";
import { motion } from "framer-motion";

const ImageCard = () => {
  const [currentCampIndex, setCurrentCampIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCampIndex((prevIndex) => (prevIndex + 1) % CAMP_SLIDER.length);
    }, 8000); // 5 seconds interval

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <motion.div
        key={currentCampIndex}
        initial={{ x: "150%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="w-4/5 relative z-40"
        style={{ display: "flex" }}
      >
        {CAMP_SLIDER.map((camp, index) => (
          <motion.div
            key={index}
            initial={{ x: index === currentCampIndex ? 0 : "100%" }}
            animate={{ x: index === currentCampIndex ? 0 : "100%" }}
            exit={{ x: index === currentCampIndex ? 0 : "-100%" }}
            transition={{ duration: 5, ease: "easeInOut" }}
            className="min-h-[550px] aspect-video bg-cover bg-center rounded-5xl"
            style={{
              backgroundImage: CAMP_SLIDER[index].image, // Use the background image here
              display: index === currentCampIndex ? "block" : "none",
              width: "100%",
            }}
          >
            <div className="relative z-30 flex justify-start items-center gap-2 top-16 left-16 ">
              <Image
                src="/folded-map.svg"
                width={60}
                height={60}
                alt="map-icon"
                className="bg-green-50 rounded-full p-3"
              />
              <div className="section text-gray-10">
                <h2 className="bold-18">{camp.name}</h2>
                <p className="regular-16">{camp.place}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ImageCard;
