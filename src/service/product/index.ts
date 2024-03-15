import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import { parse } from "path";
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
const getDataToBrands = async (
  id?: string,
  name?: string,
  // min?: string,
  // max?: string,
  limit?: number,
  page?: number
) => {
  let namePage: string = "";
  switch (name) {
    case "laptop":
      namePage = "laptop";
      break;
    case "chuot":
      namePage = "mouse";
      break;
    case "ban-phim":
      namePage = "keyboard";
      break;

    default:
      namePage = "";
      break;
  }

  let url = `/product/${namePage}`;
  if (id !== "") {
    url += `/brand/?id_brand=${id}`;
  }

  if (limit !== undefined) {
    url += `&limit=${limit}`;
  }

  if (page !== undefined) {
    url += `&page=${page}`;
  }
  // if (min !== undefined || max !== undefined) {
  //   url += `/price?min=${min}&max=${max}`;
  // }
  const res = await http.get(url);
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
const getAllData = async (id: string) => {
  const query = `/all-product?id=${id}`;
  let url;
  if (!query) {
    url = "/all-product";
  } else {
    url = query;
  }
  let res = await http.get(url);
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
const getBrand = async () => {
  const res = await http.get("/brands");
  return res.data;
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
  getBrand,
  getDataToBrands,
};
