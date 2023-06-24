/**
 * It returns the NavbarOne, BodyContent, and FooterOne components
 * @returns The NavbarOne, BodyContent, and FooterOne components are being returned.
 */
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import BodyContent from "../../components/home/slider-filter-search";
import { ConfigDB } from "../../config/themeCustomizerConfig";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarOne from "../../layout/headers/NavbarOne";
import Layout from "./layout"
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const SliderFilterSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#2c2e97");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#4b55c4");
    }, 0.1);
  }, []);
  return (
    <>
      <BodyContent />
    </>
  );
};



SliderFilterSearch.getLayout = function getLayout(page) {
  return <Layout title="Agencija za nekretnine White Homes - Najveći izbor nekretnina u Crnoj Gori" description="Bez obzira da li tražite nekretninu za investiciju, stanovanje ili odmor, White Homes će vam pomoći da pronađete idealnu nekretninu za vaše potrebe..Dugogodišnje iskustvo i stručni tim, garantuje profesionalnu etiku i apsolutno zadovoljstvo klijenata.">{page}</Layout>;
}; 

export default SliderFilterSearch;