import React, { useState, useEffect } from "react";
import { usePhoneManager } from "../../hooks/usePhoneManager";

interface IosNavBarProps {}

/**
 * @description Navbar for the iOS phone.
 * @return {React.FC<IosNavBar>}
 */
const IosNavBar: React.FC<IosNavBarProps> = (props) => {
	const { setApp } = usePhoneManager();

	return (
		<div
			onClick={() => setApp("HOME_SCREEN")}
			className="w-1/3 h-2 cursor-pointer hover:w-[40%] transition-all bg-white rounded-full absolute bottom-3.5 left-1/2 -translate-x-1/2"
		></div>
	);
};

export default IosNavBar;
