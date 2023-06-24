/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import { AppPropertyData } from "../../../data/appPropertyData";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import FeatureSection from "./Feature";
import HomeBannerSection from "./HomeBanner";
import OfferSection from "./Offer";
import PropertySection from "./Property";
import SalePropertySection from "./SaleProperty";
import TestimonialSection from "./Testimonial";
import { useSelector } from "react-redux";
const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();
let sveNekretnine=useSelector(state=>state.nekretnine.niz)
  useEffect(()=>{console.log(sveNekretnine)},[sveNekretnine])
  useEffect(() => {
   setValue(sveNekretnine)
  }, []);

  return (
    <>
      <HomeBannerSection />
      <PropertySection value={sveNekretnine} />
      <FeatureSection value={sveNekretnine} />
      <SalePropertySection value={sveNekretnine} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
    </>
  );
};

export default BodyContent;
