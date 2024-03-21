import React from "react";
import SideBar from "../components/common/SideBar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // <div className=" container-fluid text-center">
    // <div className="row row-cols-auto">
    //     <div className='col-sm bg-dark text-light '>

    //           <SideBar/>
    //     </div>
    //     <div className="col-sm-10 bg-primary">
    //     header
    //     </div>
    // </div>

    // </div>

    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">

        <SideBar />

      <div className="p-4">
        <div className=" bg-sky-300">
          <Header />
        </div>
        <div>{<Outlet />}</div>
        <div className=" bg-sky-300">
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default Layout;
