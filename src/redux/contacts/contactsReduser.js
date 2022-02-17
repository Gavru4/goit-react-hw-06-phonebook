import { combineReducers } from "redux";

const nameReduser = (state = "", { type, payload }) => {
  switch (type) {
    case "contacts/addName":
      return payload;
    default:
      return state;
  }
};

const numberRedeser = (state = "", { type, payload }) => {
  switch (type) {
    case "contacts/addNumber":
      return payload;
    default:
      return state;
  }
};

export const contactsRudeser = (state = [], { type, payload }) => {
  switch (type) {
    case "contacts/writeContacts":
      return [...state, payload];
    default:
      return state;
  }
};

const inputReducer = combineReducers({
  name: nameReduser,
  number: numberRedeser,
});

export default inputReducer;
