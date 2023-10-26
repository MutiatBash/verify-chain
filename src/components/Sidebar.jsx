import React, { useState } from "react";
import Logo from "/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
// import { MobileMenu } from "./MobileMenu";

export const links = [
  {
    id: 1,
    url: "/dashboard/home-dashboard",
    icon: "/home.svg",
    text: "Home",
  },
  {
    id: 2,
    url: "/dashboard/contract-validation",
    icon: "/validation.svg",
    text: "Contract Validaion",
  },
  {
    id: 3,
    url: "/dashboard/account",
    icon: "/account.svg",
    text: "Account",
  },
  {
    id: 4,
    url: "/dashboard/transaction",
    icon: "/home.svg",
    text: "Transaction",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-[20%]  h-screen flex flex-col gap-3  py-4 px-4 md:px-6 lg:px-8 bg-white border border-r-[#C6C9CF] sticky top-0 z-20">
      <div className="w-full flex flex-col items-start gap-16 justify-between py-10">
        <div className="flex flex-row gap-3 items-center">
          <img src={Logo} alt="logo" />
          <h5 className="font-bold text-2xl">Verify Chain</h5>
        </div>
        <ul className="hidden lg:flex flex-col  gap-5 lg:gap-[2rem]  p-4">
          {links.map((links) => (
            <li className="group relative" key={links.id}>
              <Link
                to={links.url}
                className={`nav-item py-2 px-3 text-[#353A43] transition duration-300 ease-in text-lg font-medium flex flex-row gap-3 ${
                  location.pathname === links.url ? "text-[#7f56d9] bg-gray-200 rounded-lg" : ""
                }`}
              >
                <img src={links.icon}/>{links.text}
              </Link>
              {/* <div className="absolute w-full left-0 h-0.5 bg-[#7f56d9] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div> */}
            </li>
          ))}
        </ul>

        {/* <Button text={"Get in touch"} className="hidden lg:block" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
