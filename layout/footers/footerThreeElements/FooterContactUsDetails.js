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
        <p>{t("White Homes je renomirana kompanija koja se specijalizovala za iznajmljivanje i prodaju nekretnina. Njihov tim stručnjaka pruža vrhunsku uslugu klijentima, pomažući im pronaći savršeni dom ili ulaganje, sa fokusom na visoku profesionalnost i zadovoljstvo klijenata.")}</p>
        <h6>{t("Kontaktirajte nas")}</h6>
        <ul className="icon-list">
          <li>
            <Link href="https://www.google.com/maps/dir//white+homes+nekretnine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x134deb4348f9770d:0x939add7bda208eb1?sa=X&ved=2ahUKEwi25IWk4rv_AhU2_rsIHZghD_wQ9Rd6BAhBEAQ">
              <i className="fas fa-map-marker-alt"></i>
            </Link>
          </li>
          <li>
          <a href="tel:+382 67 201 391"><i className="fas fa-phone-alt"></i>
          </a> 
          </li>
          <li>
          <a href = "mailto: office@whitehomes.me">

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
