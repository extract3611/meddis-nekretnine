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
   dodajNekretninu: (state, nekretnina) => {
      state.niz = [...state.niz,nekretnina.payload]
    },

  },
})

// Action creators are generated for each case reducer function
export const { ucitajNekretnine,brisiNekretninu,dodajNekretninu} = nekretnineSlice.actions;

export default nekretnineSlice.reducer;
