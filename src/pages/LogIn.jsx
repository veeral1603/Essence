import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";

import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((curr) => !curr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="h-full flex items-center justify-center">
        <div
          className={`bg-white shadow-md py-6 sm:py-8 flex flex-col items-center rounded-sm w-[90%] sm:w-[400px] `}
        >
          <div className="font-volkhov font-semibold text-3xl md:text-4xl flex items-center gap-6 mb-4 md:mb-6 ">
            <p>Welcome Back</p>
          </div>

          <div className=" w-full px-6 sm:px-8">
            <form
              className="flex flex-col gap-4 md:gap-6"
              onSubmit={handleSubmit}
            >
              <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                <input
                  className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                  type="email"
                  required
                  placeholder="E-mail"
                  name="email"
                />
              </div>
              <div className="flex items-center border border-primaryBorder pl-3 pr-3 py-2 gap-1 rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                <input
                  className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                  type={`${isPasswordVisible ? "text" : "password"}`}
                  placeholder="Password"
                  required
                  name="password"
                />
                <div
                  className="flex-1  cursor-pointer text-stone-500"
                  onClick={togglePassword}
                >
                  {isPasswordVisible ? <LuEyeClosed /> : <LuEye />}
                </div>
              </div>

              <Button
                classname={`rounded-sm`}
                onClick={() => {}}
                btnType="submit"
              >
                SIGN IN
              </Button>

              <div className="flex items-center justify-between text-xs md:text-sm lg:-mt-3">
                <p
                  className="cursor-pointer"
                  onClick={() => navigate(`/forgot-password`)}
                >
                  Forgot Password?
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => navigate(`/signup`)}
                >
                  Sign Up
                </p>
              </div>

              <div className="text-center text-xs md:text-sm text-neutral-400 flex items-center justify-center">
                <div className="h-px flex-1 bg-primaryBorder"></div>
                <p className="px-2">OR</p>
                <div className="h-px flex-1 bg-primaryBorder"></div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <button className="flex items-center  gap-3 px-4 py-2  border border-primaryBorder shadow-sm  rounded-sm w-[250px]">
                  <FcGoogle className="text-2xl" />
                  <span className="text-sm text-[#3c4043] font-medium">
                    Continue with Google
                  </span>
                </button>
                <button className="flex items-center text-white gap-3 px-4 py-2 bg-[#1877F2] hover:bg-[#166fe5] transition-colors duration-300 border border-[#1877F2] shadow-sm  rounded-sm w-[250px]">
                  <IoLogoFacebook className="text-2xl" />
                  <span className="text-sm  font-medium">
                    Continue with FaceBook
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
