import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SET_DISHONORS,
  SET_DISHONORS_SUCCESS,
  SET_DISHONORS_ERROR
} from "./constants";
import { PlayersState, PlayersAction, Player } from "./types";

const initialState: PlayersState = {
  players: [],
  errors: {},
  loading: false,
  single: {
    loading: false,
    errors: {}
  }
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
        errors: {},
        loading: false
      };
    case FETCH_PLAYERS_ERROR:
      return {
        ...state,
        players: [],
        errors: action.payload,
        loading: false
      };
    case SET_DISHONORS:
      return {
        ...state,
        single: {
          ...state.single,
          loading: true
        }
      };
    case SET_DISHONORS_SUCCESS:
      return {
        ...state,
        players: state.players.map(
          (p: Player): Player => {
            if (p.slack_id === action.payload.slack_id) {
              return {
                ...p,
                ...action.payload
              };
            }
            return p;
          }
        ),
        single: {
          ...state.single,
          loading: false,
          errors: {}
        }
      };
    case SET_DISHONORS_ERROR:
      return {
        ...state,
        single: {
          ...state.single,
          errors: action.payload,
          loading: false
        }
      };
    default:
      return state;
  }
}
