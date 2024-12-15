/**
 * It fetches data from the API and then passes it to the component
 * @returns The data is being returned as an array of objects.
 */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ucitajNekretninu } from "../../../redux-toolkit/nekretnine-redux/izabranaNekretnina";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/property/tabPanelPages";
//import { LoadingScreen } from "../../../components/Common/loader";

import Layout from "../layout";
import { useSelector,useDispatch } from "react-redux";
import { slide1 } from "../../../data/slickSlider";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
let p;
export const getStaticPaths = async ({ locales }) => {
  const response = await axios.get(`https://white-homes.me/api/nekretnine`);
  const data = response.data;
  



  const ids = data.map((nekretnina) => nekretnina.id_nekretnina);
  const paths = ids
    .map((id) =>
      locales.map((locale) => ({
        params: { nekretnina: id.toString() },
        locale, //locale should not be inside `params`
      }))
    )
    .flat(); // to avoid nested arrays

  return {
    paths,
    fallback: true,
  };
};

const ImageBox = () => {
const router = useRouter();

  const query = router.query.nekretnina;

useEffect(()=>{console.log(query)},[query])
  const nekretnine=useSelector(state=>state.nekretnine.niz)
  const nekretninaa=useSelector(state=>state.izabranaNekretnina)

  const [nekretnina,postaviNekretninu]=useState(null);
  const [slike,postaviSlike]=useState([]);
  const [loader,postaviLoader]=useState(false);
  

  useEffect(()=>console.log(slike),[slike])

  const dispatch=useDispatch();


  useEffect(()=>{
    if(nekretnine.length!=0 && query!=null){
      console.log('aaa')
    console.log(nekretnine)
    postaviNekretninu(nekretnine.filter(x=>x.id_nekretnina==query))
    console.log(nekretnine.filter(x=>x.id_nekretnina==query))
    dispatch(ucitajNekretninu(nekretnine.filter(x=>x.id_nekretnina==query)[0]));
  }},[query])
  useEffect(()=>{
    postaviLoader(true)
  },[nekretninaa])
  if(nekretninaa!=null){
    console.log(nekretninaa)
    if(loader){
  return (
    <>
      <BodyContent singleData={nekretninaa}>
      </BodyContent>
    </>
  );
}}
else{return(<><h1>ocitavanje</h1></>)}

}

ImageBox.getLayout = function getLayout(page, nekretninaa = null) {
  const title = nekretninaa
    ? `Meddis nekretnine - ${nekretninaa.naziv}`
    : "Meddis nekretnine";
  const description = nekretninaa
    ? `Meddis nekretnine - ${nekretninaa.naziv}, površina ${nekretninaa.povrsina} m², ${nekretninaa.brojSoba} spavaće sobe. ${nekretninaa.opis}. Pogledajte više detalja i cijenu na našoj stranici!`
    : "Kupovina i prodaja nekretnina";

  return <Layout title={title} description={description}>{page}</Layout>;
};
export default ImageBox;