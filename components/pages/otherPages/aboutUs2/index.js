import React, { useEffect, useState } from "react";
import { AppPropertyData } from "../../../../data/appPropertyData";
import { getData } from "../../../../utils/getData";
import AboutSection from "../../../home/slider-filter-search/About";
import AboutUsSection from "./AboutUs";
import RentingServices from "../../../home/Rentingservices";

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <AboutUsSection />
      <RentingServices value={AppPropertyData.ProvidedServices} />
     
    </>
  );
};

export default BodyContent;
