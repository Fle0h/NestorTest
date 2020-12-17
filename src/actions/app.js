export const GET_ALL_APARTMENTS = 'GET_ALL_APARTMENTS';
export const SAVE_ALL_APARTMENTS = 'SAVE_ALL_APARTMENTS';
export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
export const SAVE_ALL_CUSTOMERS = 'SAVE_ALL_CUSTOMERS';

export const getAllApartments = () => ({
  type: GET_ALL_APARTMENTS,
});

export const saveAllApartments = (apartments) => ({
  type: SAVE_ALL_APARTMENTS,
  apartments,
});

export const getAllCustomers = () => ({
  type: GET_ALL_CUSTOMERS,
});

export const saveAllCustomers = (customers) => ({
  type: SAVE_ALL_CUSTOMERS,
  customers,
});
