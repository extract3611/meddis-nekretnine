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
      "http://localhost:8800/odjava",
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
            <a href="+382/67/201-391">
              <FontAwesomeIcon
                className="logc"
                icon={faPhone}
                style={{ marginRight: 5 }}
              ></FontAwesomeIcon>
              <span className="spanicc">+382/67/201-391</span>
            </a>
          </div>

          <div style={{ marginRight: 25 }}>
            <a href="mailto:email@example.com">
              <FontAwesomeIcon
                className="logc"
                style={{ marginRight: 5 }}
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <span className="spanicc">office@whitehomes.com</span>
            </a>
          </div>
          <div style={{ marginRight: 25 }}>
            <FontAwesomeIcon
              style={{ marginRight: 5 }}
              className="logc"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            <span className="spanicc">
              Marka Radovića 7, Central Point, Podgorica
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
