import store from "./store";

export const setFieldPropertyForm = (field: string, value: string): void => {
  store.dispatch({ type: "SET_FIELD_PROPERTY", value: { field, value } });
};
