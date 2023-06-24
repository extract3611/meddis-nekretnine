import React, { useEffect } from "react";
import Slider from "react-slick";
import { propertySlider } from "../../data/slickSlider";
import Img from "../../utils/BackgroundImageRatio";
import NoSsr from "../../utils/NoSsr";

const ImageSlider = ({ images }) => {
  useEffect(()=>console.log(images),[])
  return (
    <NoSsr>
      <Slider className="property-slider" {...propertySlider}>
        {images!=undefined && images.length!=0 && typeof images !="string" ? images.map((data, i) => (
          <div key={i}>
            <div>
              <Img src={`${process.env.NEXT_PUBLIC_API_SERVER}/${data.slika}`} className="bg-img" />
            </div>
          </div>
        )) : <Img src={`/slike/${images}`} className="bg-img" />
      }
      </Slider>
    </NoSsr>
  );
};

export default ImageSlider;
