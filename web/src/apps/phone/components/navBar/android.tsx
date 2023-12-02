import React, { useState, useEffect } from "react";
import { Square, ChevronLeft, Tally3 } from "lucide-react";
import { usePhoneManager } from "../../hooks/usePhoneManager";

interface AndroidNavBarProps {}

/**
 * @description navbar for android phones.
 * @return {React.FC<AndroidNavBar>}
 */
const AndroidNavBar: React.FC<AndroidNavBarProps> = (props) => {
	const { setApp } = usePhoneManager();

	return (
		<div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 grid grid-cols-3 w-full ">
			<div className="flex items-center justify-center">
				<ChevronLeft className="cursor-pointer" />
			</div>
			<div className="flex items-center justify-center" onClick={() => setApp("HOME_SCREEN")}>
				<Square className="cursor-pointer" />
			</div>
			<div className="flex items-center justify-center">
				<Tally3 className="cursor-pointer" />
			</div>
		</div>
	);
};

export default AndroidNavBar;
