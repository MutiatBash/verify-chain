import Sidebar from "../components/Sidebar"
import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
//   useSigner,
} from "wagmi";
import {Outlet} from "react-router-dom"

import dashboardImg from "../assets/images/heroImg.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Dashboard = () => {

    const {data:userData} = useAccount();
  return (
    <div className="flex flex-row ">
      <Sidebar/>
      <div>
      <ConnectButton/>
      <Outlet/>
    </div>
    </div>
  );
};

export default Dashboard;
