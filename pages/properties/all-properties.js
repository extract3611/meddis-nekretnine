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
  return <Layout title="All real estate - The largest real estate database in Montenegro" description="Whether you are looking for an investment, residential or vacation property, we offer a wide range of all types of properties.">{page}</Layout>;
};


export default RightSidebar;