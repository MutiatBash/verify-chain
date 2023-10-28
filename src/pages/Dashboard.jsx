import Sidebar from "../components/Sidebar";
import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  //   useSigner,
} from "wagmi";
import { Outlet } from "react-router-dom";

import dashboardImg from "../assets/images/heroImg.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isDisconnected: userDisconnected } = useAccount();
  const navigate = useNavigate();
if (userDisconnected){
alert("You have disconnected your wallet and you are being logged out")
navigate("/signin")
}

  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="bg-white py-4 px-6 flex flex-row justify-between items-center border-b sticky top-0 z-20">
          <div>
            <input placeholder="Search" className="border rounded-xl p-2" />
          </div>
          <ConnectButton />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
