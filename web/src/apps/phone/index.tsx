import React, { useState, useEffect } from "react";
import { PhoneFrame } from "./components/frame";
import { Navigation } from "lucide-react";
import { usePhoneManager } from "./hooks/usePhoneManager";
import { HomeScreen } from "./components/apps/homeScreen";
import { Settings } from "./components/apps/settings";

interface PhoneProps {}

/**
 * @description Root component for the phone.
 * @return {React.FC<Phone>}
 */
const Phone: React.FC<PhoneProps> = (props) => {
	const { manufacturer } = usePhoneManager();

	// Dynamic frame based on the manufacturer.
	const Frame = manufacturer === "iOS" ? PhoneFrame.iOS : PhoneFrame.Android;
	const HomeScreenComp = manufacturer === "iOS" ? HomeScreen.iOS : HomeScreen.Android;
	const SettingsComp = manufacturer === "iOS" ? Settings.iOS : Settings.Android;

	return (
		<Frame>
			<HomeScreenComp />
			<SettingsComp />
		</Frame>
	);
};

export default Phone;
