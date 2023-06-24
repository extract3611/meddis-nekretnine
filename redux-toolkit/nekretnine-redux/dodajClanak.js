import { createSlice } from '@reduxjs/toolkit'

export const clanakSlice = createSlice({
  name: 'clanak',
  initialState: {
    unos:{
      id:"",
      naziv:"",
      slika:"",
      projektovanje:false,
      izgradnja:false,
      tekst:"",
      odabrana_slika:"",
      slikaurl:"",
   }
    ,
  },
  reducers: {
    postaviUnosss: (state,clanak) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.unos={...state.unos,...clanak.payload};
    },

  },
})

// Action creators are generated for each case reducer function
export const { postaviUnosss} = clanakSlice.actions;

export default clanakSlice.reducer;
