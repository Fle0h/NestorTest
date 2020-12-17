export const CHANGE_INPUT_VALUE_CUSTOMER = 'CHANGE_INPUT_VALUE_CUSTOMER';
export const SUBMIT_NEW_CUSTOMER = 'SUBMIT_NEW_CUSTOMER';

export const changeInputValueCustomer = (target, value) => ({
  type: CHANGE_INPUT_VALUE_CUSTOMER,
  target,
  value,
});

export const submitNewCustomer = () => ({
  type: SUBMIT_NEW_CUSTOMER,
});
