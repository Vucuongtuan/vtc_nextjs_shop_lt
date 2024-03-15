import http from "@/utils/http";

export const SigninAccount = async (
  username: string,
  password: string | number
) => {
  const res = await http.post("/account/signin", { username, password });
  return res.data;
};
