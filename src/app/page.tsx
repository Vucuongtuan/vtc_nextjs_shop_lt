import { Container } from "@mui/material";
import {
  getDataKeyboard,
  getDataLaptop,
  getDataMouse,
} from "@/service/product";
import { Suspense, lazy } from "react";
import Banner from "@/components/banner";
import ProductTrend from "@/components/productTrend";
import ListProduct from "@/components/listProduct";

export default async function Home() {
  const [dataLaptop, dataMouse, dataKeyboard]: [any, any, any] =
    await Promise.all([getDataLaptop(8), getDataMouse(8), getDataKeyboard(8)]);
  const newLaptop = dataLaptop.data.reverse();
  const newMouse = dataMouse.data.reverse();
  const newKeyboard = dataKeyboard.data.reverse();
  return (
    <main className=" min-h-screen items-center justify-between bg-[#f2f2f2]">
      <Container>
        {" "}
        <Banner />
        <ProductTrend />
        <>
          <Suspense fallback={<p>Loading feed...</p>}>
            <ListProduct name={"LapTop mới nhất"} data={newLaptop} />
          </Suspense>
          <Suspense fallback={<p>Loading feed...</p>}>
            <ListProduct name={"Chuột mới nhất"} data={newMouse} />
          </Suspense>
          <Suspense fallback={<p>Loading feed...</p>}>
            <ListProduct name={"Bàn phím mới nhất"} data={newKeyboard} />
          </Suspense>
        </>
      </Container>
    </main>
  );
}
