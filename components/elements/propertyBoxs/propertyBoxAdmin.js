/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Camera, Trash2 } from "react-feather";
import ContentLoader from "react-content-loader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ImageSlider from "../ImageSlider";
import { getData } from "../../../utils/getData";
import { Edit } from "react-feather";
import { User, Phone, Mail } from "react-feather";
import { brisiNekretninu } from "../../../redux-toolkit/nekretnine-redux/sveNekretnine";

import { useAlert } from "react-alert";
import PropertyLabel from "../PropertyLabel";
import { ucitajNekretnine } from "../../../redux-toolkit/nekretnine-redux/sveNekretnine";

import ThumbnailSlider from "../../elements/ThumbnailSlider";
import AddToCompareProducts from "../AddToCompareProducts";
import AddToWhishList from "../AddToWhishList";
import { brisiNeodobrenuNekretninu } from "../../../redux-toolkit/nekretnine-redux/neodobreneNekretnine";
const PropertyBox = ({ data, relativeSlider, video, izmijeni }) => {
const dispatch=useDispatch();
const [load, setLoad] = useState(true);
const [korisnik,postaviKorisnika]=useState(null);

const alert = useAlert();
const alertFnc = () => {
  alert.show("Da li ste sigurni da želite da obrižete izabrani projekat?", {
    title: "Upozorenje!",

    actions: [
      {
        copy: "Da, siguran sam",
        onClick: () => {
          deleteProperty();
        },
      },
      {
        copy: "Ne, Izađi",
        onClick: () => {},
      },
    ],
  });
};
let sveNekretnine=useSelector(state=>state.nekretnine.niz)
const  deleteProperty=async()=>{
  await axios.post(`/api/brisi-nekretninu`,{
    id:data.id_nekretnina
  }).then(res=>{console.log(res.data);
    if(data.odobreno==true){
    dispatch(brisiNekretninu(data.id_nekretnina));}
  else{
    dispatch(brisiNeodobrenuNekretninu(data.id_nekretnina));}

  })
}
useEffect(()=>{
  if(data.korisnik && data.korisnik!=4){
    axios.post('api/dohvatiKorisnika',{id:data.korisnik}).then(vrijednost=>
      postaviKorisnika(vrijednost.data[0])
    ).catch(greska=>console.log(greska))
  }
},[])
useEffect(()=>{
  console.log(korisnik)
},[korisnik])


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
            {relativeSlider ? <ThumbnailSlider images={data.slika} videoData={data.video} video={video} /> : <ImageSlider images={data.slika} />}
            <div className="labels-left">
              <PropertyLabel labels={data.oznaka} />
            </div>
            {!relativeSlider && (
              <>
                <div className="seen-data">
                  <Camera />
                  <span>{(slike.length==0 && (data.slika=="" || data.slika==null)) ? 0 : slike.length!=0 ? slike.length : 1}</span>
                </div>
                
               
              </>
            )}
          </div>

          <div className="property-details">
            <span className="font-roboto">{data.grad} </span>
            <span style={{display:"block"}}>{data.datum}</span>

            <Link href={Array.isArray(data.img) ? `/nekretnine/nekretnina/?id=${data.id_nekretnina}` : `/nekretnine/nekretnina/?id=${data.id_nekretnina}`}>
              <h3>{data.naziv}</h3>
            </Link>
            {data.cijena==0 ? <h6 style={{color:'orange'}}>Na upit</h6> : <h6>
              {symbol}
              {(data.cijena * currencyValue).toFixed(2) || (48596.0 * currencyValue).toFixed(2)}*
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
                Površina : {data.povrsina} m<sup>2</sup>
              </li> : null}
            </ul>
            {korisnik!=null ? 
                 <ul>
                   <li>
                     <User style={{height:15}}/>ime : {korisnik.ime_prezime}
                   </li>
                   <li>
                    <Phone style={{height:15}}/> kontakt : {korisnik.kontakt}
                   </li>
                   <li>
                     <Mail style={{height:15}}/>email : {korisnik.email}
                   </li>
                 </ul> : null
                }
            <div className="property-btn d-flex">
             
                <Link href={data.odobreno==true ? { pathname: `/admin/izmijeni-nekretninu/${data.id_nekretnina}`} : { pathname: `/admin/odobri-nekretninu/${data.id_nekretnina}`} }><button type="button" className="btn btn-dashed btn-pill">
                <Edit style={{height:20,color:'green'}}/> Izmijeni 
                </button></Link>
                <button onClick={()=>alertFnc()} style={{display:'flex',justifyContent:'space-between'}} type="button" className="btn btn-dashed btn-pill">
                <Trash2 style={{height:20,color:'red'}}/> Izbriši
                </button>
               

              
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
