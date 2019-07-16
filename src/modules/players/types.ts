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

interface PlayerState {
  loading: boolean;
  errors: string[];
}

export interface PlayersState {
  players: Player[];
  loading: boolean;
  errors: string[];
  single: PlayerState;
}

interface FetchPlayersAction {
  type: typeof FETCH_PLAYERS;
}

interface FetchPlayersSuccessAction {
  type: typeof FETCH_PLAYERS_SUCCESS;
  payload: Player[];
}

interface FetchPlayersErrorAction {
  type: typeof FETCH_PLAYERS_ERROR;
  payload: string[];
}

interface SetDishonorsPayload {
  player_id: string;
  dishonors: number;
}

interface SetDishonorsAction {
  type: typeof SET_DISHONORS;
  payload: SetDishonorsPayload;
}

interface SetDishonorsSuccessAction {
  type: typeof SET_DISHONORS_SUCCESS;
  payload: Player;
}

interface SetDishonorsErrorAction {
  type: typeof SET_DISHONORS_ERROR;
  payload: string[];
}

export type PlayersAction =
  | FetchPlayersAction
  | FetchPlayersSuccessAction
  | FetchPlayersErrorAction
  | SetDishonorsAction
  | SetDishonorsSuccessAction
  | SetDishonorsErrorAction;
