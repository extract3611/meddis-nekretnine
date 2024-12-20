import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ucitajNekretninu } from "../../../redux-toolkit/nekretnine-redux/izabranaNekretnina"; // Importuj akciju
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/property/tabPanelPages";
import Layout from "../layout";
import { useSelector } from "react-redux";
import Head from "next/head";

// Server-side translation
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

// Fetch paths for static generation
export const getStaticPaths = async ({ locales }) => {
  const response = await axios.get("https://white-homes.me/api/nekretnine");
  const data = response.data;

  const ids = data.map((nekretnina) => nekretnina.id_nekretnina);
  const paths = ids
    .map((id) =>
      locales.map((locale) => ({
        params: { nekretnina: id.toString() },
        locale, // locale should not be inside params
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
  const dispatch = useDispatch();

  const nekretnine = useSelector((state) => state.nekretnine.niz);
  const nekretninaa = useSelector((state) => state.izabranaNekretnina);

  const [query, postaviQuery] = useState(null);
  const [slike, postaviSlike] = useState([]);

  useEffect(() => {
    postaviQuery(router.query.nekretnina);
  }, [router.query]);

  useEffect(() => {
    if (query) {
      axios
        .post("/api/galerija", { id: query })
        .then((response) => postaviSlike(response.data))
        .catch((error) => console.error(error));
    }
  }, [query]);

  useEffect(() => {
    if (nekretnine.length && query) {
      const filtered = nekretnine.filter((x) => x.id_nekretnina == query)[0];
      if (filtered) {
        dispatch(ucitajNekretninu(filtered));
      }
    }
  }, [query, nekretnine, dispatch]);

  if (!nekretninaa) return <div>Učitavanje...</div>;

  return (
    <Layout
      title={`Meddis Nekretnine - ${nekretninaa.naziv}`}
      description={nekretninaa.opis}
    >
      <Head>
      <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{nekretninaa.naziv}</title>

  {/* Open Graph (Facebook) Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content={nekretninaa.naziv} />
  <meta 
    property="og:description" 
    content={nekretninaa.opis.length > 120 ? `${nekretninaa.opis.substring(0, 120)}...` : nekretninaa.opis} 
  />
  <meta property="og:image" content={`https://meddis-nekretnine.me/slike/${nekretninaa.slika}`} />
  <meta property="og:url" content={`https://meddis-nekretnine.me/nekretnine/${nekretninaa.id}`} />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={nekretninaa.naziv} />
  <meta 
    name="twitter:description" 
    content={nekretninaa.opis.length > 120 ? `${nekretninaa.opis.substring(0, 120)}...` : nekretninaa.opis} 
  />
  <meta name="twitter:image" content={nekretninaa.slika} />

  {/* Additional Meta Tags (optional but recommended) */}
  <meta name="author" content="Meddis Nekretnine" />
  <meta name="robots" content="index, follow" />
</Head>
      <BodyContent slike={slike} singleData={nekretninaa} />
    </Layout>
  );
};

export default ImageBox;
