import React from "react";
import Logo from "../img/medis.png";
import { useSelector, useDispatch } from "react-redux";
import { odjava } from "../autentikacija-redux/korisnik/korisnik_slice.js";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { odjava } from "../../redux-toolkit/autentikacija-redux/korisnik/korisnik_slice";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faHouse } from "@fortawesome/free-solid-svg-icons";
export default function Navbar2() {
  const korisnik = useSelector((state) => state.korisnik.value);
  const dispatch = useDispatch();
  const navigacija = useRouter();
  console.log(korisnik);
  const odjaviti = async () => {
    const odgovor = await axios.post("/odjava", {}, { withCredentials: true });
    console.log(odgovor);
    dispatch(odjava());
    localStorage.removeItem("korisnik");
    navigacija("/administrator/prijava");
  };
  return (
    <div className="navbar">
      <div className="cont">
        {korisnik != null ? (
          <div className="odjava">
            <span></span>
            <span onClick={odjaviti}>
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
                icon={faDoorOpen}
              />
            </span>
          </div>
        ) : (
          <></>
        )}
        <div className="logo">
          <img src={Logo} />
        </div>
        {korisnik != null ? (
          <Link to="/">
            {" "}
            <div className="kucica">
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
                icon={faHouse}
              />
            </div>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
