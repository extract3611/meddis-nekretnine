/**
 * It renders a mega menu with nested child menus
 * @returns A React component.
 */
import React from "react";
import Link from 'next-translate-routes/link'
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
import useMobileSize from "../../../../utils/useMobileSize";

const MegaMenu = ({ navTitle, isOpen, setIsOpen, isOpenNestedChild, setIsOpenNestedChild, setOpenNavbar  }) => {
  const { t } = useTranslation("common");
  const mobileSize = useMobileSize();
  if(navTitle.child!=undefined){
  return (
    <li className="mega-menu">
      {/* menuItem : PAGES */} {/* This all code for PAGES menu link*/}
      {navTitle.path ?  <Link href={navTitle.path}
        className={`nav-link menu-title ${isOpen === navTitle.title && navTitle.children &&  "active"}`}
        onClick={(e) => {
          setIsOpen(navTitle.title);
          isOpen === navTitle.title && setIsOpen();
        }}>
          <a className="nav-link menu-title">
        {t(navTitle.title)}
        <span className="according-menu">{isOpen === navTitle.title ? "-" : "+"}</span></a>
      </Link>: <a
        className={`nav-link menu-title ${isOpen === navTitle.title && navTitle.children &&  "active"}`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(navTitle.title);
          isOpen === navTitle.title && setIsOpen();
        }}></a>}
      <div className={`mega-menu-container menu-content ${isOpen === navTitle.title ? "d-block" : ""} `}>
        <Container>
          <Row>
            {/* loop for divide div in 5 columns */}
            { navTitle.children ? navTitle.children.map((childNavList, index) => (
              <Col className="mega-box" key={index}>
                {/* loop for child div and title*/}
                {childNavList.children.map((nestedChildNavList, index) => (
                  <div className="link-section" key={index}>
                    <div className={`submenu-title ${isOpen === navTitle.title ? "active" : ""}`}>
                      <h5
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenNestedChild(nestedChildNavList.title);
                          isOpenNestedChild === nestedChildNavList.title && setIsOpenNestedChild();
                        }}>
                        <a>{nestedChildNavList.title}</a>
                        {mobileSize && <span className="according-menu">{isOpenNestedChild === nestedChildNavList.title ? "-" : "+"}</span>}
                      </h5>
                    </div>
                    <div className={`submenu-content opensubmegamenu ${isOpenNestedChild === nestedChildNavList.title ? "d-block" : "d-none d-xl-block"}`}>
                      <ul className="list">
                        {/* loop for menu links */}
                        {nestedChildNavList.children.map((nestedChildNavListTitle, index) => (
                          <li key={index}>
                            <Link href={nestedChildNavListTitle.path}>
                            <a className="nav-link menu-title">
                              {nestedChildNavListTitle.title}
                              {nestedChildNavListTitle.tag && <span className="label">{nestedChildNavListTitle.tag}</span>}
                              {nestedChildNavListTitle.icon && (
                                <span className="icon-trend label">
                                  <i className="fas fa-bolt"></i>
                                </span>
                              )}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Col>
            )) : null}
          </Row>
        </Container>
      </div>
    </li>
  );}
  else{
    return(<li onClick={()=>setOpenNavbar(false)} className="mega-menu">
    {/* menuItem : PAGES */} {/* This all code for PAGES menu link*/}
      <Link href={navTitle.path}
      className={`nav-link menu-title ${isOpen === navTitle.title && navTitle.children &&  "active"}`}
      onClick={(e) => {
        setIsOpen(navTitle.title);
        isOpen === navTitle.title && setIsOpen();
      }}>
        <a className="nav-link menu-title">
      {t(navTitle.title)}
      <span className="according-menu">{isOpen === navTitle.title ? "-" : "+"}</span></a>
    </Link></li>)
  }
};

export default MegaMenu;
