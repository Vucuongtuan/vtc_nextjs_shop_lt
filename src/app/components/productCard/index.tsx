import { IApiKeyboard, IApiMouse, IApiProduct } from "@/types/types";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
  data: IApiProduct[] | IApiKeyboard[] | IApiMouse[];
};
const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <>
      {data?.map((item) => {
        const newTotal = item.total.toString();
        const discountTotal =
          (parseFloat(newTotal.replace(/\./g, "").replace(",", ".")) *
            item?.discount_percent) /
          100;
        const newDiscount = (item.total - discountTotal).toString();
        return (
          <div
            className="card h-[450px]  shadow-xl bg-white rounded-md   mt-2 sm:h-[400px]"
            key={item._id}
          >
            <figure className="h-[250px] relative sm:h-[200px]">
              <Image
                fill
                priority
                src={item?.thumbnail[0]}
                alt={item?.description || item?.name}
                className="object-contain sm:object-cover"
              />
            </figure>
            <div className="card-body h-[200px ] sm:h-[200px] sm:px-1">
              <h2 className="card-title text-[0.9rem] sm:text-[0.7rem] ">
                {item.name}
              </h2>
              <div className="badge badge-secondary absolute top-2 right-2">
                NEW
              </div>
              <p className="text-red-500 font-medium flex flex-col">
                <div className="text-[0.7rem] sm:text-[0.7em]">
                  <del className="text-[#c7c8c9] ">
                    {newTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                  </del>
                  <span className="ml-4">
                    {"-" + item?.discount_percent + "%"}
                  </span>
                </div>
                <span className="sm:text-[0.9rem]">
                  {newDiscount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                </span>{" "}
              </p>
              <div className="card-actions justify-end mt-2 sm:mt-1 ">
                <div className="badge badge-outline sm:text-[0.7em]">
                  {item?.totalPurchases || 0} đã bán
                </div>
                <div className="badge badge-outline sm:text-[0.7em]">
                  Còn {item?.inventory}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
