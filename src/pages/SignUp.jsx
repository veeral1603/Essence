import { useState } from "react";
import Button from "../components/Button";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function SignUp() {
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
            <p>Sign Up</p>
          </div>

          <div className=" w-full px-6 sm:px-8">
            <form
              className="w-full flex flex-col gap-4 md:gap-6"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                  <input
                    className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                    type="text"
                    required
                    placeholder="First Name"
                    name="fname"
                  />
                </div>
                <div className="flex items-center border border-primaryBorder pl-3 pr-3 py-2 gap-1 rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                  <input
                    className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                    type={`text`}
                    placeholder="Last Name"
                    required
                    name="lname"
                  />
                </div>
              </div>

              <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                <input
                  className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                  type="email"
                  required
                  placeholder="E-mail"
                  name="email"
                />
              </div>

              <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                <input
                  className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                  type="tel"
                  required
                  placeholder="Phone Number"
                  name="phone"
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

              <div className="flex items-center border border-primaryBorder pl-3 pr-3 py-2 gap-1 rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                <input
                  className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                  type={`${isPasswordVisible ? "text" : "password"}`}
                  placeholder="Confirm Password"
                  required
                  name="confirmpassword"
                />
                <div
                  className="flex-1  cursor-pointer text-stone-500"
                  onClick={togglePassword}
                >
                  {isPasswordVisible ? <LuEyeClosed /> : <LuEye />}
                </div>
              </div>

              <div className="text-xs lg:-my-2">
                <p className="text-neutral-500">
                  By Signing Up, you accept our{" "}
                  <span className="font-semibold cursor-pointer hover:underline text-primaryText">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold cursor-pointer hover:underline text-primaryText">
                    Privacy Policy
                  </span>
                </p>
              </div>

              <Button classname={`rounded-sm`} btnType="submit">
                SIGN UP
              </Button>

              <div className="flex items-center justify-between text-xs md:text-sm lg:-mt-3">
                <p className="text-neutral-500">
                  Already have an account?{" "}
                  <span
                    className="cursor-pointer font-semibold text-primaryText"
                    onClick={() => navigate(`/login`)}
                  >
                    Sign In
                  </span>
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
