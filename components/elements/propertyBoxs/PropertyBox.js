/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import { Link } from "next-translate-routes";

import React, { useEffect, useState } from "react";
import { Camera } from "react-feather";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import axios from "axios";
import ImageSlider from "../ImageSlider";
import { getData } from "../../../utils/getData";
import PropertyLabel from "../PropertyLabel";
import ThumbnailSlider from "../../elements/ThumbnailSlider";
import AddToCompareProducts from "../AddToCompareProducts";
import AddToWhishList from "../AddToWhishList";
import { useTranslation } from "next-i18next";
const PropertyBox = ({ data, relativeSlider, video }) => {
  const { t } = useTranslation("common");



  const [load, setLoad] = useState(true);
  const [slike,postaviSlike]=useState([])
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
useEffect(()=>{axios.post(`/api/galerija-nekretnina`, {
  id:data.id_nekretnina
})
.then(function (response) {
  console.log(response);
  postaviSlike(response.data)
})
.catch(function (error) {
  console.log(error);
})},[])
return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
          <ImageSlider images={data.slika} />
            <div className="labels-left">
            <PropertyLabel labelStatus={t(data.status)} labelType={(t(data.tip))} />
            </div>
            {!relativeSlider && (
              <>
                <div className="seen-data">
                  <Camera />
                  <span>{slike.length}</span>
                </div>
               
              </>
            )}
          </div>

          <div className="property-details">
            <span className="font-roboto">{data.grad} </span>
            <Link href={Array.isArray(data.img) ? `/nekretnine/nekretnina/${data.id_nekretnina}` : `/nekretnine/nekretnina/${data.id_nekretnina}`}>
              <h3>{data.naziv}</h3>
            </Link>
            {data.cijena==0 ? <h6 style={{color:'orange'}}>{t("Na upit")}</h6> : <h6>
              {symbol}
              {(data.cijena * currencyValue).toFixed(2) || (48596.0 * currencyValue).toFixed(2)}*
            </h6> }
            
            <p className="font-roboto">{data.opis || "This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting.."} </p>
            <ul>
            {data.spavace_sobe!=0 ? 
              <li>
                <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                {t("Spavaće sobe")} : {data.spavace_sobe || 5}
              </li>:null}
              {data.kupatila!=0 ? <li>
                <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                {t("Kupatila")} : {data.kupatila || 5}
              </li> : null}
              {data.povrsina && data.povrsina!=0 ? <li>
                <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                {t("Površina")} : {data.povrsina || 5} m<sup>2</sup>
              </li> : null}
            </ul>
            <div className="property-btn d-flex">
              <span>{data.datum}</span>
              <Link href={Array.isArray(data.img) ? `/nekretnine/nekretnina/${data.id_nekretnina}` : `/nekretnine/nekretnina/${data.id_nekretnina}`}>
              <div>
                <button type="button" className="btn btn-dashed btn-pill">
                  {t("Detalji")}</button></div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ContentLoader className="skeleton-svg">
            {setTimeout(() => {
              setLoad(false);
            }, 1000)}
            <rect className="skeleton-img" />
            <rect className="skeleton-c1" />
            <rect className="skeleton-c2" />
            <rect className="skeleton-c3" />
          </ContentLoader>
        </>
      )}
    </>
  );
};

export default PropertyBox;
