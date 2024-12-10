import Link from "next/link";
import React from "react";
import { AppPropertyData } from "../../data/appPropertyData";
import { useTranslation } from "next-i18next";
const WhatAreYouLookingFor = () => {
  const {t}=useTranslation("common");

  return (

    <div className="looking-icons">
      <h5>{t("Šta vas interesuje?")}</h5>
      <ul>
        {AppPropertyData.WhatAreYouLookingFor.map((data, i) => (
          <li key={i}>
            <Link href={data.path} className="looking-icon">
            <a className="looking-icon">
              
              <h6><svg className="property-svg">
                <use xlinkHref={data.img}></use>
              </svg>{t(data.title)}</h6></a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatAreYouLookingFor;
