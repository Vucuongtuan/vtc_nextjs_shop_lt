import { IApiKeyboard, IApiMouse, IApiProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
type ProductCardProps = {
  data: IApiProduct[] | IApiKeyboard[] | IApiMouse[];
};
const ProductCard = ({ data }: ProductCardProps) => {
  // const newTotal = data?.total.toString();
  // const discountTotal =
  //   (parseFloat(newTotal.replace(/\./g, "").replace(",", ".")) *
  //     data?.discount_percent) /
  //   100;
  // const newDiscount = (data?.total - discountTotal).toString();
  // const urlHref = slugify(data?.name, { lower: true });
  return (
    <>
      {data?.map((item, index) => {
        const newTotal = item.total.toString();
        const discountTotal =
          (parseFloat(newTotal.replace(/\./g, "").replace(",", ".")) *
            item?.discount_percent) /
          100;
        const newDiscount = (item.total - discountTotal).toString();
        return (
          <Link
            href={`/details/${item._id}`}
            key={item._id}
            className="bg-white rounded-md shadow-md overflow-hidden relative"
          >
            <figure className="h-[250px] bg-white relative sm:h-[200px]">
              <Image
                height={500}
                width={500}
                src={item?.thumbnail[0]}
                alt={item?.description || item?.name}
                className="h-full w-full object-contain sm:object-cover hover:scale-110 transition duration-700"
              />
            </figure>
            <div className="card-body h-[200px ] sm:h-[200px] sm:px-1">
              <h2 className="card-title text-[0.88rem] sm:text-[0.7rem] ">
                {item.name}
              </h2>
              {index < 5 && (
                <div className="badge badge-secondary absolute top-2 right-2">
                  NEW
                </div>
              )}
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
          </Link>
        );
      })}
    </>
  );
};

export default ProductCard;
