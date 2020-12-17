export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_NEW_APARTMENT = 'SUBMIT_NEW_APARTMENT';

export const changeInputValue = (target, value) => ({
  type: CHANGE_INPUT_VALUE,
  target,
  value,
});

export const submitNewApartment = () => ({
  type: SUBMIT_NEW_APARTMENT,
});
