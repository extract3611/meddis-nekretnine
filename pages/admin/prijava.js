import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {useState} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { prijavaa } from '../../redux-toolkit/autentikacija-redux/korisnik/korisnik_slice.js';
function Prijava() {
  const korisnik = useSelector((state) => state.korisnik.value)
  const dispatch = useDispatch();
  const [prikazi,postaviPrikazano]=useState('none');
  const navigacija=useRouter();
  const [unos,postaviUnos]=useState({
    email:"",
    sifra:""
  });
  const handleChange=e=>{
    postaviUnos(postojeci=>({...postojeci,[e.target.name]:e.target.value}))
  }
  const handleSubmit=async e=>{
    e.preventDefault();
    try{
      localStorage.removeItem("korisnik");

   const odgovor=await axios.post(`https://white-homes.me/api/prijava`, {unos},{ withCredentials: true });
    if(odgovor.data=='korisnik nije pronađen'){
      console.log(odgovor);
      postaviPrikazano('block');
      toast.error("Neuspješna autentikacija, molimo vas pokušajte ponovo.")
      }
      else{
        let {korisnicko_ime}=odgovor.data[0];
        postaviPrikazano('none');
        localStorage.setItem("korisnik", korisnicko_ime);
         dispatch(prijavaa(korisnicko_ime));
        navigacija.push('/admin');
      }
    }
    catch(error){
      }}
  return (
    <div className="row" style={{display:"flex",justifyContent:'center',height:'100vh',alignItems:'center'}}>
    <div style={{background:"#1f3d75",justifyContent:'center',display:'flex',flexDirection:'column'}} className='log-in theme-card col-lg-6'>
    <img style={{height:'168px',margin:20}} src="/assets/images/logo.svg"/>

        <h1 style={{color:"white"}}>prijava</h1>
        <form>
        <div className='form-group'>

            <input className='font-rubik form-control form-control' onChange={handleChange} type='text' name='email' placeholder='email'/></div>
            <div className='form-group'>
<input className='font-rubik form-control form-control' onChange={handleChange} type='password' name='sifra' placeholder='Šifra'/></div>
<div className='form-group'>
<button className="btn btn-gradient mt-3" style={{background:'black'}} onClick={handleSubmit}>Prijavi se</button></div>

        </form>
    </div></div>
  )
}

export default Prijava;
