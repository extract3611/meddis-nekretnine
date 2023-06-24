import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb';
import EditPropertyFormNeodobrene from '../../../components/myproperties/editProperty/EditPropertyFormNeodobrene';
import LayoutNested from '../layout';
const AddProperty = () => {
  
    return (
        <>
            <Breadcrumb title='Izmijeni/Odobri nekretninu' titleText='Dobrodošli na admin panel'  />
            <Container fluid={true} className="container-fluid">
                <Row>
                    <Col lg='12'>
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Dodaj detalje nekretnine</h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <EditPropertyFormNeodobrene  />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};
AddProperty.getLayout = function getLayout(page) {
    return <LayoutNested>{page}</LayoutNested>;
  };
  
  export default AddProperty;