/**
 * It renders a tabbed box with 6 tabs
 * @returns The SinglePropertySection component is being returned.
 */
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import AboutDeskBox from "../stickyTabOrClassic/AboutDeskBox";
import DetailsDeskBox from "../stickyTabOrClassic/DetailsDeskBox";
import FeatureDeskBox from "../stickyTabOrClassic/FeatureDeskBox";
import FloorPlanDeskBox from "../stickyTabOrClassic/FloorPlanDeskBox";
import LocationMapDeskBox from "../stickyTabOrClassic/LocationMapDeskBox";
import VideoDeskBox from "../stickyTabOrClassic/VideoDeskBox";
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
          <DetailsDeskBox nekretnina={nekretnina} />
        </TabPane>
        
       
      </TabContent>
    </div>
  );
};

export default SinglePropertySection;
