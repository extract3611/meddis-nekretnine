import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb';
import AddPropertyForm from '../../components/myproperties/addProperty/AddPropertyForm';
import LayoutNested from './layout'
import Layout from "../layout"

const AddProperty = () => {
    return (
        <>
            <Breadcrumb title='Dodaj nekretninu' titleText='Dobrodošli na admin panel' parent='Sve nekretnine'   />
            <Container fluid={true} className="container-fluid">
                <Row>
                    <Col lg='12'>
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Dodaj detalje nekretnine</h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <AddPropertyForm />
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