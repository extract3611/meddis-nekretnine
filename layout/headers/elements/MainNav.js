/**
 * It renders a navbar with a list of menu items
 * @returns A navbar with a dropdown menu and a mega menu.
 */
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { MainNavMenuItems } from "../../../data/menu";
import DropdownMenus from "./mainNavComponents/DropdownMenus";
import MegaMenu from "./mainNavComponents/MegaMenu";
import { useTranslation } from "next-i18next";

const MainNav = ({ center, icon }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const [isOpenChild, setIsOpenChild] = useState();
  const [isOpenNestedChild, setIsOpenNestedChild] = useState();
  const { t } = useTranslation("common");

  return (
    <nav>
      <div className="main-navbar">
        <div id="mainnav">
          {/* open navbar button in mobile size */}
          <div className="toggle-nav">
            <i className="fa fa-bars sidebar-bar" onClick={() => setOpenNavbar(true)}></i>
          </div>
          <ul className={`nav-menu ${openNavbar ? "open" : ""}`}>
            {/* close navbar button in mobile size */}
            <li className="back-btn">
              <div className="mobile-back text-end">
                <span onClick={() => setOpenNavbar(false)}>{t("Nazad")}</span>
                <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
              </div>
            </li>
            {MainNavMenuItems.map((navTitle, index) => (
              <Fragment key={index}>
                {navTitle.type === "sub" && navTitle.link!=true ? (
                  <DropdownMenus
                    navTitle={navTitle}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isOpenChild={isOpenChild}
                    setIsOpenChild={setIsOpenChild}
                    isOpenNestedChild={isOpenNestedChild}
                    setIsOpenNestedChild={setIsOpenNestedChild}
openNavbar={openNavbar}        
setOpenNavbar={setOpenNavbar}        

icon={icon}
                  />
                ) :  (
                  <MegaMenu  setOpenNavbar={setOpenNavbar}       navTitle={navTitle} isOpen={isOpen} setIsOpen={setIsOpen} i isOpenNestedChild={isOpenNestedChild} setIsOpenNestedChild={setIsOpenNestedChild} />
                )}
              </Fragment>
            ))}
          </ul>
          {center && (
            <div className="brand-logo">
              <Link href="/home/slider-filter-search">
                <img src="/assets/images/logo/4.png" alt="" className="img-fluid for-light" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
