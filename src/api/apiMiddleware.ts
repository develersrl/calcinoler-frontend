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
        const players = await getPlayers(action.payload);
        dispatch(fetchPlayersSuccess(players));
      } catch (e) {
        let errors;
        if (e.details) {
          errors = e.details;
        } else {
          errors = {
            general: [e.message]
          };
        }
        dispatch(fetchPlayersError(errors));
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
        let errors;
        if (e.details) {
          errors = e.details;
        } else {
          errors = {
            general: [e.message]
          };
        }
        dispatch(setDishonorsError(errors));
      }
      break;
  }
  return nextAction;
};

export default apiMiddleware;
