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

const RentingServices = ({ value }) => {
  const {t}=useTranslation("common");

  return (
    <section className="service-section service-1 bg-light">
      <Container>
        <Row>
          <Col>
            <div className="title-2">
              <h2>{t("Poslovna saradnja:")}</h2>
              <p>   
              {t("Predstavljamo vam ponudu naših usluga za model kratkoročnih izdavanja, prema kojima:")}</p>
            </div>
            <Row className=" property-service column-space">
              {value?.map((data, i) => (
                <Col xl="6" md="6" className=" wow fadeInUp" key={i}>
                  <div className="service-box">
                    <div className="icon-round"><img src={data.img}/></div>
                    <h3>
                      <Link href="/pages/other-pages/services">{t(data.title)}</Link>
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

export default RentingServices;
