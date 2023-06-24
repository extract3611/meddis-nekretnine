import React, { useEffect,useState } from 'react'
import { Container } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import Assigness from '../../components/dashboard/Assigness'
import Management from '../../components/dashboard/Management'
import ProjectTimeline from '../../components/dashboard/ProjectTimeline'
import Properies from '../../components/dashboard/Properies'
import Properylist from '../../components/dashboard/Properylist'
import SalaryChart from '../../components/dashboard/SalaryChart'
import Soldout from '../../components/dashboard/Soldout'
import Status from '../../components/dashboard/Status'
import LayoutNested from './layout'
import Layout from "../layout"
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const sveNekretnine=useSelector(state=>state.nekretnine.niz);
    const neodobreneNekretnine=useSelector(state=>state.neodobreneNekretnine.niz);

    let [brojProdaje,postaviBrojProdaje]=useState(0);
    let [brojIzdavanja,postaviBrojIzdavanja]=useState(0);
    let [brojNeodobreno,postaviBrojNeodobreno]=useState(0);
    let [brojNekretnina,postaviBrojNekretnina]=useState(0);
    let [brojStanova,postavibrojStanova]=useState(0);
    let [brojKuca,postavibrojKuca]=useState(0);
    let [brojPoslovnihProstora,postavibrojPoslovnihProstora]=useState(0);
    let [brojZemljista,postavibrojZemljista]=useState(0);
    let [brojVila,postaviBrojVila]=useState(0);
    const [loader,postaviLoader]=useState(false)

useEffect(()=>{
    postaviBrojNekretnina(sveNekretnine.length)
    postaviBrojProdaje(sveNekretnine.filter(x=>x.status=="Izdavanje").length);
    postaviBrojIzdavanja(sveNekretnine.filter(x=>x.status=="Prodaja").length)
    postaviBrojNeodobreno(neodobreneNekretnine.length);
    postavibrojStanova(sveNekretnine.filter(x=>x.tip=="Stan").length)
    postavibrojKuca(sveNekretnine.filter(x=>x.tip=="Kuća").length)
    postavibrojPoslovnihProstora(sveNekretnine.filter(x=>x.tip=="Poslovni prostor").length)
    postavibrojZemljista(sveNekretnine.filter(x=>x.tip=="Zemljište").length)
    postavibrojStanova(sveNekretnine.filter(x=>x.tip=="Stan").length)
    postaviBrojVila(sveNekretnine.filter(x=>x.tip=="Vila").length)
    postaviLoader(true)
},[sveNekretnine,neodobreneNekretnine])




    return (
        <>
            <Breadcrumb title='Admin panel' titleText='Dobrodošli u admin panel' parent='Admin-panel' />
            <Container fluid={true}>
                <div className="row">
                  
                    <Properies brojNekretnina={brojNekretnina} brojProdaje={brojProdaje}  brojIzdavanja={brojIzdavanja} brojNeodobreno={brojNeodobreno}/>
                    <SalaryChart serija={[{
    data: [brojStanova,brojKuca,brojPoslovnihProstora,brojZemljista,brojVila],
    name:"Količina tipa"
}]} />
                   
                </div>
            </Container>
            
        </>
    )
}

Dashboard.getLayout = function getLayout(page) {
    return <LayoutNested>{page}</LayoutNested>;
  };
  
  export default Dashboard;

