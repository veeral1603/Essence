import { useState } from "react";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState("forgotpassword");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((curr) => !curr);
  };

  const changeView = (view) => {
    setIsLoading(true);

    setCurrentView(view);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div
        className={`bg-white shadow-md py-6 sm:py-8 flex flex-col items-center rounded-sm w-[90%] sm:w-[400px]  ${
          isLoading ? "h-[400px] justify-center" : ""
        } `}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentView == "forgotpassword" && (
              <>
                <div className="font-volkhov font-semibold text-3xl md:text-4xl flex items-center gap-6 mb-4 md:mb-6 ">
                  <p>Forgot Password</p>
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
                        placeholder="Registered E-mail"
                        name="email"
                      />
                    </div>

                    <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                      <input
                        className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                        type="tel"
                        required
                        placeholder="Registered Phone Number"
                        name="phone"
                      />
                    </div>

                    <Button
                      classname={`rounded-sm`}
                      disabled={false}
                      onClick={() => {
                        changeView(`entercode`);
                      }}
                      btnType="submit"
                    >
                      SEND CONFIRMATION
                    </Button>
                  </form>
                </div>
              </>
            )}

            {currentView == "entercode" && (
              <>
                <div className="font-volkhov font-semibold text-3xl md:text-4xl flex items-center gap-6 mb-4 md:mb-6 ">
                  <p>Confirmation Code</p>
                </div>
                <div className="w-full px-6 sm:px-8">
                  <form
                    className="w-full flex flex-col gap-4 md:gap-6 "
                    onSubmit={handleSubmit}
                  >
                    <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                      <input
                        className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                        type="number"
                        required
                        placeholder="Verification Code"
                        name="code"
                      />
                    </div>

                    <Button
                      classname={`rounded-sm`}
                      disabled={false}
                      onClick={() => {
                        changeView(`changepassword`);
                      }}
                      btnType="submit"
                    >
                      RECOVER ACCOUNT
                    </Button>

                    <div className="lg:-mt-3 text-sm">
                      <p>
                        Didn&apos;t Receive Confirmation Code?{" "}
                        <span className=" text-blue-600 cursor-pointer">
                          Resend Now
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </>
            )}

            {currentView == "changepassword" && (
              <>
                <div className="font-volkhov font-semibold text-3xl md:text-4xl flex items-center gap-6 mb-4 md:mb-6 ">
                  <p>Change Password</p>
                </div>

                <div className=" w-full px-6 sm:px-8">
                  <form
                    className="flex flex-col gap-4 md:gap-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex items-center border border-primaryBorder pl-3 pr-3 py-2 gap-1 rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                      <input
                        className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                        type={`${isPasswordVisible ? "text" : "password"}`}
                        placeholder="Password"
                        name="password"
                        required
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
                        name="confirmpassword"
                        required
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
                        By changing password, you accept our{" "}
                        <span className="font-semibold cursor-pointer hover:underline text-primaryText">
                          Terms & Conditions
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold cursor-pointer hover:underline text-primaryText">
                          Privacy Policy
                        </span>
                      </p>
                    </div>

                    <Button
                      classname={`rounded-sm`}
                      onClick={() => {}}
                      btnType="submit"
                    >
                      CHANGE PASSWORD
                    </Button>
                  </form>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
