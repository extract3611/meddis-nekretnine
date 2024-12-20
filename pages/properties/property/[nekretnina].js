import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ucitajNekretninu } from "../../../redux-toolkit/nekretnine-redux/izabranaNekretnina";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/property/tabPanelPages";
import Head from 'next/head';
import Layout from "../layout";
import { useSelector, useDispatch } from "react-redux";

// Get server-side props to fetch data before the page is rendered
export const getServerSideProps = async ({ params, locale }) => {
  const response = await axios.get(`https://white-homes.me/api/nekretnine/${params.nekretnina}`);
  const nekretnina = response.data;
  console.log(nekretnina);
  console.log('aaaa');

  return {
    props: {
      nekretnina,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const ImageBox = ({ nekretnina }) => {
  const router = useRouter();
  const [slike, setSlike] = useState([]);
  const dispatch = useDispatch();

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
    
      <BodyContent slike={slike} singleData={nekretnina} />
    </>
  );
};

ImageBox.getLayout = function getLayout(page) {
  return (
    <Layout title="Sve nekretnine - Najveća baza nekretnina u Crnoj Gori" description="Bez obzira da li tražite nekretninu za investiciju, stanovanje ili odmor, mi vam nudimo široki spektar svih tipova nekretnina.">
      {page}
    </Layout>
  );
};

export default ImageBox;
