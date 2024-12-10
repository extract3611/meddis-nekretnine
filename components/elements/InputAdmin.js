/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { getData } from "../../utils/getData";
import { DropdownInputFields } from "../elements/DropDownInputFieldsAdmin";
import RangeInputFields from "../elements/RangeInputFields";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TextInputField } from "./TextInputFIeld";
import { inputsReducer } from "../../redux-toolkit/reducers/inputsReducer";
const InputForm = ({ label, lg, sm, lastSm }) => {
  const [filterValues, setFilterValues] = useState({});
  const input=useSelector(state=>state.inputsReducer)
const dispatch=useDispatch();
  const [value, setValue] = useState();

  

  useEffect(()=>{if(input.status=="Izdavanje"){dispatch({type:"cijena",payload:[0,5000]});
}
  else{dispatch({type:"cijena",payload:[0,5000000]})}
    
  },[input.status])

  

  return (
    <Row className="gx-3">
      <DropdownInputFields filterValues={filterValues} setFilterValues={setFilterValues} label={label} start={0} end={12} lg={2} sm={3} lastSm={lastSm} />
      <TextInputField color="black" filterValues={filterValues} setFilterValues={setFilterValues} label="Pretraga" name="pretraga" lg={3} sm={1}/>

      <Col lg={2}>
        <Link style={{width:'100%'}} href="/admin/sve-nekretnine" className="btn btn-gradient mt-3">
            Pretaži
        </Link>
      </Col>
    </Row>
  );
};

export default InputForm;
