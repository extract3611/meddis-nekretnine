import { createSlice } from '@reduxjs/toolkit'

export const clanakSlice = createSlice({
  name: 'clanak',
  initialState: {
    unos:{
      id:"",
      naziv:"",
      datum:"",
      tekst:"",
      opis:"",
      odabrana_slika:"",}

  },
  reducers: {
    postaviUnosss: (state,clanak) => {

      state.unos={...state.unos,...clanak.payload};
    },

  },
})

// Action creators are generated for each case reducer function
export const { postaviUnosss} = clanakSlice.actions;

export default clanakSlice.reducer;
