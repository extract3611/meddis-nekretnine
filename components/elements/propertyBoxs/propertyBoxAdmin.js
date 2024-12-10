import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Camera, Trash2, Edit, User, Phone, Mail } from "react-feather";
import ContentLoader from "react-content-loader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ImageSlider from "../ImageSlider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropertyLabel from "../PropertyLabel";
import ThumbnailSlider from "../../elements/ThumbnailSlider";
import { brisiNekretninu, ucitajNekretnine } from "../../../redux-toolkit/nekretnine-redux/sveNekretnine";
import { brisiNeodobrenuNekretninu } from "../../../redux-toolkit/nekretnine-redux/neodobreneNekretnine";

const PropertyBox = ({ data, relativeSlider, video }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const [korisnik, postaviKorisnika] = useState(null);
  const [slike, postaviSlike] = useState([]);
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);

  const alertFnc = () => {
    toast.warning("Da li ste sigurni da želite da obrišete izabrani projekat?", {
      autoClose: 5000,
      closeButton: true,
      position: "bottom-center",
      onClose: () => deleteProperty(),
    });
  };

  const deleteProperty = async () => {
    try {
      await axios.post(`/api/brisi-nekretninu`, {
        id: data.id_nekretnina,
      });
      if (data.odobreno === true) {
        dispatch(brisiNekretninu(data.id_nekretnina));
      } else {
        dispatch(brisiNeodobrenuNekretninu(data.id_nekretnina));
      }
      toast.success("Nekretnina je uspešno obrisana!");
    } catch (error) {
      console.error(error);
      toast.error("Došlo je do greške prilikom brisanja nekretnine.");
    }
  };

  useEffect(() => {
    if (data.korisnik && data.korisnik !== 4) {
      axios
        .post(`/api/dohvatiKorisnika`, { id: data.korisnik })
        .then((res) => postaviKorisnika(res.data[0]))
        .catch((error) => console.error(error));
    }
  }, [data.korisnik]);

  useEffect(() => {
    axios
      .post(`/api/galerija-nekretnina`, { id: data.id_nekretnina })
      .then((response) => postaviSlike(response.data))
      .catch((error) => console.error(error));
  }, [data.id_nekretnina]);

  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
            {relativeSlider ? (
              <ThumbnailSlider images={data.slika} videoData={data.video} video={video} />
            ) : (
              <ImageSlider images={data.slika} />
            )}
            <div className="labels-left">
              <PropertyLabel labels={data.oznaka} />
            </div>
            {!relativeSlider && (
              <div className="seen-data">
                <Camera />
                <span>
                  {slike.length === 0 && (!data.slika || data.slika === null)
                    ? 0
                    : slike.length || 1}
                </span>
              </div>
            )}
          </div>

          <div className="property-details">
            <span className="font-roboto">{data.grad}</span>
            <span style={{ display: "block" }}>{data.datum}</span>

            <Link href={`/nekretnine/nekretnina/${data.id_nekretnina}`}>
              <h3>{data.naziv}</h3>
            </Link>
            {data.cijena === 0 ? (
              <h6 style={{ color: "orange" }}>Na upit</h6>
            ) : (
              <h6>
                {symbol}
                {(data.cijena * currencyValue).toFixed(2)}
              </h6>
            )}

            <ul>
              {data.spavace_sobe !== 0 && (
                <li key="beds">
                  <img
                    src="/assets/images/svg/icon/double-bed.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Kreveti: {data.spavace_sobe}
                </li>
              )}
              {data.kupatila !== 0 && (
                <li key="baths">
                  <img
                    src="/assets/images/svg/icon/bathroom.svg"
                    className="img-fluid"
                    alt=""
                  />
                  Kupatila: {data.kupatila}
                </li>
              )}
              {data.povrsina && data.povrsina !== 0 && (
                <li key="area">
                  <img
                    src="/assets/images/svg/icon/square-ruler-tool.svg"
                    className="img-fluid ruler-tool"
                    alt=""
                  />
                  Površina: {data.povrsina} m<sup>2</sup>
                </li>
              )}
            </ul>

            {korisnik && (
              <ul>
                <li key="user">
                  <User style={{ height: 15 }} /> ime: {korisnik.ime_prezime}
                </li>
                <li key="phone">
                  <Phone style={{ height: 15 }} /> kontakt: {korisnik.kontakt}
                </li>
                <li key="email">
                  <Mail style={{ height: 15 }} /> email: {korisnik.email}
                </li>
              </ul>
            )}

            <div className="property-btn d-flex">
              <Link
                href={{
                  pathname: data.odobreno
                    ? `/admin/izmijeni-nekretninu/${data.id_nekretnina}`
                    : `/admin/odobri-nekretninu/${data.id_nekretnina}`,
                }}
              >
                <button type="button" className="btn btn-dashed btn-pill">
                  <Edit style={{ height: 20, color: "green" }} /> Izmijeni
                </button>
              </Link>

              <button
                onClick={alertFnc}
                style={{ display: "flex", justifyContent: "space-between" }}
                type="button"
                className="btn btn-dashed btn-pill"
              >
                <Trash2 style={{ height: 20, color: "red" }} /> Izbriši
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ContentLoader className="skeleton-svg">
          {setTimeout(() => setLoad(false), 1000)}
          <rect className="skeleton-img" />
          <rect className="skeleton-c1" />
          <rect className="skeleton-c2" />
          <rect className="skeleton-c3" />
        </ContentLoader>
      )}
    </>
  );
};

export default PropertyBox;
