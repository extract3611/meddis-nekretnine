import React from "react";
import { Instagram,Facebook,Linkedin } from "react-feather";
const SocialAccounts = () => {
   return (
      <ul  style={{display:'flex',justifyContent:'center',alignItems:'ce'}}>
         <li style={{padding:(0,5)}}>
            <a href="https://me.linkedin.com/in/sanela-li%C4%8Dina-804b8917a">
               <Linkedin style={{width:20,color:"#006a62"}} />
            </a>
         </li>
         <li style={{padding:(0,5)}}>        
             <a href="https://www.facebook.com/Nekretnine2019/?locale=sr_RS">
               <Facebook style={{width:20,color:"#006a62"}} />
            </a>
         </li>
         <li style={{padding:(0,5)}}>
                        <a href="https://www.instagram.com/meddis_group/?igsh=NXd4ZmU0YzM3YWtm">
               <Instagram style={{width:20,color:"#006a62"}}/>
            </a>
         </li>
      </ul>
   );
};

export default SocialAccounts;