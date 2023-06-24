import Link from "next/link";
import React from "react";
import { ChevronsLeft } from "react-feather";
import { Media } from "reactstrap";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <div className={`page-sidebar ${!toggle ? 'close_icon' : ''}`}>
      <div className="logo-wrap">
        <Link style={{display: "flex",
    justifyContent: "center"}} href='/dashboard'>
          <img src="/assets/images/logo.svg" className="img-fluid for-light" alt='' />
          <img src="/assets/images/logo.svg" className="img-fluid for-dark" alt='' />
        </Link>
        <div className="back-btn d-lg-none d-inline-block">
          <ChevronsLeft onClick={() => { setToggle(!toggle) }} />
        </div>
      </div>
      <div className="main-sidebar">
        <div className="user-profile">
          <Media className="media">
            <div className="change-pic">
              <img src="/assets/images/avatar/3.jpg" className="img-fluid" alt='' />
            </div>
            <Media body className="media-body">
              <Link href='/manage-users/profile'>
                <h6>Maja Vučeljić</h6>
              </Link>
              <span className="font-roboto">office@white.com</span>
            </Media>
          </Media>
        </div>
        <div id="mainsidebar">
          <SidebarMenu />
        </div >
      </div >
    </div >
  );
};

export default Sidebar;
