import React, { useReducer, Reducer } from "react";

import { Action } from "./types";
import Context from "./context";
import reducer from "./reducer";

export interface State {
  readonly token: String;
  readonly username: string;
  readonly email: string;
  readonly verify: boolean;
}

const initialState: State = {
  email: "",
  token: "",
  username: "",
  verify: false,
};

const GlobalState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  return (
    <Context.Provider
      value={{
        dispatch,
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalState;
