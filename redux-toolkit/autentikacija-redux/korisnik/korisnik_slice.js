import { createSlice } from '@reduxjs/toolkit'

export const korisnikSlice = createSlice({
  name: 'korisnik',
  initialState: {
    value: null,
  },
  reducers: {
    prijavaa: (state,korisnik) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value=korisnik.payload;
    },
    odjava: (state) => {
      state.value =null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { prijavaa, odjava,  } = korisnikSlice.actions

export default korisnikSlice.reducer;
