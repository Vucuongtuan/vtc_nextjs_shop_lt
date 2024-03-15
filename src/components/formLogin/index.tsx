"use client";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { SignInResponse, signIn } from "next-auth/react";
import Cookies from "js-cookie";
import { memo } from "react";
import { SigninAccount } from "@/service/user";
const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  height: "50vh",
  bgcolor: "background.paper",
  boxShadow: 50,
  borderRadius: "8px",
  p: 4,
};
interface IHookForm {
  Account: string;
  PassWord: string;
}
interface IResponseLogin {
  token: string;
  username: string;
  userId: string;
}
type TMethodLogin = {
  id: string | number;
  name: string;
  icon: () => JSX.Element;
  color?: string;
  onClick?: () => void | Promise<SignInResponse | undefined> | null;
};
const methodLogin: TMethodLogin[] = [
  {
    id: 1,
    name: "Github",
    icon: () => <GitHubIcon fontSize="small" />,
    color: "#010409",
    onClick: () => signIn("github"),
  },
  {
    id: 2,
    name: "Facebook",
    icon: () => <FacebookIcon fontSize="small" />,
    color: "#0866ff",
    onClick: () => signIn("facebook"),
  },
  {
    id: 3,
    name: "Google",
    icon: () => <GoogleIcon fontSize="small" />,
    color: "#ffffff",
    onClick: () => signIn("google"),
  },
];
const FormLoginAndRegister = ({
  isOpenModalLogin,
  setIsOpenModalLogin,
}: {
  isOpenModalLogin: boolean;
  setIsOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IHookForm>();
  const onSubmit = async (data: IHookForm) => {
    const username = data.Account;
    const password = data.PassWord;
    await SigninAccount(username, password).then((res: IResponseLogin) => {
      console.log("====================================");
      console.log(res.username);
      console.log("====================================");
      Cookies.set("userToken", res.token);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userName: res.username,
          userId: res.userId,
        })
      );
      setIsOpenModalLogin(false);
      reset();
    });
  };

  return (
    <Modal
      open={isOpenModalLogin}
      onClose={() => setIsOpenModalLogin(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Đăng nhập
        </Typography>
        <div id="modal-modal-description" className="mt-2">
          <div className="w-full h-full  grid grid-cols-3 grid-rows-3">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="w-full h-full  col-span-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-span-2 row-span-2 flex flex-col pr-40 justify-start">
                <TextField
                  id="standard-basic"
                  label="Tài khoản"
                  variant="standard"
                  className="mb-5"
                  error={!!errors.Account}
                  {...register("Account", { required: true, maxLength: 80 })}
                />
                <TextField
                  id="standard-basic"
                  label="Mật khẩu"
                  variant="standard"
                  error={!!errors.PassWord}
                  {...register("PassWord", {
                    required: true,
                    maxLength: 80,
                  })}
                />
                <input
                  type="submit"
                  value="123"
                  className="bg-red-500 mt-8 mb-2 text-white hover:bg-red-700"
                />
              </div>
            </Box>

            <div className="col-span-1 row-span-2">
              <div className="text-center  w-full ">
                <span>OR</span>
              </div>
              {methodLogin.map((item) => (
                <Button
                  key={item.id}
                  style={{ backgroundColor: `${item.color}` }}
                  className="w-full h-12 text-xs font-semibold  mt-2 mb-2 text-white hover:bg-gray-800"
                  onClick={item.onClick}
                >
                  {item.icon()}
                  <span className="ml-2">Đăng nhập bằng {item.name}</span>
                </Button>
              ))}
            </div>
            <div className="row-span-1">r2</div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default memo(FormLoginAndRegister);
