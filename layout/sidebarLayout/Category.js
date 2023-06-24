/**
 * It's a function that takes in an array of objects and returns a filtered array of objects based on
 * the propertyType
 * @returns A list of properties
 */
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";

const Category = ({ value }) => {
  const {t}=useTranslation("common");

  const dispatch = useDispatch();
  return (
    <div className='advance-card'>
      <h6>{t("Kategorije")}</h6>
      <div className='category-property'>
        <ul>
          <li>
            <a onClick={() => dispatch({ type: "tip", payload: "Stan" })}>
              <i className='fas fa-arrow-right me-2'></i>{t("Stan")} <span className='float-end'>({value?.filter((x) => x.tip === "Stan").length || 15})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "tip", payload: "Kuća" })}>
              <i className='fas fa-arrow-right me-2'></i>{t("Kuća")} <span className='float-end'>({value?.filter((x) => x.tip === "Kuća").length || 0})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "tip", payload: "Poslovni prostor" })}>
              <i className='fas fa-arrow-right me-2'></i>{t("Poslovni prostor")} <span className='float-end'>({value?.filter((x) => x.tip === "Poslovni prostor").length || 0})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "tip", payload: "Zemljište" })}>
              <i className='fas fa-arrow-right me-2'></i>{t("Zemljište")}<span className='float-end'>({value?.filter((x) => x.tip === "Zemljište").length || 0})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "tip", payload: "Vila" })}>
              <i className='fas fa-arrow-right me-2'></i>{t("Vila")}<span className='float-end'>({value?.filter((x) => x.tip === "Vila").length || 0})</span>
            </a>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Category;
