import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR
} from "./constants";
import { Player, PlayersAction } from "./types";

export function fetchPlayers(players: Player[]): PlayersAction {
  return {
    type: FETCH_PLAYERS
  };
}

export function fetchPlayersSuccess(players: Player[]): PlayersAction {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: players
  };
}

export function fetchPlayersError(errors: string[]): PlayersAction {
  return {
    type: FETCH_PLAYERS_ERROR,
    payload: errors
  };
}
