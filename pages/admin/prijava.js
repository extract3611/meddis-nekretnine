import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link';
import {useState} from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import LayoutNested from './layout'
import {Logo} from "../../public/assets/images/izgradnja.svg"
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
  console.log(unos);
  const handleSubmit=async e=>{
    e.preventDefault();
    try{
      localStorage.removeItem("korisnik");

   const odgovor=await axios.post(`/api/prijava`, {unos},{ withCredentials: true });
    if(odgovor.data=='korisnik nije pronadjen'){
      postaviPrikazano('block');
      console.log(odgovor)}
      else{
        console.log(odgovor)
        let {korisnicko_ime}=odgovor.data[0];
        postaviPrikazano('none');
        localStorage.setItem("korisnik", korisnicko_ime);
         dispatch(prijavaa(korisnicko_ime));
        navigacija.push('/admin');
        console.log(korisnik)
      }
    }
    catch(error){
      console.log(error)
      }}
      useEffect(()=>{console.log(korisnik)},[korisnik])
  return (
    <div className="row" style={{display:"flex",justifyContent:'center',height:'100vh',alignItems:'center'}}>
    <div style={{background:"#006a62",justifyContent:'center',display:'flex',flexDirection:'column'}} className='log-in theme-card col-lg-6'>
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
