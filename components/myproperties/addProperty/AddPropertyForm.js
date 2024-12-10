import { Field, Form, Formik } from 'formik';
import React from 'react'
import Dropzone from 'react-dropzone-uploader';
import { Button, Col, Label, Row } from 'reactstrap';
import * as Yup from 'yup';
import { ReactstrapInput, ReactstrapSelect,ReactstrapRadio } from '../../utils/ReactStarpInputsValidation';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';
import { InputFormAdminForm } from '../../../data/inputForm';
import { ucitajNekretnine } from "../../../redux-toolkit/nekretnine-redux/sveNekretnine";
import { useSelector,useDispatch } from "react-redux";

import { useRouter } from 'next/router';


import axios from 'axios';
const AddPropertyForm = () => {
    const ruter=useRouter();
    const [slikaaa,postaviSliku]=useState('');
    const [slikeee,postaviSlike]=useState([]);

    const [opcijee,postaviOpcije]=useState({
            "status":{ name: "status", label: "Status Nekretnine", size: "12", options: []},
          "tip":{ name: "tip", label: "Tip Nekretnine", size: "12", options: [] },
          "grad":{ name: "grad", label: "grad", size: "6", options: [] }});
    const getUploadParams = ({ file, meta }) => {
        const body = new FormData()
        body.append('slika', file)
        return { url: `/api/upload-sliku`, body }
      }

      let fetchNekretnine = async () => {
        return await axios.get(`https://white-homes.me/api/nekretnine`);
      };
    
    const nekretnine=useSelector(state=>state.nekretnine)
    const dispatch=useDispatch();

    const handleChangeStatus = ({ meta, file, allFiles }, status) => { postaviSliku(file.name);
        if(!slikeee.includes(file.name)){postaviSlike([...slikeee,file.name]) }}
    
    // receives array of files that are done uploading when submit button is clicked

    

        
    const uploadSlike= (podaci) => {
    
        const podacii= new FormData(); 
        for(let i=0; i<podaci.length;i++){
          podacii.append("slike", podaci[i]);}//add image to form object
        console.log(podacii.getAll("slike"))
        axios({
          method: "post",
          url: `/api/upload-slike`,
          data: podacii,  //send image to server
        })
         .then((odgovor) => {
          const { data } = odgovor; 

    
      
        })
         .catch((greska) => {
          console.log(greska);
        });
      }

    return (
        <Formik
            initialValues={{
                naziv:"",
                tipNekretnine: "",
                statusNekretnine: "",
                spavaćeSobe: "",
                kupatila: "",
                površina: "",
                površinaPlaca:"",
                cijena: "",
                opis: "",
                adresa: "",
                država: "",
                slike:[],
                grad: "",
                slika:"",
                odabrana:false,
            }}
            validationSchema={Yup.object().shape({
                naziv:Yup.string().required('Molimo vas upišite naziv nekretnine'),
                tipNekretnine: Yup.string().required('Molimo vas izaberite tip nekretnine'),
                statusNekretnine: Yup.string().required('Molimo vas izaberite status nekretnine'),
                cijena: Yup.number().typeError("Molimo vas unesite cijenu nekretnine(broj)"),
                površina: Yup.number().typeError("Molimo vas unesite broj").required(' Molimo vas unesite površinu nekretnine'),
                opis: Yup.string().required("Molimo vas unesite opis nekretnine"),
                adresa: Yup.string().required("Molimo vas unesite adresu/naselje nekretnine"),
                država: Yup.string().required("Molimo vas izaberite državu nekretnine"),
                grad: Yup.string().required("Molimo vas izaberite grad nekretnine"),
                površinaPlaca:Yup.number().typeError("Molimo vas unesite broj"),
               
            })}
            onSubmit={(values) => {
                values.slika=slikaaa;
                values.slike=[...slikeee];

                axios.post(`https://white-homes.me/api/sacuvaj-nekretninu`, {
                    unos:values
                  })
                  .then(function (response) {
                    postaviSlike([]);

                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                toast.success("Vaši podaci su uspješno sačuvani");
                fetchNekretnine().then(nekretnine=>{
                    dispatch(ucitajNekretnine(nekretnine.data.filter(x=>x.odobreno==1)))})
                setTimeout(()=>ruter.push("/admin/sve-nekretnine"),1000);

            }}
            render={() => (
                <Form>
                    <Row className="gx-3">
                    <Col sm="4" className="form-group">
                            <Field name="naziv"  component={ReactstrapInput} className="form-control" placeholder="Dvosoban stan.." label="Naziv nekretnine" />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="tipNekretnine" inputprops={{ options: InputFormAdminForm.tip.options, defaultOption: "Tip Nekretnine" }} component={ReactstrapSelect} className="form-control" placeholder="villa" label="Tip Nekretnine" />
                        </Col>

                        <Col sm='4' className="form-group">
                            <Field name="statusNekretnine" component={ReactstrapSelect} className="form-control" label="Status Nekretnine"
                                inputprops={{ options: InputFormAdminForm.status.options, defaultOption: "Status Nekretnine" }}
                            />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="cijena" type="text" className="form-control" component={ReactstrapInput} label="Cijena Nekretnine" placeholder="€5000" />
                        </Col>
                        <Col sm="4" className="form-group">
                                <Field name="država" component={ReactstrapSelect} className="form-control" label="Država"
                                    inputprops={{ options: ["Crna Gora"], defaultOption: "Država" }}
                                />
                            </Col>
                            <Col sm="4" className="form-group">
                                <Field name="grad" component={ReactstrapSelect} className="form-control" label="Grad"
                                    inputprops={{ options: InputFormAdminForm.grad.options, defaultOption: "Grad" }}
                                />
                            </Col>
                            <Col sm="4" className="form-group">
                            <Field name="površina" type="text" className="form-control" component={ReactstrapInput} label="Površina" placeholder="85 m2" />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="površinaPlaca" type="text" className="form-control" component={ReactstrapInput} label="Površina placa" placeholder="155 m2" />
                        </Col>
                        <Col sm="4" className="form-group">
                                <Field type="text" name="adresa" component={ReactstrapInput} className="form-control" label="Adresa" placeholder="Adresa vaše nekretnine" />
                            </Col>
                        <Col sm="4" className="form-group">
                            <Field name="spavaćeSobe" component={ReactstrapSelect} className="form-control" label="Spavaće Sobe"
                                inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Broj soba" }}
                            />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="kupatila" component={ReactstrapSelect} className="form-control" label="Kupatila"
                                inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Broj kupatila" }}
                            />
                            
                        </Col>
                     
                          
                         <Col sm="4" className='form-group'>
                            Odabrana nekretnina
                            <div role="group" aria-labelledby="my-radio-group">
                                 <Field type="radio" label="Da" component={ReactstrapRadio} name="odabrana" value={true} />
              
                                    <Field type="radio" label="Ne"  component={ReactstrapRadio} name="odabrana" value={false}/>
                                    </div>
             
                       
                         </Col>
                       
                       
                        <Col sm="12" className="form-group">
                            <Field type="textarea" name="opis" placeholder="Unesite opis nekretnine.." component={ReactstrapInput} className="form-control" rows={4} label="Opis" />
                        </Col>
                    </Row>
                   
                            
                         
                          
                    <div className="dropzone-admin form-inputs">
                        <h6>Odabrana slika</h6>
                        <div className="dropzone">
                            <div className="dz-message needsclick">
                                <i className="fas fa-cloud-upload-alt" />
                                <Dropzone
                                id="jedna-slika"
                                    multiple={false}
                                    getUploadParams={getUploadParams}
                                    onChangeStatus={handleChangeStatus}
                                    submitButtonContent="Otpremi sliku"
                                    accept="image/*,audio/*,video/*"
                                    
                                    inputContent="Izaberi sliku"
                                    styles={{
                                        dropzoneActive: { borderColor: "green" },
                                    }}
                                />
                            </div>
                            
                        </div></div>
                        <div className="dropzone-admin form-inputs">

                        <h6>Slike za galeriju</h6>
                        <div className="dropzone" id="multiFileUpload">
                            <div className="dz-message needsclick">
                                <i className="fas fa-cloud-upload-alt" />
                                <Dropzone
                                id="jedna-slika"
                                    multiple={true}
                                    getUploadParams={getUploadParams}
                                    onChangeStatus={handleChangeStatus}
                                    submitButtonContent="Otpremi sliku"
                                    accept="image/*,audio/*,video/*"
                                    
                                    inputContent="Izaberi slike za galeriju"
                                    styles={{
                                        dropzoneActive: { borderColor: "green" },
                                    }}
                                />
                            </div>
                            </div>
                        </div>
                        <Row className="gx-3">
                            
                         
                            <Col sm='12' className="form-btn">
                            <Button type="submit" className="btn btn-gradient btn-pill">Sačuvaj</Button>
                                <Button type="submit" className="btn btn-dashed btn-pill">Odbij</Button>
                            </Col>
                        </Row>
                </Form>
            )}
        />
    )
}

export default AddPropertyForm