/**
 * It takes an array of data and returns a row of columns with the data
 * @returns An array of objects.
 */
import React from "react";
import { Col, Row } from "reactstrap";

const AboutDeskBox = ({nekretnina}) => {

  return (
    <div className='about page-section' id='about'>
      <h4>Kratak opis</h4>
      <Row>
          <Col sm='4' >
            <p>{nekretnina.opis}</p>
          </Col>
        
      </Row>
    </div>
  );
};

export default AboutDeskBox;
