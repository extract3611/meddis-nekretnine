import React from "react";
import Layout from "./layout";
import FooterHome from "../layout/footers/FooterHome";
import Navbar2 from "../layout/headers/Navbar2";
import Breadcrumb from "../layout//Breadcrumb/Breadcrumb";
import BodyContent from "../components/pages/otherPages/aboutUs2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
const Izdavanje = () => {
  return (
    <>
    <Navbar2/>
      <BodyContent />
      <FooterHome/>
    </>
  );
};

Izdavanje.getLayout = function getLayout(page) {
  return <Layout title="Kratkoročno Izdavanje Apartmana - White homes nekretnine  !" description="Ukoliko trebate smještaj u Podgorici, Budvi, Tivtu, Petrovcu ili Kolašinu, ne oklijevajte da nas kontaktirate i rezervišete vaš omiljeni apartman na vrijeme. Nekretnine.." >{page}</Layout>;
};

export default Izdavanje;