import { ToastContainer } from "react-toastify";

import TapToTop from "../layout/TapToTop";
import StoreOldData from "../utils/StoreOldData";
import { useEffect } from "react";
import { LoadingScreen } from "../components/Common/loader";
import { ucitajNekretnine } from "../redux-toolkit/nekretnine-redux/sveNekretnine";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
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
        
      {children}
        <TapToTop />
        <StoreOldData />
     
   </>
    );
  }}