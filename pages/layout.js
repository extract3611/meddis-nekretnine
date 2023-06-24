import { ToastContainer } from "react-toastify";

import TapToTop from "../layout/TapToTop";
import Customizer from "../layout/Customizer";
import StoreOldData from "../utils/StoreOldData";
import { ConfigDB } from "../config/themeCustomizerConfig";
import { useEffect } from "react";
import { LoadingScreen } from "../components/Common/loader";
import {Api} from "../constValues/constValues"
import { ucitajNekretnine } from "../redux-toolkit/nekretnine-redux/sveNekretnine";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import Head from "next/head";
import { ucitajNeodobreneNekretnine } from "../redux-toolkit/nekretnine-redux/neodobreneNekretnine";

import { useState } from "react";
export default function RootLayout({ children}) {
  let fetchNekretnine = async () => {
    return await axios.get(`/api/nekretnine`);
  };
  const [x,y]=useState(false);

  const [loader,postaviLoader]=useState(false);
const nekretnine=useSelector(state=>state.nekretnine)
const neodobreneNekretnine=useSelector(state=>state.neodobreneNekretnine.niz)
useEffect(()=>console.log(neodobreneNekretnine),[neodobreneNekretnine])
const dispatch=useDispatch();
useEffect(()=>{
  console.log(children)
  if(!x){
    fetchNekretnine().then(nekretnine=>{dispatch(ucitajNekretnine(nekretnine.data.filter(x=>x.odobreno==1)));
      dispatch(ucitajNeodobreneNekretnine(nekretnine.data.filter(x=>x.odobreno==0)))
    console.log(nekretnine.data.filter);
    postaviLoader(true);
    y(true);
   })
}},[nekretnine])
if(loader==false){
  return <LoadingScreen/>
}
else
{
    return (
    <>
          <Head>
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content={children.props.description} />
<meta name="keywords" content="aaa" />
<meta name="author" content="Digital Artefakt" />
<link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
<title>{children.props.title}</title>
</Head>
      {children}
        <TapToTop />
        <StoreOldData />
        <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={"light"} />
     
   </>
    );
  }}