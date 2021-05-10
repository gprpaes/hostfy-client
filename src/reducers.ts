import { ReduxAction, ReduxState } from "./interfaces";

const defaultState = {
  signUpForm: {
    propertyForm: {
      propertyName: { defaultValue: null, value: null },
      cnpj: { defaultValue: null, value: null },
      address: { defaultValue: null, value: null },
      roomAmount: { defaultValue: null, value: null },
    },
    userForm: {
      name: { defaultValue: null, value: null },
      cpf: { defaultValue: null, value: null },
      address: { defaultValue: null, value: null },
      email: { defaultValue: null, value: null },
      phone: { defaultValue: null, value: null },
      birthday: { defaultValue: null, value: null },
      userName: { defaultValue: null, value: null },
      password: { defaultValue: null, value: null },
      position: { defaultValue: null, value: null },
    },
      step: 0

  },
};

const reducers = (
  state: ReduxState = defaultState,
  action: ReduxAction
): ReduxState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducers;
