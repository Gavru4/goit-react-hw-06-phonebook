import { contactsRudeser } from "./contacts/contactsReduser";
import filterReduser from "./filter/filterRudeser";
import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "contact",
//   version: 1,
//   storage,
// };

// const contactsPersistedReducer = persistReducer(persistConfig, contactsRudeser);

export const store = configureStore({
  reducer: {
    filter: filterReduser,
    contacts: contactsRudeser,
  },
  // deftolse: process.env.NODE_ENV !== "production",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);

export default store;

// const redeser = (state = [], action) => {
//   return state;
// };
// const rootReduser = combineReducers({
//   input: inputReducer,
//   filter: filterReduser,
//   contacts: contactsRudeser,
// });
