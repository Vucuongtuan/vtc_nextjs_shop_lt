import { getAllData } from "@/service/product";
import React from "react";
import SlideDetails from "../components/slideDetails";
import { Metadata } from "next";
import { ButtonAddToCart } from "./components/buttonAddToCart";
import { TButtonAddToCart } from "@/types/types";

const NamePageDatails = async ({ params }: { params: { id: string } }) => {
  const { data } = await getAllData(params.id);
  const item = data[0];
  const totalDis = (item.total * item?.discount_percent) / 100;
  const dataAddCart: TButtonAddToCart = {
    _id: item._id,
    thumbnail: item.thumbnail[0],
    name: item.name,
    total: item.total - totalDis,
    description: item.description,
  };
  return (
    <div className="h-auto sm:h-auto  text-black  rounded-md">
      <section className="w-full h-[500px] flex md:flex-col sm:flex-col md:h-[700px] sm:h-[650px]">
        <div className="w-[50%]   md:w-full md:h-[400px] sm:w-full sm:h-[400px]">
          <SlideDetails
            thumbnails={item?.thumbnail}
            description={data[0].description}
          />
        </div>
        <div className="flex flex-col ml-4 px-4 bg-white rounded-md">
          <h1 className="text-2xl font-semibold">{item?.name}</h1>
          <del className="  text-small pt-2">
            {item?.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " ₫"}
          </del>
          <span className="  text-3xl font-semibold text-red-600 pt-0">
            {(item.total - totalDis)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ₫"}
          </span>
          <div className="py-2 ">
            <ButtonAddToCart data={dataAddCart} />
          </div>
          <div className="  py-1 justify-between items-center  md:block md:flex-col  md:items-start md:px-2 sm:block">
            <div className="md:text-sm ml-2">
              <span className="pr-6">Số lượng:{item?.discount_percent}</span>
              <span className="pr-2">Lượt mua : {item?.totalPurchases}</span>
            </div>
          </div>
          <div className="py-1"></div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default NamePageDatails;
