import { createSlice } from '@reduxjs/toolkit'

export const clanciSlice = createSlice({
  name: 'clanci',
  initialState:{niz:[]},

  reducers: {
    ucitajClanke: (state,clanci) => {
        console.log('reducer pozvan')

        state.niz=[...clanci.payload]
    },

  },
})

// Action creators are generated for each case reducer function
export const { ucitajClanke} = clanciSlice.actions;

export default clanciSlice.reducer;
