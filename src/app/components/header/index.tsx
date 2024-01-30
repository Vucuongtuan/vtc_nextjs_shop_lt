import React from "react";
import NavBar from "./navBar";

const menu = [
  {
    id: 1,
    name: "Trang chủ",
    href: "/",
  },
  {
    id: 2,
    name: "Laptop",
    href: "/product/laptop",
  },
  {
    id: 3,
    name: "Chuột",
    href: "/product/chuot",
  },
  {
    id: 4,
    name: "Bàn phím",
    href: "/product/ban-phim",
  },
];
const Header = () => {
  return (
    <header className="w-full h-[95px] bg-white text-black sm:h-[60px]">
      <NavBar menu={menu} />
    </header>
  );
};

export default Header;
