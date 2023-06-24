/**
 * It takes an array of objects, and returns a new array of objects with the same keys, but with the
 * values transformed by the function you pass in
 * @returns The data is being returned as an array of objects.
 */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useRouter } from "next-translate-routes";
import { getData } from "../../../utils/getData";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox";
import { useSelector } from "react-redux";
const RelatedProperty = () => {
  const router=useRouter();
  const [value, setValue] = useState();
  let [povezane,posatviPovezane]=useState();
const nekretnine=useSelector(state=>state.nekretnine.niz);
const [query,postaviQuery]=useState(null);
const [related,postaviRelated]=useState([]);
const [nekretnina,postaviNekretninu]=useState();

useEffect(()=>{
  postaviQuery(router.query.nekretnina);

},[])
const kreirajRelated=()=>{
  let niz=[];
  let podniz=Array.from(new Set(nekretnine.filter(x=>{return(x.status==nekretnina.status && x.tip==nekretnina.tip && x.grad==nekretnina.grad)})));
  if(podniz.length<3){
     podniz=Array.from(new Set([...podniz,...nekretnine.filter(x=>{return(x.status==nekretnina.status && x.tip==nekretnina.tip)})]));
    if(podniz.length<3){
      podniz=Array.from(new Set([...podniz,...nekretnine.filter(x=>{return(x.tip==nekretnina.tip)})]));
      

    }
  }
  const rezultat=podniz.slice(0,3);
  

  postaviRelated(rezultat)

}
useEffect(()=>{if(nekretnine.length!=0 && query!=null){postaviNekretninu(nekretnine.filter(x=>x.id_nekretnina==query)[0])}},[nekretnine,query])
useEffect(()=>{
  if(nekretnina!=null){console.log(nekretnina);
    kreirajRelated();}
},[nekretnina])

  return (
    <section className="property-section pt-0">
      <Container>
        <div className="title-3 text-start inner-title">
          <h2>Povezane nekretnine</h2>
        </div>
        <Row className=" ratio_55">
          <Col sm="12" className=" property-grid-3">
            <Row className="property-2  column-sm zoom-gallery property-label property-grid">
              {related!=0 &&
                related.map((data, i) => (
                  <Col xl="4" md="6" className="wow fadeInUp" key={i}>
                    <PropertyBox data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RelatedProperty;
