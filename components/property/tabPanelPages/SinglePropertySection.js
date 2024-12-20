/**
 * It renders a tabbed box with 6 tabs
 * @returns The SinglePropertySection component is being returned.
 */
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import DetailsDeskBox from "../stickyTabOrClassic/DetailsDeskBox";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
const SinglePropertySection = () => {
  const { t } = useTranslation("common");

  const nekretnina=useSelector(state=>state.izabranaNekretnina);
  console.log(nekretnina)
  const [active, setActive] = useState("Details");
  return (
    <div className="desc-box">
      <Nav tabs className="line-tab">
      <NavItem>
          <NavLink
            onClick={() => {
              setActive("Details");
            }}
            active={active === "Details" && true}>
            <button className="btn btn-gradient">{t("Detalji")}</button>
          </NavLink>
        </NavItem>
        
        
        
       
        
       
      </Nav>

      <TabContent id="tabsContent" className="tab-content" activeTab={active}>
      
        
      <TabPane tabId="Details">
  {nekretnina ? (
    <DetailsDeskBox nekretnina={nekretnina} />
  ) : (
    <p>{t("Podaci nisu dostupni")}</p>
  )}
</TabPane>
        
       
      </TabContent>
    </div>
  );
};

export default SinglePropertySection;
