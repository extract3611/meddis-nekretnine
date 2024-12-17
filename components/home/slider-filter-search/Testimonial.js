import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { HappyClients, Our } from "../../../constValues/constValues";
import { testimonial2 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import ReviewStarr from "../../elements/ReviewStarr";
import axios from "axios";

const TestimonialSection = ({  normal }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);


 const googleReviews = [
    {
      detail: "Sjajno iskustvo!",
      name: "Andrija Ćulafić",
    },
    {
      detail:
        "Izuzetno sam zadovoljan uslugom! Kompanija je pokazala visok nivo profesionalizma, preciznosti i posvećenosti svakom detalju.",
      name: "Muhamed BegBushati",
    },
    {
      detail:
        "Sve pohvale za MEDDiS Group Bar, za izuzetno profesionalan rad, brzinu, efikasnost i posvećenost poslu.",
      name: "Nevenka Peković UŽIVO",
    },
    {
      detail:
        "Sve najbolje za agenciju i Sanelu. Profesionalni su u oblasti prodaje i kupovine usluga. Vrlo uspešno su mi prodali stan.",
      name: "Azra Hodžić",
    },
    {
      detail:
        "Imam veoma pozitivno iskustvo sa agencijom za nekretnine. Profesionalan odnos, ljubaznost i posvećenost koje pokazuju su najbolja preporuka.",
      name: "Ivan Mimović",
    },
    {
      detail: "Meddis Group Bar je agencija koja će ispuniti sva vaša očekivanja.",
      name: "Nevenka",
    },
    {
      detail: "Profesionalno - pošteno - precizno... Sve na jednom mestu!",
      name: "Veselin Šoškić",
    },
    {
      detail: "Sve pohvale za korektnost i profesionalizam... Srećno i puno uspeha u budućem radu.",
      name: "Bato Vulić",
    },
    {
      detail: "Odgovornost na visokom nivou, tačnost i uspešnost. Puno sreće i uspeha.",
      name: "Rada Dragićević",
    },
    {
      detail: "Odlični su i pouzdani, sve pohvale.",
      name: "Biljana Dasić",
    },
  ];
  
  

  return (
    <section className={`testimonial-bg ${normal ? "testimonial-layout6" : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="title-1 text-white">
              <span className="label label-gradient">{Our}</span>
              <h2>{HappyClients}</h2>
              <hr />
            </div>
            <NoSsr>
              <Slider className="testimonial-2 arrow-light" {...testimonial2}>
                {/* Render static testimonial cards */}
                {
                  googleReviews.map((data, i) => (
                    <div key={i}>
                      <div className="client-slider light-bg">
                        <ul className="user-list">
                          <li>
                            <img src={data.img1} alt="" />
                          </li>
                          <li>
                            <img src={data.img2} alt="" />
                            <div className="heart-bg"></div>
                            <img
                              src="/assets/images/testimonial/heart.png"
                              alt=""
                              className="heart-icon"
                            />
                          </li>
                          <li>
                            <img src={data.img3} alt="" />
                          </li>
                        </ul>
                        <p style={{color:"white"}}>{data.detail}</p>
                        <h6 style={{color:"white",fontSize:25}} >Meddis Real Estate</h6>
                        <ul className="client-rating">
                          <ReviewStarr />
                        </ul>
                        <span className="label label-white label-lg">
                          <span className="gradient-1">{data.name}</span>
                        </span>
                      </div>
                    </div>
                  ))}

                {/* Render fetched place details */}
               
              </Slider>
            </NoSsr>
            {error && <p className="error-text">{error}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
