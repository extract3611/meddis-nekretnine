import "../public/assets/scss/app.scss";
import "react-toastify/dist/ReactToastify.css"; // Import za react-toastify
import "photoswipe/dist/photoswipe.css";
import "./styles.css";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify"; // Import za ToastContainer
import { store } from "../redux-toolkit/store";
import { Provider } from "react-redux";
import { withTranslateRoutes } from "next-translate-routes";
import Layout from "./layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Meddis Nekretnine - Kupovina i prodaja nekretnina u Crnoj Gori</title>

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Meddis Nekretnine je agencija sa 26 godina iskustva u prodaji i kupovini nekretnina. Specijalizovani smo za stambene, poslovne i luksuzne objekte."
        />
        <meta property="og:image" content="/assets/images/logo.svg" />

        <meta name="author" content="Meddis Group d.o.o." />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://meddis-nekretnine.me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Meddis Nekretnine - Kupovina i prodaja nekretnina" />
        <meta
          property="og:description"
          content="Meddis Nekretnine je agencija sa 26 godina iskustva u prodaji i kupovini nekretnina. Pomažemo u pronalaženju idealnih nekretnina za investicije, stanovanje ili odmor."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="meddis-nekretnine.me" />
        <meta property="twitter:url" content="https://meddis-nekretnine.me" />
        <meta property="twitter:title" content="Meddis Nekretnine - Kupovina i prodaja nekretnina" />
        <meta
          property="twitter:description"
          content="Meddis Nekretnine je agencija sa 26 godina iskustva u prodaji i kupovini nekretnina. Pomažemo u pronalaženju idealnih nekretnina za investicije, stanovanje ili odmor."
        />
        <meta property="twitter:image" content="/assets/images/logo.svg" />
      </Head>

      <Provider store={store}>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        <ToastContainer position="bottom-center" /> {/* Dodaj ToastContainer da se obaveštenja prikazuju */}
      </Provider>
    </>
  );
}

export default withTranslateRoutes(appWithTranslation(MyApp));
