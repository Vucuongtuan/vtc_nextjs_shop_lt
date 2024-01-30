import Link from "next/link";
import React from "react";
import { IApiProduct, IApiMouse, IApiKeyboard } from "@/types/types";
import ProductCard from "../../productCard";
type ViewList = {
  data: IApiProduct[] | IApiMouse[] | IApiKeyboard[];
};
const ViewList = ({ data }: ViewList) => {
  return (
    <>
      {data.map((item) => (
        <ProductCard key={item._id} data={item} />
      ))}
    </>
  );
};

export default ViewList;
