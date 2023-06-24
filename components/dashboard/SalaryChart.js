import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import { TrendingUp } from 'react-feather'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { chartoptions, chartseries } from '../../data/dashboard/data';


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalaryChart = (props) => {
    return (
        <Col xl='7 large-12'>
            <Card className="sales-details">
                <CardBody>
                    <Row>
                       
                        <Col sm='12'>
                            <div className="monthly-sales">
                                <div className="icon-box">
                                    <i className="fas fa-chevron-left light-font" />
                                </div>
                                <h6>Grafikon zastupljenih tipova nekretnina</h6>
                                <div className="icon-box">
                                    <i className="fas fa-chevron-right light-font" />
                                </div>
                            </div>
                            <div className="bar-sales">
                                <div id="sale-chart">
                                    <Chart width={"100%"} options={chartoptions} series={props.serija} type="bar" height={350} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SalaryChart