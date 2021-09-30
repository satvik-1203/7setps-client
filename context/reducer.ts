import { State } from "./state";
import { Action } from "./types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
