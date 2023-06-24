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
  return <Layout name="Contact - White Homes real estate agency"  title="Contact - White Homes real estate agency" description="Whether you are looking for an investment, residential or vacation property, White Homes will help you find the ideal property for your needs. Contact us now.">{page}</Layout>;
};


export default BodyContent;