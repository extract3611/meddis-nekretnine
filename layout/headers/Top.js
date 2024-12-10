import React from "react";
import Logo from "../../public/assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { odjava } from "../../redux-toolkit/autentikacija-redux/korisnik/korisnik_slice";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faFacebook,
} from "@fortawesome/free-solid-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Top() {
  const korisnik = useSelector((state) => state.korisnik.value);
  const dispatch = useDispatch();
  const navigacija = useRouter();
  console.log(korisnik);
  const odjaviti = async () => {
    const odgovor = await axios.post(
      "/odjava",
      {},
      { withCredentials: true }
    );
    console.log(odgovor);
    dispatch(odjava());
    localStorage.removeItem("korisnik");
    navigacija.push("/prijava");
  };
  return (
    <>
      <div className="container-fluid contic">
        <div
          className="kontakt"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ marginRight: 25 }}>
            <a href="tel:+38267201391">
              <FontAwesomeIcon
                className="logc"
                icon={faPhone}
                style={{ marginRight: 5 }}
              ></FontAwesomeIcon>
              <span className="spanicc">+382/67/623-663</span>
            </a>
          </div>

          <div style={{ marginRight: 25 }}>
            <a href="mailto:email@example.com">
              <FontAwesomeIcon
                className="logc"
                style={{ marginRight: 5 }}
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <span className="spanicc">office@meddisgroup.me</span>
            </a>
          </div>
          <div style={{ marginRight: 25 }}>
            <FontAwesomeIcon
              style={{ marginRight: 5 }}
              className="logc"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            <span className="spanicc">
            Bulevar Revolucije C-7, Bar
            </span>
          </div>
        </div>
        <div className="drustvene">
          <div className="logc logcc">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </div>
          <div className="logc logcc">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </div>
          <div className="logc logcc">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </div>
        </div>
      </div>
   
    </>
  );
}
