import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import PropertyBox from '../../Common/Propertybox/PropertyBox'
import { getData } from '../../utils/getData'
import usePagination from '../../utils/usePagination'
import { useSelector } from 'react-redux'
import InputAdmin from "../../elements/InputAdmin"
const Listview = () => {
    let nekretnine=useSelector(state=>state.nekretnine.niz)

    const [value, setValue] = useState();
    useEffect(() => {
        getData(`${process.env.API_URL}/property`)
            .then((res) => {
                setValue(res.data?.LatestPropertyListingInEnterprise);
            })
            .catch((error) => console.log('error', error))
    }, [])

    const [Pagination, data] = usePagination(value && value);
    return (
        <><div className="col-xl-12">
        <InputAdmin/>

    </div>
        <div className="col-xl-12">
            <Row className="property-2 column-sm property-label property-grid">
                {
                    nekretnine && nekretnine.map((item, i) => {
                        return (
                            <Col xl='3' md='3 xl-3' key={i}>
                                <PropertyBox data={item} />
                            </Col>
                        )
                    })
                }
            </Row>
            <Pagination />
        </div></>
        

    )
}

export default Listview