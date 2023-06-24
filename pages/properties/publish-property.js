import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb';
import AddPropertyForm from '../../components/myproperties/addProperty/addPropertyFormUser';
import LayoutNested from './layout'
import Layout from "../layout"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Breadcrumb2 from '../../layout/Breadcrumb/Breadcrumb';
import Sidebar from "../../layout/sidebarLayout/Sidebar";
import RecentlyAdded from "../../layout/sidebarLayout/RecentlyAdded";
import Featured from '../../layout/sidebarLayout/Featured';
import ContactInfo from "../../layout/sidebarLayout/ContactInfo";
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const CreateProperty = () => {
    const {t}=useTranslation("common");

    const [latest, setLatest] = useState();
    const [value,setValue]=useState();
    let sveNekretnine=useSelector(state=>state.nekretnine.niz)
    useEffect(()=>{console.log(sveNekretnine)},[sveNekretnine])
    useEffect(() => {
     setValue(sveNekretnine)
     let x=[];
     for(let i=0;i<sveNekretnine.length;i++){
      if(i<3){
        x.push(sveNekretnine[i])
      }
  
     };
     setLatest(x)
     console.log(x)
    }, [sveNekretnine]);

    return (
        <>
            <Breadcrumb2 />

            <Container fluid={true} className="container-fluid">
                
                <section>
                <Row>
                <Sidebar side="right">
                    
                <ContactInfo/>
                <Featured data={sveNekretnine} />

                    <RecentlyAdded latest={latest}/>

                </Sidebar>
                    <Col lg='9'>
                        <Card className="carddd">
                                <h2 className='filter-panel'>{("Dodaj detalje nekretnine")}</h2>
                            <CardBody className="card-body admin-form">
                                <AddPropertyForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row></section>
            </Container>
        </>
    )
};
CreateProperty.getLayout = function getLayout(page) {
    return <LayoutNested title="Advertise your property absolutely free!" description="Regardless of whether you are looking for real estate for investment, housing or vacation, or you still want to list your real estate, our agency offers you the best solutions." >{page}</LayoutNested>;
  };
  
  export default CreateProperty;