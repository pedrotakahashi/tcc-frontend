import { SiWebpack } from "react-icons/si";
import "./styles.css";

interface IHeader{
  headerName? : String;
}

const Header = ({headerName}:IHeader) =>{
return (
    <>
      <div className="back-header">
        <div className="content-header">
          <SiWebpack className="header-icon" id="header-icon" />
          <span>{headerName}</span>
        </div>
     </div>
    </>
)
}

export default Header;