export const CHANGE_INPUT_VALUE_ROOM = 'CHANGE_INPUT_VALUE_ROOM';
export const SUBMIT_NEW_ROOM = 'SUBMIT_NEW_ROOM';
export const CHANGE_APARTMENT_ID = 'CHANGE_APARTMENT_ID';

export const changeInputValueRoom = (target, value) => ({
  type: CHANGE_INPUT_VALUE_ROOM,
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
