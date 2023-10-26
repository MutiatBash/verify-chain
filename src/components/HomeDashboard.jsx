import { Outlet } from "react-router-dom";
import dashboardImg from "../assets/images/heroImg.svg";
const HomeDashboard = () => {
  return (
    <div className="p-10">
      <h5>Welcome</h5>
      <img src={dashboardImg} />
    </div>
  );
};

export default HomeDashboard;
