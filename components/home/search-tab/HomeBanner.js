import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container } from "reactstrap";
import { DropdownInputFields } from "../../elements/DropdownInputFields";
import { TextInputField } from "../../elements/TextInputFIeld";
import RangeInputFields from "../../elements/RangeInputFields";
import Dots from "./Dots";

const HomeBannerSection = () => {
  const [filterValues, setFilterValues] = useState({});
  const dispatch = useDispatch();
  const { propertyStatus } = useSelector((state) => state.inputsReducer);

  

 

  return (
    <section className="layout-home8 bg-img-2 ratio_landscape">
      <Container className="p-0">
        <div className="row m-0">
          <Col xl="7" lg="8">
            <div className="home-left-content">
              <div className="home-content">
                <h1 className="mt-0">
                Vaš Partner za Savršen
                  <br />
                  Dom                </h1>
                <h6 className="font-roboto mb-0">
                Ako želite da kupite savršen dom ili brzo i sigurno prodate svoju nekretninu, naš tim stručnjaka je tu da vam pruži kompletnu podršku kroz svaki korak procesa.
                </h6>
              </div>
              <div className="search-with-tab">
                <ul className="nav nav-tabs" id="home-tab" role="tablist">
                  <li className="nav-item">
                    <Link href="/nekretnine/sve-nekretnine?filtriraniPodaci=%257B%2522cijena%2522%253A%255B0%252C5000000%255D%252C%2522povrsina%2522%253A%255B0%252C5000%255D%252C%2522sortirajPrema%2522%253A%2522Datum%2520-%2520Najnoviji%2522%252C%2522status%2522%253A%2522Prodaja%2522%257D">
                    <a
                      className={`nav-link ${
                        propertyStatus === "For Sell" && "active"
                      }`}
                   
                    >
                      Prodaja
                    </a></Link>
                  </li>
                  <li className="nav-item">
                  <Link href="/nekretnine/sve-nekretnine?filtriraniPodaci=%257B%2522cijena%2522%253A%255B0%252C5000%255D%252C%2522povrsina%2522%253A%255B0%252C5000%255D%252C%2522sortirajPrema%2522%253A%2522Datum%2520-%2520Najnoviji%2522%252C%2522status%2522%253A%2522Izdavanje%2522%257D">

                    <a
                      className={`nav-link ${
                        propertyStatus === "Izdavanje" && "active"
                      }`}
                    
                    >
                     Izdavanje
                    </a></Link>
                  </li>
                </ul>
                <div className="tab-content" id="home-tabContent">
                  <div className="tab-pane fade show active" id="sell">
                    <div className="row review-form gx-3">
                      <DropdownInputFields
                        filterValues={filterValues}
                        setFilterValues={setFilterValues}
                        lg={4}
                        sm={6}
                        start={1}
                        end={6}
                      />
                     <RangeInputFields label="Cijena" name="cijena" filterValues={filterValues} setFilterValues={setFilterValues} min={0} max={5000000} lg={6} sm={6} />
                     <RangeInputFields label="Površina" name="povrsina" filterValues={filterValues} setFilterValues={setFilterValues} min={0} max={5000} lg={6} sm={6} />
                    
                      <Col lg="4" md="6">
                        <Link
                          href="/nekretnine/pretrazi-nekretninu"
                        >
                          <button className="btn btn-gradient">
                          Pretraži</button>
                        </Link>
                      </Col>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="5" lg="4">
            <div className="home-right-image">
              <img
                src="/assets/images/others/building.jpg"
                alt=""
                className="bg-img"
              />
            </div>
          </Col>
        </div>
        <div className="bg-dots">
          <Dots />
        </div>
      </Container>
    </section>
  );
};

export default HomeBannerSection;
