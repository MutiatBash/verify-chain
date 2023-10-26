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
const Dashboard = () => {

    const {data:userData} = useAccount();
  return (
    <div className="flex flex-row ">
      <Sidebar/>
      {/* <p>{userData?.address}</p> */}
      {/* <div className="p-10">
      <h5>Welcome</h5>
      <img src={dashboardImg} />
      </div> */}
      <Outlet/>
    </div>
  );
};

export default Dashboard;
