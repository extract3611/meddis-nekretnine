import React from "react";
import { Col, Row } from "reactstrap";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import GallerySlider from "../stickyTabOrClassic/GallerySlider";

const GalleryBox = (slike) => {
  return (
    <Row>
      <Col sm='12'>
        <div className='single-gallery mb-4'>
         
          <GallerySlider slike={slike} />
        </div>
      </Col>
    </Row>
  );
};

export default GalleryBox;
