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
                    {t("Tradicija i iskustvo od 26 godina su naša najbolja preporuka!")}
                    </h1>
                    <p className='font-roboto'>
                    {t("S tradicijom dugom 26 godina, MEDDiS Group d.o.o. je porodično preduzeće koje uspješno posluje u oblasti prometa nekretnina i građevinarstva. Naša posvećenost kvalitetu, stručnost i iskustvo čine nas idealnim izborom za sve koji traže profesionalnu podršku u oblasti nekretnina.")}<br/>
<strong>{t("Bavimo se prodajom, kupovinom i iznajmljivanjem nekretnina, uključujući stanove, kuće, vile, poslovne prostore i zemljišta širom Crne Gore. Ukoliko tražite nekretninu za život, poslovanje ili investiciju, naš tim stručnjaka će se pobrinuti da pronađete idealno rješenje.")}</strong><br/>
<strong>{t("Pored prometa nekretnina, MEDDiS Group d.o.o. se bavi projektovanjem i izvođenjem visokogradnje i niskogradnje, a iza nas stoji veliki broj uspješno realizovanih objekata. Ipak, naš fokus na tržištu nekretnina omogućava nam da klijentima pružimo vrhunsku uslugu, uz poštovanje svih standarda i individualnih zahtjeva.")}</strong>
<strong>{t("Za nas je povjerenje temelj svakog odnosa, a zadovoljstvo klijenata naš najvažniji cilj. Ako tražite pouzdanog partnera za nekretnine u Crnoj Gori, tu smo da vas podržimo u svakom koraku procesa.")}</strong>
<strong>{t("Ističemo kvalitetnu ponudu za:")}</strong>
<ol style={{ listStyleType: 'circle',
    listStyle: 'circle',
    listStylePosition: 'inside',

   
}}>
<li className="list-itemm">{t("Oglašavanje vaše nekretnine na relevantnim platformama radi postizanja maksimalne vidljivosti.")}</li>
<li className="list-itemm">{t("Pomoć u pronalaženju idealne nekretnine za kupovinu, prilagođene vašim potrebama.")}</li>
<li className="list-itemm">{t("Profesionalna procjena tržišne vrijednosti nekretnina za kupovinu ili prodaju.")}</li>
<li className="list-itemm">{t("Izrada personalizovane strategije za efikasnu prodaju ili zakup nekretnine.")}</li>
<li className="list-itemm">{t("Pravna podrška i savjetovanje tokom cijelog procesa kupoprodaje.")}</li>
<li className="list-itemm">{t("Brza i profesionalna komunikacija s potencijalnim kupcima ili zakupcima.")}</li>
<li className="list-itemm">{t("Osiguravanje kvalitetnih partnera za kupovinu ili zakup vaše nekretnine.")}</li>



</ol>
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
