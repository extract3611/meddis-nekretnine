import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ucitajNekretninu } from "../../../redux-toolkit/nekretnine-redux/izabranaNekretnina"; // Importuj akciju
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/property/tabPanelPages";
import Layout from "../layout";

export const getStaticPaths = async ({ locales }) => {
  const response = await axios.get(`https://white-homes.me/api/nekretnine`);
  const data = response.data;

  const ids = data.map((nekretnina) => nekretnina.id_nekretnina);
  const paths = ids
    .map((id) =>
      locales.map((locale) => ({
        params: { nekretnina: id.toString() },
        locale, // locale should not be inside `params`
      }))
    )
    .flat();

  return {
    paths,
    fallback: true, // fallback to true, so that we can dynamically load others
  };
};

export const getStaticProps = async ({ params, locale }) => {
  // Fetch data for the specific property using the nekretnina ID
  const response = await axios.get(`https://white-homes.me/api/izabrana-nekretnina/${params.nekretnina}`);
  const nekretnina = response.data[0];

  return {
    props: {
      nekretnina,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const ImageBox = ({ nekretnina }) => {
  const router = useRouter();
  const query = router.query.nekretnina;
  const dispatch = useDispatch();

  const [loader, postaviLoader] = useState(false);
  const [slike, postaviSlike] = useState([]);
  const [error, setError] = useState(null); // Error handling for image fetch

  useEffect(() => {
    if (nekretnina) {
      postaviLoader(true);
      dispatch(ucitajNekretninu(nekretnina)); // Dispatch the selected property to global state

      axios
        .post(`/api/galerija`, { id: nekretnina.id_nekretnina })
        .then((response) => postaviSlike(response.data))
        .catch((error) => {
          setError("Unable to load images. Please try again later.");
          console.error(error);
        })
        .finally(() => postaviLoader(false)); // Hide loader after fetching
    }
  }, [nekretnina, dispatch]);

  if (!nekretnina) {
    return <h1>Učitavanje...</h1>;
  }

  return (
    <>
      {loader && <div>Loading images...</div>} {/* Placeholder for loader */}
      {error && <div>{error}</div>} {/* Display error message if any */}
      {slike.length > 0 && !error && <BodyContent singleData={nekretnina} slike={slike} />}
    </>
  );
};

ImageBox.getLayout = function getLayout(page, nekretnina = null) {
  const title = nekretnina
    ? `Meddis nekretnine - ${nekretnina.naziv}`
    : "Meddis nekretnine";
  const description = nekretnina
    ? `Meddis nekretnine - ${nekretnina.naziv}, površina ${nekretnina.povrsina} m², ${nekretnina.brojSoba} spavaće sobe. ${nekretnina.opis}. Pogledajte više detalja i cijenu na našoj stranici!`
    : "Kupovina i prodaja nekretnina";

  return (
    <Layout title={title} description={description}>
      {page}
    </Layout>
  );
};

export default ImageBox;
