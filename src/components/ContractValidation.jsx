import { Button } from "./Button";
import { useState } from "react";
import {useEnsAddress} from "wagmi";
import {Link, Outlet} from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/dashboard/contract-validation",
    text: "Validation",
  },
  {
    id: 2,
    url: "/dashboard/contract-validation/results",
    text: "Results",
  },
  {
    id: 3,
    url: "/dashboard/contract-validation/notifications",
    text: "Notifications",
  },
];

const ContractValidation = () => {
const{data:userAddress, isError:addressError, isLoading:addressLoading} = useEnsAddress({});
  const [error, setError] = useState("");
  const [contractAddress, setContractAddress] = useState("");

  return (
    <div className=" p-6 pb-20 h-full flex flex-col gap-5 lg:gap-8 items-center">
      <div className="sticky z-20 self-start top-0">
        <ul className="lg:flex items-center gap-5 lg:gap-[3rem] border rounded-2xl self-start p-4">
          {links.map((links) => (
            <li className="group relative" key={links.id}>
              <Link
                to={links.url}
                className={`nav-item text-[#353A43] transition duration-300 ease-in text-lg font-medium ${
                  location.pathname === links.url
                    ? " bg-gray-200 rounded-xl"
                    : ""
                }`}
              >
                {links.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex-1"> */}
        <Outlet />
      {/* </div> */}
    </div>
  );
};

export default ContractValidation;
