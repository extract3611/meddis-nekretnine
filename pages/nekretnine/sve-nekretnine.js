/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "./layout"
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import GridView from "../../components/listing/gridView/grid/GridView";


export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const RightSidebar = () => {
  return (
    <>
    <Breadcrumb/>
      <GridView side={"left"} size={3} gridType={"grid-view"} gridBar={true} />
    </>
  );
};
RightSidebar.getLayout = function getLayout(page) {
  return <Layout title="Sve nekretnine- Najveća baza nekretnina u Crnoj Gori" description="Bez obzira da li tražite nekretninu za investiciju, stanovanje ili odmor, mi vam nudimo široki spektar svih tipova nekretnina.">{page}</Layout>;
};


export default RightSidebar;