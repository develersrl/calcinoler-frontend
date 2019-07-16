import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SET_DISHONORS,
  SET_DISHONORS_SUCCESS,
  SET_DISHONORS_ERROR
} from "./constants";
import { Player, PlayersAction } from "./types";

export function fetchPlayers(): PlayersAction {
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

export function setDishonors(
  player_id: string,
  dishonors: number
): PlayersAction {
  return {
    type: SET_DISHONORS,
    payload: {
      player_id,
      dishonors
    }
  };
}

export function setDishonorsSuccess(player: Player): PlayersAction {
  return {
    type: SET_DISHONORS_SUCCESS,
    payload: player
  };
}

export function setDishonorsError(errors: string[]): PlayersAction {
  return {
    type: SET_DISHONORS_ERROR,
    payload: errors
  };
}
