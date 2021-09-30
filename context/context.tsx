import { createContext, Dispatch } from "react";
import { State } from "./state";
import { Action } from "./types";

interface ContextState {
  state: State;
  dispatch: Dispatch<Action>;
}

const Context = createContext<ContextState>({} as ContextState);

export default Context;
