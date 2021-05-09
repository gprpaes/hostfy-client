import { ReduxAction, ReduxState } from "./interfaces";

const defaultState = {
    teste: {}
};

const reducers = (state: ReduxState = defaultState, action: ReduxAction): ReduxState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducers;
