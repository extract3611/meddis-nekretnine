import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";


const DetailsDeskBox = ({nekretnina}) => {
  const { t } = useTranslation("common");

  return (
    <div className='desc-box' id='details'>
      <div className='page-section'>
        <h4 className='content-title'>
          {t("Detalji nekretnine")}
         
        </h4>
        <h4 className='content-title' style={{color:'#006a62',fontSize:20}}>{t("Id nekretnine")}
 : {nekretnina.id_nekretnina}</h4>

        <Row>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
            
              <li>
                <span>{t("Tip nekretnine")} :</span> {t(nekretnina.tip)}
              </li>
             
              <li>
                <span>{t("Status nekretnine")} :</span> {t(nekretnina.status)}
              </li>
              <li>
                <span>{t("Adresa nekretnine")} :</span> {t(nekretnina.adresa)}
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
            {nekretnina.cijena ? <li>
                <span>{t("Status nekretnine")} :</span> € {nekretnina.cijena}
              </li> :null}
              <li>
                <span>{t("Površina nekretnine")} :</span> {nekretnina.povrsina} m<sup>2</sup>
              </li>
              
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>{t("Grad nekretnine")} :</span> {nekretnina.grad}
              </li>
              {nekretnina.spavace_sobe ? <li>
                <span>{t("Spavaće sobe")} :</span> {nekretnina.spavace_sobe}
              </li> : null}
              { nekretnina.kupatila ? <li>
                <span>{t("Kupatila")} :</span> {nekretnina.kupatila}
              </li> : null}
            </ul>
          </Col>
        </Row>
        <div className='about' style={{marginTop:20}} id='about'>
      {nekretnina.opis ? (<><h4>{t("Kratak opis")}</h4>
      <Row>
          <Col sm='4' lg="12" >
            <p>{nekretnina.opis}</p>
          </Col>   
      </Row></>) : null}
    </div>
      </div>
    </div>
  );
};

export default DetailsDeskBox;
