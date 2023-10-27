import { Button } from "./Button";
import { useState } from "react";
import { useEnsAddress } from "wagmi";
import { Link , Outlet} from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/",
    text: "Validation",
  },
  {
    id: 2,
    url: "/results",
    text: "Results",
  },
  {
    id: 3,
    url: "/notifications",
    text: "Notifications",
  },
];

const Validation = () => {
  const {
    data: userAddress,
    isError: addressError,
    isLoading: addressLoading,
  } = useEnsAddress({});
  const [error, setError] = useState("");
  const [contractAddress, setContractAddress] = useState("");

  const Validate = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://cyber-knights.onrender.com/verify?address=${contractAddress}`
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      console.error;
      setError(error);
    }
  };
  return (
    <div className=" mx-auto flex flex-col justify-center gap-5 lg:gap-8 items-center  min-h-screen w-[80%]">
      <form className="flex  flex-col items-center gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between sm:w-[80%] md:w-[75%] lg:w-[90%]">
        {error ? <span className="text-red-600 text-xs">{error}</span> : ""}
        <p className="text-[#7f56d9]">Contract validation</p>
        <h3 className="font-bold text-3xl">
          Validate your contract identities for security
        </h3>
        <p className="text-gray-400">Provide your details here</p>
        <div className="flex flex-col justify-between pt-10">
          <input
            placeholder="Input contract details"
            className="border-4 border-[#7f56d9] rounded-lg w-[800px] bg-gray-50 p-2 py-4 focus:outline-none focus:border-purple-800"
            value={contractAddress}
            required={true}
            onChange={(e) => setContractAddress(e.target.value)}
          />
        </div>
        <Button text={"Validate"} onClick={Validate} />
      </form>
    </div>
  );
};

export default Validation;
