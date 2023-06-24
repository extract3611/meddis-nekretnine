import { createReducer } from "@reduxjs/toolkit";

const inicijalnoStanje = {
 

  pretraga: "",
};

export const inputsReducer = createReducer(inicijalnoStanje, {
  pretraga: (state, action) => {
    state.pretraga = action.payload;
  }
});
