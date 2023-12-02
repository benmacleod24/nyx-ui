import { atom } from "recoil";
import { StateKeys } from "../config/stateKeys";
import { Apps } from "../config/apps";

// Active app for the entire interface.
export const selectedApp = atom<string>({
	key: StateKeys.SelectedApp,
	default: "",
});
