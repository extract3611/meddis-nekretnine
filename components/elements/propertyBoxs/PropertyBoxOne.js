/**
 * It renders a skeleton loader for 3 seconds and then renders the actual content
 * @returns A React component.
 */
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "reactstrap";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import Img from "../../../utils/BackgroundImageRatio";
import PropertyLabel from "../PropertyLabel";

const PropertyBoxOne = ({ data }) => {
  const [load, setLoad] = useState(true);
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
            <a>
              <Img src={data.slika} className="bg-img" />
              <div className="labels-left">
                <PropertyLabel labels={data?.oznaka} />
              </div>
            </a>
            <div className="bottom-property">
              <div className="d-flex">
                <div>
                  <h5>
                    <Link href={`/property/image-box/?id=${data.id}`}>{data?.naziv}</Link>
                  </h5>
                  <h6>
                    {symbol}
                    {(data?.cijena * currencyValue).toFixed(2)} <small>/ već od</small>
                  </h6>
                </div>
                <Link href={`/property/image-box/?id=${data.id_nekretnine}`}>
                  <Button className=" btn-gradient mt-3">Detalji</Button>
                </Link>
              </div>
              <div className="overlay-option">
                <ul>
                  <li>
                    <span>Spavaće sobe</span>
                    <h6>{data?.spavace_sobe}</h6>
                  </li>
                  <li>
                    <span>Kupatila</span>
                    <h6>{data?.kupatila}</h6>
                  </li>
                  <li>
                    <span>Terase</span>
                    <h6>{data?.terase}</h6>
                  </li>
                  <li>
                    <span>Površina</span>
                    <h6>
                      {data?.povrsina}m<sup>2</sup>
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ContentLoader className="skeleton-svg">
          {setTimeout(() => {
            setLoad(false);
          }, 3000)}
          <rect className="skeleton-img" />
          <rect className="skeleton-c1" />
          <rect className="skeleton-c2" />
          <rect className="skeleton-c3" />
        </ContentLoader>
      )}
    </>
  );
};

export default PropertyBoxOne;
