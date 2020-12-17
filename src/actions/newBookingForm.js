export const CHANGE_INPUT_VALUE_BOOKING = 'CHANGE_INPUT_VALUE_BOOKING';
export const CHANGE_INPUT_VALUE_APARTMENT_BOOKING = 'CHANGE_INPUT_VALUE_APARTMENT_BOOKING';
export const SUBMIT_NEW_BOOKING = 'SUBMIT_NEW_BOOKING';
export const SAVE_FOUND_ROOMS = 'SAVE_FOUND_ROOMS';

export const changeInputValueBooking = (target, value) => ({
  type: CHANGE_INPUT_VALUE_BOOKING,
  target,
  value,
});

export const changeInputValueApartmentBooking = (target, value) => ({
  type: CHANGE_INPUT_VALUE_APARTMENT_BOOKING,
  target,
  value,
});

export const submitNewBooking = () => ({
  type: SUBMIT_NEW_BOOKING,
});

export const saveFoundRooms = (rooms) => ({
  type: SAVE_FOUND_ROOMS,
  rooms,
});
