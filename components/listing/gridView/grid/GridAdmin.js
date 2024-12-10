/**
 * It takes in a bunch of props, and returns a bunch of JSX
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useReducer, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Pagination from "../../../../layout/Pagination";
import Category from "../../../../layout/sidebarLayout/Category";
import ContactInfo from "../../../../layout/sidebarLayout/ContactInfo";
import Filter from "../../../../layout/sidebarLayout/Filter";
import Header from "../../../../layout/sidebarLayout/Header";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import { getData } from "../../../../utils/getData";
import FilterTag from "../../../elements/InputAdmin";
import GridLayout from "../../elements/GridLayoutAdmin";
import { gridReducer, initialGrid } from "./gridReducer";
import GridLayoutAdmin from "../../elements/GridLayoutAdmin";
import { useSelector } from "react-redux";
const GridView = ({ side, size, gridType, listSize, mapModal, mapView, relativeSlider, gridBar, video, tabHeader, setMapModal, children, AdvancedSearchShow, infiniteScroll, myList }) => {
  const [value, setValue] = useState();
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  useEffect(() => {
    gridDispatch({ type: "gridSize", payload: size });
    gridDispatch({ type: "gridStyle", payload: gridType });
  }, []);
  let sveNekretnine=useSelector(state=>state.nekretnine.niz)
  useEffect(() => {
   setValue(sveNekretnine)
  }, [sveNekretnine]);

  return (
    <section className={`property-section  ${mapView && mapModal === "view" ? "section-sm" : ""}  ${relativeSlider ? "property-list-thumbnail" : ""}`}>
      <Container>
        <Row className=" ratio_63">
              

          <Col xl={side ? "12" : ""} lg={side ? "8" : ""} className={`${relativeSlider ? "property-grid-3" : "property-grid-2"}  property-grid-slider`}>
            <Header grid={grid} gridDispatch={gridDispatch} title={"Sve nekretnine"} mapModal={mapModal} gridBar={gridBar} tabHeader={tabHeader} AdvancedSearchShow={AdvancedSearchShow} value={value} setMapModal={setMapModal} />
            <FilterTag />
            {children}
            <div className={`property-wrapper-grid ${grid.gridStyle ? "list-view" : ""}`}>
              <GridLayoutAdmin grid={grid} myList={myList} value={value} listSize={listSize} relativeSlider={relativeSlider} video={video} gridDispatch={gridDispatch} infiniteScroll={infiniteScroll} />
            </div>
            {infiniteScroll ? (
              <a className="btn btn-solid btn-flat load-more" onClick={() => gridDispatch({ type: "toPage", payload: grid.toPage + 0.5 })}>
                Ucitaj više
              </a>
            ) : (
              <Pagination toPage={grid.toPage} gridDispatch={gridDispatch} totalPages={grid.totalPages} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GridView;
