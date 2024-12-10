/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import { Link } from "next-translate-routes";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { getData } from "../../../../utils/getData";
import { DropdownInputFields } from "../../../elements/DropdownInputFields";
import RangeInputFields from "../../../elements/RangeInputFields";
import { useSelector } from "react-redux";
import { TextInputField } from "../../../elements/TextInputFIeld";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";

import { inputsReducer } from "../../../../redux-toolkit/reducers/inputsReducer";
const InputForm = ({ label, lg, sm, lastSm }) => {
  const {t}=useTranslation("common");

  const [filterValues, setFilterValues] = useState({});
  const input=useSelector(state=>state.inputsReducer)
const dispatch=useDispatch();
  const [value, setValue] = useState();









  return (
    <Row className="gx-3">
      <DropdownInputFields filterValues={filterValues} setFilterValues={setFilterValues} label={label} start={0} end={6} lg={lg} sm={sm} lastSm={lastSm} />

      <RangeInputFields label="Cijena" name="cijena" filterValues={filterValues} setFilterValues={setFilterValues} min={0} max={ input.status==t("Izdavanje") ? 5000001 : 5000000} lg={lg} sm={sm} />
      <RangeInputFields label="Površina" name="povrsina" filterValues={filterValues} setFilterValues={setFilterValues} min={0} max={5000} lg={lg} sm={sm} />

      <TextInputField  filterValues={filterValues} setFilterValues={setFilterValues}  name="pretraga"  lg={lg} sm={sm}/>
      <Col lg={lg || 12}>
        <Link style={{width:'100%'}} href="/nekretnine/pretrazi-nekretninu" className="btn btn-gradient mt-3">
            <button className="btn btn-gradient">{t("Pretraži")}</button>
        </Link>
      </Col>
    </Row>
  );
};

export default InputForm;
