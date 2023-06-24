import React, { useEffect, useState } from "react";
import Footer from "../../components/Common/Footer";
import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import TapToTop from "../../layout/TapToTop";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { prijavaa } from "../../redux-toolkit/autentikacija-redux/korisnik/korisnik_slice";
import Prijava from "./prijava";
import { LoadingScreen } from "../../components/Common/loader";

import axios from "axios";
const Layout = ({ children }) => {
  const [toggle, setToggle] = useState();




  const navigacija=useRouter();
  const korisnik=useSelector(state=> state.korisnik.value);
  const [loader,postaviLoader]=useState();
const dispatch=useDispatch();
  const handleResize = () => {
    if (window.innerWidth > 991) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }
  const dohvatiKolacic=async()=>{
    const x=document.cookie;
    return await axios.post(`/api/administracija`,{x});
  }
  useEffect(() => {if(korisnik==null && document.cookie.includes("autentikacija")){
    console.log(dohvatiKolacic().then(x=>dispatch(prijavaa(x.data),postaviLoader(true))))
    console.log(document.cookie)}
    setToggle(window.innerWidth > 991);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(()=>postaviLoader(true),[korisnik]);
  if(!loader){
    return <LoadingScreen/>}
    else{
      if(korisnik!=null){
        return (
          <>
            <div className="page-wrapper">
              <Header setToggle={setToggle} toggle={toggle} />
              <div className="page-body-wrapper">
                <Sidebar toggle={toggle} setToggle={setToggle} />
                <div className="page-body">{children}</div>
                <Footer />
              </div>
              <TapToTop />
            </div>
          </>
        );}
      else{
        return (<><Prijava/></>)
      }
    }


}

export default Layout;
