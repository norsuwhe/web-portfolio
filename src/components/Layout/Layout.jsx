import { Outlet } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;
