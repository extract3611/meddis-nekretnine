/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "./layout"
import Breadcrumb from "../../components/Common/Breadcrumb";
import GridNeodobrene from "../../components/listing/gridView/grid/GridNeodobrene";
import LayoutNested from './layout'
export const getStaticProps =  ({ locale }) => ({ props: { ...( serverSideTranslations(locale, ["common"])) } });

const RightSidebar = () => {
  return (
    <>      <Breadcrumb title='Neodobrene nekretnine' titleText='Dobrodošli na admin panel' parent='Neodobrene nekretnine' />

      <GridNeodobrene side={"left"} size={3} gridType={"grid-view"} gridBar={true} />
    </>
  );
};
RightSidebar.getLayout = function getLayout(page) {
  return <LayoutNested>{page}</LayoutNested>;
};

export default RightSidebar;