import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Favorites from "../pages/Favorites";
import Men from "../pages/Men";
import Women from "../pages/Women";
import NewArrivals from "../pages/NewArrivals";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";
import MyAccount from "../pages/MyAccount";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "../pages/ForgotPassword";

export default function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="new-arrivals" element={<NewArrivals />} />
        <Route path="product/:productID" element={<Product />} />

        <Route path="my-account" element={<MyAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
