import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { HappyClients, Our } from "../../../constValues/constValues";
import { testimonial2 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import ReviewStarr from "../../elements/ReviewStarr";
import axios from "axios";

const TestimonialSection = ({ value, normal }) => {
  const [placeDetails, setPlaceDetails] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = "AIzaSyAlMKlgbXalICCvCcMdNw4VPzzJWx3y9b0"; // Replace with your Google API key
  const placeIds = [
    "ChIJtd8BEQBzThMRXOdzAg9ymvg", // Example Place ID
    // Add more Place IDs as needed
  ];

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const promises = placeIds.map((placeId) => {
          const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&placeid=${placeId}`;
          return axios.get(url);
        });

        const responses = await Promise.all(promises);
        const validResponses = responses
          .filter((res) => res.data.status === "OK")
          .map((res) => res.data.result);

        setPlaceDetails(validResponses);
      } catch (err) {
        setError("Failed to fetch place details. Please try again later.");
      }
    };

    fetchPlaceDetails();
  }, [apiKey, placeIds]);

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
                {value &&
                  value.map((data, i) => (
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
                        <p>{data.detail}</p>
                        <h6>real estate</h6>
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
                {placeDetails &&
                  placeDetails.map((place, i) => (
                    <div key={i}>
                      <div className="client-slider light-bg">
                        <ul className="user-list">
                          <li>
                            <img
                              src={place.photos ? place.photos[0].photo_reference : "/assets/images/default-placeholder.png"}
                              alt={place.name}
                            />
                          </li>
                        </ul>
                        <p>{place.formatted_address}</p>
                        <h6>{place.name}</h6>
                        <span className="label label-white label-lg">
                          <span className="gradient-1">{place.types?.join(", ")}</span>
                        </span>
                      </div>
                    </div>
                  ))}
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
