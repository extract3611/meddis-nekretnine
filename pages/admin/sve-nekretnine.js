/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../../components/Common/Breadcrumb";
import GridAdmin from "../../components/listing/gridView/grid/GridAdmin";
import LayoutNested from './layout'
export const getStaticProps =  ({ locale }) => ({ props: { ...( serverSideTranslations(locale, ["common"])) } });

const RightSidebar = () => {
  return (
    <>      <Breadcrumb title='Objavljene nekretnine' titleText='Dobrodošli na admin panel' parent='Sve nekretnine' />

      <GridAdmin side={"left"} size={3} gridType={"grid-view"} gridBar={true} />
    </>
  );
};
RightSidebar.getLayout = function getLayout(page) {
  return <LayoutNested>{page}</LayoutNested>;
};

export default RightSidebar;