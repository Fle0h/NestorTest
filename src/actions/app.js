export const GET_ALL_APARTMENTS = 'GET_ALL_APARTMENTS';
export const SAVE_ALL_APARTMENTS = 'SAVE_ALL_APARTMENTS';
export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
export const SAVE_ALL_CUSTOMERS = 'SAVE_ALL_CUSTOMERS';
export const GET_ALL_BOOKINGS = 'GET_ALL_BOOKINGS';
export const SAVE_ALL_BOOKINGS = 'SAVE_ALL_BOOKINGS';
export const GET_ALL_ROOMS = 'GET_ALL_ROOMS';
export const SAVE_ALL_ROOMS = 'SAVE_ALL_ROOMS';

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

export const getAllBookings = () => ({
  type: GET_ALL_BOOKINGS,
});

export const saveAllBookings = (bookings) => ({
  type: SAVE_ALL_BOOKINGS,
  bookings,
});

export const getAllRooms = () => ({
  type: GET_ALL_ROOMS,
});

export const saveAllRooms = (rooms) => ({
  type: SAVE_ALL_ROOMS,
  rooms,
});

