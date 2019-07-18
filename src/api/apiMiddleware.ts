import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { FETCH_PLAYERS, SET_DISHONORS } from "../modules/players/constants";
import { getPlayers, setDishonors } from "./calls";
import {
  fetchPlayersError,
  fetchPlayersSuccess,
  setDishonorsSuccess,
  setDishonorsError
} from "../modules/players/actions";

const apiMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch
) => async action => {
  const nextAction = next(action);
  switch (action.type) {
    case FETCH_PLAYERS:
      try {
        const players = await getPlayers();
        dispatch(fetchPlayersSuccess(players));
      } catch (e) {
        if (e.details) {
          dispatch(fetchPlayersError(e.details));
        } else {
          dispatch(
            fetchPlayersError({
              general: [e.message]
            })
          );
        }
      }
      break;
    case SET_DISHONORS:
      try {
        const player = await setDishonors(
          action.payload.player_id,
          action.payload.dishonors
        );
        dispatch(setDishonorsSuccess(player));
      } catch (e) {
        if (e.details) {
          dispatch(setDishonorsError(e.details));
        } else {
          dispatch(
            setDishonorsError({
              general: [e.message]
            })
          );
        }
      }
      break;
  }
  return nextAction;
};

export default apiMiddleware;
