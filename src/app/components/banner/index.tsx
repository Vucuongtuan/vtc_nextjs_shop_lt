import React from "react";
import SlideShow from "./slideShow";
import { getDataBanner } from "@/service/product";
import Link from "next/link";
import { IApiBanner } from "@/types/types";
import Image from "next/image";

const Banner = async () => {
  const data = await getDataBanner();
  const slideData = data.slice(0, 5);
  const bannerData: IApiBanner[] = data.slice(5, 7);
  const miniBanner: IApiBanner[] = data.slice(7);

  return (
    <section className="h-auto w-full mt-2 md:h-[610px] sm:h-[320px] ">
      <div className="w-full h-[390px]  grid grid-cols-6 grid-rows-2 md:grid-cols-1 md:grid-rows-3 md:h-[550px] sm:h-[290px] sm:grid-cols-1 sm:grid-rows-3">
        <div className="col-span-4 row-span-2 md:col-span-1">
          <SlideShow data={slideData} />
        </div>
        <div className="col-span-2 row-span-2 ml-2 h-full flex flex-col relative md:flex-row  md:mt-2  sm:pl-0  sm:flex-row sm:mt-2  ">
          {bannerData?.map((item) => (
            <Link
              href="#"
              key={item._id}
              className="relative rounded-md  h-2/4 w-full   last:mt-2 md:h-full  md:last:mt-0 sm:h-full sm:last:mt-0"
            >
              <Image
                fill
                priority
                src={item.thumbnail}
                alt={item.description}
                style={{ borderRadius: "6px" }}
                className="object-cover rounded-md  sm:object-fill "
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[130px] w-full mt-2  grid grid-cols-4 gap-1 md:hidden sm:hidden ">
        {miniBanner.map((item) => (
          <Link
            href="#"
            key={item._id}
            className="relative rounded-md h-full w-full  "
          >
            <Image
              fill
              priority
              src={item.thumbnail}
              alt={item.description}
              style={{ borderRadius: "6px" }}
              className="object-cover rounded-md  sm:object-cover "
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Banner;
