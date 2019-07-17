import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SET_DISHONORS,
  SET_DISHONORS_SUCCESS,
  SET_DISHONORS_ERROR
} from "./constants";

export interface Player {
  slack_id: string;
  name: string;
  nickname: string;
  dishonors: number;
}

export interface PlayerErrors {
  [field: string]: string[];
}

interface PlayerState {
  loading: boolean;
  errors: PlayerErrors;
}

export interface PlayersState {
  players: Player[];
  loading: boolean;
  errors: PlayerErrors;
  single: PlayerState;
}

export interface FetchPlayersAction {
  type: typeof FETCH_PLAYERS;
}

export interface FetchPlayersSuccessAction {
  type: typeof FETCH_PLAYERS_SUCCESS;
  payload: Player[];
}

export interface FetchPlayersErrorAction {
  type: typeof FETCH_PLAYERS_ERROR;
  payload: PlayerErrors;
}

interface SetDishonorsPayload {
  player_id: string;
  dishonors: number;
}

export interface SetDishonorsAction {
  type: typeof SET_DISHONORS;
  payload: SetDishonorsPayload;
}

export interface SetDishonorsSuccessAction {
  type: typeof SET_DISHONORS_SUCCESS;
  payload: Player;
}

export interface SetDishonorsErrorAction {
  type: typeof SET_DISHONORS_ERROR;
  payload: PlayerErrors;
}

export type PlayersAction =
  | FetchPlayersAction
  | FetchPlayersSuccessAction
  | FetchPlayersErrorAction
  | SetDishonorsAction
  | SetDishonorsSuccessAction
  | SetDishonorsErrorAction;
