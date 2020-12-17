export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_NEW_ROOM = 'SUBMIT_NEW_ROOM';
export const CHANGE_APARTMENT_ID = 'CHANGE_APARTMENT_ID';

export const changeInputValue = (target, value) => ({
  type: CHANGE_INPUT_VALUE,
  target,
  value,
});

export const submitNewRoom = () => ({
  type: SUBMIT_NEW_ROOM,
});

export const changeApartmentID = (id) => ({
  type: CHANGE_APARTMENT_ID,
  id,
});
