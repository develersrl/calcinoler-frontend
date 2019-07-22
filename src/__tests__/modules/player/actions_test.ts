import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SET_DISHONORS,
  SET_DISHONORS_SUCCESS,
  SET_DISHONORS_ERROR
} from "../../../modules/players/constants";

import {
  FetchPlayersAction,
  FetchPlayersSuccessAction,
  FetchPlayersErrorAction,
  SetDishonorsAction,
  SetDishonorsSuccessAction,
  SetDishonorsErrorAction,
  PlayerErrors
} from "../../../modules/players/types";

import {
  fetchPlayers,
  fetchPlayersSuccess,
  fetchPlayersError,
  setDishonors,
  setDishonorsSuccess,
  setDishonorsError
} from "../../../modules/players/actions";

import { createDummyPlayer, createDummyErrors } from "../../utils";

describe("actions", () => {
  it("fetchPlayers action creator", () => {
    const expectedAction: FetchPlayersAction = {
      type: FETCH_PLAYERS,
      payload: ""
    };
    expect(fetchPlayers()).toEqual(expectedAction);
  });

  it("fetchPlayers action creator with searchTerm", () => {
    const expectedAction: FetchPlayersAction = {
      type: FETCH_PLAYERS,
      payload: "search string"
    };
    expect(fetchPlayers("search string")).toEqual(expectedAction);
  });

  it("fetchPlayersSuccess action creator", () => {
    const players = [createDummyPlayer()];
    const expectedAction: FetchPlayersSuccessAction = {
      type: FETCH_PLAYERS_SUCCESS,
      payload: players
    };
    expect(fetchPlayersSuccess(players)).toEqual(expectedAction);
  });

  it("fetchPlayersError action creator", () => {
    const errors = createDummyErrors();
    const expectedAction: FetchPlayersErrorAction = {
      type: FETCH_PLAYERS_ERROR,
      payload: errors
    };
    expect(fetchPlayersError(errors)).toEqual(expectedAction);
  });

  it("setDishonors action creator", () => {
    const player_id = "TEST";
    const dishonors = 1;

    const expectedAction: SetDishonorsAction = {
      type: SET_DISHONORS,
      payload: {
        player_id,
        dishonors
      }
    };
    expect(setDishonors(player_id, dishonors)).toEqual(expectedAction);
  });

  it("setDishonorsSuccess action creator", () => {
    const player = createDummyPlayer();

    const expectedAction: SetDishonorsSuccessAction = {
      type: SET_DISHONORS_SUCCESS,
      payload: player
    };
    expect(setDishonorsSuccess(player)).toEqual(expectedAction);
  });

  it("setDishonorsError action creator", () => {
    const errors = createDummyErrors();

    const expectedAction: SetDishonorsErrorAction = {
      type: SET_DISHONORS_ERROR,
      payload: errors
    };
    expect(setDishonorsError(errors)).toEqual(expectedAction);
  });
});
