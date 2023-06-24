import React from "react";
import { Container, Row } from "reactstrap";
import { useTranslation } from "next-i18next";

const AboutUsSection = () => {
  const {t}=useTranslation("common");

  return (
    
    <section className='about-main'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-2'>
              <h2>{t("Kratkoročno izdavanje apartmana")}</h2>
              <p className='font-roboto'>{t("White homes apartmani za kratkoročno iznajmljivanje garantuju vrhunsku udobnost i čistoću.")}</p>
            </div>
            <div className='user-about'>
              <Row>
                <div className='col-xl-7 col-lg-5'>
                  <div className='about-image'>
                    <div className='img-box side-left'>
                      <img src='/assets/images/kratkorocno-iznajmljivanje-apartmana1.jpg' className='img-fluid' alt='' />
                      <div className='side-effect'></div>
                    </div>
                    <div className='img-box img-abs side-right'>
                      <img src='/assets/images/kratkorocno-iznajmljivanje apartmana2.jpg' className='img-fluid' alt='' />
                      <div className='side-effect'></div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-5 col-lg-7'>
                  <div className='about-content'>
                    <h3>{t("Ukoliko trebate smještaj u Podgorici, Budvi, Tivtu, Petrovcu ili Kolašinu, ne oklijevajte da nas kontaktirate i rezervišete vaš omiljeni apartman na vrijeme.")}</h3>
                    <p className='font-roboto'>
{t("Naš tim ugošćava na srdačan način, gdje su komunikacija, usluga i pažnja izvanredni kako bi vaš boravak pretvorili u nezaboravno iskustvo. Verujemo u ljude i ljudske odnose.")} <br/>{t("Gostima nudimo uslugu  24 sata dnevno tokom boravka.Ukoliko trebate smještaj u Podgorici, Budvi, Tivtu, Petrovcu ili Kolašinu, ne oklijevajte da nas kontaktirate i rezervišete vaš omiljeni apartman na vrijeme.")}<br/>
{t("Rezervacije možete napraviti kontakt telefona: +382 67201391; +382 67520382 ili putem e-mail-a:office@whitehomes.me")}

                    </p>
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
