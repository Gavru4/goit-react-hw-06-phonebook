import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./filterAction";

const filterReduser = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

// const filterReduser = (state = [], { type, payload }) => {
//   return state;
// };

// const filterReduser = {};
export default filterReduser;
