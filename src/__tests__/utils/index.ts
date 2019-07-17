import { Player, PlayerErrors } from "../../modules/players/types";

export const createDummyPlayer = (): Player => ({
  slack_id: "TEST",
  name: "Giuseppe",
  nickname: "ogek",
  dishonors: 0
});

export const createDummyErrors = (): PlayerErrors => ({
  name: ["Cannot be empty."],
  nickname: ["Cannot be empty."]
});
