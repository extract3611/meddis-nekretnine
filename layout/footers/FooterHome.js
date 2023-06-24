import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterDataHomee } from "../../data/FooterDataHomee";
import FooterLink from "./elements/FooterLink";
import FooterBlog from "./footerThreeElements/FooterBlog";
import FooterContactUsDetails from "./footerThreeElements/FooterContactUsDetails";
import SubFooterTwo from "./elements/SubFooterTwo";
import { useTranslation } from "next-i18next";

const FooterThree = () => {
  const { t } = useTranslation("common");

  const [isActive, setIsActive] = useState();
  return (
    <footer>
      <div className="footer footer-bg">
        <Container>
          <Row>
            <FooterContactUsDetails />
            <Col xl="9">
              <Row>
                <FooterLink value={FooterDataHomee.usefulLinks} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterDataHomee.feature} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterDataHomee.social} isActive={isActive} setIsActive={setIsActive} />
                <Col lg="3" xl="4">
                  <div className="footer-links">
                    <h5
                      className={`footer-title ${isActive === "subscribe" ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsActive("subscribe");
                        isActive === "subscribe" && setIsActive();
                      }}>
                      {t("Pretplati se")}
                      <span className="according-menu">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </h5>
                    <div className={`footer-content ${isActive === "subscribe" ? "d-block" : "d-none d-md-block"}`}>
                      <p className="mb-0">{t("Pretplatite se danas kako biste dobili pristup ekskluzivnim ponudama, najnovijim informacijama o tržištu i prvom redu za najnovije nekretnine koje odgovaraju vašim potrebama. Ostvarite svoje snove o vlastitom domu s nama.")}</p>
                      <form>
                        <div className="input-group">
                          <input type="email" className="form-control" placeholder="Email Address" required />
                          <span className="input-group-apend">
                            <button type="submit" className="input-group-text" id="basic-addon2">
                              <i className="fas fa-paper-plane"></i>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
              {/*<FooterBlog />*/}
            </Col>
          </Row>
        </Container>
      </div>
      <SubFooterTwo />
    </footer>
  );
};

export default FooterThree;
