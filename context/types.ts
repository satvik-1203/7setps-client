import { State } from "./state";

type SetState = {
  type: "SET_STATE";
  payload: Partial<State>;
};

export type Action = SetState;
