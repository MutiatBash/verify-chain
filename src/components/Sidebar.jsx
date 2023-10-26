import React, { useState } from "react";
import Logo from "/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
// import { MobileMenu } from "./MobileMenu";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/contract-validation",
    text: "Contract Validaion",
  },
  {
    id: 3,
    url: "/account",
    text: "Account",
  },
  {
    id: 4,
    url: "/transaction",
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
    <div className="w-full flex flex-col gap-3 h-full py-4 px-4 md:px-6 lg:px-8 bg-white border border-r-[#C6C9CF] sticky top-0 z-20">
      <div className="w-full flex flex-col items-center justify-between">
        <div className="flex flex-row gap-3 items-center">
          <img src={Logo} alt="logo" />
          <h5 className="font-bold">Verify Chain</h5>
        </div>
        <ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem] border rounded-full p-4">
          {links.map((links) => (
            <li className="group relative" key={links.id}>
              <Link
                to={links.url}
                className={`nav-item text-[#353A43] transition duration-300 ease-in text-lg font-medium ${
                  location.pathname === links.url ? " text-[#7f56d9]" : ""
                }`}
              >
                {links.text}
              </Link>
              <div className="absolute w-full left-0 h-0.5 bg-[#7f56d9] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
          ))}
        </ul>

        {/* <Button text={"Get in touch"} className="hidden lg:block" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
