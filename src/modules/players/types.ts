import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR
} from "./constants";

export interface Player {
  slack_id: string;
  name: string;
  nickname: string;
  dishonors: number;
}

export interface PlayersState {
  players: Player[];
  loading: boolean;
  errors: string[];
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
  payload: string[];
}

export type PlayersAction =
  | FetchPlayersAction
  | FetchPlayersSuccessAction
  | FetchPlayersErrorAction;
