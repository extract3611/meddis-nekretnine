import React from "react";
import Layout from "./layout";
import FooterHome from "../layout/footers/FooterHome";
import Navbar2 from "../layout/headers/Navbar2";
import Breadcrumb from "../layout//Breadcrumb/Breadcrumb";
import BodyContent from "../components/pages/otherPages/aboutUs2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
const Rental = () => {
  return (
    <>
    <Navbar2/>
      <BodyContent />
      <FooterHome/>
    </>
  );
};

Rental.getLayout = function getLayout(page) {
  return <Layout title="Objavite vašu nekretninu potpuno besplatno!" description="Bez obzira da li tražite nekretninu za investiciju, stanovanje ili odmor, ili ipak želite da ulistate vašu nekretninu, naša agencija vam nudi najbolja rešenja." >{page}</Layout>;
};

export default Rental;