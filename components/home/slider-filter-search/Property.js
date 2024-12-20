/**
 * It takes in an array of objects and returns a row of property boxes
 * @returns A section with a container, row, and col.
 */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { LatestForSale, Rent } from "../../../constValues/constValues";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox";
import { useTranslation } from "next-i18next";
const PropertySection = ({ value, range }) => {
  const { t } = useTranslation("common");
  let [sortirani,postaviSortirani]=useState([]);
  useEffect(()=>{
    postaviSortirani([...value].sort((a, b) => {
      const dateA = new Date(a.datum.split('/').reverse().join('/'));
      const dateB = new Date(b.datum.split('/').reverse().join('/'));
      return dateB - dateA;
    }));

  },[value])
console.log(value)
  return (
    <section className='property-section'>
      <Container>
        <Row className='ratio_55'>
          <Col>
            <div className='title-1'>
              <span className='label label-gradient'>{t("Poslednje")}</span>
              <h2>{t("Poslednje nekretnine")}</h2>
              <hr />
            </div>
            <Row className='property-2 column-space'>
              {sortirani &&
                sortirani.slice(0,6).map((data, i) => (
                  <Col xl='4' md='6' className='wow fadeInUp' key={i}>
                    <PropertyBox data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertySection;
