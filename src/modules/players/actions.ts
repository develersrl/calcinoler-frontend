import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR
} from "./constants";
import {
  Player,
  FetchPlayersAction,
  FetchPlayersSuccessAction,
  FetchPlayersErrorAction
} from "./types";

export function fetchPlayers(players: Player[]): FetchPlayersAction {
  return {
    type: FETCH_PLAYERS
  };
}

export function fetchPlayersSuccess(
  players: Player[]
): FetchPlayersSuccessAction {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: players
  };
}

export function fetchPlayersError(errors: string[]): FetchPlayersErrorAction {
  return {
    type: FETCH_PLAYERS_ERROR,
    payload: errors
  };
}
