/**
 * It takes in a list of properties and returns a list of property boxes
 * @returns A div with a className of property-2 row column-sm zoom-gallery property-label
 * property-grid.
 */
import React, { Fragment, useEffect } from "react";
import { Col, Row } from "reactstrap";
import useFilterProducts from "../../../utils/useFilterProducts";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox";
import { useTranslation } from "next-i18next";
const GridLayout = ({ value, grid, listSize, relativeSlider, video, infiniteScroll, myList, gridDispatch }) => {
  let cardToShow = 6;
  const showProduct = useFilterProducts({ value, myList });
  const {t}=useTranslation("common");

  useEffect(() => {
    gridDispatch({ type: "totalPages", payload: Math.ceil(showProduct?.length / cardToShow) });
    gridDispatch({ type: "productCount", payload: showProduct?.length });
    console.log("show product",showProduct)
  }, [showProduct, cardToShow]);
  if(showProduct && showProduct.length!=0){

  return (
    <>
      <Row className={`property-2 column-sm zoom-gallery property-label property-grid ${grid.gridStyle === "list-view" ? "list-view" : ""}`}>
        {showProduct &&
          showProduct.slice(!infiniteScroll && cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((data, i) => (
            <Fragment key={i}>
              <Col sm={grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6"} md={grid.gridStyle === "list-view" && "12"} lg={grid.gridStyle === "grid-view" && ((grid.gridSize === 2 && "6") || ((grid.gridSize === 3 || 4) && "4"))} xl={grid.gridStyle === "list-view" && listSize === 2 && "6"} xxl={grid.gridStyle === "grid-view" && grid.gridSize === 4 && "3"} className={`${grid.gridStyle === "list-view" ? "list-view" : ""} wow fadeInUp grid-view `} key={i}>
                <PropertyBox data={data} relativeSlider={relativeSlider} video={video} />
              </Col>
            </Fragment>
          ))}
      </Row>
    </>
  );
}
else{
  return(<>
    <h5>{t("Nema nekretnina za prikaz.")}</h5>
  </>);
}}

export default GridLayout;
