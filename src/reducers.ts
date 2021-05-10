/* eslint-disable @typescript-eslint/no-redeclare */
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
  guestForm: {
    reservationForm: {
      bedroomId: { defaultValue: null, value: null },
      guestAmount: { defaultValue: null, value: null },
      startDate: { defaultValue: null, value: null },
      endDate: { defaultValue: null, value: null },
      totalValue: { defaultValue: null, value: null },
      reservationDate: { defaultValue: null, value: null },
      checkIn: { defaultValue: false, value: false },
    },
    bedroomForm: {
      number: { defaultValue: null, value: null },
      type: { defaultValue: null, value: null },
      capacity: { defaultValue: null, value: null },
      booked: { defaultValue: null, value: null },
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
      };
    case "SET_FIELD_USER":
      const { fieldU, valueU } = action.value;
      console.log(fieldU, valueU);
      console.log({
        ...state,
        signUpForm: {
          userForm: {
            ...state.signUpForm.userForm,
            [fieldU]: {
              // @ts-ignore
              ...state.signUpForm.userForm[fieldU],
              value: valueU,
            },
          },
          propertyForm: { ...state.signUpForm.propertyForm },
        },
      });

      return {
        ...state,
        signUpForm: {
          userForm: {
            ...state.signUpForm.userForm,
            [fieldU]: {
              // @ts-ignore
              ...state.signUpForm.userForm[fieldU],
              value: valueU,
            },
          },
          propertyForm: { ...state.signUpForm.propertyForm },
        },
      };
    case "SET_USER":
      const user = action.value[0];
      console.log({
        ...state,
        signUpForm: {
          propertyForm: { ...state.signUpForm.propertyForm },
          userForm: {
            name: { defaultValue: user.name, value: null },
            cpf: { defaultValue: user.cpf, value: null },
            address: { defaultValue: user.address, value: null },
            email: { defaultValue: user.email, value: null },
            phone: { defaultValue: user.phone, value: null },
            birthday: { defaultValue: user.birthday, value: null },
            userName: { defaultValue: user.username, value: null },
            password: { defaultValue: user.password, value: null },
            position: { defaultValue: user.position, value: null },
            propertyId: { defaultValue: user.property_id, value: null },
          },
        },
      });
      return {
        ...state,
        signUpForm: {
          propertyForm: { ...state.signUpForm.propertyForm },
          userForm: {
            name: { defaultValue: user.name, value: null },
            cpf: { defaultValue: user.cpf, value: null },
            address: { defaultValue: user.address, value: null },
            email: { defaultValue: user.email, value: null },
            phone: { defaultValue: user.phone, value: null },
            birthday: { defaultValue: user.birthday, value: null },
            userName: { defaultValue: user.username, value: null },
            password: { defaultValue: user.password, value: null },
            position: { defaultValue: user.position, value: null },
            propertyId: { defaultValue: user.property_id, value: null },
          },
        },
      };

    default:
      return state;
  }
};

export default reducers;
