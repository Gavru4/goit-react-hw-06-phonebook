import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// export const addName = createAction("contacts/addName");
// export const addNumber = createAction("contacts/addNumber");
// export const clear = createAction("contacts/clear");
export const removeContacts = createAction("contacts/removeContacts");

export const writeContacts = createAction(
  "contacts/writeContacts",
  (contact) => {
    return {
      payload: { ...contact, id: nanoid() },
    };
  }
);

// export const addName = (value) => ({
//   type: "contacts/addName",
//   payload: value,
// });

// export const addNumber = (value) => ({
//   type: "contacts/addNumber",
//   payload: value,
//  });

// export const writeContacts = (value) => ({
//   type: "contacts/writeContacts",
//   payload: value,
// });
