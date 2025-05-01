import { Navigate, useNavigate } from "react-router-dom";
import SecondaryNavbar from "../components/SecondaryNavbar";
import useAuthStore from "../stores/AuthStore";
import useCartStore from "../stores/CartStore";
import securePayments from "../assets/securePayments.png";
import razorpayLogo from "../assets/razorpayLogo.png";
import stripeLogo from "../assets/stripeLogo.png";
import { useState } from "react";
import CheckoutProductItem from "../components/CheckoutProductItem";
import useUiStore from "../stores/UiStore";
import Button from "../components/Button";

export default function Checkout() {
  const { isAuth } = useAuthStore();
  const { cart, shipping, getSubTotal, getTotal } = useCartStore();
  const { currency } = useUiStore();

  const [isSameAsDelivery, setIsSameAsDelivery] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash"); //"stripe" , "razorpay" , "cash"

  const handleChange = (e) => {
    setIsSameAsDelivery(e.target.checked);
  };

  const placeOrder = () => {};

  const navigate = useNavigate();

  if (isAuth) {
    <Navigate to="/login" />;
  }

  return (
    <>
      <SecondaryNavbar />
      <section className=" py-4 md:py-8 ">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col ">
          <div className="mt-2">
            <form className="flex flex-col md:flex-row gap-4 md:gap-12">
              {/* Left Side  */}
              <div className="flex-1 flex flex-col gap-8 md:gap-10">
                {/* Delivery Address  */}
                <div>
                  <div className="text-2xl mb-2">
                    <h2>Delviery Address</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-full flex  gap-2">
                      <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                        <input
                          className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                          type="text"
                          required
                          placeholder="First Name"
                          name="fname"
                        />
                      </div>
                      <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                        <input
                          className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                          type="text"
                          required
                          placeholder="Last Name"
                          name="lname"
                        />
                      </div>
                    </div>

                    <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                      <input
                        className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                        type="text"
                        required
                        placeholder="Address"
                        name="address"
                      />
                    </div>
                    <div className="w-full flex  gap-2">
                      <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                        <input
                          className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                          type="text"
                          required
                          placeholder="City"
                          name="city"
                        />
                      </div>
                      <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                        <input
                          className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                          type="number"
                          required
                          placeholder="Postal Code"
                          name="postalcode"
                          maxLength={6}
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        className="accent-black cursor-pointer"
                        id="saveinfo"
                      />
                      <label
                        className="text-xs ml-2 cursor-pointer"
                        htmlFor="saveinfo"
                      >
                        <p>Save This Information for Future</p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Billing Address  */}
                <div>
                  {!isSameAsDelivery && (
                    <>
                      <div className="text-2xl mb-2">
                        <h2>Billing Address</h2>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="w-full flex  gap-2">
                          <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                            <input
                              className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                              type="text"
                              required
                              placeholder="First Name"
                              name="fname"
                            />
                          </div>
                          <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                            <input
                              className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                              type="text"
                              required
                              placeholder="Last Name"
                              name="lname"
                            />
                          </div>
                        </div>

                        <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800">
                          <input
                            className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                            type="text"
                            required
                            placeholder="Address"
                            name="address"
                          />
                        </div>
                        <div className="w-full flex  gap-2">
                          <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                            <input
                              className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                              type="text"
                              required
                              placeholder="City"
                              name="city"
                            />
                          </div>
                          <div className="border border-primaryBorder px-3 py-2 flex rounded-sm md:hover:border-stone-800 transition-colors duration-200 focus-within:border-stone-800 flex-1">
                            <input
                              className="placeholder:text-sm outline-none w-full text-sm text-stone-500"
                              type="number"
                              required
                              placeholder="Postal Code"
                              name="postalcode"
                              maxLength={6}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="flex items-center mt-4 ">
                    <input
                      type="checkbox"
                      checked={isSameAsDelivery}
                      onChange={handleChange}
                      className="accent-black cursor-pointer"
                      id="sameasdelivery"
                    />
                    <label
                      className="text-xs ml-2 cursor-pointer"
                      htmlFor="sameasdelivery"
                    >
                      <p>Billing Address is same as Delivery Address</p>
                    </label>
                  </div>
                </div>

                {/* Payment Methods  */}
                <div>
                  <div className="text-2xl mb-2">
                    <h2>Payment Methods</h2>
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row md:justify-between">
                    {/* Rzorpay  */}
                    <div
                      className="border border-primaryBorder px-3 py-2 flex items-center gap-3 cursor-pointer"
                      onClick={() => setPaymentMethod("razorpay")}
                    >
                      <div
                        className={`h-3 aspect-square rounded-full  ${
                          paymentMethod === "razorpay"
                            ? "bg-green-500"
                            : "border border-primaryBorder"
                        }`}
                      ></div>
                      <img src={razorpayLogo} className="h-6" />
                    </div>

                    {/* Stripe  */}
                    <div
                      className="border border-primaryBorder px-3 py-2 flex items-center gap-3 cursor-pointer"
                      onClick={() => setPaymentMethod("stripe")}
                    >
                      <div
                        className={`h-3 aspect-square rounded-full  ${
                          paymentMethod === "stripe"
                            ? "bg-green-500"
                            : "border border-primaryBorder"
                        }`}
                      ></div>
                      <img src={stripeLogo} className="h-6" />
                    </div>

                    {/* Cash on delivery  */}
                    <div
                      className="border border-primaryBorder px-3 py-2 flex items-center gap-3 cursor-pointer"
                      onClick={() => setPaymentMethod("cash")}
                    >
                      <div
                        className={`h-3 aspect-square rounded-full ${
                          paymentMethod === "cash"
                            ? "bg-green-500"
                            : "border border-primaryBorder"
                        }`}
                      ></div>
                      <p className="text-xs  text-neutral-500 h-6 flex items-center">
                        CASH ON DELIVERY
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidde  */}
              <div className="flex-1 ">
                <div className="flex flex-col divide-y divide-primaryBorder">
                  {cart.map((item, i) => (
                    <CheckoutProductItem key={i} product={item} />
                  ))}
                </div>
                <div className="flex flex-col  justify-between text-sm divide-y divide-primaryBorder">
                  <div className="flex items-center justify-between py-2">
                    <h2>Subtotal:</h2>
                    <h2>
                      {currency}
                      {getSubTotal().toFixed(2)}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <h2>Shipping:</h2>
                    <h2>
                      {currency}
                      {shipping}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between font-semibold py-2">
                    <h2>Total:</h2>
                    <h2>
                      {currency}
                      {getTotal().toFixed(2)}
                    </h2>
                  </div>
                </div>
                <div className="w-full mt-2">
                  <Button classname={"w-full"} onClick={placeOrder}>
                    Place Order
                  </Button>
                </div>
                <div className="text-xs text-center py-3 flex flex-col items-center">
                  <p>Safe and Secure Checkout</p>
                  <img
                    src={securePayments}
                    alt="Secure Payments"
                    className="mt-3"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
