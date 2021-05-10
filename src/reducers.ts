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
      propertyId: { defaultValue: null, value: null },
    },
  },
};

const reducers = (
  state: ReduxState = defaultState,
  action: ReduxAction
): ReduxState => {
  switch (action.type) {
    case "SET_FIELD_PROPERTY":
      const { field, value } = action.value;
      return {
        ...state,
        signUpForm: {
          propertyForm: {
            ...state.signUpForm.propertyForm,
            [field]: {
              // @ts-ignore
              ...state.signUpForm.propertyForm[field],
              value,
            },
          },
          userForm: { ...state.signUpForm.userForm },
        },
      }
      case "SET_FIELD_USER":
        const { field, value } = action.value;
        return {
          ...state,
          signUpForm: {
            userForm: {
              ...state.signUpForm.userForm,
              [field]: {
                // @ts-ignore
                ...state.signUpForm.userForm[field],
                value,
              },
            },
            propertyForm: { ...state.signUpForm.propertyForm },
          },
        }
    default:
      return state;
  }
};

export default reducers;
