import { createReducer } from "@reduxjs/toolkit";

const inicijalnoStanje = {
 

  cijena: [0, 4999999],
  povrsina: [0, 5000],
  sortirajPrema:"Datum - Najnoviji"
};

export const inputsReducer = createReducer(inicijalnoStanje, {
  status: (state, action) => {
    state.status = action.payload;
  },
  tip: (state, action) => {
    state.tip = action.payload;
  },
  grad: (state, action) => {
    state.grad = action.payload;
  },
  spavaceSobe: (state, action) => {
    state.spavaceSobe = action.payload;
  },
  kupatila: (state, action) => {
    state.kupatila = action.payload;
  },
 
  odabrana_slika:(state,action)=>{    state.odabrana_slika = action.payload;
  },
  cijena: (state, action) => {
    action.payload ? (state.cijena = [...action.payload]) : state.cijena.splice(0, state.cijena.length);
  },
  povrsina: (state, action) => {
    action.payload ? (state.povrsina = [...action.payload]) : state.povrsina.splice(0, state.povrsina.length);
  },
  sortirajPrema: (state, action) => {
    state.sortirajPrema = action.payload;
  },
  pretraga: (state, action) => {
    state.pretraga = action.payload;
  },

});
