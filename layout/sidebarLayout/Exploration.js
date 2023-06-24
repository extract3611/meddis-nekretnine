/**
 * It's a React component that renders a form with a submit button
 * @returns A function that returns a div.
 */
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useTranslation } from "next-i18next";
const Exploration = () => {
  const { t } = useTranslation("common");

  const [inputs, setInputs] = useState({ name: "", email: "", tbNumbers: "", message: "" });
  const [modal, setModal] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(true);
  };

  return (
    <div className="advance-card">
      <h6>{t("Zatraži pregled nekretnine")}</h6>
      <div className="category-property">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="text" className="form-control" placeholder={t("Vaše ime")} required name="name" value={inputs.name} onChange={handleChange} />
          </FormGroup>
          <FormGroup className="form-group">
            <Input type="email" className="form-control" placeholder={t("Email adresa")} required name="email" value={inputs.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              placeholder={t("Kontakt telefon")}
              className="form-control"
              name="mobnumber"
              required
              value={inputs.mobnumber || ""}
              onChange={(e) => {
                e.target.value.length <= 10 && handleChange(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" placeholder={t("Poruka")} className="form-control" rows="3" name="message" value={inputs.message} onChange={handleChange}></Input>
          </FormGroup>
          <Button type="submit" className="btn btn-gradient btn-block btn-pill">
            {t("Pošalji zahtjev")}
          </Button>
        </Form>
      </div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader>
          <strong>{t("Zatraži pregled nekretnine")}</strong>
        </ModalHeader>
        <ModalBody>
          <p className="m-1">Ime : {inputs.name}</p>
          <br></br>
          <p className="m-1">Email Adresa : {inputs.email}</p>
          <br></br>
          <p className="m-1">Kontakt Tlefon : {inputs.mobnumber}</p>
          <br></br>
          <p className="m-1">Poruka : {inputs.message}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(false)}>
         {t("Potvrdi")}

          </Button>
          <Button color="secondary" onClick={() => setModal(false)}>
         {t("Poništi")}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Exploration;
