import { Button } from "./Button";
import { useState } from "react";
import {useEnsAddress} from "wagmi";

const ContractValidation = () => {
const{data:userAddress, isError:addressError, isLoading:addressLoading} = useEnsAddress({});
  const [error, setError] = useState("");
  const [contractDetails, setContractDetails] = useState("");

  const Validate = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://cyber-knights.onrender.com/verify?address=0x4a5c0f825DbF4BFe46Cd8D52c1Cce3ff1a6f539D"
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
    <div className="p-2 sm:py-8 mx-auto flex flex-col justify-center gap-5 lg:gap-8 items-center my-auto min-h-screen w-[80%]">
      <form className="flex bg-white flex-col items-center gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between sm:w-[80%] md:w-[75%] lg:w-[90%]">
        {error ? <span className="text-red-600 text-xs">{error}</span> : ""}
        <p className="text-[#7f56d9]">Contract validation</p>
        <h3 className="font-bold text-3xl">
          Validate your contract identities for security
        </h3>
        <p className="text-gray-400">Provide your details here</p>
        <div className="flex flex-col justify-between pt-10">
          <input
            placeholder="Input contract details"
            className="border-4 border-[#7f56d9] rounded-lg w-[800px] p-2 py-4 focus:outline-none focus:border-purple-800"
            value={contractDetails}
            required={true}
            onChange={(e) => setContractDetails(e.target.value)}
          />
        </div>
        <Button text={"Validate"} onClick={Validate} />
      </form>
    </div>
  );
};

export default ContractValidation;
