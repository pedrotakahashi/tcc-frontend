import { SiWebpack } from "react-icons/si";
import "./styles.css";
const SideMenu = () => {
  return (
    <div className="header">
      <div className="back-header">
        <div className="content-header">
          <SiWebpack className="header-icon" id="header-icon" />
          <h2> FCT-SCRAPPER</h2>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
