/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../layout/headers/NavbarThree";
import LayoutNested from './layout'
import GridView from "../../components/listing/gridView/grid/GridView";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Pretrazi = () => {
  return (
    <>
    
      <GridView side={"left"} size={3} gridType={"grid-view"} gridBar={true} />
    </>
  );
};

Pretrazi.getLayout = function getLayout(page) {
  return <LayoutNested  title="Search real estate - The largest real estate database in Montenegro" description="Whether you are looking for an investment, residential or vacation property, you can find all what you in in the  largest real estate database in Montenegro.">{page}</LayoutNested>;
};

export default Pretrazi;