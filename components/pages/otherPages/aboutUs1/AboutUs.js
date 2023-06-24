import React from "react";
import { Container, Row } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";

import { useTranslation } from "next-i18next";
const AboutUsSection = () => {

  const {t}=useTranslation("common");

  return (
    <section className='about-main ratio_36'>
      <Container>
        <Row>
          <div className='col'>
           
            <div className='user-about'>
              <Row>
                <div className='col-xl-7 col-lg-7'>
                  <div className='about-content'>
                    <h1>
                    {t("Opširan asortiman usluga koje se odnose na nekretnine u Crnoj Gori.")}
                    </h1>
                    <p className='font-roboto'>
                    {t("White  Homes  je brend koji posluje pod kompanijom 28 Real Estate D.o.o. I nudi opširan asortiman usluga koje se onose na nekretnine u Crnoj Gori. Osnovna djelatnost naše kompanije je posredovanje u prometu nepokretnosti (prodaja i izdavanje, stanova, kuća, vila, placeva, lokala, poslovnih objekata, industrijskog zemljišta) u Crnoj Gori, upravljanje sopstvenim i tuđim nekretninama, kao i brojne usluge u servisiranju vaše nekretnine.Visok stepen profesionalnosti, predanost u radu, posvećenost klijentima, timski rad zaposlenih, saradnja sa kolegama iz konkurentskih firmi, istakli su našu agenciju na tržištu nekretnina kao sigurnog partnera i posrednika koji će vam uz potpunu diskreciju i pravnu sigurnost obaviti kupoprodajnu transakciju i preporučiti nas dalje.Naša specijalnost su luksuzni i novi, stanovi, kuće i poslovni prostori, nekretnine u Podgorici i nekretnine na crnogorskom primorju.")}<br/>
<strong>{t("Prodavcima i kupcima garantujemo apsolutnu transparentnost i jasnoću u svim transakcijama.")}</strong><br/>
<strong>{t("Zakupcima pružamo usluge efikasnog pronalaženja nepokretnosti koje najviše odgovaraju njihovim željama i potrebama uz obavezan obilazak nepokretnosti i savjetodavnu podršku.")}</strong>
<strong>{t("Zakupodavcima pružamo pouzdanu i ozbiljnu prezentaciju njihovih nekretnina velikom broju potencijalnih zakupaca.")}</strong>
<strong>{t("Ističemo kvalitetnu ponudu za:")}</strong>
<ol style={{ listStyleType: 'circle',
    listStyle: 'circle',
    listStylePosition: 'inside',

   
}}>
<li className="list-itemm">{t("Oglašavanje vaše imovine.")}</li>
<li className="list-itemm">{t("Posvećenost u odabiru kvalitetnih partnera za kupovinu ili zakup vaše nekretnine")}</li>
<li className="list-itemm">{t("Organizovanje rezervacija i ugošćavanje gostiju.")}</li>
<li className="list-itemm">{t("Čišćenje prije dolazaka gostiju")}</li>
<li className="list-itemm">{t("Čišćenje po odlasku stanara")}</li>
<li className="list-itemm">{t("Generalno čišćenje")}</li>
<li className="list-itemm">{t("Dubinsko čišćenje i usisavanje najkvalitetnijom opremom.")}</li>
<li className="list-itemm">{t("Redovno održavanje nekretnina i stalni kontakt sa stanarima")}</li></ol>
{t("Kad korisite usluge kompanije za odrzavanje I izdavanje nekrentina mozete biti sigurni da to zaista vrijedi.")}
                    </p>
                  </div>
              
                </div>
                <div className='col-xl-5 map-image col-lg-5'>
                  <Img style={{filter:'opacity(0.3)'}} src='/assets/images/cg.jpg' className='img-fluid ' alt='' />
                  <div className='marker-icons'>
                    <ul>
                      <li>
                        <img className='img-fluid marker-1' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-2' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-3' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-4' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
