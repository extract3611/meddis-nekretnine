/**
 * It returns a fragment containing the GetInTouchSection and ContactDetailsSection components
 * @returns A React component
 */
import React from "react";
import ContactDetailsSection from "../components/contact/contactUs1/ContactDetails";
import GetInTouchSection from "../components/contact/contactUs1/GetInTouch";
import Layout from "./nekretnine/layout"
import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
const BodyContent = () => {
  return (
    <>
    <Breadcrumb/>
     <div className="contact-1">
        <GetInTouchSection />
      </div>
      <ContactDetailsSection />      
    </>
  );
};

BodyContent.getLayout = function getLayout(page) {
  return <Layout name="Kontakt - Agencija za nekretnine Meddis" title="Kontakt - Agencija za nekretnine Meddis" description="Da li tražite nekretninu za investiciju, stanovanje ili odmor? Meddis će vam pomoći da pronađete idealnu nekretninu za vaše potrebe..Dugogodišnje iskustvo i stručni tim, garantuje profesionalnu etiku i apsolutno zadovoljstvo klijenata.">{page}</Layout>;
};


export default BodyContent;