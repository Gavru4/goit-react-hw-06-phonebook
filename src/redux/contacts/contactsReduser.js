import { createReducer } from "@reduxjs/toolkit";
import { writeContacts, removeContacts } from "./contactsActions";

export const contactsRudeser = createReducer("", {
  [writeContacts]: (state, { payload }) => [...state, payload],

  [removeContacts]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

// for (const obj of state) {
//   if (obj.name.includes(payload.name)) {
//     return alert(`${payload.name} is olredy in contact`);
//   }
//   return [...state, payload];
// }

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
