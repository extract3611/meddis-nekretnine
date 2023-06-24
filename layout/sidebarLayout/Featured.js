/**
 * It returns a div with a class of 'advance-card feature-card' that contains a h6 tag with the text
 * 'Featured', a Slider component with a class of 'feature-slider' and the featureSlider object from
 * the data/slickSlider.js file, and a div with a class of 'labels-left' that contains a span with a
 * class of 'label label-success' and the text 'featured'
 * @returns A React component
 */
import React, { useEffect } from "react";
import Slider from "react-slick";
import { featureSlider } from "../../data/slickSlider";
import Img from "../../utils/BackgroundImageRatio";
import Link from "next/link";
import NoSsr from "../../utils/NoSsr";
import { useTranslation } from "next-i18next";

const Featured = ({data}) => {
  const {t}=useTranslation("common");

  useEffect(()=>{console.log(data)})
  return (
    <div className="advance-card feature-card">
      <h6>Odabrane</h6>
      <NoSsr>
        <Slider className="feature-slider" {...featureSlider}>
          {data.filter(nekretnina=>nekretnina.odabrano==1).map((nekretnina,key)=>(<div key={key}>
            <Link href={`/nekretnine/nekretnina/${nekretnina.id_nekretnina}`}>
            <Img src={`/slike/${nekretnina.slika}`} className="bg-img" alt="" />
            <div className="bottom-feature">
              <h5>{nekretnina.naziv}</h5>
              <h6>
                {nekretnina.cijena!=0 ? nekretnina.cijena+"€" : <span style={{color:'orange'}}>{t("Na upit")}</span>}
              </h6>
            </div></Link>
          </div>))
          }
        </Slider>
      </NoSsr>
      <div className="labels-left">
        <span className="label label-success">{t("Odabrane")}</span>
      </div>
    </div>
  );
};

export default Featured;
