import { useRecoilState } from "recoil";
import { activeApp as _activeApp } from "../../../library/state/phoneManager";

export const usePhoneManager = () => {
	const [activeApp, setApp] = useRecoilState(_activeApp);

	return {
		manufacturer: "Android",
		app: activeApp,
		setApp,
	};
};
