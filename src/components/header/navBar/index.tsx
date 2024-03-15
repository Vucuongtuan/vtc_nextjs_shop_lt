"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import FormLoginAndRegister from "../../formLogin";
import { Container } from "postcss";
import Link from "next/link";
import { ModeToggle } from "../../ModeToggle";
import { TButtonAddToCart } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckCartLocal,
  setIsOpenModalCart,
} from "@/lib/features/checkCartLocal";
import Cart from "../../cart";
import SearchBox from "../search";
interface IMenu {
  id: number;
  name: string;
  href: string;
}
const NavBar = ({ menu }: { menu: IMenu[] }) => {
  const dispatch = useDispatch();
  const [isOpenModalLogin, setIsOpenModalLogin] =
    React.useState<boolean>(false);

  const [cartTotal, setCartTotal] = React.useState<number>(0);
  const typeCheck = useSelector(
    (state: any) => state.checkCartLocal.checkCartLocal
  );
  const dataCart = useSelector((state: any) => state.checkCartLocal.arrayCart);
  const handleOpenModel = React.useCallback(
    () => setIsOpenModalLogin(true),
    []
  );

  useEffect(() => {
    const total = dataCart.reduce((acc: number, currentItem: any) => {
      return acc + currentItem.total;
    }, 0);

    setCartTotal(total);
    dispatch(setCheckCartLocal(false));
  }, [dataCart]);
  const drawerUI = () => (
    <div className="drawer hidden sm:block sm:z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="drawer-side">
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="float-right"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </label>
          {menu.map((item) => (
            <li key={item.id} className="mr-[16px] last:mr-0">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  const checkLogin = () => {
    const checkToken = Cookies?.get("userToken");
    if (checkToken) {
      const usernameLocal = localStorage.getItem("userData") ?? "";
      const parseJson = JSON.parse(usernameLocal);

      return (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 rounded-full relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-white"
          >
            <span className="px-3">Username : {parseJson.userName}</span>
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a
                onClick={() => {
                  Cookies.remove("userToken");
                  localStorage.removeItem("userData");
                  window.location.reload();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return <Button onClick={handleOpenModel}>Đăng nhập</Button>;
    }
  };

  return (
    <div className=" w-full  h-[60%] m-auto ">
      <div className="navbar  ">
        <div className="flex-1">
          <div className="flex">
            {drawerUI()}
            <h1 className="btn btn-ghost text-xl">LAPTOP_VTC</h1>
          </div>{" "}
          <div className="m-auto relative">{/* <SearchBox /> */}</div>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {dataCart?.length || 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-[300px] bg-base-100 shadow"
            >
              {" "}
              <div className="card-body bg-white">
                <span className="font-bold text-lg">
                  {" "}
                  {dataCart?.length || 0} Items
                </span>
                <span className="text-info">
                  Subtotal:{" "}
                  {cartTotal?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  VND
                </span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => dispatch(setIsOpenModalCart(true))}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {checkLogin()}
        </div>
      </div>
      <nav>
        <ul className="flex items-center h-full relative z-10 w-full sm:hidden">
          {menu.map((item) => (
            <Link href={item.href} key={item.id} className="">
              <Button className="">{item.name}</Button>
            </Link>
          ))}
        </ul>
      </nav>
      <FormLoginAndRegister
        isOpenModalLogin={isOpenModalLogin}
        setIsOpenModalLogin={setIsOpenModalLogin}
      />
      {/* <Cart open={isOpenModalCart} /> */}
    </div>
  );
};

export default NavBar;
