import { createSlice } from '@reduxjs/toolkit'

export const nekretninaSlice = createSlice({
  name: 'nekretnina',
  initialState: {
    unos:{
      id:[],
      naziv:"",
      tipNekretnine: "",
      statusNekretnine: "",
      spavaćeSobe: "",
      kupatila: "",
      površina: "",
      površinaPlaca:"",
      cijena: "",
      opis: "",
      adresa: "",
      država: "",
      slike:[],
      grad: "",
      slika:"",
      odabrana:false,}
    ,
  },
  reducers: {
    postaviUnosss: (state,nekretnina) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.unos={...state.unos,...nekretnina.payload};
    },

  },
})

// Action creators are generated for each case reducer function
export const { postaviUnosss} = nekretninaSlice.actions;

export default nekretninaSlice.reducer;
