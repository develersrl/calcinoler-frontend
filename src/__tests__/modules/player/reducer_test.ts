import playersReducer, { initialState } from "../../../modules/players";
import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SET_DISHONORS,
  SET_DISHONORS_SUCCESS,
  SET_DISHONORS_ERROR
} from "../../../modules/players/constants";

import {
  Player,
  PlayerErrors,
  PlayersState,
  FetchPlayersAction,
  FetchPlayersSuccessAction,
  FetchPlayersErrorAction,
  SetDishonorsAction,
  SetDishonorsSuccessAction,
  SetDishonorsErrorAction
} from "../../../modules/players/types";

import { createDummyPlayer, createDummyErrors } from "../../utils";

describe("players reducer", () => {
  it("Handle FETCH_PLAYERS", () => {
    const action: FetchPlayersAction = {
      type: FETCH_PLAYERS
    };
    const expectedState: PlayersState = {
      ...initialState,
      loading: true
    };

    expect(playersReducer(initialState, action)).toEqual(expectedState);
  });

  it("Handle FETCH_PLAYERS_SUCCESS", () => {
    const players: Player[] = [createDummyPlayer()];
    const action: FetchPlayersSuccessAction = {
      type: FETCH_PLAYERS_SUCCESS,
      payload: players
    };
    const expectedState: PlayersState = {
      ...initialState,
      players: players,
      loading: false,
      errors: {}
    };

    expect(playersReducer(initialState, action)).toEqual(expectedState);
  });

  it("Handle FETCH_PLAYERS_ERROR", () => {
    const errors: PlayerErrors = createDummyErrors();
    const action: FetchPlayersErrorAction = {
      type: FETCH_PLAYERS_ERROR,
      payload: errors
    };
    const expectedState: PlayersState = {
      ...initialState,
      loading: false,
      errors: errors
    };

    expect(playersReducer(initialState, action)).toEqual(expectedState);
  });

  it("Handle SET_DISHONORS", () => {
    const action: SetDishonorsAction = {
      type: SET_DISHONORS,
      payload: {
        player_id: "TEST",
        dishonors: 1
      }
    };
    const expectedState: PlayersState = {
      ...initialState,
      single: {
        ...initialState.single,
        loading: true
      }
    };

    expect(playersReducer(initialState, action)).toEqual(expectedState);
  });

  it("Handle SET_DISHONORS_SUCCESS", () => {
    const players: Player[] = [createDummyPlayer()];
    const actionPlayers: FetchPlayersSuccessAction = {
      type: FETCH_PLAYERS_SUCCESS,
      payload: players
    };
    const newState = playersReducer(initialState, actionPlayers);

    const player = createDummyPlayer();
    const action: SetDishonorsSuccessAction = {
      type: SET_DISHONORS_SUCCESS,
      payload: player
    };

    expect(playersReducer(newState, action).single.loading).toEqual(false);
    expect(playersReducer(newState, action).players).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          slack_id: player.slack_id,
          dishonors: player.dishonors
        })
      ])
    );
  });

  it("Handle SET_DISHONORS_SUCCESS slack_id not found", () => {
    const player = createDummyPlayer();
    const action: SetDishonorsSuccessAction = {
      type: SET_DISHONORS_SUCCESS,
      payload: player
    };

    expect(playersReducer(initialState, action)).toEqual(initialState);
  });

  it("Handle SET_DISHONORS_ERROR", () => {
    const errors: PlayerErrors = createDummyErrors();
    const action: SetDishonorsErrorAction = {
      type: SET_DISHONORS_ERROR,
      payload: errors
    };
    const expectedState: PlayersState = {
      ...initialState,
      single: {
        loading: false,
        errors: errors
      }
    };

    expect(playersReducer(initialState, action)).toEqual(expectedState);
  });
});
