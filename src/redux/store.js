// import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { contactsRudeser } from "./contacts/contactsReduser";
import filterReduser from "./filter/filterRudeser";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // input: inputReducer,
    filter: filterReduser,
    contacts: contactsRudeser,
  },
  // deftolse: process.env.NODE_ENV !== "production",
});

// const redeser = (state = [], action) => {
//   return state;
// };
// const rootReduser = combineReducers({
//   input: inputReducer,
//   filter: filterReduser,
//   contacts: contactsRudeser,
// });
