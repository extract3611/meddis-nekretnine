import React, { useEffect, useState } from "react";
import { AppPropertyData } from "../../../../data/appPropertyData";
import { getData } from "../../../../utils/getData";

import PropertyServicesSection from "../../../home/Propertyservices";
import AboutUsSection from "./AboutUs";

const BodyContent = () => {

  return (
    <>
      <AboutUsSection />
      <div className="bg-light">
        <PropertyServicesSection value={AppPropertyData.PropertyServices} />
      </div>
      <div className="bg-light">
      </div>
    </>
  );
};

export default BodyContent;
