import React from "react";
import { MapPin, PhoneCall, WhatsApp, MessageCircle } from "react-feather";  // Pravilan import ikona
import { useTranslation } from "next-i18next";

const ContactInfo = () => {
  const { t } = useTranslation("common");
  const phoneNumber = "+382067623663"; // Koristi broj telefona kao varijablu

  return (
    <div className='advance-card'>
      <h6>{t("Kontakt informacije agenta")}</h6>
      <div className='category-property'>
        <div className='agent-info'>
          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} className='media'>
            <img src='/assets/images/Sanela-Licina-web-600x563.webp' style={{width:250}} alt='' />
            <div style={{textAlign:'center',margin: "20px 0"}} className='media-body ms-2'>
              <h6>Sanela</h6>
              <p>office@meddisgroup.me</p>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <MapPin className='me-2' />
            Bulevar 24. Novembra, Bar
          </li>
          <li>
            <PhoneCall className='me-2' />
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </li>
          {/* WhatsApp link */}
         <ul style={{display:"flex",alignItems:"baseline",margin:"20px 0px", justifyContent:'center'}}>
         <li>

<a href={`https://wa.me/${phoneNumber.replace("+", "")}`} target="_blank" rel="noopener noreferrer">
<img  style={{margin:10}} src='/assets/images/viber.svg' className='img-50' alt='' />
</a>
</li>
{/* Viber link */}
<li>
<a href={`viber://add?number=${phoneNumber}`} target="_blank" rel="noopener noreferrer">
<img style={{margin:10}} src='/assets/images/whatsapp.svg' className='img-50' alt='' />

</a>
</li>         </ul>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
