import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ucitajNekretninu } from "../../../redux-toolkit/nekretnine-redux/izabranaNekretnina"; // Importuj akciju
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/property/tabPanelPages";
import Layout from "../layout";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
let p;
export const getStaticPaths = async ({ locales }) => {
  const response = await axios.get('https://white-homes.me/api/nekretnine');
  const data = response.data;
  



  const ids = data.map((nekretnina) => nekretnina.id_nekretnina);
  const paths = ids
    .map((id) =>
      locales.map((locale) => ({
        params: { nekretnina: id.toString() },
        locale, //locale should not be inside params
      }))
    )
    .flat(); // to avoid nested arrays

  return {
    paths,
    fallback: false,
  };
};







const ImageBox = () => {
const router = useRouter();

const [query,postaviQuery]=useState(null);

useEffect(()=>{
  postaviQuery(router.query.nekretnina);

},[])
  const [value, setValue] = useState();
  const nekretnine=useSelector(state=>state.nekretnine.niz)
  const nekretninaa=useSelector(state=>state.izabranaNekretnina)

  const [nekretnina,postaviNekretninu]=useState(null);
  const [slike,postaviSlike]=useState([]);
  useEffect(()=>{axios.post(/api/galerija, {
    id:query
  })
  .then(function (response) {
    console.log(response);
    postaviSlike(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })},[nekretnina])

  useEffect(()=>console.log(slike),[slike])

  const dispatch=useDispatch();

 /* useEffect(() => {
    console.log(nekretnine)
    console.log('id'+id)
    getData(${process.env.API_URL}/property)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((item) => item.id === id)
            .pop(),
        );
      })
      .catch((error) => console.log("Error", error));
  }, [id]);*/
  useEffect(()=>{
    if(nekretnine.lenght!=0 && query!=null){
    console.log(nekretnine)
    postaviNekretninu(nekretnine.filter(x=>x.id_nekretnina==query))
    console.log(nekretnine.filter(x=>x.id_nekretnina==query))
    dispatch(ucitajNekretninu(nekretnine.filter(x=>x.id_nekretnina==query)[0]));
  }},[query,nekretnine])
  useEffect(()=>{
    console.log(nekretninaa)
  },[nekretninaa])
  if(nekretninaa!=null){
    console.log(nekretninaa)
  return (
    <>
     <Head>
        <title>{nekretnina.naziv}</title>
        <meta property="og:title" content={nekretnina.naziv} />
        <meta property="og:description" content={nekretnina.opis} />
        <meta property="og:image" content={nekretnina.slika} />
        <meta property="og:url" content={`https://vasasajt.com/nekretnine/${nekretnina.id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={nekretnina.naziv} />
        <meta name="twitter:description" content={nekretnina.opis} />
        <meta name="twitter:image" content={nekretnina.slika} />
      </Head>
      <BodyContent slike={slike} singleData={nekretninaa}>
      </BodyContent>
    </>
  );
};}

ImageBox.getLayout = function getLayout(page) {
  return <Layout title="Sve nekretnine- Najveća baza nekretnina u Crnoj Gori" description="Bez obzira da li tražite nekretninu za investiciju, stanovanje ili odmor, mi vam nudimo široki spektar svih tipova nekretnina.">{page}</Layout>;
};
export default ImageBox;