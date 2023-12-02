import { Apps } from "../config/apps";
import { usePhoneManager } from "./usePhoneManager";

export const useApp = (appId: string) => {
	const { manufacturer } = usePhoneManager();
	const app = Apps.find((a) => a.appId === appId);

	if (!app) return {};

	return {
		Icon: app.icon[manufacturer] || null,
		color: app.color,
		name: app.name,
	} as const;
};
