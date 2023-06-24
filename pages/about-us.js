import React from "react";
import Layout from "./nekretnine/layout";

import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../components/pages/otherPages/aboutUs1";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
const AboutUs = () => {
  return (
    <>
      <Breadcrumb />
      <BodyContent />
    </>
  );
};

AboutUs.getLayout = function getLayout(page) {
  return <Layout title="About Us - Real Estate Company White Homes" description="Learn about our real estate company and our mission to provide quality properties for our clients." >{page}</Layout>;
};

export default AboutUs;