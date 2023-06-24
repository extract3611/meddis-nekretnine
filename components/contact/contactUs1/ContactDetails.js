/**
 * It returns a section with a container with a row with three columns, each of which has a div with a
 * contact icon, a heading, and a paragraph
 * @returns The ContactDetailsSection component is being returned.
 */
import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import SocialAccounts from "../../../components/elements/SocialAccounts";
import { useTranslation } from "next-i18next";
const ContactDetailsSection = () => {
  const {t}=useTranslation("common");

  return (
    <section className='small-section contact_section pt-0 contact_bottom'>
      <Container>
        <Row>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <MapPin />
              <h4>{t("Lokacija")}</h4>
              <p className='font-roboto'>
              Marka Radovića 7, Central Point <br />
              Podgorica, Crna Gora<br />
            
              </p>
            </div>
          </Col>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <MapPin />
              <h4>{t("Društvene mreže")}</h4>
              <SocialAccounts/>
            </div>
          </Col>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <Mail />
              <h4>{t("Kontakt")}</h4>
              <ul>
                <li></li>
                <li>office@whitehomes.me</li>
                <li>+382/67/201-391</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetailsSection;
