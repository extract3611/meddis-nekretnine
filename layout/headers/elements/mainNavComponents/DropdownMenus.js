/**
 * It renders a dropdown menu with nested submenus
 * @returns A dropdown menu with a title and a list of items.
 */
import React from "react";
import Link from 'next-translate-routes/link'
import { useTranslation } from "next-i18next";

import useMobileSize from "../../../../utils/useMobileSize";
import { useRouter } from "next/router";

const DropdownMenus = ({ navTitle, isOpen, setIsOpen, isOpenChild, setIsOpenChild, isOpenNestedChild, setIsOpenNestedChild, icon,openNavbar,setOpenNavbar }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  // get window width
  const mobileSize = useMobileSize();
  return (
    <li className="dropdown">
      {/* menuItems : HOME, LISTING, PROPERTY, MODULES, AGENT, CONTACT */}
      <Link
      href={navTitle.path}
        className={`nav-link menu-title ${isOpen === navTitle.title ? "active" : ""}`}
        onClick={(e) => {
          setIsOpen(navTitle.title);
          isOpen === navTitle.title && setIsOpen();
        }}>
          <a className="nav-link menu-title">
        {!mobileSize && icon && navTitle.icon}
        {t(navTitle.title)}
        <span className="according-menu">{isOpen === navTitle.title ? "-" : "+"}</span></a>
      </Link>
      <ul className={`nav-submenu menu-content ${mobileSize && isOpen === navTitle.title ? "d-block" : "d-none d-xl-block"}`}>
        {navTitle.children.map((navList, index) => (
          <li onClick={()=>setOpenNavbar(false)} key={index}>
            {navList.type === "link" ? (
              <>
                {navList.path !== router.pathname ? (
                  <Link href={navList.path}>
                    <a className="nav-link menu-title">
                    {t(navList.title)}
                    {navList.tag && <span className="label">{navList.tag}</span>}
                    {navList.icon && (
                      <span className="icon-trend label">
                        <i className="fas fa-bolt"></i>
                      </span>
                    )}</a>
                  </Link>
                ) : (
                  <a>
        {t(navTitle.title)}
                    {navList.tag && <span className="label">{navList.tag}</span>}
                    {navList.icon && (
                      <span className="icon-trend label">
                        <i className="fas fa-bolt"></i>
                      </span>
                    )}
                  </a>
                )}
              </>
            ) : (
              <>
                <Link
                  className="submenu-title"
                  href={navList.path}
                  onClick={(e) => {
                    setIsOpenChild(navList.title);
                    isOpenChild === navList.title && setIsOpenChild();
                  }}>
                    <a className="nav-link menu-title">
                  {t(navList.title)}
                  <span className="according-menu">{navList.type === "sub" && (isOpenChild === navList.title ? "-" : "+")}</span></a>
                </Link>
                <ul className={`nav-sub-childmenu level1 ${mobileSize && isOpenChild === navList.title ? "d-block" : ""}`}>
                  {navList.type === "sub" &&
                    navList.children.map((childNavList, index) => (
                      <li key={index}>
                        {childNavList.path ? (
                          <Link
                            href={childNavList.path}
                            className={childNavList.type === "sub" ? "submenu-title" : ""}
                            onClick={() => {
                              setIsOpenNestedChild(childNavList.title);
                              isOpenNestedChild === childNavList.title && setIsOpenNestedChild();
                            }}>
                              <a className="nav-link menu-title">
                            {t(childNavList.title)}
                            <span className="according-menu">{childNavList.type === "sub" && (isOpenNestedChild === childNavList.title ? "-" : "+")}</span></a>
                          </Link>
                        ) : (
                          <a
                            className={childNavList.type === "sub" ? "submenu-title" : ""}
                            onClick={() => {
                              setIsOpenNestedChild(childNavList.title);
                              isOpenNestedChild === childNavList.title && setIsOpenNestedChild();
                            }}>
                            {childNavList.title}
                            <span className="according-menu">{childNavList.type === "sub" && (isOpenNestedChild === childNavList.title ? "-" : "+")}</span>
                          </a>
                        )}
                        {childNavList.type === "sub" && (
                          <ul className={`nav-sub-childmenu submenu-content level2  ${mobileSize && isOpenNestedChild === childNavList.title ? "d-block" : ""}`}>
                            {childNavList.type === "sub" &&
                              childNavList.children.map((nestedChildNavList, index) => (
                                <li key={index}>
                                  <Link href={nestedChildNavList.path}>{nestedChildNavList.title}</Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownMenus;
