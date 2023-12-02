import { useRecoilState } from "recoil";
import { selectedApp } from "../state/appManager";

export const useAppManager = () => {
	const [app, setSelectedApp] = useRecoilState(selectedApp);

	return {
		app,
		setApp: setSelectedApp,
	} as const;
};
