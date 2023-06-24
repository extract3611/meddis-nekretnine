import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "./layout"
import Breadcrumb from "../../components/Common/Breadcrumb";
import GridKlijenti from "../../components/listing/gridView/grid/GridKlijenti";
import LayoutNested from './layout'
export const getStaticProps =  ({ locale }) => ({ props: { ...( serverSideTranslations(locale, ["common"])) } });

const xxx = () => {
  return (<><Breadcrumb title='Klijenti nekretnine' titleText='Dobrodošli na admin panel' parent='Nekretnine klijenti' /><GridKlijenti side={"left"} size={3} gridType={"grid-view"} gridBar={true} /></>
  );
};
xxx.getLayout = function getLayout(page) {
  return <LayoutNested>{page}</LayoutNested>;
};

export default xxx;