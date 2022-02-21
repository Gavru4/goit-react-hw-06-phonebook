import { createReducer } from "@reduxjs/toolkit";
import { writeContacts, removeContacts } from "./contactsActions";

// const getTodosFromLS = () => JSON.parse(localStorage.getItem("todos")) || [];
// const setTodoToLS = (todos) =>
//   localStorage.setItem("todos", JSON.stringify(todos));

// const getContactsFromLS = () =>
//   JSON.parse(localStorage.getItem("contacts")) || [];

// const setContactsFromLS = (contacts) =>
//   localStorage.setItem("contacts", JSON.stringify(contacts));

const initialcontacts = []; // getContactsFromLS();

export const contactsRudeser = createReducer(initialcontacts, {
  [writeContacts]: (state, { payload }) => {
    const contacts = [...state, payload];
    // setContactsFromLS(contacts);
    return contacts;
  },

  [removeContacts]: (state, { payload }) => {
    const contacts = state.filter((el) => el.id !== payload);
    // setContactsFromLS(contacts);
    return contacts;
  },
});

// const nameReduser = createReducer("", {
//   [addName]: (_, { payload }) => payload,
//   [clear]: () => "",
// });

// const nameReduser = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/addName":
//       return payload;
//     default:
//       return state;
//   }
// };

// const numberRedeser = createReducer("", {
//   [addNumber]: (_, { payload }) => payload,
//   [clear]: () => "",
// });

// const numberRedeser = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/addNumber":
//       return payload;
//     default:
//       return state;
//   }
// };
// export const contactsRudeser = (state = [], { type, payload }) => {
//   switch (type) {
//     case "contacts/writeContacts":
//       return [...state, payload];
//     default:
//       return state;
//   }
// };

// const inputReducer = combineReducers({
//   name: nameReduser,
//   number: numberRedeser,
// // });

// export default inputReducer;
