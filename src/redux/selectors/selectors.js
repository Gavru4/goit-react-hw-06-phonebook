export const filterContactsSelectors = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  const findEl =
    contacts.length === 0
      ? []
      : contacts.filter((contact) =>
          contact.name.toLocaleLowerCase().includes(normalizedFilter)
        );
  return findEl;
};
