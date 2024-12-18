import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/property/tabPanelPages";
import Head from 'next/head';
import Layout from "../layout";

// Get server-side props to fetch data before the page is rendered
export const getServerSideProps = async ({ params, locale }) => {
  const response = await axios.get(`https://white-homes.me/api/pojedinacnaNekretnina/${params.nekretnina}`);
  const nekretnina = response.data;
console.log(nekretnina);
  return {
    props: {
      nekretnina,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const ImageBox = ({ nekretnina }) => {
  const [slike, setSlike] = useState([]);

  useEffect(() => {
    if (nekretnina) {
      // Fetch gallery images
      axios.post(`/api/galerija`, { id: nekretnina.id_nekretnina })
        .then(response => setSlike(response.data))
        .catch(error => console.error(error));
    }
  }, [nekretnina]);

  // Ensure nekretnina is loaded before rendering the page
  if (!nekretnina) {
    return <div>Učitavanje...</div>; // Show loading state while fetching data
  }

  return (
    <>
      <Head>
        <title>{nekretnina.naziv}</title>
        <meta property="og:title" content={nekretnina.naziv} />
        <meta property="og:description" content={nekretnina.opis} />
        {/* Dynamic Open Graph image URL for individual property */}
        <meta property="og:image" content={nekretnina.slika || "https://www.meddis-nekretnine.me/assets/images/logo.svg"} />
        <meta property="og:url" content={`https://www.meddis-nekretnine.me/nekretnine/nekretnina/${nekretnina.id_nekretnina}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={nekretnina.naziv} />
        <meta name="twitter:description" content={nekretnina.opis} />
        <meta name="twitter:image" content={nekretnina.slika || "https://www.meddis-nekretnine.me/assets/images/logo.svg"} />
      </Head>
      <BodyContent slike={slike} singleData={nekretnina} />
    </>
  );
};

ImageBox.getLayout = function getLayout(page, nekretnina) {
  return (
    <Layout
      title={`Meddis nekretnine - ${nekretnina.naziv}`}
      description={`${nekretnina.opis}`}
    >
      {page}
    </Layout>
  );
};

export default ImageBox;
