import MobileMenuIcons from "./MobileMenuIcons";
import MobileMenuDivider from "./MobileMenuDivider";
import profilePlaceholder from "../assets/profilePlaceholder.jpg";

import { NavLink } from "react-router-dom";
import {
  AiOutlineFire,
  AiOutlineTruck,
  AiOutlineUser,
  AiOutlineWallet,
} from "react-icons/ai";
import { IoIosFemale, IoIosMale, IoIosStarOutline } from "react-icons/io";
import { IoCartOutline, IoClose, IoHomeOutline } from "react-icons/io5";
import useUiStore from "../stores/UiStore";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";
import { VscFeedback } from "react-icons/vsc";
import { RxQuestionMark } from "react-icons/rx";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const mobileMenuLinks = [
  { label: "Home", path: "/", icon: <IoHomeOutline /> },
  { label: "Men", path: "/men", icon: <IoIosMale /> },
  { label: "Women", path: "/women", icon: <IoIosFemale /> },
  { label: "Latest", path: "/new-arrivals", icon: <AiOutlineFire /> },
  { label: "Favorites", path: "/favorites", icon: <IoIosStarOutline /> },
  { label: "Cart", path: "/cart", icon: <IoCartOutline /> },
];

const myAccountLinks = [
  { label: "Account", path: "/my-account", icon: <AiOutlineUser /> },
  { label: "Orders", path: "/my-account/orders", icon: <AiOutlineTruck /> },
  { label: "Wallet", path: "/my-account/wallet", icon: <AiOutlineWallet /> },
];

const contactLinks = [
  { label: "Support", path: "/cotnact/support", icon: <TfiHeadphoneAlt /> },
  { label: "Feedback", path: "/contact/feedback", icon: <VscFeedback /> },
  { label: "FAQ", path: "/contact/faq", icon: <RxQuestionMark /> },
];

export default function MobileMenu() {
  const [isMobileMenuOpen, toggleIsMobileMenuOpen, setIsMobileMenuOpen] =
    useUiStore(
      useShallow((state) => [
        state.isMobileMenuOpen,
        state.toggleIsMobileMenuOpen,
        state.setIsMobileMenuOpen,
      ])
    );

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      <div
        className={`${
          isMobileMenuOpen ? `block opacity-100` : `hidden opactiy0`
        } fixed inset-0 z-[99] bg-black/70  md:hidden`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`${
          isMobileMenuOpen ? `block left-0` : ` -left-full`
        } absolute top-0 bottom-0  w-[80%] bg-[white] border-r border-primaryBorder md:hidden z-[100] shadow-lg transition-all duration-200 overflow-y-auto `}
      >
        <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3 border-b border-primaryBorder ">
          <NavLink to={"/"}>
            <p className="font-volkhov font-semibold text-3xl md:text-4xl ">
              ESSENCE
            </p>
          </NavLink>
          <div
            className="self-stretch flex items-center justify-center cursor-pointer"
            onClick={toggleIsMobileMenuOpen}
          >
            <IoClose className="text-2xl" />
          </div>
        </div>

        <div className="px-4 sm:px-6 pt-4 pb-2 sm:pt-5 sm:pb-2 flex items-center justify-between ">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="overflow-hidden rounded-full">
              <img src={profilePlaceholder} className="w-[50px] sm:w-[60px]" />
            </div>

            <p className="font-medium text-sm/4 text-black">
              Hey There, <br /> <span className="font-semibold">Guest!</span>
            </p>
          </div>

          <NavLink className="text-sm sm:text-sm text-blue-500" to={`/login`}>
            Login/Signup
          </NavLink>
        </div>

        <MobileMenuDivider>Shop</MobileMenuDivider>

        <div className="px-4 sm:px-6 py-5 sm:py-6 grid grid-cols-4 sm:grid-cols-4 gap-x-2 gap-y-6 sm:gap-x-6 sm:gap-y-8">
          {mobileMenuLinks.map((link) => {
            {
              return (
                <MobileMenuIcons label={link.label} path={link.path}>
                  {link.icon}
                </MobileMenuIcons>
              );
            }
          })}
        </div>

        <MobileMenuDivider>My Profile</MobileMenuDivider>

        <div className="px-4 sm:px-6 py-5 sm:py-6 grid grid-cols-4 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
          {myAccountLinks.map((link) => {
            {
              return (
                <MobileMenuIcons label={link.label} path={link.path}>
                  {link.icon}
                </MobileMenuIcons>
              );
            }
          })}
        </div>

        <MobileMenuDivider>Contact Us</MobileMenuDivider>

        <div className="px-4 sm:px-6 py-5 sm:py-6 grid grid-cols-4 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
          {contactLinks.map((link) => {
            {
              return (
                <MobileMenuIcons label={link.label} path={link.path}>
                  {link.icon}
                </MobileMenuIcons>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
