/**
 * It's a functional component that renders a div with a className of 'advance-card' and a child
 * component called InputForm
 * @returns A component that is a div with a class of advance-card. Inside the div is a h6 tag with the
 * text filter. Inside the div is an InputForm component.
 */
import { useTranslation } from "next-i18next";
import React from "react";
import InputForm from "../../components/home/slider-filter-search/homeElements/InputForm";

const Filter = ({ value, sm, lg }) => {
  const {t}=useTranslation("common");

  return (
    <>
      <div className='advance-card mt-0'>
        <h5 className='mb-0 advance-title '>{t("Napredna pretraga")} </h5>
      </div>
      <div className='advance-card'>
        <h6>{t("Filtriraj nekretnine")}</h6>
        <InputForm label={false} value={value} sm={sm} lg={lg}/>
      </div>
    </>
  );
};

export default Filter;
