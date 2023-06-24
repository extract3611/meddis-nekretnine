import { configureStore } from "@reduxjs/toolkit";
import { inputsReducer } from "./reducers/inputsReducer";
import { addToWishListReducer } from "./reducers/addToWishListReducer";
import { addToCompareReducer } from "./reducers/addToCompareReducer";
import { currencyReducer } from "./reducers/currencyReducer";
import { gridReducer } from "./reducers/gridReducer";
import korisnikReducer from './autentikacija-redux/korisnik/korisnik_slice';
import nekretninaReducer from  './nekretnine-redux/dodajNekretninu';
import nekretnineReducer from  './nekretnine-redux/sveNekretnine';
import clanakReducer from  './clanci-redux/dodajClanak';
import clanciReducer from  './clanci-redux/sviClanci';
import izabranaNekretninaReducer from "./nekretnine-redux/izabranaNekretnina";
import neodobreneNekretnine from "./nekretnine-redux/neodobreneNekretnine";
export const store = configureStore({
  reducer: {
    inputsReducer,
    addToWishListReducer,
    addToCompareReducer,
    currencyReducer,
    gridReducer,
    korisnik:korisnikReducer,
   nekretnina:nekretninaReducer,
  nekretnine : nekretnineReducer,
    clanak:clanakReducer,
    clanci:clanciReducer,
    izabranaNekretnina:izabranaNekretninaReducer,
    neodobreneNekretnine:neodobreneNekretnine,
  },
});
