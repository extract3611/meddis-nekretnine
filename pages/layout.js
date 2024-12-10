import { ToastContainer } from "react-toastify";

import TapToTop from "../layout/TapToTop";
import StoreOldData from "../utils/StoreOldData";
import { useEffect } from "react";
import { LoadingScreen } from "../components/Common/loader";
import { ucitajNekretnine } from "../redux-toolkit/nekretnine-redux/sveNekretnine";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import Head from "next/head";
import { ucitajNeodobreneNekretnine } from "../redux-toolkit/nekretnine-redux/neodobreneNekretnine";

import { useState } from "react";
export default function RootLayout({  title, description, children}) {
  let fetchNekretnine = async () => {
    return await axios.get(`https://white-homes.me/api/nekretnine`);
  };
  const [x,y]=useState(false);

  const [loader,postaviLoader]=useState(false);
const nekretnine=useSelector(state=>state.nekretnine)
useEffect(()=>{console.log(nekretnine)},[nekretnine])
const dispatch=useDispatch();
useEffect(()=>{
  if(!x && nekretnine.niz.length==0){
    fetchNekretnine().then(nekretnine=>{dispatch(ucitajNekretnine(nekretnine.data.filter(x=>x.odobreno==1)));
      dispatch(ucitajNeodobreneNekretnine(nekretnine.data.filter(x=>x.odobreno==0)))
    y(true);
   })}
   else{postaviLoader(true);}

},[nekretnine])
if(loader==false){
  return <LoadingScreen/>
}
else
{
    return (
    <>
          <Head>
    <title>{title}</title>

<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content={description} />
<meta property="og:image" content="/assets/images/logo.webp" />

<meta name="author" content="Digital Artefakt" />

  {/*<!-- Facebook Meta Tags -->*/}
  <meta property="og:url" content="https://meddis-nekretnine.me"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Agencija za promet nekretnina Meddis Group"/>
  <meta property="og:description" content="Meddis Group je vaš pouzdani partner u oblasti nekretnina, sa više od 26 godina iskustva. Bilo da tražite nekretninu za investiciju, stanovanje ili odmor, naš stručni tim će vam pomoći da pronađete idealnu opciju. Kvalitet, posvećenost i sigurnost naših usluga su garant za vaše zadovoljstvo." />

  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:domain" content="https://meddis-nekretnine.me"/>
  <meta property="twitter:url" content="https://meddis-nekretnine.me"/>
  <meta property="twitter:title" content="Agencija za promet nekretnina Meddis Group"/>
  <meta property="twitter:description" content="Meddis Group je vaš pouzdani partner u oblasti nekretnina, sa više od 26 godina iskustva. Bilo da tražite nekretninu za investiciju, stanovanje ili odmor, naš stručni tim će vam pomoći da pronađete idealnu opciju. Kvalitet, posvećenost i sigurnost naših usluga su garant za vaše zadovoljstvo."/>
  <meta property="twitter:image" content="/assets/images/logo.webp"/>


</Head>
      {children}
        <TapToTop />
        <StoreOldData />
     
   </>
    );
  }}