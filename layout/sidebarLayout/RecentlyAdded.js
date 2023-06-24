/**
 * It fetches data from the API and then sorts the data by date and then maps over the data to display
 * the data in the UI
 * @returns An array of objects.
 */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getData } from "../../utils/getData";
import { useTranslation } from "next-i18next";
const RecentlyAdded = (latest) => {
  const {t}=useTranslation("common");

  const [value, setValue] = useState();
  useEffect(() => {
    console.log(latest)
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data?.LatestForSalePropertyData);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  useEffect(()=>{
    console.log(latest)
  },[latest])
  return (
    <div className='advance-card'>
      <h6>{t("Poslednje dodati")}</h6>
      <div className='recent-property'>
        <ul>
          {latest.latest?.sort((product1, product2) => {
              let date1 = new Date(product1.date);
              let date2 = new Date(product2.date);
              return date2?.getTime() > date1.getTime() ? -1 : 1;
            })
            ?.map((data, i) => (
              <li key={i}>
                              <Link href={`/nekretnine/nekretnina/${data.id_nekretnina}`}>

                <div className='media'>
                  <img src={`/slike/${data.slika}`} className='img-fluid' alt='' />
                  <div className='media-body'>
                    <h5>{data.naziv}</h5>
                    <span>
                      {data.cijena==0 ? <span style={{color:"orange"}}>{t("Na Upit")}</span> : data.cijena+"€" }
                    </span>
                  </div>
                </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentlyAdded;
