import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import inputReducer, { contactsRudeser } from "./contacts/contactsReduser";
import filterReduser from "./filter/filterRudeser";

// const redeser = (state = [], action) => {
//   return state;
// };
const rootReduser = combineReducers({
  input: inputReducer,
  filter: filterReduser,
  contacts: contactsRudeser,
});

export const store = createStore(rootReduser, composeWithDevTools());
