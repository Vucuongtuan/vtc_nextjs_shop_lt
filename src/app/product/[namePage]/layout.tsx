import { Container, Typography } from "@mui/material";
import { getBrand } from "@/service/product";
import { SideBar } from "../components/SideBar";
import { IBrand } from "@/types/types";
import { Suspense } from "react";
import GlobalLoading from "@/components/loadingPage";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default async function ProductLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { namePage: string };
}>) {
  const dataBrand: IBrand[] = await getBrand();
  let Brands: IBrand[] = [];
  if (params.namePage === "laptop") {
    Brands = dataBrand.filter((brand) => brand.type === "Laptop");
  } else if (params.namePage === "ban-phim") {
    Brands = dataBrand
      .filter((brand) => brand.type.includes("Bàn phím"))
      .map((brand) => ({ ...brand }));
  } else if (params.namePage === "chuot") {
    Brands = dataBrand
      .filter((brand) => brand.type.includes("Chuột"))
      .map((brand) => ({ ...brand }));
  }

  Brands.unshift({
    _id: "all1",
    name: "Tất cả",
    description: "Tất cả",
    type: "Tất cả",
    thumbnail: "",
  });
  return (
    <Suspense fallback={<GlobalLoading />}>
      <main className="h-auto w-auto  bg-[#f2f2f2]">
        <Container>
          <Breadcrumbs data={params.namePage} />
          <div className="h-auto w-auto flex  mt-2 ">
            <SideBar dataBrand={Brands} params={params.namePage} />
            {children}
          </div>
        </Container>
      </main>
    </Suspense>
  );
}
