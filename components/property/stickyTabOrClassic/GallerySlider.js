/**
 * It takes an array of images and returns a slider with the images
 * @returns The return statement is used to return a value from a function.
 */
import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import { galleryFor, galleryNav } from "../../../data/slickSlider";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";
import { useRouter } from "next/router";
import sveNekretnine from "../../../redux-toolkit/nekretnine-redux/sveNekretnine";
import axios from "axios";
const GallerySlider = () => {
  const [slike,postaviSlike]=useState([]);
  const [loader,postaviLoader]=useState(false);

  const ruter = useRouter();
  const { nekretnina } = ruter.query;
  useEffect(()=>{axios.post(`/api/galerija`, {
    id:nekretnina
  })
  .then(function (response) {
    console.log(response);
    postaviSlike(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })},[ruter])
  useEffect(()=>{
    if(slike.length!=0){
      postaviLoader(true)
      console.log(slike)
    }
    
  },[slike])

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const HomeImage = [
    "/assets/images/property/4.jpg",
    "/assets/images/property/3.jpg",
    "/assets/images/property/14.jpg",
    "/assets/images/property/11.jpg",
    "/assets/images/property/12.jpg",
    "/assets/images/property/4.jpg",
    "/assets/images/property/3.jpg",
    "/assets/images/property/11.jpg",
    "/assets/images/property/12.jpg",
  ];
  if(loader){
  return (
    <NoSsr>
      <Slider className="gallery-for" {...galleryFor} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {slike.map((data, i) => (
          <div key={i}>
            <div>
              <Img src={`/slike/${data.slika}`} className="bg-img" />
            </div>
          </div>
        ))}
      </Slider>
      <Slider className="gallery-nav p-1" {...galleryNav} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
        {slike.map((data, i) => (
          <div key={i}>
            <div>
              <Img className="img-fluid bg-img" src={`/slike/${data.slika}`} />
            </div>
          </div>
        ))}
      </Slider>
    </NoSsr>
  );}

else{
  return(<>Ocitivanje</>)
}}

export default GallerySlider;
