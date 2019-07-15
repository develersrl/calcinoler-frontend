import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR
} from "./constants";
import { PlayersState, PlayersAction } from "./types";

const initialState: PlayersState = {
  players: [],
  errors: [],
  loading: false
};

export default function playersReducer(
  state = initialState,
  action: PlayersAction
): PlayersState {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        loading: true
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.payload,
        errors: [],
        loading: false
      };
    case FETCH_PLAYERS_ERROR:
      return {
        ...state,
        players: [],
        errors: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
