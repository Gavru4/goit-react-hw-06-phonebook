import { contactsRudeser } from "./contacts/contactsReduser";
import filterReduser from "./filter/filterRudeser";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contact",
  version: 1,
  storage,
  blacklist: ["filter"],
};
const transactions = combineReducers({
  filter: filterReduser,
  contacts: contactsRudeser,
});

const transactionsPersistedReducer = persistReducer(
  persistConfig,
  transactions
);

export const store = configureStore({
  reducer: {
    transactions: transactionsPersistedReducer,
    // filter: filterReduser,
    // contacts: contactsPersistedReducer,
  },
  // deftolse: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

// const redeser = (state = [], action) => {
//   return state;
// };

// const rootReduser = combineReducers({
//   input: inputReducer,
//   filter: filterReduser,
//   contacts: contactsRudeser,
// });
