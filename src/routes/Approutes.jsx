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
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import MyAccount from "../pages/MyAccount";

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
        <Route path="product/:id" element={<Product />} />
        <Route path="my-account" element={<MyAccount />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Signin />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
