import { createSlice } from '@reduxjs/toolkit'

export const nekretnineSlice = createSlice({
  name: 'nekretnine',
  initialState:{niz:[]},

  reducers: {
    ucitajNekretnine: (state,nekretnine) => {
        console.log('reducer pozvan')

        state.niz=[...nekretnine.payload]
    },
    brisiNekretninu: (state, nekretnine) => {
      const id = nekretnine.payload;
      state.niz = [...state.niz.filter((obj) => obj.id_nekretnina !== id)]
    },

  },
})

// Action creators are generated for each case reducer function
export const { ucitajNekretnine,brisiNekretninu} = nekretnineSlice.actions;

export default nekretnineSlice.reducer;
