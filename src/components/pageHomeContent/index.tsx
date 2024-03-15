"use client";
import React, { Suspense } from "react";
import ListProduct from "../listProduct";
import dynamic from "next/dynamic";

const ListProductLaptop = dynamic(() => import("../listProduct"));
const ListProductMouse = dynamic(() => import("../listProduct"));
const ListProductKeyboard = dynamic(() => import("../listProduct"), {
  ssr: false,
});
export const PageHomeContent = ({
  dataLaptop,
  dataMouse,
  dataKeyboard,
}: any) => {
  return (
    <>
      <ListProductLaptop name={"LapTop mới nhất"} data={dataLaptop.data} />
      <ListProductMouse name={"Chuột mới nhất"} data={dataMouse.data} />
      <ListProductKeyboard
        name={"Bàn phím mới nhất"}
        data={dataKeyboard.data}
      />
    </>
  );
};
