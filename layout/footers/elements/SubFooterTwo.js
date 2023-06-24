import { Link } from "next-translate-routes";
import React from "react";
import { Container, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
const SubFooterTwo = () => {
  const { t } = useTranslation("common");

  return (
    <div className="sub-footer footer-light">
      <Container>
        <Row>
          <div className="col-xl-6 col-md-6">
            <div className="copy-right">
              <p className="mb-0">Copyright 2023 <a href="https://digital-artefakt.me"> Digital Artefakt </a></p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 text-end">
            <ul className="sub-footer-link">
              <li>
                <Link href="/">{t("Naslovna")}</Link>
              </li>            
              <li>
                <Link href="/kontakt">{t("Kontakt")}</Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooterTwo;
