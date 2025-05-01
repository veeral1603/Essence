import { useNavigate } from "react-router-dom";
import NewsletterSection from "../sections/NewsletterSection";
import Button from "../components/Button";
import SecondaryNavbar from "../components/SecondaryNavbar";
import CartPageItem from "../components/CartPageItem";
import SecondaryHeading from "../components/SecondaryHeading";
import useCartStore from "../stores/CartStore";
import useUiStore from "../stores/UiStore";
import { LuShoppingCart } from "react-icons/lu";

import securePayments from "../assets/securePayments.png";

export default function Cart() {
  const { cart, shipping, getTotal, getSubTotal } = useCartStore();
  const { currency } = useUiStore();

  const navigate = useNavigate();

  return (
    <>
      {cart.length > 0 ? (
        <>
          <SecondaryNavbar />
          <section className=" py-4 md:py-8">
            <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col">
              <div>
                <SecondaryHeading
                  className={"!text-xl md:!text-2xl !text-left"}
                >
                  Your Cart
                </SecondaryHeading>
              </div>
              <div className="mt-4 md:mt-6 w-full ">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left  border-b border-primaryBorder text-xs md:text-sm  text-neutral-500">
                      <th className="pb-2 md:pb-3 font-normal">PRODUCT</th>
                      <th className=" pb-2 md:pb-3 hidden lg:table-cell font-normal">
                        QUANTITY
                      </th>
                      <th className="text-right pb-2 md:pb-3 font-normal">
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, i) => (
                      <CartPageItem key={i} product={item} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col md:flex-row mt-4 md:mt-8">
                <div className="flex-1  hidden md:block">
                  <div className="text-sm">
                    <p
                      className="cursor-pointer underline"
                      onClick={() => navigate(`/shop`)}
                    >
                      Continue Shopping
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
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
                    <Button
                      classname={"w-full"}
                      onClick={() => navigate(`/checkout`)}
                    >
                      Checkout
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
              </div>
            </div>
          </section>
          <NewsletterSection />{" "}
        </>
      ) : (
        <>
          <div className="h-full flex flex-col items-center justify-center text-neutral-500">
            <div className="text-[140px]">
              <LuShoppingCart />
            </div>
            <div className="text-3xl lg:text-6xl font-semibold mt-2">
              <h2>Your Cart is Empty!</h2>
            </div>
            <div className="mt-6">
              <Button onClick={() => navigate(`/shop`)}>SHOP NOW</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
