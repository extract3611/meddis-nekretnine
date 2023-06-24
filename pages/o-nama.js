import React from "react";
import Layout from "./nekretnine/layout";

import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../components/pages/otherPages/aboutUs1";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
const Onama = () => {
  return (
    <>
      <Breadcrumb />
      <BodyContent />
    </>
  );
};

Onama.getLayout = function getLayout(page) {
  return <Layout title="O nama - Agencija za nekretnine White Homes"  description="Saznajte više o našoj agenciji za nekretnine i našoj misiji pružanja kvalitetnih usluga za naše cijenjene klijente." >{page}</Layout>;
};

export default Onama;