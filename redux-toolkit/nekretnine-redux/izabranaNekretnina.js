import { createSlice } from '@reduxjs/toolkit'

export const izabranaNekretninaSlice = createSlice({
  name: 'izabranaNekretnina',
  initialState:null,

  reducers: {
    ucitajNekretninu: (state,izabranaNekretnina) => {
        console.log('reducer pozvan')

        return izabranaNekretnina.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { ucitajNekretninu} = izabranaNekretninaSlice.actions;

export default izabranaNekretninaSlice.reducer;
