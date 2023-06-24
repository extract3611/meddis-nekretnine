import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch } from "react-redux";
import { Col, FormGroup, Label } from "reactstrap";
import { useSelector } from "react-redux";
import NoSsr from "../../utils/NoSsr";
import { useTranslation } from "next-i18next";

const RangeInputFields = ({ label, name, filterValues, setFilterValues, min, max, sm, lg }) => {
  const {t}=useTranslation("common");

  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  const { cijena, povrsina } = useSelector((state) => state.inputsReducer);
  const dispatch = useDispatch();
  var [MIN, setMIN] = useState(min);
  var [MAX, setMAX] = useState(max);
  useEffect(() => {
    setMIN(min);
    setMAX(max);
  }, [max, min]);
  const STEP = 1;
  return (
    <Col lg={lg || 12} sm={sm || 12}>
      <NoSsr>
        <FormGroup>
          <div className="price-range">
            <Label>
              {t(label)} : {label === "Cijena" && `${symbol}`} {(label === "Površina" ? povrsina[0] : cijena[0] * currencyValue).toFixed(2)} - {label === "Cijena" && `${symbol}`}{" "}
              {(label === "Površina" ? povrsina[1] : cijena[1] * currencyValue).toFixed(2)} {label === "Cijena" || "m2"}
            </Label>
            <div id={label === "Cijena" ? "slider-1" : "slider-2"} className="theme-range-3">
              <Range
                values={label === "Cijena" ? cijena : povrsina}
                step={STEP}
                min={MIN || 100}
                max={MAX || 1000000}
                onChange={(values) => {
                  setFilterValues({ ...filterValues, [`${name}`]: values });
                  dispatch({ type: name.toLowerCase(), payload: values });
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      backgroundImage:"linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%)"
                    }}>
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values: label === "Cijena" ? cijena : povrsina,
                          colors: ["#ccc", "var(--theme-default2)", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}>
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props}>
                    <div
                      style={{
                        height: "16px",
                        width: "8px",
                        borderRadius: "30%",
                        backgroundColor: "#006a62",
                      }}
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </FormGroup>
      </NoSsr>
    </Col>
  );
};

export default RangeInputFields;
