import { SiWebpack } from "react-icons/si";
import "./styles.css";

const Header = () =>{
return (
    <>
      <div className="back-header">
        <div className="content-header">
          <SiWebpack className="header-icon" id="header-icon" />
          <span> FCT-SCRAPPER</span>
        </div>
     </div>
    </>
)
}

export default Header;