import Sidebar from "../components/Sidebar"
import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
//   useSigner,
} from "wagmi";
const Dashboard = () => {

    const {data:userData} = useAccount();
  return (
    <div className="flex flex-row ">
      <Sidebar/>
      {/* <p>{userData?.address}</p> */}
      <p>Home</p>
    </div>
  );
};

export default Dashboard;
