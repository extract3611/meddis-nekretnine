import { createSlice } from '@reduxjs/toolkit'

export const neodobreneNekretnineSilce = createSlice({
  name: 'neodobreneNekretnine',
  initialState:{niz:[]},

  reducers: {
    ucitajNeodobreneNekretnine: (state,nekretnine) => {
        console.log('reducer pozvan')

        state.niz=[...nekretnine.payload]
    },
    brisiNeodobrenuNekretninu: (state, nekretnine) => {
      const id = nekretnine.payload;
      state.niz = [...state.niz.filter((obj) => obj.id_nekretnina !== id)]
    },

  },
})

// Action creators are generated for each case reducer function
export const { ucitajNeodobreneNekretnine,brisiNeodobrenuNekretninu} = neodobreneNekretnineSilce.actions;

export default neodobreneNekretnineSilce.reducer;
