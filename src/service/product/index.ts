import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
declare module "axios" {
  interface AxiosRequestConfig {
    next?: {
      revalidate: number;
    };
  }
}
const getDataBanner = async () => {
  let res = await http.get(`/banner/`, {
    next: { revalidate: 1000 },
  });

  return res.data;
};
const getDataLaptop = async (limit: number) => {
  let res = await http.get(`/product/laptop?limit=${limit || 10}`);
  return res.data;
};
const getDataTrend = async () => {
  let res = await http.get("/all-product/");
  return res.data;
};
const getDataMouse = async (limit: number) => {
  let res = await http.get(`/product/mouse?limit=${limit || 10}`);
  return res.data;
};
const getDataKeyboard = async (limit: number) => {
  let res = await http.get(`/product/keyboard?limit=${limit || 10}`);
  return res.data;
};
const getAllData = async () => {
  let res = await http.get("/all-product");
  return res.data;
};
const getDetailData = async (id: any) => {
  let res = await http.get(`/all-product?id=${id}`);
  return res.data;
};
const SigninAccount = async (username: string, password: string) => {
  let res = await http.post("/account/signin", {
    username,
    password,
  });
  return res;
};
export {
  getDataBanner,
  getDataLaptop,
  getDataMouse,
  getAllData,
  getDetailData,
  getDataKeyboard,
  SigninAccount,
  getDataTrend,
};
