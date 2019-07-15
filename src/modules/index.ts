import { combineReducers } from "redux";
import { PlayersState } from "./players/types";

import playersReducer from "./players";

export interface AppState {
  players: PlayersState;
}

const rootReducer = combineReducers({ players: playersReducer });

export default rootReducer;
