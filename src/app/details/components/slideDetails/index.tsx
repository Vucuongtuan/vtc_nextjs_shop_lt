"use client";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useCallback, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
interface ISlideDetailsProps {
  thumbnails: string[];
  description: string;
}
const SlideDetails = ({ thumbnails, description }: ISlideDetailsProps) => {
  const [countImageIndex, setCountImageIndex] = useState<number>(0);

  const handelNextThumbnail = useCallback(() => {
    if (countImageIndex >= 0 && countImageIndex <= thumbnails.length) {
      setCountImageIndex((prev: number) => prev + 1);
    } else {
      setCountImageIndex(0);
    }
  }, []);
  const handelPrevThumbnail = useCallback(() => {
    if (countImageIndex >= 0 && countImageIndex <= thumbnails.length) {
      setCountImageIndex((prev: number) => prev - 1);
    } else {
      setCountImageIndex(0);
    }
  }, []);
  return (
    <div className="h-full py-2 px-2 bg-white rounded-md">
      <div className="carousel h-full w-full relative rounded-sm overflow-hidden transition-opacity duration-500 ease-in-out">
        <Image
          height={400}
          width={400}
          src={thumbnails[countImageIndex]}
          alt={description || "VTC Computer"}
          className="carousel-item rounded-sm h-full w-full transition-opacity duration-500 ease-in-out object-contain md:object-contain"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <IconButton
            aria-label="prev"
            size="large"
            onClick={handelPrevThumbnail}
            disabled={countImageIndex === 0}
            className={countImageIndex === 0 ? "cursor-not-allowed" : ""}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="next"
            size="large"
            disabled={countImageIndex === thumbnails.length - 1}
            className={
              countImageIndex === thumbnails.length - 1
                ? "cursor-not-allowed"
                : ""
            }
            onClick={handelNextThumbnail}
          >
            <ArrowForwardIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SlideDetails;
