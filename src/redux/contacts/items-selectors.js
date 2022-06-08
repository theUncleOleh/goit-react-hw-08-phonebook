const getContactsSelector = state => state.contacts.contacts;

const getFilterSelector = state => state.filter.value;
console.log(getFilterSelector);
const selectors = {
  getContactsSelector,
  getFilterSelector,
};
export default selectors;
