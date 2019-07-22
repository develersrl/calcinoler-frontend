import { getPlayers, getPlayer, setDishonors } from "../../api/calls";
import { Player, PlayerErrors } from "../../modules/players/types";

const mockPlayers: Player[] = [
  {
    slack_id: "TEST_ID",
    name: "TEST_NAME",
    nickname: "TEST_NICKNAME",
    dishonors: 10
  },
  {
    slack_id: "TEST_ID_2",
    name: "TEST_NAME_2",
    nickname: "TEST_NICKNAME_2",
    dishonors: 20
  }
];

const mockErrors: PlayerErrors = {
  general: ["Error"]
};

describe("API Calls", () => {
  it("Fetch players success", async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ok: true, json: () => ({ data: mockPlayers }) })
      );

    expect(await getPlayers()).toEqual(mockPlayers);
  }, 5000);

  it("Fetch players slack error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 503,
        statusText: "Error occured",
        json: () => ({ errors: mockErrors })
      })
    );

    await expect(getPlayers()).rejects.toThrow(Error);
    await expect(getPlayers()).rejects.toEqual(
      expect.objectContaining({
        status: 503,
        message: "Error occured",
        details: mockErrors
      })
    );
  }, 5000);

  it("Fetch player success", async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ok: true, json: () => ({ data: mockPlayers[0] }) })
      );

    expect(await getPlayer(mockPlayers[0].slack_id)).toEqual(mockPlayers[0]);
  }, 5000);

  it("Fetch player slack error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 503,
        statusText: "Error occured",
        json: () => ({ errors: mockErrors })
      })
    );

    await expect(getPlayer(mockPlayers[0].slack_id)).rejects.toThrow();
    await expect(getPlayer(mockPlayers[0].slack_id)).rejects.toEqual(
      expect.objectContaining({
        status: 503,
        message: "Error occured",
        details: mockErrors
      })
    );
  });

  it("Fetch player not found error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: "Not found",
        json: () => ({ errors: mockErrors })
      })
    );

    await expect(getPlayer(mockPlayers[0].slack_id)).rejects.toThrow();
    await expect(getPlayer(mockPlayers[0].slack_id)).rejects.toEqual(
      expect.objectContaining({
        status: 404,
        message: "Not found",
        details: mockErrors
      })
    );
  });

  it("Set dishonors success", async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ok: true, json: () => ({ data: mockPlayers[0] }) })
      );

    expect(await setDishonors(mockPlayers[0].slack_id, 10)).toEqual(
      mockPlayers[0]
    );
  }, 5000);

  it("Set dishonors error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 503,
        statusText: "Error occured",
        json: () => ({ errors: mockErrors })
      })
    );

    await expect(setDishonors(mockPlayers[0].slack_id, 10)).rejects.toThrow();
    await expect(setDishonors(mockPlayers[0].slack_id, 10)).rejects.toEqual(
      expect.objectContaining({
        status: 503,
        message: "Error occured",
        details: mockErrors
      })
    );
  });

  it("Set dishonors not found error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 422,
        statusText: "Unprocessable entity",
        json: () => ({ errors: mockErrors })
      })
    );

    await expect(setDishonors(mockPlayers[0].slack_id, 10)).rejects.toThrow();
    await expect(setDishonors(mockPlayers[0].slack_id, 10)).rejects.toEqual(
      expect.objectContaining({
        status: 422,
        message: "Unprocessable entity",
        details: mockErrors
      })
    );
  });
});
