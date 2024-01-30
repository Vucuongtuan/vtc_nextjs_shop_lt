"use client";
import { IApiBanner } from "@/types/types";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { clearInterval } from "timers";

const SlideShow = ({ data }: { data: IApiBanner[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel w-full h-full">
      {data.map((item, index) => (
        <div
          key={item._id}
          className={`carousel-item relative w-full transition-opacity duration-700  ${
            index === currentSlide
              ? "block opacity-100"
              : "hidden opacity-0 pointer-events-none"
          }`}
        >
          <Image
            fill
            priority
            src={item.thumbnail}
            alt={item.description}
            className="w-full object-cover relative rounded-md sm:object-fill"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <IconButton onClick={handlePrev} className="btn btn-circle">
              ❮
            </IconButton>
            <IconButton onClick={handleNext} className="btn btn-circle">
              ❯
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
