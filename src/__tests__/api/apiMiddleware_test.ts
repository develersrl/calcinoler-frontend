import { Middleware, MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";

import apiMiddleware from "../../api/apiMiddleware";
import {
  fetchPlayers,
  fetchPlayersError,
  fetchPlayersSuccess,
  setDishonors,
  setDishonorsSuccess,
  setDishonorsError
} from "../../modules/players/actions";
import * as apiCallsModule from "../../api/calls";
import { ErrorREST } from "../../api/errors";
import { Player } from "../../modules/players/types";

const mockPlayer: Player = {
  slack_id: "TEST",
  name: "TEST",
  nickname: "TEST",
  dishonors: 5
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();

  const invoke = (action: AnyAction) => apiMiddleware(store)(next)(action);

  return { store, next, invoke };
};

describe("API Middleware", () => {
  it("next action called one", () => {
    const { next, invoke } = create();
    const action = { type: "TEST ACTION" };

    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("FETCH_PLAYERS success", async () => {
    const { store, invoke } = create();
    jest.spyOn(apiCallsModule, "getPlayers").mockResolvedValue([]);

    await invoke(fetchPlayers());

    expect(store.dispatch).toBeCalledWith(fetchPlayersSuccess([]));
  });

  it("FETCH_PLAYERS error", async () => {
    const { store, invoke } = create();
    jest
      .spyOn(apiCallsModule, "getPlayers")
      .mockRejectedValue(new Error("fetch error"));

    await invoke(fetchPlayers());

    expect(store.dispatch).toBeCalledWith(
      fetchPlayersError({ general: ["fetch error"] })
    );
  });

  it("FETCH_PLAYERS rest error", async () => {
    const { store, invoke } = create();
    jest.spyOn(apiCallsModule, "getPlayers").mockRejectedValue(
      new ErrorREST({
        status: 500,
        message: "Error",
        details: { general: ["Error"] }
      })
    );

    await invoke(fetchPlayers());

    expect(store.dispatch).toBeCalledWith(
      fetchPlayersError({ general: ["Error"] })
    );
  });

  it("SET_DISHONORS success", async () => {
    const { store, invoke } = create();
    jest.spyOn(apiCallsModule, "setDishonors").mockResolvedValue(mockPlayer);

    await invoke(setDishonors(mockPlayer.slack_id, mockPlayer.dishonors));

    expect(store.dispatch).toBeCalledWith(setDishonorsSuccess(mockPlayer));
  });

  it("SET_DISHONORS error", async () => {
    const { store, invoke } = create();
    jest
      .spyOn(apiCallsModule, "setDishonors")
      .mockRejectedValue(new Error("fetch error"));

    await invoke(setDishonors(mockPlayer.slack_id, mockPlayer.dishonors));

    expect(store.dispatch).toBeCalledWith(
      setDishonorsError({ general: ["fetch error"] })
    );
  });

  it("FETCH_PLAYERS rest error", async () => {
    const { store, invoke } = create();
    jest.spyOn(apiCallsModule, "setDishonors").mockRejectedValue(
      new ErrorREST({
        status: 500,
        message: "Error",
        details: { general: ["Error"] }
      })
    );

    await invoke(setDishonors(mockPlayer.slack_id, mockPlayer.dishonors));

    expect(store.dispatch).toBeCalledWith(
      setDishonorsError({ general: ["Error"] })
    );
  });
});
