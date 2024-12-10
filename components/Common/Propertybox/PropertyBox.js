
import Link from "next/link";
import React from "react";
import { Camera, Heart } from "react-feather";
import ImageSlider from "../../elements/ImageSlider";
import AddToCompareProducts from "./AddToCompareProducts";
import PropertyLabel from "../../elements/PropertyLabel";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import ThumbnailSlider from "../../elements/ThumbnailSlider";
import axios from "axios";
import { useState,useEffect } from "react";

const PropertyBox = ({ data,relativeSlider }) => {
    const symbol = '€';

    const [load, setLoad] = useState(true);
    const [slike,postaviSlike]=useState([])
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
            <div  className="property-box">
            <div  style={{backgroundImage:`url("/${data.slika}")`,minHeight:"200px",backgroundSize:"cover",backgroundPosition:'center'}}  className="property-image">
                
            <div className="labels-left">
              <PropertyLabel labels={data.status} />
            </div>
            
          </div>
          <div className="property-details">
            <span className="font-roboto">{data.grad} </span>
            <Link href={Array.isArray(data.img) ? `/property/image-slider/?naziv=${encodeURIComponent(data.naziv)}` : `/property/image-box/?naziv=${encodeURIComponent(data.naziv)}`}>
            <h3>{data.naziv}
              </h3>
            </Link>
            {data.cijena==0 ? <h6 style={{color:'yellow'}}>Na upit</h6> : <h6>
              {symbol}
              {data.cijena}
            </h6> }
            
            <ul>
            {data.spavace_sobe!=0 ? 
              <li>
                <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                Kreveti : {data.spavace_sobe || 5}
              </li>:null}
              {data.kupatila!=0 ? <li>
                <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                Kupatila : {data.kupatila || 5}
              </li> : null}
              {data.povrsina && data.povrsina!=0 ? <li>
                <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                Površina : {data.povrsina || 5}
              </li> : null}
            </ul>
            <div className="property-btn d-flex">
              <span>{data.datum}</span>
<Link href={Array.isArray(data.img) ? `/nekretnine/nekretnina/?naziv=${encodeURIComponent(data.naziv)}` : `/nekretnine/image-box/?naziv=${encodeURIComponent(data.naziv)}`}>
                <button type="button" className="btn btn-dashed btn-pill">
                  Detalji
                </button>
              </Link>
            </div>
          </div>
            </div>
        </>
    );
};

export default PropertyBox;
