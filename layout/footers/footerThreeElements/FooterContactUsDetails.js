import { Link } from "next-translate-routes";
import React from "react";
import { Col } from "reactstrap";
import { Logo3 } from "../../../components/elements/Logo";
import { useTranslation } from "next-i18next";
const FooterContactUsDetails = () => {
  const { t } = useTranslation("common");

  return (
    <Col xl="3">
      <div className="footer-details text-center">
        <Logo3 />
        <p>{t("Sa tradicijom dugom 26 godina, MEDDiS Group d.o.o. je porodično preduzeće koje uspješno posluje u oblasti prometa nekretnina i građevinarstva. Naša posvećenost kvalitetu, stručnost i iskustvo čine nas idealnim izborom za sve koji traže profesionalnu podršku u oblasti nekretnina.")}</p>
        <h6>{t("Kontaktirajte nas")}</h6>
        <ul className="icon-list">
          <li>
            <Link href="https://www.google.com/maps/place/MEDDiS+Group/@42.0959757,19.0977161,15z/data=!4m2!3m1!1s0x0:0xf89a720f0273e75c?sa=X&ved=1t:2428&ictx=111">
              <i className="fas fa-map-marker-alt"></i>
            </Link>
          </li>
          <li>
          <a href="tel:+382 67 623 663"><i className="fas fa-phone-alt"></i>
          </a> 
          </li>
          <li>
          <a href = "mailto: office@meddisgroup.me">

              <i className="fas fa-envelope"></i>
              </a>          </li>
          <li>
            <Link href="/kontakt">
              <i className="fas fa-globe"></i>
            </Link>
          </li>
         
        </ul>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
