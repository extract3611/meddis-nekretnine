/**
 * It returns a div with a div inside it, which has an image, a heading, a subheading, and a button
 * @returns A div with a div inside of it.
 */
import React from "react";
import { Link } from "next-translate-routes";
import { SubmitProperty, WantToBuyOrRentHome } from "../../../../constValues/constValues";
import { useTranslation } from "next-i18next";

const HomeSliderContent = ({ img, mainTitle,path,title}) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="home-content">
        <div>
          <img src={img} className="img-fluid m-0" alt="" />
          <h6>{t(WantToBuyOrRentHome)}</h6>
          <h1>{t(mainTitle)}</h1>
          <Link href={path} className="btn btn-gradient">
          {t(title)}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSliderContent;
