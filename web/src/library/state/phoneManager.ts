import { atom } from "recoil";
import { StateKeys } from "../config/stateKeys";

export const deviceId = atom<string>({
	key: StateKeys.Phone.DeviceID,
	default: "",
});

export const activeApp = atom<string>({
	key: StateKeys.Phone.ActiveApp,
	default: "HOME_SCREEN",
});
