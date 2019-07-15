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

export type PlayersAction =
  | FetchPlayersAction
  | FetchPlayersSuccessAction
  | FetchPlayersErrorAction;
