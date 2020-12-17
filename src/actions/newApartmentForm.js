export const CHANGE_INPUT_VALUE_APARTMENT = 'CHANGE_INPUT_VALUE_APARTMENT';
export const SUBMIT_NEW_APARTMENT = 'SUBMIT_NEW_APARTMENT';

export const changeInputValueApartment = (target, value) => ({
  type: CHANGE_INPUT_VALUE_APARTMENT,
  target,
  value,
});

export const submitNewApartment = () => ({
  type: SUBMIT_NEW_APARTMENT,
});
