export const addName = (value) => ({
  type: "contacts/addName",
  payload: value,
});

export const addNumber = (value) => ({
  type: "contacts/addNumber",
  payload: value,
});

export const writeContacts = (value) => ({
  type: "contacts/writeContacts",
  payload: value,
});
