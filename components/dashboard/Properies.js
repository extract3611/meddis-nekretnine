import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ChevronRight } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Media, Row } from 'reactstrap'
import { useSelector,useDispatch } from "react-redux";
const Properies = ({brojNekretnina,brojProdaje,brojIzdavanja,brojNeodobreno}) => {

    return (
        <Col xl='5 large-12'>
            <Row>
                <Col lg='12 large-6' md='7'>
                    <Card className="all-properties">
                        <CardBody>
                            <Media className="media">
                                <img src="/assets/images/svg/icon/1.svg" className="img-fluid" alt='' />
                                <Media body>
                                    <h4 className="mb-0">{brojNekretnina}</h4>
                                    <h6 className="light-font">Nekretnina</h6>
                                </Media>
                                <Link href='/admin/sve-nekretnine' style={{color:"black"}} className="arrow-animated">
<div>
                                    Pogledaj sve nekretnine
                                    <ChevronRight />
                                    </div>
                                </Link>
                            </Media>
                            <ul className="light-box">
                                <li>
                                    <img src="/assets/images/svg/icon/sold.png" className="img-fluid" alt='' />
                                    <div>
                                        <h5>{brojProdaje}</h5>
                                        <span className="light-font">Prodaja</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/svg/icon/rent.png" className="img-fluid" alt='' />
                                    <div>
                                        <h5>{brojIzdavanja}</h5>
                                        <span className="light-font">Iznajmljivanje</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/svg/icon/unlisted.png" className="img-fluid" alt='' />
                                    <div>
                                        <h5>{brojNeodobreno}</h5>
                                        <span className="light-font">Nepotvrđeno</span>
                                    </div>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            
            </Row>
        </Col>

    )
}

export default Properies