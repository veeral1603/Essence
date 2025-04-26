import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideCart from "../components/SideCart";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        <main className="flex-grow w-full  ">
          <Outlet />
          <SideCart />
        </main>
        <Footer />
      </div>
    </>
  );
}
