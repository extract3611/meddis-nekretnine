import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";

const useFilterProducts = ({ value }) => {
  const { status, tip,grad,  spavaceSobe, kupatila,  cijena, povrsina, sortirajPrema,pretraga } = useSelector((state) => state.inputsReducer);
  const inputFilter = useSelector((state) => state.inputsReducer);
  const {t}=useTranslation("common");

  const [showProduct, setShowProduct] = useState();
  const [work, setWork] = useState(false);
const [upit,postaviUpit]=useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  let Data = router.query;
    
  try {    console.log(inputFilter)

    var oldData = !!Object.keys(Data).length && JSON.parse(decodeURIComponent(Data.filtriraniPodaci));
    console.log(oldData)
  } catch (err) {
    console.log(err);
  }
  useEffect(() => {
    console.log(value)
    console.log(oldData)
    oldData?.status && dispatch({ type: "status", payload: t(oldData?.status) });
    oldData?.tip && dispatch({ type: "tip", payload: t(oldData?.tip) });
    oldData?.grad && dispatch({ type: "grad", payload: oldData?.grad });
    oldData?.spavaceSobe && dispatch({ type: "spavaceSobe", payload: oldData?.spavaceSobe });
    oldData?.kupatila && dispatch({ type: "kupatila", payload: oldData?.kupatila });
    oldData?.pretraga && dispatch({ type: "pretraga", payload: oldData?.pretraga });

    oldData?.sortirajPrema && dispatch({ type: "sortirajPrema", payload: oldData?.sortirajPrema });
    oldData?.cijena && (oldData?.cijena[0] !== cijena[0] || oldData?.cijena[1] !== cijena[1] ? dispatch({ type: "cijena", payload: oldData?.cijena }) : "");
    oldData?.povrsina && (oldData?.povrsina[0] !== povrsina[0] || oldData?.povrsina[1] !== povrsina[1] ? dispatch({ type: "povrsina", payload: oldData?.povrsina }) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log("upit iznosi",(decodeURIComponent(Data.filtriraniPodaci)))
  }, [Data]);

  useEffect(() => {
    console.log(value)
    console.log(value?.filter(obj=>{ return obj.naziv.includes("a")||obj.adresa.includes("a")||obj.grad.includes("a")}));

    setShowProduct(
      value
        ?.filter((product) => {
          let statuss = status ? (status === t("Status Nekretnine") && true) || (t(product.status) === status ? true : false) : true;
          let type = tip ? (tip === t("Tip Nekretnine") && true) || (t(product.tip) === tip ? true : false) : true;
          let gr = grad ? (grad === t("Grad") && true) || (t(product.grad) === grad ? true : false) : true;
          let pretragaa= pretraga ? (pretraga==="" && true) || ((product.naziv.includes(pretraga)||product.adresa.includes(pretraga)||product.grad.includes(pretraga) || (""+product.id_nekretnina).includes(pretraga)) ? true :false) : true;

          let beds = spavaceSobe ? (spavaceSobe === t("Spavace Sobe") && true) || (product.spavace_sobe === Number(spavaceSobe) ? true : false) : true;
          let baths = kupatila ? (kupatila === "Kupatila" && true) || (product.kupatila === Number(kupatila) ? true : false) : true;
          let priceMatch = product.cijena!=0  ? cijena[0] <= product.cijena && cijena[1] >= product.cijena && true : true;
          let SqftMatch = povrsina ? povrsina[0] <= product.povrsina && povrsina[1] >= product.povrsina && true : true;

          return statuss && type && gr && beds && baths && pretragaa  && priceMatch && SqftMatch;
        })
        .sort((product1, product2) => {
          let dani1=product1.datum.split('/')[0];
let mjeseci1=product1.datum.split('/')[1];
let godine1=product1.datum.split('/')[2];

let dani2=product2.datum.split('/')[0];
let mjeseci2=product2.datum.split('/')[1];
let godine2=product2.datum.split('/')[2];
let datum1=godine1.concat("-",mjeseci1,"-",dani1);
let datum2=godine2.concat("-",mjeseci2,"-",dani2);
console.log(datum1)
console.log(datum2)
          if (sortirajPrema === "Cijena - Od više ka nižoj") {
            return product2.cijena < product1.cijena ? -1 : 1;
          } else if (sortirajPrema === "Cijena - Od niže ka višoj") {
            return product2.cijena > product1.cijena ? -1 : 1;
          } else if (sortirajPrema === "Datum - Najnoviji") {
            let date1 = new Date(datum1);
            let date2 = new Date(datum2);
            return date2?.getTime() < date1.getTime() ? -1 : 1;
          } else if (sortirajPrema === "Datum - Najstariji") {
            let date1 = new Date(datum1);
            let date2 = new Date(datum2);
            return date2?.getTime() > date1.getTime() ? -1 : 1;
          } else {
            return product2.cijena !== product1.cijena ? 1 : 1;
          }
        }),
    );

    work &&
      router.push(
        {
          pathname: router.pathname,
          query: { filtriraniPodaci: encodeURIComponent(JSON.stringify(inputFilter)) },
        },
        undefined,
        {
          shallow: true,
        },
      );
    setTimeout(() => {
      setWork(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, value, grad, tip, spavaceSobe, kupatila, sortirajPrema, pretraga, cijena, povrsina]);

  return showProduct;
};

export default useFilterProducts;
