export const filterContactsSelectors = (state) => {
  const { filter, contacts } = state.transactions;
  const normalizedFilter = filter.toLocaleLowerCase();
  const findEl =
    contacts.length === 0
      ? []
      : contacts.filter((contact) =>
          contact.name.toLocaleLowerCase().includes(normalizedFilter)
        );
  return findEl;
};
