export const GET_ALL_APARTMENTS = 'GET_ALL_APARTMENTS';
export const SAVE_ALL_APARTMENTS = 'SAVE_ALL_APARTMENTS';

export const getAllApartments = () => ({
  type: GET_ALL_APARTMENTS,
});

export const saveAllApartments = (apartments) => ({
  type: SAVE_ALL_APARTMENTS,
  apartments,
});
