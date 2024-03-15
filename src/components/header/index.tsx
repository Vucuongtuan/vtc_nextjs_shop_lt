import React from "react";
import NavBar from "./navBar";
import { Container } from "@mui/material";

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
    drop: [
      { id: 1, name: "Laptop Asus", href: "/product/laptop/asus" },
      { id: 2, name: "Laptop Acer", href: "/product/laptop/acer" },
      { id: 3, name: "Laptop Lenovo", href: "/product/laptop/lenovo" },
      { id: 4, name: "Laptop Gigabyte", href: "/product/laptop/gigabyte" },
      { id: 5, name: "Laptop MSI", href: "/product/laptop/msi" },
      { id: 6, name: "Laptop HP", href: "/product/laptop/hp" },
      { id: 7, name: "Laptop DELL", href: "/product/laptop/dell" },
    ],
  },
  {
    id: 3,
    name: "Chuột",
    href: "/product/chuot",
    drop: [
      { id: 1, name: "Chuột Logitech", href: "/product/chuot/logitech" },
      { id: 2, name: "Chuột Razer", href: "/product/chuot/razer" },
      {
        id: 3,
        name: "Chuột Color Master",
        href: "/product/chuot/color-master",
      },
      { id: 4, name: "Chuột DareU", href: "/product/chuot/dare-u" },
      { id: 5, name: "Chuột Corsair", href: "/product/chuot/corsair" },
      { id: 5, name: "Chuột Asus", href: "/product/chuot/asus" },
    ],
  },
  {
    id: 4,
    name: "Bàn phím",
    href: "/product/ban-phim",
    drop: [
      { id: 1, name: "Bàn phím Logitech", href: "/product/ban-phim/logitech" },
      { id: 2, name: "Bàn phím Razer", href: "/product/ban-phim/razer" },
      {
        id: 3,
        name: "Bàn phím Color Master",
        href: "/product/chuot/color-master",
      },
      { id: 4, name: "Bàn phím DareU", href: "/product/ban-phim/dare-u" },
      { id: 5, name: "Bàn phím Corsair", href: "/product/ban-phim/corsair" },
      { id: 6, name: "Bàn phím Asus", href: "/product/ban-phim/asus" },
      { id: 7, name: "Bàn phím AKKO", href: "/product/ban-phim/asus" },
    ],
  },
];
const Header = () => {
  return (
    <header className="w-full h-[95px]  text-black sm:h-[60px]">
      <Container>
        <NavBar menu={menu} />
      </Container>
    </header>
  );
};

export default Header;
