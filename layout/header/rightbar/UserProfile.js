import Link from 'next/link'
import React, { useEffect } from 'react'
import { FileText, LogIn, User } from 'react-feather'
import axios from 'axios';
import { prijavaa } from '../../../redux-toolkit/autentikacija-redux/korisnik/korisnik_slice.js';

import { useDispatch,useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const UserProfile = () => {
    const korisnik=useSelector(state=>state.korisnik.value)
    const dispatch=useDispatch();
    const ruter=useRouter();
    useEffect(()=>{console.log(korisnik)},[korisnik])
    return (
        <li className="profile-avatar onhover-dropdown">
            <div>
                <img src="/assets/images/avatar/3.jpg" className="img-fluid" alt='' />
            </div>
            <ul className="profile-dropdown onhover-show-div">
               
                <li onClick={()=>{axios.post("/api/odjava").then((res)=>{if(res.data=="obrisano"){dispatch(prijavaa(null))}})}}>
                        <span >Odjava</span>
                        <LogIn />
                </li>
            </ul>
        </li>
    )
}

export default UserProfile