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

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
   

      <Provider store={store}>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        <ToastContainer position="bottom-center" /> {/* Dodaj ToastContainer da se obaveštenja prikazuju */}
      </Provider>
    </>
  );
}

export default withTranslateRoutes(appWithTranslation(MyApp));
