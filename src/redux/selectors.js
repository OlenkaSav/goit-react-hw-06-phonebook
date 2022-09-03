export const getFilter = ({ filter }) => filter;

export const visibleContacts = ({ filter, contacts }) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
