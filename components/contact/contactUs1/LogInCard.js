/**
 * It returns a div with a class of log-in theme-card, which contains a div with a class of title-3
 * text-start, which contains an h2 with the text Let's Get In Touch, which is followed by a Form,
 * which contains a Row with a class of gx-3, which contains a FormGroup with a class of form-group,
 * which contains a Col with a class of md-12, which contains an InputGroup with a class of
 * input-group, which contains a div with a class of input-group-prepend, which contains an
 * InputGroupText, which contains a User icon, which is followed by an Input with a type of text, a
 * class of form-control, a required attribute, a maxLength of 20, a placeholder of Enter your name,
 * and a name of userName, which is followed by a FormGroup with a class of form-group col-md-6, which
 * contains an InputGroup with a
 * @returns The return statement is used to return a value from a function.
 */
import { Mail, Phone, User } from "react-feather";
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "next-i18next";
const LogInCard = () => {
  const {t}=useTranslation("common");

  const [forma,postaviFormu]=useState();
  const [check,postaviCheck]=useState();


  return (
    <div className='log-in theme-card'>
      <div className='title-3 text-start'>
        <h2>{t("Kontaktirajte nas")}</h2>
      </div>
      <Form>
        <Row className='gx-3'>
          <FormGroup className='form-group'>
            <Col md='12'>
              <InputGroup className='input-group'>
                <div className='input-group-prepend'>
                  <InputGroupText>
                    <User />
                  </InputGroupText>
                </div>
                <Input type='text' onChange={(event) => {
                    postaviFormu({...forma,[event.target.name]:event.target.value})
                    console.log(event.target.value)
                  
                }} className='form-control' required maxLength='20' placeholder={t('Unesite vaše ime')} name='ime' />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <InputGroup className='input-group'>
              <div className='input-group-prepend'>
                <InputGroupText>
                  <Phone />
                </InputGroupText>
              </div>
              <Input
                placeholder={t('Unesite kontakt telefon')}
                className='form-control'
                name='kontaktTel'
                id='tbNumbers'
                type='tel'
                maxLength='9'
                onChange={(event) => {
                  postaviFormu({...forma,[event.target.name]:event.target.value})
                  console.log(event.target.value)
                  
                }}
                required
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <InputGroup className='input-group'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <Mail />
                </div>
              </div>
              <Input onChange={(event) => {
                    postaviFormu({...forma,[event.target.name]:event.target.value})
                    console.log(event.target.value)
                  
                }} type='email' name="email" className='form-control' placeholder={t('Unesite E-mail adresu')} required />
            </InputGroup>
          </FormGroup>
          <div className='form-group col-md-12'>
            <Input onChange={(event) => {
                    postaviFormu({...forma,[event.target.name]:event.target.value})
                    console.log(event.target.value)
                  
                }} type='textarea' name="poruka" className='form-control' id='exampleFormControlTextarea1' rows='3' placeholder={t('Napišite vašu poruku..')} />
          </div>
          <div className='submit-btn with-captcha'>
            <div className='captcha'>
              <div className='spinner'>
                <label>
                  <Input onChange={()=>postaviCheck(!check)} name="checkbox" type='checkbox' />
                  <span className='checkmark'>
                    <span>&nbsp;</span>
                  </span>
                </label>
              </div>
              <div className='text'>{t("Nisam robot")}</div>
              <div className='logo'>
                <img src='/assets/images/inner-pages/recaptcha.png' alt='' />
                <p>{t("provjera")}</p>
                <small>{t("Politika privatnosti")}</small>
              </div>
            </div>
            <div></div>
            <Button className='btn btn-gradient btn-flat' onClick={(e)=>{
              if(check==true){console.log(forma);
              axios.post("/api/kontaktForma",{to:forma.email,subject:`Kontakt forma - White homes nekretnine - klijent: ${forma.ime} `,message:forma.poruka,ime:forma.ime,email:forma.email,kontakt:forma.kontaktTel}).then(res=>console.log(res.data)).catch(err=>console.log(err))
              }}} >
{t("Pošalji poruku")}            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default LogInCard;
