import { ThunkAction } from "redux-thunk";

import { Action } from "redux";
import { RootState } from "reduxStore/store";

export type ReduxThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>;
