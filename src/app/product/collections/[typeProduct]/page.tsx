import { Breadcrumbs, Container, Typography } from "@mui/material";
import {} from "next";
import Link from "next/link";
import React from "react";

const TypeProductPage = ({ params }: { params: { typeProduct: string } }) => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" className="py-2">
        <Link href="/" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Trang chủ
        </Link>
        <Link color="inherit" href="">
          {params.typeProduct}
        </Link>{" "}
      </Breadcrumbs>
      <section>
        <div className="w-full h-[200px] bg-red-500"></div>
      </section>
    </Container>
  );
};
export default TypeProductPage;
