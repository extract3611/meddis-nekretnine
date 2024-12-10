/**
 * It takes in an array of objects and returns a section with a title and a row of columns with the
 * data from the array
 * @returns A section with a container, row, and col.
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Discover, PropertyServices } from "../../constValues/constValues";
import { useTranslation } from "next-i18next";

const PropertyServicesSection = ({ value }) => {
  const {t}=useTranslation("common");

  return (
    <section className="service-section service-1">
      <Container>
        <Row>
          <Col>
            <div className="title-2">
              <h2>{t("Naše usluge")}</h2>
              <p>   
              {t("Ističemo kvalitetnu ponudu za:")}</p>
            </div>
            <Row className=" property-service column-space">
              {value?.map((data, i) => (
                <Col xl="3" md="6" className=" wow fadeInUp" key={i}>
                  <div className="service-box">
                    <div className="icon-round">{data.img}</div>
                    <h3>
                 {t(data.title)}
                    </h3>
                    <p>{t(data.details)}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyServicesSection;
