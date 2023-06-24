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
  return <LayoutNested  title="Pretraži nekretnine - Najveća baza nekretnina u Crnoj Gori" description="Bez obzira da li tražite nekretninu za investiciju, stanovanje ili odmor, White Homes će vam pomoći da pronađete idealnu nekretninu za vaše potrebe..Dugogodišnje iskustvo i stručni tim, garantuje profesionalnu etiku i apsolutno zadovoljstvo klijenata.">{page}</LayoutNested>;
};

export default Pretrazi;