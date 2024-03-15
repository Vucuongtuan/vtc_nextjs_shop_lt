// "use client";

// import { getDataToBrands } from "@/service/product";
// import { IApiKeyboard, IApiMouse, IApiProduct } from "@/types/types";
// import { useQuery } from "@tanstack/react-query";
// import { useSearchParams } from "next/navigation";
// import { ReactNode, useEffect, useState } from "react";

// const ContentListProduct = ({ params }: { params: { namePage: string } }) => {
//   const router = useSearchParams();
//   const idBrand = router.get("id_brand") ?? "";
//   const min = router.get("min") ?? "";
//   const max = router.get("max") ?? "";
//   const { data, isLoading, error, refetch, isFetching } = useQuery({
//     queryKey: ["getDataToBrands"],
//     queryFn: () => getDataToBrands(idBrand, params.namePage),
//     refetchInterval: 600000,
//   });
//   console.log("====================================");
//   console.log(data);
//   console.log("====================================");
//   useEffect(() => {
//     refetch();
//   }, [idBrand, params.namePage]);

//   if (error !== null) {
//     const { response, message }: any = error;
//     if (response && response.status === 404) {
//       return <>Không có dữ liệu</>;
//     }
//   }
//   return (
//     <>
//       {!isFetching ? (
//         <section className=" h-full w-full pb-2 px-1 grid grid-cols-3 grid-flow-row gap-3 md:grid-cols-3 sm:grid-cols-2">
//           <ProductCard data={data?.data} />
//         </section>
//       ) : (
//         <section className=" h-full w-full pb-2 px-1 grid grid-cols-3 grid-flow-row gap-3 md:grid-cols-3 sm:grid-cols-2">
//           {Array(12)
//             .fill(0)
//             .map((item) => (
//               <Skeleton key={item} />
//             ))}
//         </section>
//       )}
//     </>
//   );
// };
// export default ContentListProduct;
"use client";

import ProductCard from "@/components/productCard";
import { getDataToBrands } from "@/service/product";
import { IApiKeyboard, IApiMouse, IApiProduct } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const ContentListProduct = ({ params }: { params: { namePage: string } }) => {
  const router = useSearchParams();
  const idBrand = router.get("id_brand") ?? "";
  const min = router.get("min") ?? "";
  const max = router.get("max") ?? "";
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["getDataToBrands"],
    queryFn: () => getDataToBrands(idBrand, params.namePage),
    refetchInterval: 600000,
  });
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  useEffect(() => {
    refetch();
  }, [idBrand, params.namePage]);

  if (error !== null) {
    const { response, message }: any = error;
    if (response && response.status === 404) {
      return <>Không có dữ liệu</>;
    }
  }
  return (
    <>
      <section className=" h-full w-full pb-2 px-1 grid grid-cols-3 grid-flow-row gap-3 md:grid-cols-3 sm:grid-cols-2">
        <ProductCard data={data?.data} />
      </section>
    </>
  );
};
export default ContentListProduct;
