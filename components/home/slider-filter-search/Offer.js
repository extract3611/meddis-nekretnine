import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { NewOffer, OurNewOffer } from "../../../constValues/constValues";
import { offerSlider } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import { useTranslation } from "next-i18next";
const OfferSection = ({ value }) => {
  const { t } = useTranslation("common");

  return (
    <section className="offer-section banner-section banner-4 slick-between ">
      <Container>
        <Row>
          <Col>
            <div className="title-1 text-white">
              <span className="label label-gradient">{t("White homes nekretnine")}</span>
              <h2>{t("Vaš pouzdan partner")}</h2>
              <hr />
            </div>
            <NoSsr>
              <Slider className="offer-slider" {...offerSlider}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="offer-wrapper">
                        <div className="media">
                          <div className="offer-icon">
                            <img src={data.img} alt="" />
                          </div>
                          <div className="media-body">
                            <h6>White Homes</h6>
                            <h3>{t(data.title)}</h3>
                            <p>{t(data.details)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default OfferSection;
