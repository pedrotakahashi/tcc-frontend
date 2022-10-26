import SideMenu from "./SideMenu";
import Content from "./Content";

import "./styles.css";
export const Main = () => {
  return (
    <>
      <div className="main-content">
        <SideMenu />
        <Content />
      </div>
    </>
  );
};
