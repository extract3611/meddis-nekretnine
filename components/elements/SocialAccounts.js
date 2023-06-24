import React from "react";

const SocialAccounts = () => {
   return (
      <ul  style={{display:'flex',justifyContent:'center',alignItems:'ce'}}>
         <li style={{padding:(0,5)}}>
            <a href="https://accounts.google.com/">
               <img src="/assets/images/about/icon-1.png" alt="" />
            </a>
         </li>
         <li style={{padding:(0,5)}}>        
             <a href="https://twitter.com/">
               <img src="/assets/images/about/icon-2.png" alt="" />
            </a>
         </li>
         <li style={{padding:(0,5)}}>
                        <a href="https://www.facebook.com/">
               <img src="/assets/images/about/icon-3.png" alt="" />
            </a>
         </li>
      </ul>
   );
};

export default SocialAccounts;